import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyCuteSolidIcon],svg[streamline-smiley-cute-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M-.001 7a7 7 0 1 1 14 0a7 7 0 0 1-14 0m4.805 1.634a.625.625 0 1 0-1.25 0A2.035 2.035 0 0 0 7 10.102a2.035 2.035 0 0 0 3.445-1.467a.625.625 0 1 0-1.25 0a.785.785 0 1 1-1.57 0a.625.625 0 1 0-1.25 0a.785.785 0 1 1-1.57 0ZM9.52 5.168c.265 0 .48.138.543.24a.625.625 0 1 0 1.065-.655c-.34-.553-1.013-.835-1.608-.835s-1.268.282-1.608.835a.625.625 0 0 0 1.065.655c.063-.102.278-.24.543-.24m-5.583.24c.063-.102.278-.24.543-.24s.48.138.543.24a.625.625 0 0 0 1.065-.655c-.34-.553-1.013-.835-1.608-.835s-1.267.282-1.608.835a.625.625 0 1 0 1.065.655" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyCuteSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
