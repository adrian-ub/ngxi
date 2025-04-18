import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TextDocumentEditIcon],svg[fluent-mdl2-text-document-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1848 896q42 0 78 15t64 41t42 63t16 79q0 39-15 76t-43 65l-717 717l-377 94l94-377l717-716q29-29 65-43t76-14m72 198q0-32-20-51t-52-19q-14 0-27 4t-23 15l-692 692l-34 135l135-34l692-691q21-21 21-51M256 128v1792h506l-31 128H128V0h1115l549 549v192q-37 5-66 15t-62 31V640h-512V128zm1024 91v293h293zm128 677v128H512V896zm-896 640v-128h513l-128 128zm769-384l-128 128H512v-128z"></svg:path>`,
})
export class FluentMdl2TextDocumentEditIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
