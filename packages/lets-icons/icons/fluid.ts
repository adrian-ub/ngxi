import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFluidIcon],svg[lets-icons-fluid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3l-.707-.707l.707-.707l.707.707zm1 11a1 1 0 1 1-2 0zM6.293 7.293l5-5l1.414 1.414l-5 5zm6.414-5l5 5l-1.414 1.414l-5-5zM13 3v11h-2V3z"></svg:path><svg:path fill="currentColor" d="m12 21l-.707.707l.707.707l.707-.707zm1-7a1 1 0 1 0-2 0zm-6.707 2.707l5 5l1.414-1.414l-5-5zm6.414 5l5-5l-1.414-1.414l-5 5zM13 21v-7h-2v7z"></svg:path>`,
})
export class LetsIconsFluidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
