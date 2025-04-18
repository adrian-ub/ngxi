import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RemoveOccurrenceIcon],svg[fluent-mdl2-remove-occurrence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v512h-512V640h316q-59-117-146-211t-196-161t-231-103t-255-37q-154 0-295 47T471 309T268 517T136 787L14 749q50-166 149-304t232-237T689 55t335-55q137 0 267 34t245 98t214 157t170 210V256zM1024 1920q39 0 77-4t77-13l108 108q-31 8-62 14t-64 12l-8-64l8 64q-34 5-67 8t-69 3q-138 0-267-34t-245-98t-213-157t-171-210v243H0v-512h512v128H196q59 117 146 211t196 161t231 103t255 37m1021-418l-226 226l226 227l-90 90l-227-226l-227 227l-90-91l227-227l-227-227l90-90l227 227l227-227z"></svg:path>`,
})
export class FluentMdl2RemoveOccurrenceIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
