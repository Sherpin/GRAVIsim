# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-05-27 13:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20170501_1752'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sparkjob',
            name='state',
            field=models.CharField(choices=[('2', 'FINISHED'), ('3', 'SUSPENDED'), ('0', 'WAITING'), ('1', 'RUNNING')], max_length=1),
        ),
    ]
