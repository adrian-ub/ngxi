import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsDrawingPinFilledIcon],svg[radix-icons-drawing-pin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="radixIconsDrawingPinFilled0" d="M9.621 1.136a.5.5 0 0 1 .707 0l1.061 1.06l1.414 1.415l1.06 1.06a.5.5 0 1 1-.706.708l-.653-.653l-3.637 4.848l1.108 1.108a.5.5 0 0 1-.707.707L7.854 9.975l-1.061-1.06l-3.27 3.27a.5.5 0 1 1-.708-.708l3.27-3.27l-1.06-1.06l-1.414-1.415a.5.5 0 1 1 .707-.707l1.108 1.108l4.848-3.637l-.653-.653a.5.5 0 0 1 0-.707"></svg:path></svg:defs><svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:use href="#radixIconsDrawingPinFilled0"></svg:use><svg:use href="#radixIconsDrawingPinFilled0"></svg:use></svg:g>`
})
export class RadixIconsDrawingPinFilledIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
