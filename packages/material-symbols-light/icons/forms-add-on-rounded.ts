import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormsAddOnRoundedIcon],svg[material-symbols-light-forms-add-on-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20.475q-.214 0-.357-.144t-.143-.356v-2.5H14q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h2.5v-2.5q0-.212.144-.356t.357-.144t.356.144t.143.356v2.5H20q.213 0 .356.144t.144.357t-.144.356t-.356.143h-2.5v2.5q0 .213-.144.356t-.357.144M7 17.5q-.213 0-.356-.144t-.144-.357t.144-.356T7 16.5h4.289q.212 0 .356.144t.143.357t-.143.356t-.357.143zm0-4q-.213 0-.356-.144t-.144-.357t.144-.356T7 12.5h4.289q.212 0 .356.144t.143.357t-.143.356t-.357.143zm0-4q-.213 0-.356-.144T6.5 8.999t.144-.356T7 8.5h11q.213 0 .356.144t.144.357t-.144.356T18 9.5zm0-4q-.213 0-.356-.144T6.5 4.999t.144-.356T7 4.5h11q.213 0 .356.144t.144.357t-.144.356T18 5.5zm-3 0q-.214 0-.357-.144T3.5 4.999t.144-.356t.357-.143t.356.144t.143.357t-.144.356t-.357.143m0 4q-.213 0-.356-.144T3.5 8.999t.144-.356t.357-.143t.356.144t.143.357t-.144.356t-.357.143m0 4q-.213 0-.356-.144t-.143-.357t.144-.356t.357-.143t.356.144t.143.357t-.144.356t-.357.143m0 4q-.213 0-.356-.144t-.143-.357t.144-.356t.357-.143t.356.144t.143.357t-.144.356t-.357.143"></svg:path>`,
})
export class MaterialSymbolsLightFormsAddOnRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
