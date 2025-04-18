import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibAsanaIcon],svg[cib-asana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.042 16.87a6.962 6.962 0 1 0 0 13.922a6.96 6.96 0 0 0 0-13.922m-18.084 0a6.962 6.962 0 0 0 0 13.922a6.967 6.967 0 0 0 6.964-6.964a6.96 6.96 0 0 0-6.964-6.958m16-8.698a6.958 6.958 0 1 1-13.916 0c0-3.844 3.115-6.964 6.958-6.964s6.958 3.12 6.958 6.964"></svg:path>`,
})
export class CibAsanaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
