import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLaptopChromebookRoundedIcon],svg[material-symbols-light-laptop-chromebook-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17.308V6.154q0-.666.475-1.141t1.14-.475h14.77q.666 0 1.14.475T21 6.153v11.155h1.5q.213 0 .356.144q.144.143.144.356t-.144.357t-.356.143h-21q-.213 0-.356-.144T1 17.807t.144-.356t.356-.143zm7.385 0h3.23q.154 0 .27-.116q.115-.115.115-.269t-.115-.27t-.27-.114h-3.23q-.154 0-.27.115q-.115.115-.115.269t.116.27q.115.115.269.115"></svg:path>`,
})
export class MaterialSymbolsLightLaptopChromebookRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
