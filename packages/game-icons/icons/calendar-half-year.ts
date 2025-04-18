import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCalendarHalfYearIcon],svg[game-icons-calendar-half-year-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 57v30h62V57zm160 0v62h62V57zm80 0v14h62V57zm80 0v39h62V57zm80 0v78h62V57zM105 73v78h62V73zm160 16v78h62V89zM25 105v78h62v-78zm320 9v78h62v-78zm-160 23v78h62v-78zm240 16v78h62v-78zm-320 16v78h62v-78zm160 16v78h62v-78zM25 201v78h62v-78zm320 9v78h62v-78zm-160 23v78h62v-78zm240 16v78h62v-78zm-320 16v78h62v-78zm160 16v78h62v-78zM25 297v78h62v-78zm320 9v78h62v-78zm-160 23v78h62v-78zm240 16v78h62v-78zm-320 16v94h62v-94zm160 16v78h62v-78zM25 393v78h62v-78zm320 9v69h62v-69zm-160 23v46h62v-46zm240 16v14h62v-14z"></svg:path>`,
})
export class GameIconsCalendarHalfYearIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
