import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Hide3Icon],svg[fluent-mdl2-hide-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m74 292l90-90l1630 1629l-91 91l-457-457q-54 35-105 53t-117 18q-80 0-150-30t-122-82t-82-122t-30-150q0-65 18-116t53-106L391 610Q266 715 197 851t-69 301H0q0-91 21-179t60-170t94-153t126-130zm694 860q0 53 20 99t55 82t81 55t100 20q36 0 67-9t62-27l-349-349q-17 31-26 62t-10 67m328-245L963 774l30-4q15-2 31-2q79 0 149 30t122 82t83 123t30 149q0 15-2 30t-4 31l-133-133q-42-131-173-173m952 245h-128q0-118-36-221t-99-188t-150-152t-185-113t-208-70t-218-24q-98 0-192 19t-185 56l-98-98q116-53 231-79t244-26q144 0 285 35t265 105t226 170t166 234q40 82 61 171t21 181"></svg:path>`,
})
export class FluentMdl2Hide3Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
