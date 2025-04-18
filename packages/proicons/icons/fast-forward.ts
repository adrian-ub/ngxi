import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFastForwardIcon],svg[proicons-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.996 18.323c-1.02.784-2.496.057-2.496-1.229V6.906c0-1.286 1.476-2.013 2.496-1.229l6.224 5.192a1.473 1.473 0 0 1 0 2.262z"></svg:path><svg:path d="M15.246 18.323c-1.02.784-2.496.057-2.496-1.229V6.906c0-1.286 1.476-2.013 2.496-1.229l6.224 5.192a1.473 1.473 0 0 1 0 2.262z"></svg:path></svg:g>`,
})
export class ProiconsFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
