import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBasketballIcon],svg[iconoir-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.736 20.192c4.524-3.168 5.623-9.404 2.455-13.928C17.024 1.74 10.788.641 6.264 3.81C1.74 6.976.641 13.212 3.808 17.736s9.404 5.623 13.928 2.456m0 0L6.264 3.809"></svg:path><svg:path d="M19.577 5.473c-3.77 5.896-8.508 9.214-16.302 11.415"></svg:path><svg:path d="M13.06 2.056c.413 5.24 3.392 9.494 8.646 12.35M2.293 9.595c4.783 2.18 7.761 6.434 8.647 12.349"></svg:path></svg:g>`,
})
export class IconoirBasketballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
