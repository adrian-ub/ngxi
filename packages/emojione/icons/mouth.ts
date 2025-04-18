import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMouthIcon],svg[emojione-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M32 22.5c-6.3 0-30 10.2-30 10.2c5.6 6.9 3.6 16.8 30 16.8c23.7 0 23.2-8.5 30-16.8c0 0-23.7-10.2-30-10.2"></svg:path><svg:path fill="#60452b" d="M32 20.6L5.9 31.2c6.8 8.3 14.5 5.1 26.1 5.1s19.2 3.1 26.1-5.1z"></svg:path><svg:path fill="#fff" d="M58.5 31c0-1.7-11.2-9.9-26.5-9.9S5.5 29.2 5.5 31z"></svg:path><svg:path fill="#ed4c5c" d="M44.4 14.9c-2.5-.8-6.2-.4-11.1 1.6c-.4.2-.8.3-1.3.5c-.4-.2-.9-.3-1.3-.5c-4.9-2-8.6-2.4-11.1-1.6C12.2 17.1 2 32.7 2 32.7c6.3.8 14.5-8.5 30-8.5s23.7 9.3 30 8.5c0 0-10.2-15.6-17.6-17.8"></svg:path>`,
})
export class EmojioneMouthIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
