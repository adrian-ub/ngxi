import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandStorybookIcon],svg[tabler-brand-storybook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m5 4l.5 16.5L19 21V3z"></svg:path><svg:path d="M9 15c.6 1.5 1.639 2 3.283 2H12c1.8 0 3-.974 3-2.435c0-1.194-.831-1.799-2.147-2.333l-1.975-.802C9.728 10.963 9 10.008 9 8.963c0-.97.899-1.786 2.087-1.893l.613-.055c1.528-.138 3 .762 3.3 1.985m1-5.5v1"></svg:path></svg:g>`,
})
export class TablerBrandStorybookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
