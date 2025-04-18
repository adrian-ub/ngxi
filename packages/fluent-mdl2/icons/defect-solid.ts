import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DefectSolidIcon],svg[fluent-mdl2-defect-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1192 42q107 37 194 102t149 152t95 191t34 217q0 144-55 267t-156 226q-71 73-113 155t-53 184H633q-11-102-52-184t-113-154q-100-103-156-226t-56-268q0-97 25-187t71-169t110-142T604 96t168-71T960 0q11 0 21 1t22 3L623 384l448 448l-263 263l113 114l376-377l-448-448zM640 1664h640v192q0 40-15 75t-41 61t-61 41t-75 15H832q-40 0-75-15t-61-41t-41-61t-15-75z"></svg:path>`,
})
export class FluentMdl2DefectSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
