import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSelectWindow2Icon],svg[material-symbols-light-select-window-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14.212V9.269q0-1.019-.702-1.721t-1.721-.702H6.769v-2.23q0-.691.463-1.154T8.384 3h11q.691 0 1.153.462T21 4.615v8.154q0 .517-.28.903t-.72.54M4.616 21q-.691 0-1.153-.462T3 19.385v-8.539q0-.69.463-1.153t1.152-.462h11.539q.613 0 1.037.424q.425.424.425 1.018v8.712q0 .69-.463 1.152T16 21z"></svg:path>`,
})
export class MaterialSymbolsLightSelectWindow2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
