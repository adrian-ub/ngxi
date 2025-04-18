import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonFastForward1SolidIcon],svg[streamline-button-fast-forward-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.497 5.894L1.27 2.424a.83.83 0 0 0-.92.056a.82.82 0 0 0-.35.648v7.723c0 .638.735 1.05 1.27.724l5.227-3.449v2.724c0 .639.734 1.052 1.27.725l5.867-3.872c.488-.316.488-1.067 0-1.384L7.767 2.424a.83.83 0 0 0-.92.056a.82.82 0 0 0-.35.648z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonFastForward1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
