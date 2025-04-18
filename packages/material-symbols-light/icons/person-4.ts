import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPerson4Icon],svg[material-symbols-light-person-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.385q-1.246 0-2.123-.877T9 9.385v-2.75q0-.471.322-.803t.794-.332q.298 0 .539.137q.241.136.403.365q.161-.229.403-.365q.241-.137.539-.137t.54.137t.402.365q.162-.229.403-.365q.241-.137.54-.137q.47 0 .793.332q.322.332.322.803v2.75q0 1.246-.877 2.123T12 12.385m-7 7.23V17.97q0-.619.36-1.158q.361-.54.97-.838q1.416-.679 2.834-1.018q1.417-.34 2.836-.34t2.837.34t2.832 1.018q.61.298.97.838q.361.539.361 1.158v1.646z"></svg:path>`,
})
export class MaterialSymbolsLightPerson4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
