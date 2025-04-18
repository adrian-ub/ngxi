import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilEuroIcon],svg[cil-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M316 120h60V88h-60c-73.747 0-136.794 46.657-161.195 112H104v32h42.292a172.2 172.2 0 0 0 0 56H104v32h50.805c24.4 65.343 87.448 112 161.2 112h60v-32H316a140.18 140.18 0 0 1-126.474-80H344v-32H178.815a140.7 140.7 0 0 1 0-56H344v-32H189.526A140.18 140.18 0 0 1 316 120"></svg:path>`,
})
export class CilEuroIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
