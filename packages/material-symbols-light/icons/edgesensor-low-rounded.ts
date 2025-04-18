import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEdgesensorLowRoundedIcon],svg[material-symbols-light-edgesensor-low-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.307 13.5q-.213 0-.356-.144T3.808 13V8q0-.213.144-.356q.144-.144.356-.144q.213 0 .357.144T4.808 8v5q0 .213-.144.356t-.357.144m15.385 3q-.213 0-.357-.144T19.193 16v-5q0-.213.144-.356t.357-.144t.356.144t.143.356v5q0 .213-.144.356q-.143.144-.356.144M8.423 21q-.69 0-1.153-.462t-.462-1.153V4.615q0-.69.462-1.152T8.423 3h7.154q.69 0 1.153.463t.462 1.153v14.769q0 .69-.462 1.153T15.577 21zm-.615-3.5h8.384v-11H7.808z"></svg:path>`,
})
export class MaterialSymbolsLightEdgesensorLowRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
