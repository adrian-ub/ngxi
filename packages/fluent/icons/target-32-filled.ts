import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTarget32FilledIcon],svg[fluent-target-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 13.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path><svg:path d="M16 8.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M11.25 16a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"></svg:path><svg:path d="M16.001 3.75C9.235 3.75 3.75 9.235 3.75 16.001s5.485 12.252 12.251 12.252S28.253 22.767 28.253 16S22.767 3.75 16 3.75M6.25 16.001c0-5.385 4.366-9.751 9.751-9.751c5.386 0 9.752 4.366 9.752 9.751c0 5.386-4.366 9.752-9.752 9.752c-5.385 0-9.751-4.366-9.751-9.752"></svg:path></svg:g>`,
})
export class FluentTarget32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
