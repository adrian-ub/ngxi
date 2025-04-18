import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSdCardRoundedIcon],svg[material-symbols-light-sd-card-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 21q-.691 0-1.153-.462T5 19.385V9.095q0-.332.13-.633t.349-.518L9.944 3.48q.217-.218.518-.348T11.094 3h6.29q.691 0 1.153.462T19 4.615v14.77q0 .69-.463 1.152T17.385 21zm3.462-10.23q.213 0 .356-.145t.143-.356V7.846q0-.212-.144-.356t-.357-.144t-.356.144t-.143.356v2.423q0 .213.144.356q.144.144.357.144m2.807 0q.213 0 .356-.144t.144-.356V7.846q0-.212-.144-.356t-.357-.144t-.356.144t-.144.356v2.423q0 .213.145.356t.356.144m2.808 0q.213 0 .356-.144t.143-.356V7.846q0-.212-.144-.356q-.143-.144-.356-.144t-.356.144t-.144.356v2.423q0 .213.144.356t.357.144"></svg:path>`,
})
export class MaterialSymbolsLightSdCardRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
