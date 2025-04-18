import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiOverlapIcon],svg[fxemoji-overlap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#597B91" d="M495.778 1.92H110.744c-7.38 0-13.362 5.982-13.362 13.362v359.117c0 6.177 5.346 11.185 11.94 11.185H497.2c6.595 0 11.94-5.008 11.94-11.185V15.282c0-7.38-5.982-13.362-13.362-13.362"></svg:path><svg:path fill="#E0E0E0" d="M118.032 67.24v287.499c0 5.94 4.81 10.755 10.744 10.755H477.8c5.934 0 10.744-4.815 10.744-10.755V67.24z"></svg:path><svg:path fill="#597B91" d="M402.097 125.576H17.063c-7.38 0-13.362 5.983-13.362 13.362v359.117c0 6.177 5.346 11.185 11.94 11.185h387.878c6.595 0 11.94-5.008 11.94-11.185V138.937c0-7.379-5.982-13.361-13.362-13.361"></svg:path><svg:path fill="#E0E0E0" d="M24.351 190.895v287.499c0 5.94 4.81 10.755 10.744 10.755h349.023c5.934 0 10.744-4.815 10.744-10.755V190.895z"></svg:path>`,
})
export class FxemojiOverlapIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
