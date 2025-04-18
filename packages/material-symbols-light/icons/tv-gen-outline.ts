import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTvGenOutlineIcon],svg[material-symbols-light-tv-gen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19.462V18q-.672 0-1.144-.472T3 16.385v-9.77q0-.67.472-1.143Q3.944 5 4.616 5h14.769q.67 0 1.143.472q.472.472.472 1.144v9.769q0 .67-.472 1.143q-.472.472-1.143.472v1.462h-.5L18.369 18H5.675l-.56 1.462zm0-2.462h14.769q.269 0 .442-.173t.173-.442v-9.77q0-.269-.173-.442T19.385 6H4.615q-.269 0-.442.173T4 6.616v9.769q0 .269.173.442t.443.173M12 11.5"></svg:path>`,
})
export class MaterialSymbolsLightTvGenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
