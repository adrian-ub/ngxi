import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEmoticonIcon],svg[material-symbols-light-emoticon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16.5q-.42 0-.71-.29T6 15.5q0-.413.29-.707q.29-.293.71-.293q.414 0 .707.293T8 15.5q0 .42-.293.71T7 16.5m0-7q-.42 0-.71-.29T6 8.5q0-.413.29-.707Q6.58 7.5 7 7.5q.414 0 .707.293T8 8.5q0 .42-.293.71T7 9.5m3.5 3v-1h3v1zm5.912 4.98l-.804-.56q.661-1.095 1.017-2.333T16.981 12q0-1.65-.519-3.11q-.518-1.46-1.454-2.673l.756-.64q1.046 1.348 1.631 2.982q.586 1.633.586 3.441q0 1.54-.418 2.909t-1.151 2.572"></svg:path>`,
})
export class MaterialSymbolsLightEmoticonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
