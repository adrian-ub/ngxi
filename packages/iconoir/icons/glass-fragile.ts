import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirGlassFragileIcon],svg[iconoir-glass-fragile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 22h4m4 0h-4m0 0v-7m-5.422-4.952C7.783 12.682 12 15 12 15s4.217-2.318 5.422-4.952c1.3-2.845 0-8.048 0-8.048H6.578s-1.3 5.203 0 8.048"></svg:path><svg:path d="m12.5 2l-2 4h3l-2 4"></svg:path></svg:g>`,
})
export class IconoirGlassFragileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
