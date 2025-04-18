import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons10PlayIcon],svg[arcticons-10-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="30.5" cy="24" r="13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.668 23.315V37H17.5V11H8.668"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.668 11A4.167 4.167 0 0 1 4.5 15.168V24c7.18 0 13-5.82 13-13m18.555 12.04l-7.851-4.534a1.11 1.11 0 0 0-1.664.96v9.067a1.11 1.11 0 0 0 1.664.96l7.851-4.532a1.11 1.11 0 0 0 0-1.922Z"></svg:path>`,
})
export class Arcticons10PlayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
