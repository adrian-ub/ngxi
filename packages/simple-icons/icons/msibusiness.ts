import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMsibusinessIcon],svg[simple-icons-msibusiness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.215 10.794l3.78 2.416h-2.663l-3.78-2.416zM5.656 8.518l-.438 1.626l-.175.65l-.652 2.416l-.175.65l-.437 1.622h1.869l.437-1.622l.175-.65l.651-2.416l.175-.65l.438-1.626zm6.06 5.342l-.437 1.622h4.947l2.543-1.622zm3.556-5.342l-2.548 1.626h7.086l.438-1.626zm6.86 0l-.438 1.626l-.175.65l-.651 2.416l-.175.65l-.437 1.622h1.869l.437-1.622l.175-.65l.651-2.416l.175-.65L24 8.518zm-20.255 0l-.438 1.626l-.175.65l-.651 2.416l-.175.65L0 15.482h1.869l.437-1.622l.175-.65l.651-2.416l.175-.65l.438-1.626zm7.536 0l-.438 1.626l-.175.65l-.651 2.416l-.175.65l-.437 1.622h1.869l.437-1.622l.175-.65l.651-2.416l.175-.65l.438-1.626z"></svg:path>`,
})
export class SimpleIconsMsibusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
