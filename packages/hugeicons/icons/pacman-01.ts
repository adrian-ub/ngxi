import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPacman01Icon],svg[hugeicons-pacman-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12h-.009m-3.982 0H18m-7.488-4.5h-.01M2 12c0 4.97 3.943 9 8.806 9c2.467 0 4.697-1.037 6.296-2.707c.64-.67.96-1.004.888-1.551c-.073-.547-.537-.821-1.465-1.369l-.758-.447c-2.203-1.3-3.305-1.95-3.305-2.926s1.102-1.627 3.305-2.926l.758-.448c.928-.547 1.392-.82 1.465-1.368c.073-.547-.247-.882-.888-1.551C15.503 4.037 13.273 3 10.806 3C5.943 3 2 7.03 2 12" color="currentColor"></svg:path>`,
})
export class HugeiconsPacman01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
