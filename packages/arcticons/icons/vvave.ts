import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVvaveIcon],svg[arcticons-vvave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.501 11.202h4.61v4.61h-4.61zM5.5 19.275h4.61v4.61H5.5zm0 7.97h4.61v4.61H5.5zm8.366-20.341h4.61v4.61h-4.61zm-.001 8.073h4.61v4.61h-4.61zm0 7.97h4.61v4.61h-4.61zm.009 8.064h4.61v4.61h-4.61zm8.046-18.632h4.61v4.61h-4.61zm0 8.073h4.61v4.61h-4.61zm-.001 7.97h4.61v4.61h-4.61zm.01 8.064h4.61v4.61h-4.61zm7.939-29.381h4.61v4.61h-4.61zm-.001 8.073h4.61v4.61h-4.61zm0 7.97h4.61v4.61h-4.61zm.01 8.065h4.61v4.61h-4.61zm8.013-20.246h4.61v4.61h-4.61zm-.001 8.074h4.61v4.61h-4.61zm0 7.969h4.61v4.61h-4.61z"></svg:path>`,
})
export class ArcticonsVvaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
