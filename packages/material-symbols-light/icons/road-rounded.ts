import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRoadRoundedIcon],svg[material-symbols-light-road-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 19q-.214 0-.357-.144T5 18.5v-13q0-.213.144-.356T5.501 5t.356.144T6 5.5v13q0 .213-.144.356T5.499 19m6.5 0q-.213 0-.356-.144T11.5 18.5v-2.077q0-.212.144-.356t.357-.144t.356.144t.143.356V18.5q0 .213-.144.356t-.357.144m6.5 0q-.212 0-.356-.144T18 18.5v-13q0-.213.144-.356T18.501 5t.356.144T19 5.5v13q0 .213-.144.356t-.357.144M12 13.538q-.213 0-.356-.143t-.143-.357v-2.077q0-.212.144-.356t.357-.144t.356.144t.143.356v2.077q0 .213-.144.357t-.357.143m0-5.461q-.213 0-.356-.144t-.143-.356V5.5q0-.213.144-.356T12.001 5t.356.144t.143.356v2.077q0 .213-.144.356t-.357.144"></svg:path>`,
})
export class MaterialSymbolsLightRoadRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
