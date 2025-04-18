import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTrainIcon],svg[icon-park-twotone-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTrain0"><svg:g fill="none" stroke="#fff"><svg:path stroke-linejoin="round" stroke-width="4" d="M9 8.84c0-.933.438-1.807 1.271-2.225C12.247 5.625 16.613 4 24 4s11.754 1.625 13.728 2.615C38.563 7.033 39 7.907 39 8.839V36a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 38v4m-20-4v4"></svg:path><svg:path fill="#fff" d="M20.5 32a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm10 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 44h8"></svg:path><svg:path fill="#555" stroke-linejoin="round" stroke-width="4" d="M9 12h30v14H9z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 12v14m-4-14h8m-8 14h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTrain0)"></svg:path>`,
})
export class IconParkTwotoneTrainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
