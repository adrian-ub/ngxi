import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CropIcon],svg[fluent-mdl2-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1536v129h-385v383h-127v-383H383V512H0V385h383V0h129v385h1061l365-366l91 90l-366 366v1061zM512 512v933l933-933zm1024 1024V603l-933 933z"></svg:path>`,
})
export class FluentMdl2CropIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
