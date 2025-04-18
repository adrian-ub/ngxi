import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNephrologyIcon],svg[material-symbols-light-nephrology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.808 20.192v-4.56q-.327.274-.699.417t-.801.143q-2.193 0-3.654-1.625q-1.462-1.625-1.462-3.875V9.308q0-2.25 1.462-3.875t3.654-1.625q1.041 0 1.77.728t.73 1.77t-.73 1.771t-1.77.73v2.385q1.038 0 1.769.73t.73 1.77v6.5zm3.384 0v-6.5q0-1.041.73-1.77t1.77-.73V8.808q-1.038 0-1.769-.729t-.73-1.769t.729-1.771t1.77-.731q2.193 0 3.654 1.625q1.462 1.625 1.462 3.875v1.384q0 2.25-1.462 3.875t-3.654 1.625q-.43 0-.801-.143t-.699-.416v4.56z"></svg:path>`,
})
export class MaterialSymbolsLightNephrologyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
