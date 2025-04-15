import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsCrumpledPaperIcon],svg[radix-icons-crumpled-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.61.063a.45.45 0 0 0-.528.27l-.928 2.32l-2.321.93a.45.45 0 0 0-.193.687l1.371 1.829l-.948 3.792a.45.45 0 0 0 .264.524L4.2 11.613l1.425 2.137a.45.45 0 0 0 .498.183l3.5-1l.018-.006l3-1a.45.45 0 0 0 .297-.33l1-4.5a.45.45 0 0 0-.169-.457l-1.82-1.365V3a.45.45 0 0 0-.249-.402l-3-1.5a.5.5 0 0 0-.092-.035zm6.822 5.949l1.343 1.007l-2.563 2.135a.45.45 0 0 0-.139.204l-.82 2.457l-1.515-.947a.45.45 0 1 0-.477.764l1.142.713l-2.21.632L4.873 11a.45.45 0 0 0-.2-.165L2.03 9.734l.821-3.284H5a.45.45 0 1 0 0-.9H2.725L1.712 4.2l1.802-.721l2.844.948a.45.45 0 0 0 .493-.146l1.773-2.216l2.426 1.213v1.917l-2.217.887a.45.45 0 0 0-.26.276l-.5 1.5a.45.45 0 1 0 .854.284L9.36 6.84zM7.711 1.766L6.345 3.474l-2.25-.75l.677-1.692zm2.5 10.023l1.905-.635l.659-2.964l-1.889 1.574z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsCrumpledPaperIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
