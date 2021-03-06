# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-05-01 00:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20170430_1921'),
    ]

    operations = [
        migrations.AddField(
            model_name='sparkjob',
            name='inputFile',
            field=models.CharField(default='input.json', max_length=80),
        ),
        migrations.AddField(
            model_name='sparkjob',
            name='iterations',
            field=models.IntegerField(default=100),
        ),
        migrations.AlterField(
            model_name='sparkjob',
            name='state',
            field=models.CharField(choices=[('2', 'FINISHED'), ('0', 'WAITING'), ('1', 'RUNNING')], max_length=1),
        ),
    ]
