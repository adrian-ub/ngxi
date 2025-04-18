import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiAlarmClockIcon],svg[openmoji-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="m50.258 55.036l2.884 4.828m-31.4-4.828l-2.884 4.828"></svg:path><svg:path fill="#d0cfce" d="M46.186 14.792c2.253-4.648 4.265-4.084 6.167-4.317c1.287-.157 6.461 3.164 6.461 6.58s-2.243 4.739-3.56 5.487m-29.44-7.75c-2.253-4.648-4.265-4.084-6.167-4.317c-1.287-.157-6.461 3.164-6.461 6.58s2.243 4.739 3.56 5.487"></svg:path><svg:circle cx="36" cy="36.294" r="23" fill="#FFF"></svg:circle><svg:path fill="#FFF" d="M36.026 18.989v17m-.052-.054l-6 10.392"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><svg:path stroke-width="2" d="m50.258 55.036l2.884 4.828m-31.4-4.828l-2.884 4.828M48.85 12.576a5.508 5.508 0 0 1 8.246 7.147M23.15 12.576a5.507 5.507 0 0 0-8.246 7.147"></svg:path><svg:circle cx="36" cy="36.294" r="23" stroke-width="2"></svg:circle><svg:path stroke-width="2" d="M36.026 18.989v17"></svg:path><svg:path stroke-width="2.079" d="m35.974 35.935l-6 10.392"></svg:path></svg:g>`,
})
export class OpenmojiAlarmClockIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
