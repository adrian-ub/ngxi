import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAdd2RoundedIcon],svg[material-symbols-light-add-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-.213 0-.357-.144T11.5 19.5v-7h-7q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h7v-7q0-.213.144-.356T12.001 4t.356.144t.143.356v7h7q.213 0 .356.144t.144.357t-.144.356t-.356.143h-7v7q0 .213-.144.356t-.357.144"></svg:path>`,
})
export class MaterialSymbolsLightAdd2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
