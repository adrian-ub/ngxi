import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBodyFatIcon],svg[material-symbols-light-body-fat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5h-1v2.475q0 .46-.205.808t-.553.565t-.764.243q-.417.024-.82-.187l-11.962-5.95q-.46-.218-.674-.619q-.214-.4-.214-.83t.214-.822q.214-.395.674-.612L16.658 4.61q.403-.211.82-.183t.764.245q.348.217.553.565t.205.808V8.5h1v1h-3v-1h1V6.094q0-.346-.288-.529q-.289-.182-.596-.029l-4.093 2.022q.675.998 1.076 2.12q.401 1.124.401 2.322q0 1.217-.401 2.356t-1.082 2.136l4.074 2.021q.307.154.596-.029q.288-.182.288-.528V15.5H17v-1h3zm-7.904.529q.639-.889 1.021-1.905q.383-1.016.383-2.124q0-1.088-.373-2.099q-.373-1.01-1.006-1.886l-6.967 3.446q-.346.173-.346.548t.346.549z"></svg:path>`,
})
export class MaterialSymbolsLightBodyFatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
