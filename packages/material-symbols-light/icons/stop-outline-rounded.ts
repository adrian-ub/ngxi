import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStopOutlineRoundedIcon],svg[material-symbols-light-stop-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15.385v-6.77q0-.67.472-1.143Q7.944 7 8.616 7h6.769q.67 0 1.143.472q.472.472.472 1.144v6.769q0 .67-.472 1.143q-.472.472-1.143.472h-6.77q-.67 0-1.143-.472Q7 16.056 7 15.385M8.616 16h6.769q.269 0 .442-.173t.173-.442v-6.77q0-.269-.173-.442T15.385 8h-6.77q-.269 0-.442.173T8 8.616v6.769q0 .269.173.442t.443.173M12 12"></svg:path>`,
})
export class MaterialSymbolsLightStopOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
