import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeGrin2Icon],svg[icomoon-free-grin2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3 3.688a1.815 1.815 0 0 1 1.788 2.115a.312.312 0 0 1-.616 0c-.096-.573-.589-.833-1.171-.833s-1.074.26-1.171.833a.312.312 0 0 1-.616 0a1.815 1.815 0 0 1 1.788-2.115zm-6 0a1.815 1.815 0 0 1 1.788 2.115a.312.312 0 0 1-.616 0c-.096-.573-.589-.833-1.171-.833s-1.074.26-1.171.833a.312.312 0 0 1-.616 0a1.815 1.815 0 0 1 1.788-2.115zM3 9h3v3.873A4.02 4.02 0 0 1 3 9m4 4V9h2v4zm3-.127V9h3a4.02 4.02 0 0 1-3 3.873"></svg:path>`,
})
export class IcomoonFreeGrin2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
