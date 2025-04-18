import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowsMoreUpRoundedIcon],svg[material-symbols-light-arrows-more-up-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 18q-.213 0-.357-.144T13 17.5V9H4.5q-.213 0-.356-.144T4 8.499t.144-.356T4.5 8h8.692q.343 0 .576.232t.232.576V17.5q0 .213-.144.356t-.357.144m4-3.98q-.212 0-.356-.145T17 13.52v-8.5H8.5q-.213 0-.356-.144T8 4.52t.144-.356t.356-.144h8.692q.344 0 .576.233t.232.575v8.692q0 .213-.144.356t-.357.144"></svg:path>`,
})
export class MaterialSymbolsLightArrowsMoreUpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
