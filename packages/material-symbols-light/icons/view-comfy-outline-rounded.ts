import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewComfyOutlineRoundedIcon],svg[material-symbols-light-view-comfy-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17.385V6.615q0-.666.475-1.14T4.615 5h14.77q.666 0 1.14.475T21 6.615v10.77q0 .666-.475 1.14t-1.14.475H4.615q-.666 0-1.14-.475T3 17.386M20 11.5V6.616q0-.27-.173-.443T19.385 6H4.615q-.269 0-.442.173T4 6.616V11.5zM9.385 18h10q.269 0 .442-.173t.173-.442V12.5H9.385zm-4.77 0h3.77v-5.5H4v4.885q0 .269.173.442t.443.173"></svg:path>`,
})
export class MaterialSymbolsLightViewComfyOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
