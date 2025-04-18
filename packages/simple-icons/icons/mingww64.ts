import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMingww64Icon],svg[simple-icons-mingww64-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 9.396l4.187-4.188l4.187 4.188l-4.187 4.187zm0 10.417l4.187-4.187l4.187 4.187L4.187 24zm5.208-5.209l4.187-4.187l4.187 4.187l-4.187 4.187zm0-10.417L9.395 0l4.187 4.187l-4.187 4.187Zm5.209 5.208l4.187-4.187l4.187 4.187l-4.187 4.187zm5.208-5.208L19.812 0L24 4.187l-4.187 4.187zm-5.208 15.626l4.187-4.187l4.187 4.187L14.604 24Zm5.209-5.208l4.187-4.188L24 14.604l-4.187 4.187z"></svg:path>`,
})
export class SimpleIconsMingww64Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
