import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeShieldIcon],svg[iconoir-home-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m12.502 9.13l2.049.531c.264.069.45.309.441.582C14.826 15.232 12 16 12 16s-2.826-.768-2.992-5.757a.584.584 0 0 1 .441-.582l2.05-.53a2 2 0 0 1 1.003 0M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8"></svg:path><svg:path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></svg:path></svg:g>`,
})
export class IconoirHomeShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
