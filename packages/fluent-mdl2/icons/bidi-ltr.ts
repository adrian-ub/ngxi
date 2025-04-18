import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BidiLtrIcon],svg[fluent-mdl2-bidi-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m128 486l666 666l-666 666zm128 1024l358-358l-358-358zM1792 256v1536h128v128h-640v-128h128v-768h-192q-93 0-174-35t-143-96t-96-142t-35-175q0-93 35-174t96-143t142-96t175-35h704v128zm-384 640V256h-192q-66 0-124 25t-102 69t-69 102t-25 124t25 124t68 102t102 69t125 25zm256 896V256h-128v1536z"></svg:path>`,
})
export class FluentMdl2BidiLtrIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
