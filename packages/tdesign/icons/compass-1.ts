import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCompass1Icon],svg[tdesign-compass-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.891 12l4.341 1.155A2.1 2.1 0 0 1 9.89 12c0-.426.126-.823.343-1.155zm4.954-1.768A2.1 2.1 0 0 1 12 9.89c.426 0 .823.126 1.155.343L12 5.891zm2.481-7.135l1.592 5.985l5.985 1.592a9.01 9.01 0 0 0-7.576-7.577M18.11 12l-4.341-1.155c.217.332.343.729.343 1.155s-.126.823-.343 1.155zm-4.955 1.768A2.1 2.1 0 0 1 12 14.11c-.426 0-.823-.126-1.155-.343L12 18.109zm-2.48 7.135l-1.592-5.985l-5.985-1.591a9.01 9.01 0 0 0 7.577 7.576m-7.577-10.23l5.985-1.591l1.592-5.985a9.01 9.01 0 0 0-7.577 7.577m10.23 10.23a9.01 9.01 0 0 0 7.576-7.576l-5.985 1.591zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-.111a.111.111 0 1 0 0 .222a.111.111 0 0 0 0-.222"></svg:path>`,
})
export class TdesignCompass1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
