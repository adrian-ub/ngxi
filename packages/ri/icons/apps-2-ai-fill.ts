import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riApps2AiFillIcon],svg[ri-apps-2-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m0 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m10 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m5.025-5.845l.278-.636a4.9 4.9 0 0 1 2.496-2.533l.854-.38c.463-.205.463-.878 0-1.083l-.806-.359a4.9 4.9 0 0 1-2.533-2.617l-.285-.688a.57.57 0 0 0-1.058 0l-.285.688a4.9 4.9 0 0 1-2.533 2.617l-.806.359c-.463.205-.463.878 0 1.083l.854.38a4.9 4.9 0 0 1 2.496 2.533l.278.636a.57.57 0 0 0 1.05 0"></svg:path>`,
})
export class RiApps2AiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
