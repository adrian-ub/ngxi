import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimer5ShutterRoundedIcon],svg[material-symbols-light-timer-5-shutter-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.27 18.116H9.5q-.256 0-.436-.18t-.18-.438t.18-.436t.436-.178h4.77q.268 0 .442-.173t.172-.442v-3.038q0-.27-.172-.442t-.443-.173H9.5q-.256 0-.436-.18T8.884 12V6.5q0-.256.18-.436t.436-.18h6q.257 0 .436.18t.18.438t-.18.436t-.436.178h-5.384v4.269H14.5q.671 0 1.143.472T16.115 13v3.27q0 .769-.538 1.307t-1.308.539"></svg:path>`,
})
export class MaterialSymbolsLightTimer5ShutterRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
