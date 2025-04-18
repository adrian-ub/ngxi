import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHospice24pxIcon],svg[healthicons-hospice-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 2l-9.664 8.66a1.014 1.014 0 0 0-.083 1.424a.994.994 0 0 0 1.411.084L4 11.867v9.583c0 .304.256.55.571.55H19.43a.56.56 0 0 0 .571-.55v-9.583l.336.3a.994.994 0 0 0 1.411-.083a1.014 1.014 0 0 0-.083-1.423zM8 12.683c0-1.443.897-2.781 2.125-2.781c.808 0 1.418.54 1.812 1.321a.07.07 0 0 0 .126 0c.394-.782 1.004-1.321 1.812-1.321c1.228 0 2.125 1.338 2.125 2.781c0 3.089-4 5.284-4 5.284s-2.694-1.39-3.66-3.668a5 5 0 0 1-.18-.504A4 4 0 0 1 8 12.683" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsHospice24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
