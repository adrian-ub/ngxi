import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DeliveryTruckIcon],svg[fluent-mdl2-delivery-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1536h-524q-10 29-28 52t-41 40t-52 26t-59 10q-30 0-58-9t-52-26t-42-40t-28-53H628q-10 29-28 52t-41 40t-52 26t-59 10q-30 0-58-9t-52-26t-42-40t-28-53H0V384h1408v128h360l280 561zM128 1408h140q10-28 28-52t41-40t52-26t59-10t58 9t52 26t42 41t28 52h536q14-41 44-71t72-45V512H128zm320 128q26 0 45-19t19-45t-19-45t-45-19t-45 19t-19 45t19 45t45 19m896 0q26 0 45-19t19-45t-19-45t-45-19t-45 19t-19 45t19 45t45 19m576-433l-232-463h-280v652q41 14 71 44t45 72h396z"></svg:path>`,
})
export class FluentMdl2DeliveryTruckIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
