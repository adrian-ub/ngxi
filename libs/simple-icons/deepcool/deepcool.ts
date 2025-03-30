import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siDeepcool],svg[si-deepcool]',
  host: {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  template: `<svg:title>DeepCool</svg:title>
    <svg:path
      d="M12 12v3.046H3.046V6h6V0H12v9.046H6.092V12H12Zm8.954 3.046V18h-5.908v6H12v-8.954h8.954Z"
    />`,
})
export class SiDeepcool {}
