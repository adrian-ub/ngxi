import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleRightLightIcon],svg[stash-chevron-double-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.94 7.646a.5.5 0 0 1 .707 0L12 12l-4.353 4.354a.5.5 0 0 1-.708-.708L10.586 12L6.939 8.354a.5.5 0 0 1 0-.708"></svg:path><svg:path d="M12.147 7.646a.5.5 0 0 1 .707 0L17.207 12l-4.353 4.354a.5.5 0 0 1-.707-.708L15.793 12l-3.646-3.646a.5.5 0 0 1 0-.708"></svg:path></svg:g>`,
})
export class StashChevronDoubleRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
