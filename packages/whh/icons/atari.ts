import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAtariIcon],svg[whh-atari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 896q-103 0-184.5-52T683 705t-43-193V32q0-13 9.5-22.5T672 0t22.5 9.5T704 32v352q0 73 20.5 137.5t53 108.5t71.5 76t76 47t67 15q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 896m-448 0h-64q-13 0-22.5-9.5T448 864V32q0-13 9.5-22.5T480 0h64q13 0 22.5 9.5T576 32v832q0 13-9.5 22.5T544 896m-512 0q-13 0-22.5-9.5T0 864v-64q0-13 9.5-22.5T32 768q30 0 67-15t76-47t71.5-76t53-108.5T320 384V32q0-13 9.5-22.5T352 0t22.5 9.5T384 32v480q0 106-43 193T216.5 844T32 896"></svg:path>`,
})
export class WhhAtariIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
