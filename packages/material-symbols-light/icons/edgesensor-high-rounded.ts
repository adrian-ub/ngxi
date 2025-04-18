import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEdgesensorHighRoundedIcon],svg[material-symbols-light-edgesensor-high-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.769 16.5q-.213 0-.356-.144T1.269 16v-5q0-.213.144-.356q.144-.144.357-.144t.356.144t.143.356v5q0 .213-.144.356t-.357.144m2.77-3q-.213 0-.356-.144T4.038 13V8q0-.213.144-.356q.144-.144.357-.144t.356.144T5.04 8v5q0 .213-.144.356t-.357.144M8.423 21q-.69 0-1.153-.462t-.462-1.153V4.615q0-.69.462-1.152T8.423 3h7.154q.69 0 1.153.463t.462 1.153v14.769q0 .69-.462 1.153T15.577 21zm11.038-4.5q-.213 0-.356-.144T18.962 16v-5q0-.213.144-.356t.356-.144t.356.144t.144.356v5q0 .213-.144.356q-.144.144-.357.144m2.769-3q-.213 0-.356-.144T21.731 13V8q0-.213.144-.356t.356-.144t.356.144t.144.356v5q0 .213-.144.356q-.144.144-.357.144m-14.422 4h8.384v-11H7.808z"></svg:path>`,
})
export class MaterialSymbolsLightEdgesensorHighRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
