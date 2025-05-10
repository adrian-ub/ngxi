import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserPlusRoundedLinearIcon],svg[solar-user-plus-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:circle cx="17" cy="18" r="4"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 16.667v2.666M15.667 18h2.666"></svg:path><svg:path d="M14 20.834c-.634.108-1.305.166-2 .166c-3.866 0-7-1.79-7-4s3.134-4 7-4c1.713 0 3.283.352 4.5.936"></svg:path></svg:g>`,
})
export class SolarUserPlusRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserPlusRoundedOutlineIcon],svg[solar-user-plus-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 2.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.75 16.667a.75.75 0 1 0-1.5 0v.583h-.584a.75.75 0 0 0 0 1.5h.584v.583a.75.75 0 0 0 1.5 0v-.583h.583a.75.75 0 0 0 0-1.5h-.583z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.812 13.254q.093-.004.188-.004a4.75 4.75 0 1 1-3.09 8.358c-.61.093-1.251.142-1.91.142c-2.04 0-3.922-.47-5.322-1.27C5.3 19.692 4.25 18.49 4.25 17s1.05-2.692 2.428-3.48c1.4-.8 3.283-1.27 5.322-1.27c1.805 0 3.483.368 4.812 1.004M17 14.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m-4.2 5.472A4.7 4.7 0 0 1 12.25 18c0-1.671.863-3.14 2.168-3.987A11 11 0 0 0 12 13.75c-1.827 0-3.444.425-4.578 1.073C6.267 15.483 5.75 16.28 5.75 17s.517 1.517 1.672 2.177c1.134.648 2.751 1.073 4.578 1.073q.407 0 .8-.028" clip-rule="evenodd"></svg:path>`,
})
export class SolarUserPlusRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserRoundedBoldIcon],svg[solar-user-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="6" r="4" fill="currentColor"></svg:circle><svg:ellipse cx="12" cy="17" fill="currentColor" rx="7" ry="4"></svg:ellipse>`,
})
export class SolarUserRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserRoundedBoldDuotoneIcon],svg[solar-user-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="6" r="4" fill="currentColor"></svg:circle><svg:ellipse cx="12" cy="17" fill="currentColor" opacity=".5" rx="7" ry="4"></svg:ellipse>`,
})
export class SolarUserRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserRoundedBrokenIcon],svg[solar-user-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" d="M15 20.615c-.91.247-1.926.385-3 .385c-3.866 0-7-1.79-7-4s3.134-4 7-4s7 1.79 7 4c0 .345-.077.68-.22 1"></svg:path></svg:g>`,
})
export class SolarUserRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserRoundedLineDuotoneIcon],svg[solar-user-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:ellipse cx="12" cy="17" opacity=".5" rx="7" ry="4"></svg:ellipse></svg:g>`,
})
export class SolarUserRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserRoundedLinearIcon],svg[solar-user-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:ellipse cx="12" cy="17" rx="7" ry="4"></svg:ellipse></svg:g>`,
})
export class SolarUserRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserRoundedOutlineIcon],svg[solar-user-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.04 0-3.922.47-5.322 1.27C5.3 14.308 4.25 15.51 4.25 17s1.05 2.692 2.428 3.48c1.4.8 3.283 1.27 5.322 1.27s3.922-.47 5.322-1.27c1.378-.788 2.428-1.99 2.428-3.48s-1.05-2.692-2.428-3.48c-1.4-.8-3.283-1.27-5.322-1.27M5.75 17c0-.72.517-1.517 1.672-2.177c1.134-.648 2.751-1.073 4.578-1.073s3.444.425 4.578 1.073c1.155.66 1.672 1.458 1.672 2.177s-.517 1.517-1.672 2.177c-1.134.648-2.751 1.073-4.578 1.073s-3.444-.425-4.578-1.073C6.267 18.517 5.75 17.72 5.75 17" clip-rule="evenodd"></svg:path>`,
})
export class SolarUserRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakBoldIcon],svg[solar-user-speak-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.357 1.614a.75.75 0 0 1 1.029-.257L19 2l.386-.643h.001l.002.002l.003.002l.01.006a2 2 0 0 1 .114.076q.107.074.277.212c.222.185.512.462.802.838c.582.757 1.155 1.914 1.155 3.507s-.573 2.75-1.155 3.507c-.29.376-.58.653-.802.838a4 4 0 0 1-.378.28l-.013.008l-.01.006l-.003.002l-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004l.04-.027q.061-.042.177-.136c.153-.128.363-.326.573-.6c.418-.543.845-1.386.845-2.593s-.427-2.05-.844-2.593a3.8 3.8 0 0 0-.574-.6a3 3 0 0 0-.217-.163l-.005-.004a.75.75 0 0 1-.253-1.026M10 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-8 7.5c0 2.485 0 4.5 8 4.5s8-2.015 8-4.5s-3.582-4.5-8-4.5s-8 2.015-8 4.5"></svg:path><svg:path fill="currentColor" d="M17.386 3.357a.75.75 0 0 0-1.03.257l.25 1.024l.007.005l.063.049c.06.05.144.129.23.24A1.7 1.7 0 0 1 17.25 6a1.7 1.7 0 0 1-.344 1.068a1.5 1.5 0 0 1-.293.29l-.008.004a.75.75 0 0 0 .78 1.281L17 8l.386.643h.001l.002-.002l.003-.001l.007-.005l.02-.012a2 2 0 0 0 .217-.162c.129-.107.294-.265.459-.479A3.2 3.2 0 0 0 18.75 6a3.2 3.2 0 0 0-.655-1.982a3 3 0 0 0-.622-.604l-.054-.037l-.02-.012l-.007-.005l-.003-.001l-.002-.001S17.386 3.357 17 4z"></svg:path>`,
})
export class SolarUserSpeakBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakBoldDuotoneIcon],svg[solar-user-speak-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.357 1.364a.75.75 0 0 1 1.029-.257L19 1.75l.386-.643h.001l.002.002l.003.002l.01.006a2 2 0 0 1 .114.076q.107.074.277.212c.222.185.512.462.802.838c.582.758 1.155 1.914 1.155 3.507s-.573 2.75-1.155 3.507c-.29.376-.58.653-.802.838a4 4 0 0 1-.378.28l-.013.008l-.01.006l-.003.002l-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004l.04-.027q.061-.042.177-.136c.153-.128.363-.326.573-.6c.418-.542.845-1.386.845-2.593s-.427-2.05-.844-2.593a3.8 3.8 0 0 0-.574-.6a3 3 0 0 0-.217-.163l-.005-.003a.75.75 0 0 1-.253-1.027M10 9.75a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path fill="currentColor" d="M17.386 3.107a.75.75 0 0 0-1.03.257l.25 1.024l.007.005l.063.049c.06.05.144.129.23.24a1.7 1.7 0 0 1 .344 1.068a1.7 1.7 0 0 1-.344 1.068a1.5 1.5 0 0 1-.293.29l-.008.004a.75.75 0 0 0 .78 1.281L17 7.75l.386.643h.001l.002-.001l.003-.002l.007-.005l.02-.012a2 2 0 0 0 .217-.162c.129-.107.294-.265.459-.479a3.2 3.2 0 0 0 .655-1.982a3.2 3.2 0 0 0-.655-1.982a3 3 0 0 0-.622-.604l-.054-.037l-.02-.012l-.007-.004l-.003-.002l-.002-.001s-.001-.001-.387.642z"></svg:path><svg:path fill="currentColor" d="M2 17.25c0 2.485 0 4.5 8 4.5s8-2.015 8-4.5s-3.582-4.5-8-4.5s-8 2.015-8 4.5" opacity=".5"></svg:path>`,
})
export class SolarUserSpeakBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakBrokenIcon],svg[solar-user-speak-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="10" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" d="M19 2s2 1.2 2 4s-2 4-2 4m-2-6s1 .6 1 2s-1 2-1 2m.998 10q.002-.246.002-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S2 22 10 22c2.231 0 3.84-.157 5-.437"></svg:path></svg:g>`,
})
export class SolarUserSpeakBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakLineDuotoneIcon],svg[solar-user-speak-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="10" cy="6" r="4"></svg:circle><svg:path d="M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M19 2s2 1.2 2 4s-2 4-2 4m-2-6s1 .6 1 2s-1 2-1 2"></svg:path></svg:g>`,
})
export class SolarUserSpeakLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakLinearIcon],svg[solar-user-speak-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="10" cy="6" r="4"></svg:circle><svg:path d="M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5Z"></svg:path><svg:path stroke-linecap="round" d="M19 2s2 1.2 2 4s-2 4-2 4m-2-6s1 .6 1 2s-1 2-1 2"></svg:path></svg:g>`,
})
export class SolarUserSpeakLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakOutlineIcon],svg[solar-user-speak-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.357 1.614a.75.75 0 0 1 1.029-.257L19 2l.386-.643h.001l.002.002l.004.002l.01.006a2 2 0 0 1 .113.076c.07.049.166.12.277.212c.222.185.512.462.802.838c.582.757 1.155 1.914 1.155 3.507s-.573 2.75-1.155 3.507c-.29.376-.58.653-.802.838a4 4 0 0 1-.363.27l-.028.018l-.01.006l-.003.002l-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004l.041-.027a3 3 0 0 0 .177-.136c.152-.128.362-.326.573-.6c.417-.543.844-1.386.844-2.593s-.427-2.05-.844-2.593a3.8 3.8 0 0 0-.573-.6a3 3 0 0 0-.218-.163l-.005-.004a.75.75 0 0 1-.253-1.026"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M6.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M10 12.25c-2.313 0-4.445.526-6.024 1.414C2.42 14.54 1.25 15.866 1.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414M2.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339s-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.386 3.357a.75.75 0 0 0-1.029.257l.248 1.024l.008.005l.063.049c.06.05.144.129.23.24c.167.218.344.56.344 1.068c0 .507-.177.85-.344 1.068a1.5 1.5 0 0 1-.293.29l-.008.004a.75.75 0 0 0 .781 1.281L17 8l.386.643h.001l.002-.002l.003-.001l.007-.005l.02-.012l.054-.037q.066-.045.164-.125c.128-.107.293-.265.458-.479A3.2 3.2 0 0 0 18.75 6a3.2 3.2 0 0 0-.655-1.982a3 3 0 0 0-.622-.604l-.054-.037l-.02-.012l-.007-.005l-.003-.001l-.002-.001S17.386 3.357 17 4z"></svg:path>`,
})
export class SolarUserSpeakOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakRoundedBoldIcon],svg[solar-user-speak-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="6.75" r="4" fill="currentColor"></svg:circle><svg:ellipse cx="10" cy="17.75" fill="currentColor" rx="7" ry="4"></svg:ellipse><svg:path fill="currentColor" fill-rule="evenodd" d="M18.357 2.364a.75.75 0 0 1 1.029-.257L19 2.75l.386-.643h.001l.002.002l.004.002l.01.006l.113.076c.07.049.166.12.277.212c.222.185.512.462.802.838c.582.758 1.155 1.914 1.155 3.507s-.573 2.75-1.155 3.507c-.29.376-.58.653-.802.838a4 4 0 0 1-.363.27l-.028.018l-.01.006l-.003.002l-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004l.041-.027q.06-.042.177-.136c.152-.128.362-.326.573-.6c.417-.542.844-1.386.844-2.593s-.427-2.05-.844-2.593a3.8 3.8 0 0 0-.573-.6a3 3 0 0 0-.218-.163l-.005-.003a.75.75 0 0 1-.253-1.027" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.33 4.415a.75.75 0 0 1 1.006-.336L17 4.75l.336-.67h.001l.002.001l.004.002l.008.004l.022.012a2 2 0 0 1 .233.153c.136.102.31.254.48.467c.349.436.664 1.099.664 2.031s-.316 1.595-.664 2.031a2.7 2.7 0 0 1-.654.586l-.06.034l-.02.012l-.01.004l-.003.002l-.002.001l-.33-.657l.329.658a.75.75 0 0 1-.685-1.335l.003-.001l.052-.036c.052-.04.13-.106.209-.205c.15-.189.335-.526.335-1.094s-.184-.905-.335-1.094a1.2 1.2 0 0 0-.261-.24l-.003-.002a.75.75 0 0 1-.322-1" clip-rule="evenodd"></svg:path>`,
})
export class SolarUserSpeakRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakRoundedBoldDuotoneIcon],svg[solar-user-speak-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="6.75" r="4" fill="currentColor"></svg:circle><svg:ellipse cx="10" cy="17.75" fill="currentColor" opacity=".5" rx="7" ry="4"></svg:ellipse><svg:path fill="currentColor" fill-rule="evenodd" d="M18.357 2.364a.75.75 0 0 1 1.029-.257L19 2.75l.386-.643h.001l.002.002l.004.002l.01.006l.113.076c.07.049.166.12.277.212c.222.185.512.462.802.838c.582.758 1.155 1.914 1.155 3.507s-.573 2.75-1.155 3.507c-.29.376-.58.653-.802.838a4 4 0 0 1-.363.27l-.028.018l-.01.006l-.003.002l-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004l.041-.027q.06-.042.177-.136c.152-.128.362-.326.573-.6c.417-.542.844-1.386.844-2.593s-.427-2.05-.844-2.593a3.8 3.8 0 0 0-.573-.6a3 3 0 0 0-.218-.163l-.005-.003a.75.75 0 0 1-.253-1.027" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.33 4.415a.75.75 0 0 1 1.006-.336L17 4.75l.336-.67h.001l.002.001l.004.002l.008.004l.022.012a2 2 0 0 1 .233.153c.136.102.31.254.48.467c.349.436.664 1.099.664 2.031s-.316 1.595-.664 2.031a2.7 2.7 0 0 1-.654.586l-.06.034l-.02.012l-.01.004l-.003.002l-.002.001l-.33-.657l.329.658a.75.75 0 0 1-.685-1.335l.003-.001l.052-.036c.052-.04.13-.106.209-.205c.15-.189.335-.526.335-1.094s-.184-.905-.335-1.094a1.2 1.2 0 0 0-.261-.24l-.003-.002a.75.75 0 0 1-.322-1" clip-rule="evenodd"></svg:path>`,
})
export class SolarUserSpeakRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakRoundedBrokenIcon],svg[solar-user-speak-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="10" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" d="M19 2s2 1.2 2 4s-2 4-2 4m-2-6s1 .6 1 2s-1 2-1 2m-4 12.615c-.91.247-1.926.385-3 .385c-3.866 0-7-1.79-7-4s3.134-4 7-4s7 1.79 7 4c0 .345-.077.68-.22 1"></svg:path></svg:g>`,
})
export class SolarUserSpeakRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakRoundedLineDuotoneIcon],svg[solar-user-speak-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="10" cy="6" r="4"></svg:circle><svg:ellipse cx="10" cy="17" opacity=".5" rx="7" ry="4"></svg:ellipse><svg:path stroke-linecap="round" d="M19 2s2 1.2 2 4s-2 4-2 4m-2-6s1 .6 1 2s-1 2-1 2"></svg:path></svg:g>`,
})
export class SolarUserSpeakRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakRoundedLinearIcon],svg[solar-user-speak-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="10" cy="6" r="4"></svg:circle><svg:ellipse cx="10" cy="17" rx="7" ry="4"></svg:ellipse><svg:path stroke-linecap="round" d="M19 2s2 1.2 2 4s-2 4-2 4m-2-6s1 .6 1 2s-1 2-1 2"></svg:path></svg:g>`,
})
export class SolarUserSpeakRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakRoundedOutlineIcon],svg[solar-user-speak-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.357 1.614a.75.75 0 0 1 1.029-.257L19 2l.386-.643h.001l.002.002l.003.002l.01.006a2 2 0 0 1 .114.076q.107.074.277.212c.222.185.512.462.802.838c.582.757 1.155 1.914 1.155 3.507s-.573 2.75-1.155 3.507c-.29.376-.58.653-.802.838a4 4 0 0 1-.39.288l-.01.006l-.004.002l-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004l.04-.027q.061-.042.177-.136c.153-.128.363-.326.573-.6c.418-.543.845-1.386.845-2.593s-.427-2.05-.844-2.593a3.8 3.8 0 0 0-.574-.6a3 3 0 0 0-.217-.163l-.005-.004a.75.75 0 0 1-.253-1.026"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M6.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M10 12.25c-2.04 0-3.922.47-5.322 1.27C3.3 14.308 2.25 15.51 2.25 17s1.05 2.692 2.428 3.48c1.4.8 3.283 1.27 5.322 1.27s3.922-.47 5.322-1.27c1.378-.788 2.428-1.99 2.428-3.48s-1.05-2.692-2.428-3.48c-1.4-.8-3.283-1.27-5.322-1.27M3.75 17c0-.72.517-1.517 1.672-2.177C6.556 14.175 8.173 13.75 10 13.75s3.444.425 4.578 1.073c1.155.66 1.672 1.458 1.672 2.177s-.517 1.517-1.672 2.177c-1.134.648-2.751 1.073-4.578 1.073s-3.444-.425-4.578-1.073C4.267 18.517 3.75 17.72 3.75 17" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.386 3.357a.75.75 0 0 0-1.03.257l.25 1.024l.007.005l.063.049c.06.05.144.129.23.24c.167.218.344.56.344 1.068c0 .507-.177.85-.344 1.068a1.5 1.5 0 0 1-.293.29l-.008.004a.75.75 0 0 0 .78 1.281L17 8l.386.643h.001l.002-.002l.003-.001l.007-.005l.02-.012a2 2 0 0 0 .217-.162c.129-.107.294-.265.459-.479A3.2 3.2 0 0 0 18.75 6a3.2 3.2 0 0 0-.655-1.982a3 3 0 0 0-.622-.604l-.054-.037l-.02-.012l-.007-.005l-.003-.001l-.002-.001S17.386 3.357 17 4z"></svg:path>`,
})
export class SolarUserSpeakRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupRoundedBoldIcon],svg[solar-users-group-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9.001" cy="6" r="4" fill="currentColor"></svg:circle><svg:ellipse cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4"></svg:ellipse><svg:path fill="currentColor" d="M21 17c0 1.657-2.036 3-4.521 3c.732-.8 1.236-1.805 1.236-2.998c0-1.195-.505-2.2-1.239-3.001C18.962 14 21 15.344 21 17M18 6a3 3 0 0 1-4.029 2.82A5.7 5.7 0 0 0 14.714 6c0-1.025-.27-1.987-.742-2.819A3 3 0 0 1 18 6.001"></svg:path>`,
})
export class SolarUsersGroupRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupRoundedBoldDuotoneIcon],svg[solar-users-group-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15" cy="6" r="3" fill="currentColor" opacity=".4"></svg:circle><svg:ellipse cx="16" cy="17" fill="currentColor" opacity=".4" rx="5" ry="3"></svg:ellipse><svg:circle cx="9.001" cy="6" r="4" fill="currentColor"></svg:circle><svg:ellipse cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4"></svg:ellipse>`,
})
export class SolarUsersGroupRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupRoundedBrokenIcon],svg[solar-users-group-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="9" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" d="M15 9a3 3 0 1 0 0-6M5.89 20.584C6.825 20.85 7.882 21 9 21c3.866 0 7-1.79 7-4s-3.134-4-7-4s-7 1.79-7 4c0 .345.077.68.22 1M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37"></svg:path></svg:g>`,
})
export class SolarUsersGroupRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupRoundedLineDuotoneIcon],svg[solar-users-group-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="9" cy="6" r="4"></svg:circle><svg:path d="M12.5 4.341a3 3 0 1 1 0 3.318" opacity=".5"></svg:path><svg:ellipse cx="9" cy="17" rx="7" ry="4"></svg:ellipse><svg:path stroke-linecap="round" d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37" opacity=".5"></svg:path></svg:g>`,
})
export class SolarUsersGroupRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupRoundedLinearIcon],svg[solar-users-group-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="9" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" d="M15 9a3 3 0 1 0 0-6"></svg:path><svg:ellipse cx="9" cy="17" rx="7" ry="4"></svg:ellipse><svg:path stroke-linecap="round" d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37"></svg:path></svg:g>`,
})
export class SolarUsersGroupRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupRoundedOutlineIcon],svg[solar-users-group-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M5.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15 2.25a.75.75 0 0 0 0 1.5a2.25 2.25 0 0 1 0 4.5a.75.75 0 0 0 0 1.5a3.75 3.75 0 1 0 0-7.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.678 13.52c1.4-.8 3.283-1.27 5.322-1.27s3.922.47 5.322 1.27c1.378.788 2.428 1.99 2.428 3.48s-1.05 2.692-2.428 3.48c-1.4.8-3.283 1.27-5.322 1.27s-3.922-.47-5.322-1.27C2.3 19.692 1.25 18.49 1.25 17s1.05-2.692 2.428-3.48m.744 1.303C3.267 15.483 2.75 16.28 2.75 17s.517 1.517 1.672 2.177C5.556 19.825 7.173 20.25 9 20.25s3.444-.425 4.578-1.073c1.155-.66 1.672-1.458 1.672-2.177s-.517-1.517-1.672-2.177C12.444 14.175 10.827 13.75 9 13.75s-3.444.425-4.578 1.073" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.16 13.267a.75.75 0 0 0-.32 1.466c.792.173 1.425.472 1.843.814s.567.677.567.953c0 .25-.12.545-.453.854c-.335.311-.85.598-1.513.798a.75.75 0 1 0 .432 1.437c.823-.248 1.558-.631 2.102-1.136c.546-.507.932-1.174.932-1.953c0-.865-.474-1.588-1.117-2.114c-.644-.527-1.51-.908-2.472-1.119"></svg:path>`,
})
export class SolarUsersGroupRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupTwoRoundedBoldIcon],svg[solar-users-group-two-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 7.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m2.5 9c0 1.933-2.686 3.5-6 3.5s-6-1.567-6-3.5S8.686 13 12 13s6 1.567 6 3.5M7.122 5q.267 0 .518.05A5 5 0 0 0 7 7.5c0 .868.221 1.685.61 2.396q-.237.045-.488.045c-1.414 0-2.561-1.106-2.561-2.47S5.708 5 7.122 5M5.447 18.986C4.88 18.307 4.5 17.474 4.5 16.5c0-.944.357-1.756.896-2.423C3.49 14.225 2 15.267 2 16.529c0 1.275 1.517 2.325 3.447 2.457M17 7.5c0 .868-.221 1.685-.61 2.396q.236.045.488.045c1.414 0 2.56-1.106 2.56-2.47S18.293 5 16.879 5q-.267 0-.518.05c.407.724.64 1.56.64 2.45m1.552 11.486c1.93-.132 3.447-1.182 3.447-2.457c0-1.263-1.491-2.304-3.396-2.452c.54.667.896 1.479.896 2.423c0 .974-.38 1.807-.947 2.486"></svg:path>`,
})
export class SolarUsersGroupTwoRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupTwoRoundedBoldDuotoneIcon],svg[solar-users-group-two-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 7.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill="currentColor" d="M19.5 7.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-15 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0" opacity=".4"></svg:path><svg:path fill="currentColor" d="M18 16.5c0 1.933-2.686 3.5-6 3.5s-6-1.567-6-3.5S8.686 13 12 13s6 1.567 6 3.5"></svg:path><svg:path fill="currentColor" d="M22 16.5c0 1.38-1.79 2.5-4 2.5s-4-1.12-4-2.5s1.79-2.5 4-2.5s4 1.12 4 2.5m-20 0C2 17.88 3.79 19 6 19s4-1.12 4-2.5S8.21 14 6 14s-4 1.12-4 2.5" opacity=".4"></svg:path>`,
})
export class SolarUsersGroupTwoRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupTwoRoundedBrokenIcon],svg[solar-users-group-two-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" d="M18 9c1.657 0 3-1.12 3-2.5S19.657 4 18 4M6 9C4.343 9 3 7.88 3 6.5S4.343 4 6 4m11.197 11c.51.588.803 1.271.803 2c0 2.21-2.686 4-6 4s-6-1.79-6-4s2.686-4 6-4q.511 0 1 .055M20 19c1.754-.385 3-1.359 3-2.5s-1.246-2.115-3-2.5M4 19c-1.754-.385-3-1.359-3-2.5s1.246-2.115 3-2.5"></svg:path></svg:g>`,
})
export class SolarUsersGroupTwoRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupTwoRoundedLineDuotoneIcon],svg[solar-users-group-two-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" d="M18 9c1.657 0 3-1.12 3-2.5S19.657 4 18 4M6 9C4.343 9 3 7.88 3 6.5S4.343 4 6 4" opacity=".5"></svg:path><svg:ellipse cx="12" cy="17" rx="6" ry="4"></svg:ellipse><svg:path stroke-linecap="round" d="M20 19c1.754-.385 3-1.359 3-2.5s-1.246-2.115-3-2.5M4 19c-1.754-.385-3-1.359-3-2.5s1.246-2.115 3-2.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarUsersGroupTwoRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupTwoRoundedLinearIcon],svg[solar-users-group-two-rounded-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" d="M18 9c1.657 0 3-1.12 3-2.5S19.657 4 18 4M6 9C4.343 9 3 7.88 3 6.5S4.343 4 6 4"></svg:path><svg:ellipse cx="12" cy="17" rx="6" ry="4"></svg:ellipse><svg:path stroke-linecap="round" d="M20 19c1.754-.385 3-1.359 3-2.5s-1.246-2.115-3-2.5M4 19c-1.754-.385-3-1.359-3-2.5s1.246-2.115 3-2.5"></svg:path></svg:g>`,
})
export class SolarUsersGroupTwoRoundedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarUsersGroupTwoRoundedOutlineIcon],svg[solar-users-group-two-rounded-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18 3.25a.75.75 0 0 0 0 1.5c1.377 0 2.25.906 2.25 1.75S19.377 8.25 18 8.25a.75.75 0 0 0 0 1.5c1.937 0 3.75-1.333 3.75-3.25S19.937 3.25 18 3.25M6.75 4A.75.75 0 0 0 6 3.25c-1.937 0-3.75 1.333-3.75 3.25S4.063 9.75 6 9.75a.75.75 0 0 0 0-1.5c-1.376 0-2.25-.906-2.25-1.75S4.624 4.75 6 4.75A.75.75 0 0 0 6.75 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 12.25c-1.784 0-3.434.48-4.659 1.297c-1.22.814-2.091 2.02-2.091 3.453s.871 2.64 2.091 3.453c1.225.816 2.875 1.297 4.659 1.297s3.434-.48 4.659-1.297c1.22-.814 2.091-2.02 2.091-3.453s-.872-2.64-2.091-3.453c-1.225-.816-2.875-1.297-4.659-1.297M6.75 17c0-.776.472-1.57 1.423-2.204c.947-.631 2.298-1.046 3.827-1.046c1.53 0 2.88.415 3.827 1.046c.951.634 1.423 1.428 1.423 2.204s-.472 1.57-1.423 2.204c-.947.631-2.298 1.046-3.827 1.046c-1.53 0-2.88-.415-3.827-1.046C7.222 18.57 6.75 17.776 6.75 17" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.267 13.84a.75.75 0 0 1 .894-.573c.961.211 1.828.592 2.472 1.119c.643.526 1.117 1.25 1.117 2.114c0 .865-.474 1.588-1.117 2.114c-.644.527-1.51.908-2.472 1.119a.75.75 0 0 1-.322-1.466c.793-.173 1.426-.472 1.844-.814s.567-.677.567-.953s-.149-.61-.567-.953s-1.051-.64-1.844-.814a.75.75 0 0 1-.572-.894M3.84 13.267a.75.75 0 1 1 .32 1.466c-.792.173-1.425.472-1.843.814s-.567.677-.567.953s.149.61.567.953s1.051.64 1.844.814a.75.75 0 0 1-.322 1.466c-.962-.211-1.828-.592-2.472-1.119C.724 18.088.25 17.364.25 16.5c0-.865.474-1.588 1.117-2.114c.644-.527 1.51-.908 2.472-1.119"></svg:path>`,
})
export class SolarUsersGroupTwoRoundedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVerifiedCheckBoldIcon],svg[solar-verified-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.592 3.2a6 6 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.71 2.71 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a6 6 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.71 2.71 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.71 2.71 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.025-.319.038-.479.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a6 6 0 0 1-.399-.495a2.7 2.7 0 0 1-.408-.985a6 6 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.71 2.71 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a6 6 0 0 1-.632-.068a2.7 2.7 0 0 1-.985-.408a6 6 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.71 2.71 0 0 0-2.34 0c-.32.153-.626.414-1.238.935m6.781 6.663a.814.814 0 0 0-1.15-1.15l-4.85 4.85l-1.596-1.595a.814.814 0 0 0-1.15 1.15l2.17 2.17a.814.814 0 0 0 1.15 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarVerifiedCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVerifiedCheckBoldDuotoneIcon],svg[solar-verified-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.592 3.2a6 6 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.71 2.71 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a6 6 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.71 2.71 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.71 2.71 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.025-.319.038-.479.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a6 6 0 0 1-.399-.495a2.7 2.7 0 0 1-.408-.985a6 6 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.71 2.71 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a6 6 0 0 1-.632-.068a2.7 2.7 0 0 1-.985-.408a6 6 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.71 2.71 0 0 0-2.34 0c-.32.153-.626.414-1.238.935" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.374 9.863a.814.814 0 0 0-1.151-1.151l-4.85 4.85l-1.595-1.595a.814.814 0 0 0-1.151 1.151l2.17 2.17a.814.814 0 0 0 1.15 0z"></svg:path>`,
})
export class SolarVerifiedCheckBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVerifiedCheckBrokenIcon],svg[solar-verified-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"></svg:path><svg:path d="M3.03 13.078a2.5 2.5 0 0 1 0-2.157c.14-.294.38-.576.86-1.14c.192-.225.288-.337.368-.457a2.5 2.5 0 0 0 .376-.907c.028-.142.04-.289.063-.583c.059-.738.088-1.107.197-1.416A2.5 2.5 0 0 1 6.42 4.894c.308-.109.677-.139 1.416-.197c.294-.024.44-.036.582-.064a2.5 2.5 0 0 0 .908-.376c.12-.08.232-.175.456-.367c.564-.48.846-.72 1.14-.861a2.5 2.5 0 0 1 2.157 0c.295.14.577.38 1.14.861c.225.192.337.287.457.367a2.5 2.5 0 0 0 .908.376c.141.028.288.04.582.064c.739.058 1.108.088 1.416.197a2.5 2.5 0 0 1 1.525 1.524M4.894 17.581a2.5 2.5 0 0 0 1.525 1.524c.308.11.677.139 1.416.197c.294.024.44.036.582.064a2.5 2.5 0 0 1 .908.376c.12.08.232.175.456.367c.564.48.846.72 1.14.861a2.5 2.5 0 0 0 2.157 0c.295-.14.577-.38 1.14-.861a5 5 0 0 1 .457-.367a2.5 2.5 0 0 1 .908-.376c.141-.028.288-.04.582-.064c.739-.058 1.108-.088 1.416-.197a2.5 2.5 0 0 0 1.525-1.524c.109-.308.138-.678.197-1.416c.023-.294.035-.441.063-.583c.064-.324.192-.633.376-.907c.08-.12.176-.232.367-.457c.48-.564.721-.846.862-1.14a2.5 2.5 0 0 0 0-2.157"></svg:path></svg:g>`,
})
export class SolarVerifiedCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVerifiedCheckLineDuotoneIcon],svg[solar-verified-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9.781 3.89c.564-.48.846-.72 1.14-.861a2.5 2.5 0 0 1 2.157 0c.295.14.577.38 1.14.861c.225.192.337.287.457.367a2.5 2.5 0 0 0 .908.376c.141.028.288.04.582.064c.739.058 1.108.088 1.416.197a2.5 2.5 0 0 1 1.525 1.524c.109.309.138.678.197 1.416c.023.294.035.441.063.583c.064.324.192.633.376.907c.08.12.176.232.367.457c.48.564.721.846.862 1.14a2.5 2.5 0 0 1 0 2.157c-.14.294-.381.576-.862 1.14a5 5 0 0 0-.367.457a2.5 2.5 0 0 0-.376.907c-.028.142-.04.289-.063.583c-.059.738-.088 1.108-.197 1.416a2.5 2.5 0 0 1-1.525 1.524c-.308.11-.677.139-1.416.197c-.294.024-.44.036-.582.064a2.5 2.5 0 0 0-.908.376a5 5 0 0 0-.456.367c-.564.48-.846.72-1.14.861a2.5 2.5 0 0 1-2.157 0c-.295-.14-.577-.38-1.14-.861a5 5 0 0 0-.457-.367a2.5 2.5 0 0 0-.908-.376a5 5 0 0 0-.582-.064c-.739-.058-1.108-.088-1.416-.197a2.5 2.5 0 0 1-1.525-1.524c-.109-.308-.138-.678-.197-1.416a5 5 0 0 0-.063-.583a2.5 2.5 0 0 0-.376-.907c-.08-.12-.176-.232-.367-.457c-.48-.564-.721-.846-.862-1.14a2.5 2.5 0 0 1 0-2.157c.141-.294.381-.576.862-1.14c.191-.225.287-.337.367-.457a2.5 2.5 0 0 0 .376-.907c.028-.142.04-.289.063-.583c.059-.738.088-1.107.197-1.416A2.5 2.5 0 0 1 6.42 4.894c.308-.109.677-.139 1.416-.197c.294-.024.44-.036.582-.064a2.5 2.5 0 0 0 .908-.376c.12-.08.232-.175.456-.367Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"></svg:path></svg:g>`,
})
export class SolarVerifiedCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVerifiedCheckLinearIcon],svg[solar-verified-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9.781 3.89c.564-.48.846-.72 1.14-.861a2.5 2.5 0 0 1 2.157 0c.295.14.577.38 1.14.861c.225.192.337.287.457.367a2.5 2.5 0 0 0 .908.376c.141.028.288.04.582.064c.739.058 1.108.088 1.416.197a2.5 2.5 0 0 1 1.525 1.524c.109.309.138.678.197 1.416c.023.294.035.441.063.583c.064.324.192.633.376.907c.08.12.176.232.367.457c.48.564.721.846.862 1.14a2.5 2.5 0 0 1 0 2.157c-.14.294-.381.576-.862 1.14a5 5 0 0 0-.367.457a2.5 2.5 0 0 0-.376.907c-.028.142-.04.289-.063.583c-.059.738-.088 1.108-.197 1.416a2.5 2.5 0 0 1-1.525 1.524c-.308.11-.677.139-1.416.197c-.294.024-.44.036-.582.064a2.5 2.5 0 0 0-.908.376a5 5 0 0 0-.456.367c-.564.48-.846.72-1.14.861a2.5 2.5 0 0 1-2.157 0c-.295-.14-.577-.38-1.14-.861a5 5 0 0 0-.457-.367a2.5 2.5 0 0 0-.908-.376a5 5 0 0 0-.582-.064c-.739-.058-1.108-.088-1.416-.197a2.5 2.5 0 0 1-1.525-1.524c-.109-.308-.138-.678-.197-1.416a5 5 0 0 0-.063-.583a2.5 2.5 0 0 0-.376-.907c-.08-.12-.176-.232-.367-.457c-.48-.564-.721-.846-.862-1.14a2.5 2.5 0 0 1 0-2.157c.141-.294.381-.576.862-1.14c.191-.225.287-.337.367-.457a2.5 2.5 0 0 0 .376-.907c.028-.142.04-.289.063-.583c.059-.738.088-1.107.197-1.416A2.5 2.5 0 0 1 6.42 4.894c.308-.109.677-.139 1.416-.197c.294-.024.44-.036.582-.064a2.5 2.5 0 0 0 .908-.376c.12-.08.232-.175.456-.367Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"></svg:path></svg:g>`,
})
export class SolarVerifiedCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVerifiedCheckOutlineIcon],svg[solar-verified-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.594 2.319a3.26 3.26 0 0 1 2.812 0c.387.185.74.487 1.231.905l.078.066c.238.203.313.265.389.316c.193.13.41.219.637.264c.09.018.187.027.499.051l.101.008c.642.051 1.106.088 1.51.23a3.27 3.27 0 0 1 1.99 1.99c.142.404.178.868.23 1.51l.008.101c.024.312.033.41.051.499c.045.228.135.445.264.638c.051.075.113.15.316.388l.066.078c.419.49.72.844.905 1.23c.425.89.425 1.924 0 2.813c-.184.387-.486.74-.905 1.231l-.066.078a5 5 0 0 0-.316.389c-.13.193-.219.41-.264.637c-.018.09-.026.187-.051.499l-.009.101c-.05.642-.087 1.106-.23 1.51a3.26 3.26 0 0 1-1.989 1.99c-.404.142-.868.178-1.51.23l-.101.008a5 5 0 0 0-.499.051a1.8 1.8 0 0 0-.637.264a5 5 0 0 0-.39.316l-.077.066c-.49.419-.844.72-1.23.905a3.26 3.26 0 0 1-2.813 0c-.387-.184-.74-.486-1.231-.905l-.078-.066a5 5 0 0 0-.388-.316a1.8 1.8 0 0 0-.638-.264a5 5 0 0 0-.499-.051l-.101-.009c-.642-.05-1.106-.087-1.51-.23a3.26 3.26 0 0 1-1.99-1.989c-.142-.404-.179-.868-.23-1.51l-.008-.101a5 5 0 0 0-.051-.499a1.8 1.8 0 0 0-.264-.637a5 5 0 0 0-.316-.39l-.066-.077c-.418-.49-.72-.844-.905-1.23a3.26 3.26 0 0 1 0-2.813c.185-.387.487-.74.905-1.231l.066-.078a5 5 0 0 0 .316-.388c.13-.193.219-.41.264-.638c.018-.09.027-.187.051-.499l.008-.101c.051-.642.088-1.106.23-1.51a3.26 3.26 0 0 1 1.99-1.99c.404-.142.868-.179 1.51-.23l.101-.008a5 5 0 0 0 .499-.051c.228-.045.445-.135.638-.264c.075-.051.15-.113.388-.316l.078-.066c.49-.418.844-.72 1.23-.905m2.163 1.358a1.76 1.76 0 0 0-1.514 0c-.185.088-.38.247-.981.758l-.03.025c-.197.168-.34.291-.497.396c-.359.24-.761.407-1.185.49c-.185.037-.373.052-.632.073l-.038.003c-.787.063-1.036.089-1.23.157c-.5.177-.894.57-1.07 1.071c-.07.194-.095.443-.158 1.23l-.003.038c-.02.259-.036.447-.072.632c-.084.424-.25.826-.49 1.185c-.106.157-.229.3-.397.498l-.025.029c-.511.6-.67.796-.758.98a1.76 1.76 0 0 0 0 1.515c.088.185.247.38.758.981l.025.03c.168.197.291.34.396.497c.24.359.407.761.49 1.185c.037.185.052.373.073.632l.003.038c.063.787.089 1.036.157 1.23c.177.5.57.894 1.071 1.07c.194.07.443.095 1.23.158l.038.003c.259.02.447.036.632.072c.424.084.826.25 1.185.49c.157.106.3.229.498.397l.029.025c.6.511.796.67.98.758a1.76 1.76 0 0 0 1.515 0c.185-.088.38-.247.981-.758l.03-.025c.197-.168.34-.291.497-.396c.359-.24.761-.407 1.185-.49a6 6 0 0 1 .632-.073l.038-.003c.787-.063 1.036-.089 1.23-.157c.5-.177.894-.57 1.07-1.071c.07-.194.095-.444.158-1.23l.003-.038a6 6 0 0 1 .072-.633c.084-.423.25-.825.49-1.184c.106-.157.229-.3.397-.498l.025-.029c.511-.6.67-.796.758-.98a1.76 1.76 0 0 0 0-1.515c-.088-.185-.247-.38-.758-.981l-.025-.03c-.168-.197-.291-.34-.396-.497a3.3 3.3 0 0 1-.49-1.185a6 6 0 0 1-.073-.632l-.003-.038c-.063-.787-.089-1.036-.157-1.23c-.177-.5-.57-.894-1.071-1.07c-.194-.07-.444-.095-1.23-.158l-.038-.003a6 6 0 0 1-.633-.072a3.3 3.3 0 0 1-1.184-.49c-.157-.106-.3-.229-.498-.397l-.029-.025c-.6-.511-.796-.67-.98-.758m3.287 5.282a.75.75 0 0 1 0 1.065l-5.017 5.017a.753.753 0 0 1-1.064 0l-2.007-2.007A.753.753 0 1 1 9.02 11.97l1.475 1.474L14.98 8.96a.753.753 0 0 1 1.064 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarVerifiedCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrame2BoldIcon],svg[solar-video-frame-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 2.031A1 1 0 0 0 11 2H7.75v4.25h3.5zm1.5 4.975V4h3.5v4.25h-3.5zm-1.5.744H2V14q-.001.677.004 1.25h9.246zm1.5 8.256V9.75H22V16q.001.677-.004 1.25H12.75zm-1.5.744h-3.5V20l.917.001h2.583zm1.5 5.219A1 1 0 0 0 13 22h3.25v-3.25h-3.5zM6.25 2.023c-1.61.055-2.588.239-3.274.856c-.75.675-.924 1.666-.964 3.371H6.25zm11.5 6.227V4.023c1.61.055 2.588.239 3.274.856c.75.675.924 1.666.964 3.371zm4.19 10.5h-4.19v3.227c1.61-.055 2.588-.239 3.274-.856c.59-.53.823-1.256.915-2.37M6.25 16.75v3.227c-1.61-.055-2.588-.239-3.274-.856c-.59-.53-.823-1.256-.915-2.37z"></svg:path>`,
})
export class SolarVideoFrame2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrame2BoldDuotoneIcon],svg[solar-video-frame-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 2.031A1 1 0 0 0 11 2H7.75v4.25h3.5zm0 5.719H2V14q-.001.677.004 1.25h9.246zm0 9h-3.5V20l.917.001h2.583zm-5-14.727c-1.61.055-2.588.239-3.274.856c-.75.675-.924 1.666-.964 3.371H6.25zm0 14.727v3.227c-1.61-.055-2.588-.239-3.274-.856c-.59-.53-.823-1.256-.915-2.37z"></svg:path><svg:path fill="currentColor" d="M12.75 7.006V4h3.5v4.25h-3.5zm0 9V9.75H22V16q.001.677-.004 1.25H12.75zm0 5.963A1 1 0 0 0 13 22h3.25v-3.25h-3.5zm5-13.719V4.023c1.61.055 2.588.239 3.274.856c.75.675.924 1.666.964 3.371zm4.19 10.5h-4.19v3.227c1.61-.055 2.588-.239 3.274-.856c.59-.53.823-1.256.915-2.37" opacity=".5"></svg:path>`,
})
export class SolarVideoFrame2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrame2BrokenIcon],svg[solar-video-frame-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 14.5a.75.75 0 0 0-1.5 0zm.226-11.621l.502.557zm0 16.242l.502-.557zM6.25 20a.75.75 0 0 0 1.5 0zm1.5-18a.75.75 0 1 0-1.5 0zM7 7v.75zm-5-.75a.75.75 0 0 0 0 1.5zM12 20v.75h.75V20zM2 15.25a.75.75 0 0 0 0 1.5zm20.75-.75a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zm-.226-5.621l-.502.557zm0 16.242l-.502-.557zM16.25 22a.75.75 0 0 0 1.5 0zm1.5-18a.75.75 0 0 0-1.5 0zM17 9v.75zm-5-5v-.75h-.75V4zm10 5.75a.75.75 0 0 0 0-1.5zm0 9a.75.75 0 0 0 0-1.5zM12 3h.75zM1.25 10.5a.75.75 0 0 0 1.5 0zM2.75 8q0-.533.002-.995l-1.5-.01Q1.249 7.468 1.25 8zm.002-.995c.007-1.094.038-1.863.157-2.443c.113-.553.293-.877.569-1.126L2.475 2.321c-.578.52-.878 1.169-1.036 1.94c-.152.745-.18 1.653-.187 2.734zM8.667 1.25q-.917-.002-1.677.007l.02 1.5c.495-.007 1.042-.007 1.657-.007zm-1.677.007c-1.035.013-1.904.054-2.625.194c-.737.143-1.366.398-1.89.87l1.003 1.115c.262-.235.61-.403 1.173-.512c.578-.113 1.328-.154 2.359-.168zM8.667 19.25c-.615 0-1.162 0-1.657-.006l-.02 1.5q.76.008 1.677.006zm-1.657-.006c-1.031-.014-1.781-.055-2.359-.168c-.562-.109-.911-.277-1.173-.512l-1.003 1.115c.524.472 1.153.727 1.89.87c.721.14 1.59.18 2.625.194zM1.25 14.5c0 .767 0 .937.02 1.525l1.499-.05A34 34 0 0 1 2.75 14.5zm.02 1.525c.052 1.553.237 2.783 1.205 3.654l1.003-1.115c-.457-.412-.657-1.035-.71-2.59zM6.25 16v3.994h1.5V16zm0 3.994V20h1.5v-.006zM6.25 2v.007h1.5V2zm0 .007V7h1.5V2.007zm5 .993v4h1.5V3zM12 6.25H7v1.5h5zm-5 0H2.002v1.5H7zm-4.998 0H2v1.5h.002zM11.25 7v9h1.5V7zm0 9v4h1.5v-4zm.75-.75H7v1.5h5zm-5 0H2.02v1.5H7zm-4.98 0H2v1.5h.02zm9.98 4H8.667v1.5H12zM8.667 2.75H11v-1.5H8.667zM22.75 10.5c0-.354 0-1.19-.002-1.505l-1.5.01c.002.309.002 1.138.002 1.495zm-.002-1.505c-.007-1.08-.035-1.989-.187-2.733c-.158-.772-.458-1.42-1.036-1.94l-1.003 1.114c.276.249.456.573.57 1.126c.118.58.15 1.349.156 2.443zM15.333 4.75c.614 0 1.162 0 1.657.006l.02-1.5q-.76-.007-1.677-.006zm1.657.006c1.031.014 1.781.055 2.359.168c.562.109.911.277 1.173.512l1.003-1.115c-.524-.472-1.153-.727-1.89-.87c-.721-.14-1.59-.18-2.625-.194zM15.333 22.75q.917.002 1.677-.007l-.02-1.5c-.494.007-1.042.007-1.657.007zm1.677-.007c1.035-.013 1.904-.054 2.625-.194c.737-.143 1.366-.398 1.89-.87l-1.003-1.115c-.262.235-.61.403-1.173.512c-.578.113-1.328.154-2.359.168zm4.24-8.243c0 .774 0 2.916-.019 3.475l1.5.05c.02-.591.019-2.771.019-3.525zm-.019 3.475c-.052 1.554-.252 2.177-.709 2.589l1.003 1.115c.969-.871 1.153-2.1 1.205-3.654zM16.25 18v3.994h1.5V18zm0 3.994V22h1.5v-.006zM16.25 4v.007h1.5V4zm0 .007V9h1.5V4.007zm-5-.007v5h1.5V4zM12 9.75h5v-1.5h-5zm5 0h4.998v-1.5H17zm4.998 0H22v-1.5h-.002zM11.25 9v9h1.5V9zm0 9v3h1.5v-3zm.75.75h5v-1.5h-5zm5 0h4.98v-1.5H17zm4.98 0H22v-1.5h-.02zm-8.98 4h2.333v-1.5H13zm2.333-19.5H12v1.5h3.333zM11.25 21c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 0 1-.25-.25zm1.5-18A1.75 1.75 0 0 0 11 1.25v1.5a.25.25 0 0 1 .25.25zm-10 7.5V8h-1.5v2.5z"></svg:path>`,
})
export class SolarVideoFrame2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrame2LineDuotoneIcon],svg[solar-video-frame-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.976 2.879l.502.557zm0 16.242l.502-.557zM6.25 20a.75.75 0 0 0 1.5 0zm1.5-18a.75.75 0 1 0-1.5 0zM2 6.25a.75.75 0 0 0 0 1.5zm0 9a.75.75 0 0 0 0 1.5zM21.024 4.879l-.502.557zm0 16.242l-.502-.557zM16.25 22a.75.75 0 0 0 1.5 0zm1.5-18a.75.75 0 0 0-1.5 0zM22 9.75a.75.75 0 0 0 0-1.5zm0 9a.75.75 0 0 0 0-1.5zM2.75 14V8h-1.5v6zm0-6q0-.533.002-.995l-1.5-.01Q1.249 7.468 1.25 8zm.002-.995c.007-1.094.038-1.863.157-2.443c.113-.553.293-.877.569-1.126L2.475 2.321c-.578.52-.878 1.169-1.036 1.94c-.152.745-.18 1.653-.187 2.734zM8.667 1.25q-.917-.002-1.677.007l.02 1.5c.495-.007 1.042-.007 1.657-.007zm-1.677.007c-1.035.013-1.904.054-2.625.194c-.737.143-1.366.398-1.89.87l1.003 1.115c.262-.235.61-.403 1.173-.512c.578-.113 1.328-.154 2.359-.168zM8.667 19.25c-.615 0-1.162 0-1.657-.006l-.02 1.5q.76.008 1.677.006zm-1.657-.006c-1.031-.014-1.781-.055-2.359-.168c-.562-.109-.911-.277-1.173-.512l-1.003 1.115c.524.472 1.153.727 1.89.87c.721.14 1.59.18 2.625.194zM1.25 14c0 .76 0 1.435.02 2.025l1.499-.05A62 62 0 0 1 2.75 14zm.02 2.025c.052 1.553.237 2.783 1.205 3.654l1.003-1.115c-.457-.412-.657-1.035-.71-2.59zm4.98 3.969V20h1.5v-.006zM6.25 2v.007h1.5V2zM2.002 6.25H2v1.5h.002zm.017 9H2v1.5h.02zm8.981 4H8.667v1.5H11zM8.667 2.75H11v-1.5H8.667zM22.75 16v-6h-1.5v6zm0-6q0-.532-.002-1.005l-1.5.01q.002.464.002.995zm-.002-1.005c-.007-1.08-.035-1.989-.187-2.733c-.158-.772-.458-1.42-1.036-1.94l-1.003 1.114c.276.249.456.573.57 1.126c.118.58.15 1.349.156 2.443zM15.333 4.75c.614 0 1.162 0 1.657.006l.02-1.5q-.76-.007-1.677-.006zm1.657.006c1.031.014 1.781.055 2.359.168c.562.109.911.277 1.173.512l1.003-1.115c-.524-.472-1.153-.727-1.89-.87c-.721-.14-1.59-.18-2.625-.194zM15.333 22.75q.917.002 1.677-.007l-.02-1.5c-.494.007-1.042.007-1.657.007zm1.677-.007c1.035-.013 1.904-.054 2.625-.194c.737-.143 1.366-.398 1.89-.87l-1.003-1.115c-.262.235-.61.403-1.173.512c-.578.113-1.328.154-2.359.168zM21.25 16c0 .768 0 1.415-.019 1.975l1.5.05c.02-.59.019-1.265.019-2.025zm-.019 1.975c-.052 1.554-.252 2.177-.709 2.589l1.003 1.115c.969-.871 1.153-2.1 1.205-3.654zm-4.981 4.018V22h1.5v-.006zM16.25 4v.007h1.5V4zm5.748 5.75H22v-1.5h-.002zm-.017 9H22v-1.5h-.02zm-8.981 4h2.333v-1.5H13zm2.333-19.5H13v1.5h2.333zM11.25 21c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 0 1-.25-.25zm1.5-18A1.75 1.75 0 0 0 11 1.25v1.5a.25.25 0 0 1 .25.25zm.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75zm-2 17.5a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 11 19.25z"></svg:path><svg:path fill="currentColor" d="M2.002 6.25a.75.75 0 1 0 0 1.5zM7.75 2.007a.75.75 0 1 0-1.5 0zm-1.5 17.987a.75.75 0 0 0 1.5 0zM2.02 15.25a.75.75 0 0 0 0 1.5zM7 7v.75zm4.25 13a.75.75 0 0 0 1.5 0zM21.998 9.75a.75.75 0 0 0 0-1.5zM17.75 4.007a.75.75 0 0 0-1.5 0zm-1.5 17.987a.75.75 0 0 0 1.5 0zm5.73-3.244a.75.75 0 0 0 0-1.5zM17 9v.75zm-5 0v-.75h-.75V9zm0 9h-.75v.75H12zm.75-15a.75.75 0 0 0-1.5 0zm-6.5 13v3.994h1.5V16zm0-13.993V7h1.5V2.007zm5 .993v4h1.5V3zM12 6.25H7v1.5h5zm-5 0H2.002v1.5H7zm4.25.75v9h1.5V7zm0 9v4h1.5v-4zm.75-.75H7v1.5h5zm-5 0H2.02v1.5H7zM16.25 18v3.994h1.5V18zm0-13.993V9h1.5V4.007zM12 9.75h5v-1.5h-5zm5 0h4.998v-1.5H17zM11.25 9v9h1.5V9zm.75 9.75h5v-1.5h-5zm5 0h4.98v-1.5H17z" opacity=".5"></svg:path>`,
})
export class SolarVideoFrame2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrame2LinearIcon],svg[solar-video-frame-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.976 2.879l.502.557zm0 16.242l.502-.557zM6.25 20a.75.75 0 0 0 1.5 0zm1.5-18a.75.75 0 1 0-1.5 0zM7 7v.75zm-5-.75a.75.75 0 0 0 0 1.5zM12 20v.75h.75V20zM2 15.25a.75.75 0 0 0 0 1.5zM21.024 4.879l-.502.557zm0 16.242l-.502-.557zM16.25 22a.75.75 0 0 0 1.5 0zm1.5-18a.75.75 0 0 0-1.5 0zM17 9v.75zm-5-5v-.75h-.75V4zm10 5.75a.75.75 0 0 0 0-1.5zm0 9a.75.75 0 0 0 0-1.5zM12 3h.75zM2.75 14V8h-1.5v6zm0-6q0-.533.002-.995l-1.5-.01Q1.249 7.468 1.25 8zm.002-.995c.007-1.094.038-1.863.157-2.443c.113-.553.293-.877.569-1.126L2.475 2.321c-.578.52-.878 1.169-1.036 1.94c-.152.745-.18 1.653-.187 2.734zM8.667 1.25q-.917-.002-1.677.007l.02 1.5c.495-.007 1.042-.007 1.657-.007zm-1.677.007c-1.035.013-1.904.054-2.625.194c-.737.143-1.366.398-1.89.87l1.003 1.115c.262-.235.61-.403 1.173-.512c.578-.113 1.328-.154 2.359-.168zM8.667 19.25c-.615 0-1.162 0-1.657-.006l-.02 1.5q.76.008 1.677.006zm-1.657-.006c-1.031-.014-1.781-.055-2.359-.168c-.562-.109-.911-.277-1.173-.512l-1.003 1.115c.524.472 1.153.727 1.89.87c.721.14 1.59.18 2.625.194zM1.25 14c0 .76 0 1.435.02 2.025l1.499-.05A62 62 0 0 1 2.75 14zm.02 2.025c.052 1.553.237 2.783 1.205 3.654l1.003-1.115c-.457-.412-.657-1.035-.71-2.59zM6.25 16v3.994h1.5V16zm0 3.994V20h1.5v-.006zM6.25 2v.007h1.5V2zm0 .007V7h1.5V2.007zm5 .993v4h1.5V3zM12 6.25H7v1.5h5zm-5 0H2.002v1.5H7zm-4.998 0H2v1.5h.002zM11.25 7v9h1.5V7zm0 9v4h1.5v-4zm.75-.75H7v1.5h5zm-5 0H2.02v1.5H7zm-4.98 0H2v1.5h.02zm9.98 4H8.667v1.5H12zM8.667 2.75H11v-1.5H8.667zM22.75 16v-6h-1.5v6zm0-6q0-.532-.002-1.005l-1.5.01q.002.464.002.995zm-.002-1.005c-.007-1.08-.035-1.989-.187-2.733c-.158-.772-.458-1.42-1.036-1.94l-1.003 1.114c.276.249.456.573.57 1.126c.118.58.15 1.349.156 2.443zM15.333 4.75c.614 0 1.162 0 1.657.006l.02-1.5q-.76-.007-1.677-.006zm1.657.006c1.031.014 1.781.055 2.359.168c.562.109.911.277 1.173.512l1.003-1.115c-.524-.472-1.153-.727-1.89-.87c-.721-.14-1.59-.18-2.625-.194zM15.333 22.75q.917.002 1.677-.007l-.02-1.5c-.494.007-1.042.007-1.657.007zm1.677-.007c1.035-.013 1.904-.054 2.625-.194c.737-.143 1.366-.398 1.89-.87l-1.003-1.115c-.262.235-.61.403-1.173.512c-.578.113-1.328.154-2.359.168zM21.25 16c0 .768 0 1.415-.019 1.975l1.5.05c.02-.59.019-1.265.019-2.025zm-.019 1.975c-.052 1.554-.252 2.177-.709 2.589l1.003 1.115c.969-.871 1.153-2.1 1.205-3.654zM16.25 18v3.994h1.5V18zm0 3.994V22h1.5v-.006zM16.25 4v.007h1.5V4zm0 .007V9h1.5V4.007zm-5-.007v5h1.5V4zM12 9.75h5v-1.5h-5zm5 0h4.998v-1.5H17zm4.998 0H22v-1.5h-.002zM11.25 9v9h1.5V9zm0 9v3h1.5v-3zm.75.75h5v-1.5h-5zm5 0h4.98v-1.5H17zm4.98 0H22v-1.5h-.02zm-8.98 4h2.333v-1.5H13zm2.333-19.5H12v1.5h3.333zM11.25 21c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 0 1-.25-.25zm1.5-18A1.75 1.75 0 0 0 11 1.25v1.5a.25.25 0 0 1 .25.25z"></svg:path>`,
})
export class SolarVideoFrame2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrame2OutlineIcon],svg[solar-video-frame-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.89 1.258c-.991.015-1.827.058-2.525.193c-.737.143-1.366.398-1.89.87c-.578.52-.878 1.169-1.036 1.94c-.15.733-.18 1.623-.187 2.68a1 1 0 0 0 0 .109q-.002.448-.002.949v6.011c0 .683 0 1.297.014 1.842a.75.75 0 0 0 .012.345c.06 1.472.266 2.643 1.199 3.482c.524.472 1.153.727 1.89.87c.698.136 1.534.178 2.525.193a.8.8 0 0 0 .2.003q.718.006 1.573.005h2.587V21c0 .966.784 1.75 1.75 1.75h2.337q.855.001 1.573-.005a.8.8 0 0 0 .2-.003c.991-.015 1.827-.058 2.525-.193c.737-.143 1.366-.398 1.89-.87c.933-.84 1.139-2.01 1.199-3.482a.75.75 0 0 0 .011-.344c.015-.546.015-1.16.015-1.843V9.998q0-.5-.002-.948a1 1 0 0 0 0-.11c-.008-1.056-.038-1.946-.187-2.678c-.158-.772-.458-1.42-1.036-1.94c-.524-.473-1.153-.728-1.89-.87c-.698-.136-1.534-.18-2.525-.194a.8.8 0 0 0-.2-.003q-.718-.006-1.573-.005H12.75V3A1.75 1.75 0 0 0 11 1.25H8.663q-.855-.001-1.573.005a.8.8 0 0 0-.2.003m5.86 3.492v3.5h3.5v-3.5zM11.25 3a.25.25 0 0 0-.25-.25H8.667l-.917.001V6.25h3.5zm0 4.75v7.5H2.754c-.004-.379-.004-.793-.004-1.25V7.75zm-8.488-1.5H6.25V2.774c-.655.023-1.174.067-1.599.15c-.562.109-.911.277-1.173.512c-.276.249-.456.573-.57 1.126c-.088.437-.128.98-.146 1.688m.052 10.5H6.25v2.476c-.655-.023-1.174-.067-1.599-.15c-.562-.109-.911-.277-1.173-.512c-.372-.335-.574-.81-.664-1.814m8.436 0v2.5h-3.5v-2.5zm6.5-11.976V8.25h3.488c-.018-.708-.058-1.251-.147-1.688c-.113-.553-.293-.877-.569-1.126c-.262-.235-.61-.403-1.173-.512c-.425-.083-.944-.127-1.599-.15m3.5 4.976h-8.5v7.5h8.496c.004-.379.004-.793.004-1.25zm-5 9h-3.5V21c0 .138.112.25.25.25h3.25zm4.936 0H17.75v2.476c.655-.023 1.174-.067 1.599-.15c.562-.109.911-.277 1.173-.512c.372-.335.574-.81.664-1.814" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideoFrame2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameBoldIcon],svg[solar-video-frame-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 2.222c-1.223.194-2.102.558-2.786 1.242c-.684.685-1.048 1.563-1.243 2.786H6.25zM2.069 7.75C2.01 8.731 2 9.884 2 11.25h4.25v-3.5zm-.069 5c.001 1.366.01 2.519.068 3.5H6.25v-3.5zm.221 5c.195 1.223.56 2.102 1.243 2.785c.684.685 1.563 1.05 2.786 1.243V17.75zm5.529 4.181C8.906 22 10.3 22 12 22s3.094 0 4.25-.069V12.75h-8.5zm10-.153c1.223-.194 2.101-.558 2.785-1.242s1.049-1.563 1.243-2.786H17.75zm4.181-5.528c.058-.981.067-2.134.069-3.5h-4.25v3.5zm.069-5c-.002-1.366-.01-2.519-.069-3.5H17.75v3.5zm-.222-5c-.194-1.223-.559-2.101-1.243-2.786c-.684-.684-1.562-1.048-2.785-1.242V6.25zM16.25 2.069C15.094 2 13.7 2 12 2s-3.094 0-4.25.069v9.181h8.5z"></svg:path>`,
})
export class SolarVideoFrameBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameBoldDuotoneIcon],svg[solar-video-frame-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 2.222c-1.223.194-2.102.558-2.786 1.243c-.684.684-1.048 1.562-1.243 2.785H6.25zM2.069 7.75C2.01 8.731 2 9.884 2 11.25h4.25v-3.5zm-.069 5c.001 1.366.01 2.519.068 3.5H6.25v-3.5zm.221 5c.195 1.223.56 2.102 1.243 2.786c.684.684 1.563 1.048 2.786 1.242V17.75zm15.529 4.028c1.223-.194 2.101-.558 2.785-1.242s1.049-1.563 1.243-2.786H17.75zm4.181-5.528c.058-.981.067-2.134.069-3.5h-4.25v3.5zm.069-5c-.002-1.366-.01-2.519-.069-3.5H17.75v3.5zm-.222-5c-.194-1.223-.559-2.101-1.243-2.785s-1.562-1.05-2.785-1.243V6.25z"></svg:path><svg:path fill="currentColor" d="M7.75 21.931C8.906 22 10.3 22 12 22s3.094 0 4.25-.069V12.75h-8.5zm8.5-19.862C15.094 2 13.7 2 12 2s-3.094 0-4.25.069v9.181h8.5z" opacity=".5"></svg:path>`,
})
export class SolarVideoFrameBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameBrokenIcon],svg[solar-video-frame-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 2.5v19M7 2.5v19"></svg:path><svg:path fill="currentColor" d="M2.5 6.25a.75.75 0 0 0 0 1.5zM7 7.75a.75.75 0 0 0 0-1.5zm10-1.5a.75.75 0 0 0 0 1.5zM2.5 7.75H7v-1.5H2.5zm14.5 0h5v-1.5h-5zm4.5 10a.75.75 0 0 0 0-1.5zm-4.5-1.5a.75.75 0 0 0 0 1.5zm-10 1.5a.75.75 0 0 0 0-1.5zm10 0h4.5v-1.5H17zm-15 0h5v-1.5H2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 12h20M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.817.817 1.178 1.91 1.338 3.536M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.816-.816-1.177-1.91-1.337-3.535"></svg:path></svg:g>`,
})
export class SolarVideoFrameBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameCut2BoldIcon],svg[solar-video-frame-cut-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.138 2h-2.276a.5.5 0 0 0-.435.748L11.143 4H7.75v16h3.393l-.716 1.252a.5.5 0 0 0 .435.748h2.276a.5.5 0 0 0 .434-.748L12.858 20h3.393V4h-3.393l.716-1.252A.5.5 0 0 0 13.138 2m-.28 18l-.424-.74a.5.5 0 0 0-.868 0l-.423.74zm0-16l-.424.74a.5.5 0 0 1-.868 0L11.143 4zm-.108 3.5a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm0 4a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm0 4a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM6.25 4.011c-1.705.036-2.696.193-3.371.868S2.047 6.545 2.01 8.25h4.24zM2 9.75v4.5h4.25v-4.5zm.879 9.371c-.675-.675-.832-1.666-.868-3.371H6.25v4.24c-1.705-.037-2.696-.194-3.371-.869M17.75 8.25V4.011c1.705.036 2.696.193 3.371.868s.832 1.666.868 3.371zM22 9.75h-4.25v4.5H22zm-4.25 6h4.239c-.036 1.705-.193 2.696-.868 3.371s-1.666.832-3.371.868z" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideoFrameCut2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameCut2BoldDuotoneIcon],svg[solar-video-frame-cut-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 4v16h8.5V4z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.862 2h2.276a.5.5 0 0 1 .434.748L12.858 4h-1.714l-.716-1.252A.5.5 0 0 1 10.862 2m.28 18l-.715 1.252a.5.5 0 0 0 .435.748h2.276a.5.5 0 0 0 .434-.748L12.858 20zM2.88 4.879c.675-.675 1.666-.832 3.371-.868V8.25H2.01c.037-1.705.194-2.696.869-3.371M2 14.25v-4.5h4.25v4.5zm.01 1.5c.037 1.705.194 2.696.869 3.371s1.666.832 3.371.868V15.75zM17.75 4.011V8.25h4.239c-.036-1.705-.193-2.696-.868-3.371s-1.666-.832-3.371-.868m0 5.739H22v4.5h-4.25zm4.239 6H17.75v4.24c1.705-.037 2.696-.194 3.371-.869s.832-1.666.868-3.371" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m12.434 4.74l.423-.74h-1.714l.423.74a.5.5 0 0 0 .868 0M12 6.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m0 4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m0 4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m.857 5.25l-.423-.74a.5.5 0 0 0-.868 0l-.423.74z"></svg:path>`,
})
export class SolarVideoFrameCut2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameCut2BrokenIcon],svg[solar-video-frame-cut-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 10c0-2.828 0-4.243-.879-5.121C20.243 4 18.828 4 16 4h-.5M22 14c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20h-.5m-7-16H8c-2.828 0-4.243 0-5.121.879C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h.5M17 4v16M7 4v16M2.5 9H7m14.5 0H17M2.5 15H7m14.5 0H17M13.138 2h-2.276a.5.5 0 0 0-.434.748l1.138 1.992a.5.5 0 0 0 .868 0l1.139-1.992A.5.5 0 0 0 13.138 2Zm0 20h-2.276a.5.5 0 0 1-.434-.748l1.138-1.992a.5.5 0 0 1 .868 0l1.139 1.992a.5.5 0 0 1-.435.748ZM12 11.5v1m0-5v1m0 7v1"></svg:path>`,
})
export class SolarVideoFrameCut2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameCut2LineDuotoneIcon],svg[solar-video-frame-cut-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8.5 4H8c-2.828 0-4.243 0-5.121.879C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h.5m7-16h.5c2.828 0 4.243 0 5.121.879C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20h-.5"></svg:path><svg:path d="M17 4v16M7 4v16M2.5 9H7m10 0h4.5m-19 6H7m10 0h4.5M13.138 2h-2.276a.5.5 0 0 0-.434.748l1.138 1.992a.5.5 0 0 0 .868 0l1.139-1.992A.5.5 0 0 0 13.138 2Zm0 20h-2.276a.5.5 0 0 1-.434-.748l1.138-1.992a.5.5 0 0 1 .868 0l1.139 1.992a.5.5 0 0 1-.435.748Z" opacity=".5"></svg:path><svg:path d="M12 11.5v1m0-5v1m0 7v1"></svg:path></svg:g>`,
})
export class SolarVideoFrameCut2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameCut2LinearIcon],svg[solar-video-frame-cut-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.5 4H8c-2.828 0-4.243 0-5.121.879C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h.5m7-16h.5c2.828 0 4.243 0 5.121.879C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20h-.5M17 4v16M7 4v16M2.5 9H7m14.5 0H17M2.5 15H7m14.5 0H17M13.138 2h-2.276a.5.5 0 0 0-.434.748l1.138 1.992a.5.5 0 0 0 .868 0l1.139-1.992A.5.5 0 0 0 13.138 2Zm0 20h-2.276a.5.5 0 0 1-.434-.748l1.138-1.992a.5.5 0 0 1 .868 0l1.139 1.992a.5.5 0 0 1-.435.748ZM12 11.5v1m0-5v1m0 7v1"></svg:path>`,
})
export class SolarVideoFrameCut2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameCut2OutlineIcon],svg[solar-video-frame-cut-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.776 3.12a1.25 1.25 0 0 1 1.086-1.87h2.276a1.25 1.25 0 0 1 1.086 1.87l-1.139 1.992c-.48.84-1.69.84-2.17 0zm1.516-.37L12 3.988l.708-1.238zm-3.347.5H8.5a.75.75 0 0 1 0 1.5h-.75v14.5h.75a.75.75 0 0 1 0 1.5h-.555l-.899-.001a1 1 0 0 1-.1 0c-.918-.007-1.693-.029-2.338-.115c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-4.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.645-.087 1.42-.11 2.338-.115a1 1 0 0 1 .1 0q.429-.002.9-.002M6.25 4.761c-.569.012-1.04.038-1.442.092c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4c-.054.4-.08.872-.092 1.441H6.25zm0 4.989h-3.5v4.5h3.5zm0 6H2.761c.012.569.038 1.04.092 1.442c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.4.054.872.08 1.441.092zm10-11h-.75a.75.75 0 0 1 0-1.5h.555l1 .002c.917.006 1.692.028 2.337.115c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v4.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.645.086-1.42.108-2.338.114a1 1 0 0 1-.1 0q-.429.002-.9.002H15.5a.75.75 0 0 1 0-1.5h.75zm1.5.011V8.25h3.489a13 13 0 0 0-.092-1.442c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.4-.054-.872-.08-1.441-.092m3.5 4.989h-3.5v4.5h3.5zm-.011 6H17.75v3.489c.569-.012 1.04-.038 1.442-.092c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.054-.4.08-.872.092-1.441M12 6.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m0 4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m0 4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m-2.224 6.13l1.139-1.992a1.25 1.25 0 0 1 2.17 0l1.139 1.992a1.25 1.25 0 0 1-1.086 1.87h-2.276a1.25 1.25 0 0 1-1.086-1.87M12 20.012l-.708 1.238h1.416z" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideoFrameCut2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameCutBoldIcon],svg[solar-video-frame-cut-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 2a.75.75 0 0 0-1.5 0v1.003H9.5a41 41 0 0 0-1.75.043v17.907a40 40 0 0 0 1.75.043h1.75V22a.75.75 0 0 0 1.5 0v-1.004h1.75a40 40 0 0 0 1.75-.043V3.046a40 40 0 0 0-1.75-.043h-1.75zm0 18.996v-.663a.75.75 0 0 0-1.5 0v.663zm0-17.993v.664a.75.75 0 0 1-1.5 0v-.664zm0 3.997a.75.75 0 0 0-1.5 0v3.333a.75.75 0 0 0 1.5 0zm0 6.667a.75.75 0 0 0-1.5 0V17a.75.75 0 0 0 1.5 0zM6.25 3.202c-.9.161-1.56.45-2.078.97c-.772.77-1.035 1.852-1.125 3.578H6.25zM3.006 9.25Q2.999 10.048 3 11v2q-.002.95.006 1.75H6.25v-5.5zm1.166 10.578c-.772-.771-1.035-1.853-1.125-3.578H6.25v4.547c-.9-.161-1.56-.45-2.078-.969M17.75 7.75V3.202c.9.161 1.56.45 2.078.97c.772.77 1.035 1.852 1.125 3.578zm3.244 1.5H17.75v5.5h3.244q.008-.8.006-1.75v-2q.002-.951-.006-1.75m-3.244 7h3.203c-.09 1.725-.353 2.807-1.125 3.578c-.518.519-1.177.808-2.078.969z" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideoFrameCutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameCutBoldDuotoneIcon],svg[solar-video-frame-cut-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 3.003h5a41 41 0 0 1 1.75.043v17.907a41 41 0 0 1-1.75.043h-5a40 40 0 0 1-1.75-.043V3.046a40 40 0 0 1 1.75-.043" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v1.667a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M11.25 22v-1.667a.75.75 0 0 1 1.5 0V22a.75.75 0 0 1-1.5 0m1.5-15a.75.75 0 0 0-1.5 0v3.333a.75.75 0 0 0 1.5 0zm0 6.667a.75.75 0 0 0-1.5 0V17a.75.75 0 0 0 1.5 0zM6.25 3.202c-.9.161-1.56.45-2.078.97c-.772.77-1.035 1.852-1.125 3.578H6.25zM3.006 9.25Q2.999 10.048 3 11v2q-.002.95.006 1.75H6.25v-5.5zm1.166 10.578c-.772-.771-1.035-1.853-1.125-3.578H6.25v4.547c-.9-.161-1.56-.45-2.078-.969M17.75 7.75V3.202c.9.161 1.56.45 2.078.97c.772.77 1.035 1.852 1.125 3.578zm3.244 1.5H17.75v5.5h3.244q.008-.8.006-1.75v-2q.002-.951-.006-1.75m-3.244 7h3.203c-.09 1.725-.353 2.807-1.125 3.578c-.518.519-1.177.808-2.078.969z"></svg:path>`,
})
export class SolarVideoFrameCutBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameCutBrokenIcon],svg[solar-video-frame-cut-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M17 3.5v17"></svg:path><svg:path stroke-dasharray="3 3" d="M12 2v20"></svg:path><svg:path d="M7 3.5v17m-4-12h4m14 0h-4m-14 7h4m14 0h-4"></svg:path><svg:path stroke-linejoin="round" d="M14.5 3.003c2.794.02 4.324.163 5.328 1.168C20.892 5.234 20.99 6.885 21 10m-6.5 10.996c2.794-.02 4.324-.163 5.328-1.168c1.064-1.063 1.162-2.714 1.171-5.829M9.5 20.996c-2.793-.02-4.323-.163-5.327-1.168C3 18.656 3 16.771 3 13v-2c0-3.773 0-5.658 1.172-6.83C5.176 3.166 6.706 3.023 9.5 3.003"></svg:path></svg:g>`,
})
export class SolarVideoFrameCutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameCutLineDuotoneIcon],svg[solar-video-frame-cut-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.5 3.003c2.794.02 4.324.163 5.328 1.168C21 5.343 21 7.228 21 11v2c0 3.772 0 5.657-1.172 6.829c-1.004 1.005-2.534 1.148-5.328 1.168m-5 0c-2.794-.02-4.324-.163-5.328-1.168C3 18.656 3 16.771 3 13v-2c0-3.773 0-5.658 1.172-6.83C5.176 3.166 6.706 3.023 9.5 3.003"></svg:path><svg:path stroke-dasharray="3 3" d="M12 2v20"></svg:path><svg:path d="M17 4v16M7 4v16M3.5 8.5H7m10 0h3.5m-3.5 7h3.5m-17 0H7" opacity=".5"></svg:path></svg:g>`,
})
export class SolarVideoFrameCutLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameCutLinearIcon],svg[solar-video-frame-cut-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.5 3.003c2.794.02 4.324.163 5.328 1.168C21 5.343 21 7.228 21 11v2c0 3.772 0 5.657-1.172 6.829c-1.004 1.005-2.534 1.148-5.328 1.168m-5 0c-2.794-.02-4.324-.163-5.328-1.168C3 18.656 3 16.771 3 13v-2c0-3.773 0-5.658 1.172-6.83C5.176 3.166 6.706 3.023 9.5 3.003"></svg:path><svg:path d="M17 4v16"></svg:path><svg:path stroke-dasharray="3 3" d="M12 2v20"></svg:path><svg:path d="M7 4v16M3.5 8.5H7m13.5 0H17m-13.5 7H7m13.5 0H17"></svg:path></svg:g>`,
})
export class SolarVideoFrameCutLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameCutOutlineIcon],svg[solar-video-frame-cut-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1.667a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75m0 5a.75.75 0 0 1 .75.75v3.333a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m0 6.667a.75.75 0 0 1 .75.75V17a.75.75 0 0 1-1.5 0v-3.333a.75.75 0 0 1 .75-.75m0 6.666a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-1.667a.75.75 0 0 1 .75-.75M10.25 2.998a.75.75 0 0 1-.745.755c-.678.005-1.267.018-1.782.046A.8.8 0 0 1 7.75 4v16a.8.8 0 0 1-.027.2c.515.03 1.104.042 1.782.047a.75.75 0 0 1-.01 1.5c-1.394-.01-2.538-.05-3.471-.229c-.954-.182-1.743-.52-2.383-1.16c-.748-.748-1.08-1.697-1.238-2.869c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.64-.64 1.429-.977 2.383-1.16c.933-.178 2.077-.217 3.47-.228a.75.75 0 0 1 .756.745m-4 17.036V16.25H3.798q.03.57.092 1.04c.135 1.005.389 1.585.812 2.008c.356.356.82.59 1.549.736M3.757 14.75H6.25v-5.5H3.756q-.007.787-.006 1.75v2q-.002.963.006 1.75m.042-7H6.25V3.966c-.728.146-1.192.38-1.548.736c-.423.423-.677 1.003-.812 2.009q-.062.47-.092 1.039m9.952-4.752a.75.75 0 0 1 .755-.745c1.393.01 2.538.05 3.471.229c.954.182 1.743.52 2.383 1.16c.748.748 1.08 1.697 1.238 2.869c.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.64.64-1.429.977-2.383 1.16c-.933.178-2.077.217-3.47.228a.75.75 0 0 1-.011-1.5a38 38 0 0 0 1.782-.046a.8.8 0 0 1-.027-.201V4q0-.105.027-.2a38 38 0 0 0-1.783-.047a.75.75 0 0 1-.744-.755m4 .968V7.75h2.452a13 13 0 0 0-.092-1.04c-.135-1.005-.389-1.585-.812-2.008c-.356-.356-.82-.59-1.549-.736m2.494 5.284H17.75v5.5h2.494q.008-.787.006-1.75v-2q.002-.963-.006-1.75m-.042 7H17.75v3.784c.728-.146 1.192-.38 1.548-.736c.423-.423.677-1.003.812-2.009q.063-.47.092-1.039" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideoFrameCutOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameLineDuotoneIcon],svg[solar-video-frame-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M17 2.5v19M7 2.5v19M2.5 7H7m10 0h4.5M17 17h4.5m-19 0H7m-5-5h20" opacity=".5"></svg:path></svg:g>`,
})
export class SolarVideoFrameLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameLinearIcon],svg[solar-video-frame-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M17 2.5v19M7 2.5v19M2.5 7H7m14.5 0H17M2.5 17H7m14.5 0H17M2 12h20"></svg:path></svg:g>`,
})
export class SolarVideoFrameLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameOutlineIcon],svg[solar-video-frame-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19M6.25 2.982c-1.065.183-1.742.5-2.255 1.013c-.514.513-.83 1.19-1.013 2.255H6.25zm1.5-.162v8.43h8.5V2.82c-1.126-.07-2.508-.07-4.25-.07s-3.124 0-4.25.07m10 .162V6.25h3.268c-.183-1.065-.5-1.742-1.013-2.255c-.513-.514-1.19-.83-2.255-1.013m3.43 4.768h-3.43v3.5h3.5c-.002-1.395-.011-2.54-.07-3.5m.07 5h-3.5v3.5h3.43c.059-.96.068-2.105.07-3.5m-.232 5H17.75v3.268c1.065-.183 1.742-.5 2.255-1.013c.514-.513.83-1.19 1.013-2.255m-4.768 3.43v-8.43h-8.5v8.43c1.126.07 2.508.07 4.25.07s3.124 0 4.25-.07m-10-.162V17.75H2.982c.183 1.065.5 1.742 1.013 2.255c.513.514 1.19.83 2.255 1.013M2.82 16.25h3.43v-3.5h-3.5c.002 1.395.011 2.54.07 3.5m-.07-5h3.5v-3.5H2.82c-.059.96-.068 2.105-.07 3.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideoFrameOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFramePlayHorizontalBoldIcon],svg[solar-video-frame-play-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 2c-1.366.001-2.519.01-3.5.068V6.25h3.5zm-5 .221c-1.223.195-2.101.56-2.786 1.243c-.684.684-1.048 1.563-1.242 2.786H6.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-1.7 0-3.094.069-4.25H21.93C22 8.906 22 10.3 22 12s0 3.094-.069 4.25H2.07C2 15.094 2 13.7 2 12m10.411-1.596C13.471 11.116 14 11.472 14 12s-.53.884-1.589 1.596c-1.073.721-1.61 1.082-2.01.817C10 14.148 10 13.433 10 12s0-2.148.4-2.413s.938.096 2.011.817" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.778 6.25c-.194-1.223-.558-2.102-1.242-2.786s-1.563-1.048-2.786-1.243V6.25zM12.75 2c1.366.001 2.519.01 3.5.068V6.25h-3.5zm9.028 15.75H17.75v4.028c1.223-.194 2.102-.559 2.785-1.243c.685-.684 1.05-1.562 1.243-2.785m-5.528 0v4.181c-.981.058-2.134.067-3.5.069v-4.25zm-5 4.25v-4.25h-3.5v4.181c.981.058 2.134.067 3.5.069m-5-4.25v4.028c-1.223-.194-2.101-.559-2.786-1.243c-.684-.684-1.048-1.562-1.242-2.785z"></svg:path>`,
})
export class SolarVideoFramePlayHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFramePlayHorizontalBoldDuotoneIcon],svg[solar-video-frame-play-horizontal-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14 12c0-.528-.53-.884-1.589-1.596c-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12s0 2.148.4 2.413s.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12M11.25 2c-1.366.001-2.519.01-3.5.068V6.25h3.5zm-5 .221c-1.223.195-2.101.56-2.785 1.243c-.685.684-1.05 1.563-1.243 2.786H6.25zM21.778 6.25c-.194-1.223-.558-2.102-1.242-2.786s-1.563-1.048-2.786-1.243V6.25zM12.75 2c1.366.001 2.519.01 3.5.068V6.25h-3.5zm9.028 15.75H17.75v4.028c1.223-.194 2.102-.559 2.786-1.243s1.048-1.562 1.242-2.785m-5.528 0v4.181c-.981.058-2.134.067-3.5.069v-4.25zm-5 4.25v-4.25h-3.5v4.181c.981.058 2.134.067 3.5.069m-5-4.25v4.028c-1.223-.194-2.101-.559-2.785-1.243s-1.05-1.562-1.243-2.785z"></svg:path>`,
})
export class SolarVideoFramePlayHorizontalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFramePlayHorizontalBrokenIcon],svg[solar-video-frame-play-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21.5 17h-19m19-10h-19M12 2v5m0 15v-5m5-14.5V7m0 14.5V17M7 2.5V7m0 14.5V17m7-5c0-.528-.53-.884-1.589-1.596c-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12s0 2.148.4 2.413s.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12Z"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.817.817 1.178 1.91 1.338 3.536M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.816-.816-1.177-1.91-1.337-3.535"></svg:path></svg:g>`,
})
export class SolarVideoFramePlayHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFramePlayHorizontalLineDuotoneIcon],svg[solar-video-frame-play-horizontal-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2Z"></svg:path><svg:path stroke-linecap="round" d="M21.5 17h-19m19-10h-19M12 17v5m0-20v5m5-4.5V7m0 10v4.5M7 17v4.5m0-19V7" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M14 12c0-.528-.53-.884-1.589-1.596c-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12s0 2.148.4 2.413s.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12Z"></svg:path></svg:g>`,
})
export class SolarVideoFramePlayHorizontalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFramePlayHorizontalLinearIcon],svg[solar-video-frame-play-horizontal-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2Z"></svg:path><svg:path stroke-linecap="round" d="M21.5 17h-19m19-10h-19M12 2v5m0 15v-5m5-14.5V7m0 14.5V17M7 2.5V7m0 14.5V17m7-5c0-.528-.53-.884-1.589-1.596c-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12s0 2.148.4 2.413s.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12Z"></svg:path></svg:g>`,
})
export class SolarVideoFramePlayHorizontalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFramePlayHorizontalOutlineIcon],svg[solar-video-frame-play-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19M6.25 2.982c-1.065.183-1.742.5-2.255 1.013c-.514.513-.83 1.19-1.013 2.255H6.25zm1.5-.162v3.43h3.5v-3.5c-1.395.002-2.54.011-3.5.07m5-.07v3.5h3.5V2.82c-.96-.059-2.105-.068-3.5-.07m5 .232V6.25h3.268c-.183-1.065-.5-1.742-1.013-2.255c-.513-.514-1.19-.83-2.255-1.013m3.43 4.768H2.82c-.07 1.126-.07 2.508-.07 4.25s0 3.124.07 4.25h18.36c.07-1.126.07-2.508.07-4.25s0-3.124-.07-4.25m-.162 10H17.75v3.268c1.065-.183 1.742-.5 2.255-1.013c.514-.513.83-1.19 1.013-2.255m-4.768 3.43v-3.43h-3.5v3.5c1.395-.002 2.54-.011 3.5-.07m-5 .07v-3.5h-3.5v3.43c.96.059 2.105.068 3.5.07m-5-.232V17.75H2.982c.183 1.065.5 1.742 1.013 2.255c.513.514 1.19.83 2.255 1.013m6.53-11.27l.05.034l.046.031c.49.33.927.623 1.235.907c.334.307.639.714.639 1.28s-.305.973-.639 1.28c-.308.284-.745.578-1.235.907l-.046.031l-.05.034c-.494.332-.938.63-1.312.803c-.392.181-.949.336-1.482-.016c-.49-.324-.624-.866-.68-1.3c-.056-.439-.056-1.016-.056-1.688v-.102c0-.672 0-1.25.056-1.688c.056-.434.19-.976.68-1.3c.533-.352 1.09-.198 1.482-.016c.373.173.818.471 1.311.803m-1.96.55l.018.008c.251.116.595.344 1.155.72c.55.371.89.601 1.102.797a.8.8 0 0 1 .154.177l-.003.007a.8.8 0 0 1-.151.17c-.213.196-.551.426-1.102.796c-.56.377-.904.605-1.155.72l-.019.01a2 2 0 0 1-.025-.154c-.043-.332-.044-.811-.044-1.549s.002-1.217.044-1.55q.012-.094.025-.152" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideoFramePlayHorizontalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFramePlayVerticalBoldIcon],svg[solar-video-frame-play-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c1.7 0 3.094 0 4.25.069V21.93C15.094 22 13.7 22 12 22s-3.094 0-4.25-.069V2.07C8.906 2 10.3 2 12 2m.411 8.404C13.471 11.116 14 11.472 14 12s-.53.884-1.589 1.596c-1.073.721-1.61 1.082-2.01.817C10 14.148 10 13.433 10 12s0-2.148.4-2.413s.938.096 2.011.817" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.25 6.25H2.22c.195-1.223.56-2.101 1.243-2.786c.684-.684 1.563-1.048 2.786-1.242zm15.528 0c-.194-1.223-.559-2.101-1.243-2.786c-.684-.684-1.562-1.048-2.785-1.242V6.25zm.222 5c-.002-1.366-.01-2.519-.069-3.5H17.75v3.5zm-1.465 9.286c-.684.684-1.562 1.048-2.785 1.242V17.75h4.028c-.194 1.223-.559 2.102-1.243 2.785M22 12.75c-.002 1.366-.01 2.519-.069 3.5H17.75v-3.5zm-15.75 5v4.028c-1.223-.194-2.102-.558-2.786-1.242s-1.048-1.563-1.243-2.786zm0-1.5H2.069C2.01 15.269 2 14.116 2 12.75h4.25zm0-5H2c.001-1.366.01-2.519.068-3.5H6.25z"></svg:path>`,
})
export class SolarVideoFramePlayVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFramePlayVerticalBoldDuotoneIcon],svg[solar-video-frame-play-vertical-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14 12c0-.528-.53-.884-1.589-1.596c-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12s0 2.148.4 2.413s.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12M6.25 6.25H2.22c.195-1.223.56-2.101 1.243-2.785c.684-.685 1.563-1.05 2.786-1.243zm15.528 0c-.194-1.223-.559-2.101-1.243-2.785s-1.562-1.05-2.785-1.243V6.25zm.222 5c-.002-1.366-.01-2.519-.069-3.5H17.75v3.5zm-1.465 9.286c-.684.684-1.562 1.048-2.785 1.242V17.75h4.028c-.194 1.223-.559 2.102-1.243 2.786M22 12.75c-.002 1.366-.01 2.519-.069 3.5H17.75v-3.5zm-15.75 5v4.028c-1.223-.194-2.102-.558-2.786-1.242s-1.048-1.563-1.243-2.786zm0-1.5H2.069C2.01 15.269 2 14.116 2 12.75h4.25zm0-5H2c.001-1.366.01-2.519.068-3.5H6.25z"></svg:path>`,
})
export class SolarVideoFramePlayVerticalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFramePlayVerticalBrokenIcon],svg[solar-video-frame-play-vertical-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 2.5v19M7 2.5v19M2 12h5m15 0h-5M2.5 7H7m14.5 0H17"></svg:path><svg:path fill="currentColor" d="M21.5 17.75a.75.75 0 0 0 0-1.5zm-4.5-1.5a.75.75 0 0 0 0 1.5zm-10 1.5a.75.75 0 0 0 0-1.5zm10 0h4.5v-1.5H17zm-15 0h5v-1.5H2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 12c0-.528-.53-.884-1.589-1.596c-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12s0 2.148.4 2.413s.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.817.817 1.178 1.91 1.338 3.536M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.816-.816-1.177-1.91-1.337-3.535"></svg:path></svg:g>`,
})
export class SolarVideoFramePlayVerticalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFramePlayVerticalLineDuotoneIcon],svg[solar-video-frame-play-vertical-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path fill="currentColor" d="M17.75 2.5a.75.75 0 0 0-1.5 0zm-1.5 19a.75.75 0 0 0 1.5 0zm-8.5-19a.75.75 0 0 0-1.5 0zm-1.5 19a.75.75 0 0 0 1.5 0zM17 11.25a.75.75 0 0 0 0 1.5zm5 1.5a.75.75 0 0 0 0-1.5zm-20-1.5a.75.75 0 0 0 0 1.5zm5 1.5a.75.75 0 0 0 0-1.5zm-4.5-6.5a.75.75 0 0 0 0 1.5zM7 7.75a.75.75 0 0 0 0-1.5zm10-1.5a.75.75 0 0 0 0 1.5zm4.5 1.5a.75.75 0 0 0 0-1.5zm-4.5 8.5a.75.75 0 0 0 0 1.5zm4.5 1.5a.75.75 0 0 0 0-1.5zm-19-1.5a.75.75 0 0 0 0 1.5zm4.5 1.5a.75.75 0 0 0 0-1.5zM16.25 2.5v19h1.5v-19zm-10 0v19h1.5v-19zM17 12.75h5v-1.5h-5zm-15 0h5v-1.5H2zm.5-5H7v-1.5H2.5zm14.5 0h4.5v-1.5H17zm0 10h4.5v-1.5H17zm-14.5 0H7v-1.5H2.5z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.411 10.404l.418-.622zm0 3.192l.418.622zm-.418-2.57c.55.371.89.601 1.102.797a.8.8 0 0 1 .15.17l.006.01L13.25 12h1.5c0-.566-.305-.973-.639-1.28c-.317-.293-.773-.596-1.282-.938zm.836 3.192c.509-.342.965-.645 1.282-.938c.334-.307.639-.714.639-1.28h-1.5v-.004l-.004.01a.8.8 0 0 1-.151.171c-.213.196-.551.426-1.102.796zM10.75 12c0-.738.002-1.217.044-1.55c.045-.348.11-.297.02-.238l-.828-1.25c-.49.323-.624.865-.68 1.299c-.057.45-.056 1.045-.056 1.739zm2.08-2.218c-.514-.345-.976-.659-1.362-.837c-.392-.182-.949-.336-1.482.016l.828 1.251c-.133.088-.22-.019.024.094c.251.116.595.344 1.155.72zM9.25 12c0 .694-.001 1.29.056 1.74c.056.433.19.975.68 1.299l.828-1.251c.09.059.025.11-.02-.239c-.043-.332-.044-.811-.044-1.549zm2.743.973c-.56.377-.904.605-1.155.72c-.244.114-.156.007-.024.095l-.828 1.25c.533.353 1.09.198 1.482.017c.386-.178.848-.492 1.361-.837z"></svg:path></svg:g>`,
})
export class SolarVideoFramePlayVerticalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFramePlayVerticalLinearIcon],svg[solar-video-frame-play-vertical-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M17 2.5v19M7 2.5v19M2 12h5m15 0h-5M2.5 7H7m14.5 0H17M2.5 17H7m14.5 0H17m-3-5c0-.528-.53-.884-1.589-1.596c-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12s0 2.148.4 2.413s.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12Z"></svg:path></svg:g>`,
})
export class SolarVideoFramePlayVerticalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFramePlayVerticalOutlineIcon],svg[solar-video-frame-play-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19M6.25 2.982c-1.065.183-1.742.5-2.255 1.013c-.514.513-.83 1.19-1.013 2.255H6.25zm1.5-.162v18.36c1.126.07 2.508.07 4.25.07s3.124 0 4.25-.07V2.82c-1.126-.07-2.508-.07-4.25-.07s-3.124 0-4.25.07m10 .162V6.25h3.268c-.183-1.065-.5-1.742-1.013-2.255c-.513-.514-1.19-.83-2.255-1.013m3.43 4.768h-3.43v3.5h3.5c-.002-1.395-.011-2.54-.07-3.5m.07 5h-3.5v3.5h3.43c.059-.96.068-2.105.07-3.5m-.232 5H17.75v3.268c1.065-.183 1.742-.5 2.255-1.013c.514-.513.83-1.19 1.013-2.255M6.25 21.018V17.75H2.982c.183 1.065.5 1.742 1.013 2.255c.513.514 1.19.83 2.255 1.013M2.82 16.25h3.43v-3.5h-3.5c.002 1.395.011 2.54.07 3.5m-.07-5h3.5v-3.5H2.82c-.059.96-.068 2.105-.07 3.5m10.03-1.502l.05.034l.046.031c.49.33.927.623 1.235.907c.334.307.639.714.639 1.28s-.305.973-.639 1.28c-.308.284-.745.578-1.235.907l-.046.031l-.05.034c-.494.332-.938.63-1.312.803c-.392.181-.949.336-1.482-.016c-.49-.324-.624-.866-.68-1.3c-.056-.439-.056-1.016-.056-1.688v-.102c0-.672 0-1.25.056-1.688c.056-.434.19-.976.68-1.3c.533-.352 1.09-.198 1.482-.016c.373.173.818.471 1.311.803m-1.96.55l.018.008c.251.116.595.344 1.155.72c.55.371.89.601 1.102.797a.8.8 0 0 1 .154.177l-.003.007a.8.8 0 0 1-.151.17c-.213.196-.551.426-1.102.796c-.56.377-.904.605-1.155.72l-.019.01a2 2 0 0 1-.025-.154c-.043-.332-.044-.811-.044-1.549s.002-1.217.044-1.55q.012-.094.025-.152" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideoFramePlayVerticalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameReplaceBoldIcon],svg[solar-video-frame-replace-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 2.002c-1.397.01-2.162.081-2.664.584c-.503.502-.574 1.267-.584 2.664H5.25zM2.002 6.75c.01 1.397.081 2.162.584 2.664c.502.503 1.267.574 2.664.584V6.75zM6.75 10h3.5V2h-3.5zm5-7.998V5.25h3.248c-.01-1.397-.081-2.162-.584-2.664c-.502-.503-1.267-.574-2.664-.584m3.248 4.748H11.75v3.248c1.397-.01 2.162-.081 2.664-.584c.503-.502.574-1.267.584-2.664m-2.248 7.26c-1.086.027-1.725.137-2.164.576c-.503.502-.574 1.267-.584 2.664h2.748zm-2.748 4.74c.01 1.397.081 2.162.584 2.664c.439.44 1.078.55 2.164.577V18.75zM14.25 22h2.5v-8h-2.5zm4-7.99v3.24h2.748c-.01-1.397-.081-2.162-.584-2.664c-.439-.44-1.078-.55-2.164-.577m2.748 4.741H18.25v3.24c1.086-.027 1.725-.137 2.164-.576c.503-.502.574-1.267.584-2.664"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.043 6.767A17 17 0 0 0 18 6.75a.75.75 0 0 1 0-1.5h.025c.445 0 .816 0 1.12.02c.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.084.204.12.464.14.664c.025.229.04.495.05.767c.01.296.015.613.017.914a.75.75 0 0 1 .782 1.237l-1 1a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 .778-1.238a31 31 0 0 0-.017-.86a10 10 0 0 0-.041-.663c-.015-.142-.03-.215-.035-.24q-.004-.018 0-.007a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078M2.47 12.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1-.778 1.238c.002.288.007.584.017.86c.009.256.022.484.041.663a2 2 0 0 0 .035.247c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017a.75.75 0 0 1 0 1.5h-.025c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.084-.203-.12-.464-.14-.664a12 12 0 0 1-.05-.767c-.01-.296-.015-.613-.017-.914a.75.75 0 0 1-.782-1.237z" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideoFrameReplaceBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameReplaceBoldDuotoneIcon],svg[solar-video-frame-replace-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 2.002c-1.397.01-2.162.081-2.664.584c-.503.502-.574 1.267-.584 2.664H5.25zM2.002 6.75c.01 1.397.081 2.162.584 2.664c.502.503 1.267.574 2.664.584V6.75zM6.75 10h3.5V2h-3.5zm5-7.998V5.25h3.248c-.01-1.397-.081-2.162-.584-2.664c-.502-.503-1.267-.574-2.664-.584m3.248 4.748H11.75v3.248c1.397-.01 2.162-.081 2.664-.584c.503-.502.574-1.267.584-2.664"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.47 12.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1-.778 1.238c.002.288.007.584.017.86c.009.256.022.484.041.663a2 2 0 0 0 .035.247c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017a.75.75 0 0 1 0 1.5h-.025c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.084-.203-.12-.464-.14-.664a12 12 0 0 1-.05-.767c-.01-.296-.015-.613-.017-.914a.75.75 0 0 1-.782-1.237z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.043 6.767A17 17 0 0 0 18 6.75a.75.75 0 0 1 0-1.5h.025c.445 0 .816 0 1.12.02c.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.084.204.12.464.14.664c.025.229.04.495.05.767c.01.296.015.613.017.914a.75.75 0 0 1 .782 1.237l-1 1a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 .778-1.238a31 31 0 0 0-.017-.86a10 10 0 0 0-.041-.663c-.015-.142-.03-.215-.035-.24q-.004-.018 0-.007a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078M12.75 14.01c-1.086.027-1.725.137-2.164.576c-.502.502-.574 1.267-.584 2.664h2.748zm-2.748 4.74c.01 1.397.082 2.162.584 2.664c.439.44 1.078.55 2.164.577V18.75zM14.25 22h2.5v-8h-2.5zm4-7.99v3.24H21c-.01-1.397-.082-2.162-.584-2.664c-.44-.44-1.079-.55-2.165-.577m2.748 4.741H18.25v3.24c1.086-.027 1.726-.137 2.165-.576c.502-.502.573-1.267.584-2.664" opacity=".5"></svg:path>`,
})
export class SolarVideoFrameReplaceBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameReplaceBrokenIcon],svg[solar-video-frame-replace-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 6c0 1.886 0 2.828.586 3.414S4.114 10 6 10h5c1.886 0 2.828 0 3.414-.586S15 7.886 15 6s0-2.828-.586-3.414S12.886 2 11 2H6c-1.886 0-2.828 0-3.414.586M21 18c0 1.886 0 2.828-.586 3.414S18.886 22 17 22h-3c-1.886 0-2.828 0-3.414-.586S10 19.886 10 18s0-2.828.586-3.414S12.114 14 14 14h3c1.886 0 2.828 0 3.414.586M6 2.5V10m7.5 4.5V22M11 2.5V10m6.5 4.5V22M2 6h4m9 0h-4m0 12h2.5m7.5 0h-3.5"></svg:path><svg:path stroke-linejoin="round" d="M21 11v-1c0-.932 0-2.398-.152-2.765a2 2 0 0 0-1.083-1.083C19.398 6 18.932 6 18 6m3 5l1-1m-1 1l-1-1M3 13v1c0 .932 0 2.398.152 2.765a2 2 0 0 0 1.083 1.083C4.602 18 5.068 18 6 18m-3-5l-1 1m1-1l1 1"></svg:path></svg:g>`,
})
export class SolarVideoFrameReplaceBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameReplaceLineDuotoneIcon],svg[solar-video-frame-replace-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2h5c1.886 0 2.828 0 3.414.586S15 4.114 15 6s0 2.828-.586 3.414S12.886 10 11 10H6c-1.886 0-2.828 0-3.414-.586S2 7.886 2 6Zm8 12c0-1.886 0-2.828.586-3.414S12.114 14 14 14h3c1.886 0 2.828 0 3.414.586S21 16.114 21 18s0 2.828-.586 3.414S18.886 22 17 22h-3c-1.886 0-2.828 0-3.414-.586S10 19.886 10 18Z"></svg:path><svg:path stroke-linecap="round" d="M6 2.5V10m5-7.5V10M2.5 6H6m5 0h4m-1.5 8.5V22m4-7.5V22M11 18h2.5m4 0H21" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m22 10l-1 1l-1-1"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 11v-1c0-.932 0-2.398-.152-2.765a2 2 0 0 0-1.083-1.083C19.398 6 18.932 6 18 6" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m2 14l1-1l1 1"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 13v1c0 .932 0 2.398.152 2.765a2 2 0 0 0 1.083 1.083C4.602 18 5.068 18 6 18" opacity=".5"></svg:path></svg:g>`,
})
export class SolarVideoFrameReplaceLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameReplaceLinearIcon],svg[solar-video-frame-replace-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2h5c1.886 0 2.828 0 3.414.586S15 4.114 15 6s0 2.828-.586 3.414S12.886 10 11 10H6c-1.886 0-2.828 0-3.414-.586S2 7.886 2 6Zm8 12c0-1.886 0-2.828.586-3.414S12.114 14 14 14h3c1.886 0 2.828 0 3.414.586S21 16.114 21 18s0 2.828-.586 3.414S18.886 22 17 22h-3c-1.886 0-2.828 0-3.414-.586S10 19.886 10 18Z"></svg:path><svg:path stroke-linecap="round" d="M6 2.5V10m7.5 4.5V22M11 2.5V10m6.5 4.5V22M2.5 6H6m9 0h-4m0 12h2.5m7.5 0h-3.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 11v-1c0-.932 0-2.398-.152-2.765a2 2 0 0 0-1.083-1.083C19.398 6 18.932 6 18 6m3 5l1-1m-1 1l-1-1M3 13v1c0 .932 0 2.398.152 2.765a2 2 0 0 0 1.083 1.083C4.602 18 5.068 18 6 18m-3-5l-1 1m1-1l1 1"></svg:path></svg:g>`,
})
export class SolarVideoFrameReplaceLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoFrameReplaceOutlineIcon],svg[solar-video-frame-replace-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.948 1.25h5.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v.104c0 .898 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.725c-.456-.456-.642-1.023-.726-1.65c-.08-.595-.08-1.345-.08-2.243v-.104c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M3.905 2.817c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.046.346-.06.776-.064 1.345H5.25V2.752c-.57.004-1 .018-1.345.065M6.75 2.75v6.5h3.5v-6.5zm5 .002V5.25h2.498c-.004-.57-.018-1-.064-1.345c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.345-.046-.775-.06-1.344-.064m2.498 3.998H11.75v2.498c.57-.004 1-.018 1.345-.065c.461-.062.659-.169.789-.3s.237-.327.3-.788c.046-.346.06-.776.064-1.345M5.25 9.248V6.75H2.752c.004.57.018 1 .065 1.345c.062.461.169.659.3.789s.327.237.788.3c.346.046.776.06 1.345.064m13.793-2.48A17 17 0 0 0 18 6.75a.75.75 0 0 1 0-1.5h.025c.445 0 .816 0 1.12.02c.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.084.204.12.464.14.664c.025.229.04.495.05.767c.01.296.015.613.017.914a.75.75 0 0 1 .782 1.237l-1 1a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 .778-1.238a31 31 0 0 0-.017-.86a10 10 0 0 0-.041-.663c-.015-.142-.03-.215-.035-.24q-.004-.018 0-.007a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078M2.47 12.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1-.778 1.238c.002.288.007.584.017.86c.009.256.022.484.041.663a2 2 0 0 0 .035.247c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017a.75.75 0 0 1 0 1.5h-.025c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.084-.203-.12-.464-.14-.664a12 12 0 0 1-.05-.767a33 33 0 0 1-.017-.914a.75.75 0 0 1-.782-1.237zm11.478.78h3.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.486.065-1.077.077-1.767.08h-4.054c-.69-.003-1.28-.015-1.767-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.344-.08 2.242-.08m.302 8h2.5v-6.5h-2.5zm-1.5-2.5v2.49a8 8 0 0 1-.845-.056c-.461-.063-.659-.17-.789-.3s-.237-.328-.3-.79c-.047-.353-.06-.796-.065-1.386a.8.8 0 0 0 .249.042zm0-1.5v-2.49a8 8 0 0 0-.845.056c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.047.353-.06.796-.065 1.386A.8.8 0 0 1 11 17.25zm5.5-2.49v2.49h1.998c-.004-.57-.018-1-.065-1.345c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3a8 8 0 0 0-.845-.057m1.998 3.99H18.25v2.49a8 8 0 0 0 .845-.056c.461-.063.659-.17.789-.3s.237-.328.3-.79c.046-.345.06-.775.064-1.344" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideoFrameReplaceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoLibraryBoldIcon],svg[solar-video-library-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.098 2 8.276 2 8.51 2m-2.2 2.723c-1.39 0-2.53.84-2.91 1.954l-.024.07c.398-.12.813-.2 1.232-.253c1.08-.139 2.446-.139 4.032-.139h6.892c1.586 0 2.951 0 4.032.139c.42.054.834.132 1.232.253l-.023-.07c-.38-1.114-1.52-1.954-2.911-1.954z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.328 7.542H8.672c-3.374 0-5.062 0-6.01.987s-.725 2.511-.278 5.56l.422 2.892c.35 2.391.525 3.587 1.422 4.303c.898.716 2.22.716 4.867.716h5.81c2.646 0 3.97 0 4.867-.716s1.072-1.912 1.422-4.303l.422-2.891c.447-3.05.67-4.574-.278-5.561s-2.636-.987-6.01-.987m-.747 8.252c.559-.346.559-1.242 0-1.588l-3.371-2.09c-.543-.337-1.21.101-1.21.794v4.18c0 .693.667 1.13 1.21.794z" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideoLibraryBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoLibraryBoldDuotoneIcon],svg[solar-video-library-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.328 7.542H8.672c-3.374 0-5.062 0-6.01.987s-.725 2.511-.278 5.56l.422 2.892c.35 2.391.525 3.587 1.422 4.303c.898.716 2.22.716 4.867.716h5.81c2.646 0 3.97 0 4.867-.716s1.072-1.912 1.422-4.303l.422-2.892c.447-3.049.67-4.573-.278-5.56s-2.636-.987-6.01-.987m-.747 8.252c.559-.346.559-1.242 0-1.588l-3.371-2.09c-.543-.337-1.21.101-1.21.794v4.18c0 .693.667 1.13 1.21.794z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.543c.384-.897 1.291-1.563 2.399-1.672C8.099 2 8.277 2 8.51 2" opacity=".4"></svg:path><svg:path fill="currentColor" d="M6.31 4.723c-1.39 0-2.53.84-2.911 1.953l-.023.07c.398-.12.812-.199 1.232-.253c1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.951 0 4.032.138a8 8 0 0 1 1.232.253l-.023-.07c-.38-1.114-1.521-1.953-2.912-1.953z" opacity=".7"></svg:path>`,
})
export class SolarVideoLibraryBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoLibraryBrokenIcon],svg[solar-video-library-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></svg:path><svg:path stroke-linecap="round" d="M21.194 16.793c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464l-.422-3c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024c.749.809.767 1.966.521 3.976"></svg:path><svg:path d="M14.581 13.616c.559.346.559 1.242 0 1.588l-3.371 2.09c-.543.337-1.21-.1-1.21-.794v-4.18c0-.693.667-1.13 1.21-.794z"></svg:path></svg:g>`,
})
export class SolarVideoLibraryBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoLibraryLineDuotoneIcon],svg[solar-video-library-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496" opacity=".5"></svg:path><svg:path d="M14.581 13.616c.559.346.559 1.242 0 1.588l-3.371 2.09c-.543.337-1.21-.1-1.21-.794v-4.18c0-.693.667-1.13 1.21-.794z"></svg:path><svg:path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></svg:path></svg:g>`,
})
export class SolarVideoLibraryLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoLibraryLinearIcon],svg[solar-video-library-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496m8.082 9.116c.559.346.559 1.242 0 1.588l-3.371 2.09c-.543.337-1.21-.1-1.21-.794v-4.18c0-.693.667-1.13 1.21-.794z"></svg:path><svg:path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></svg:path></svg:g>`,
})
export class SolarVideoLibraryLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideoLibraryOutlineIcon],svg[solar-video-library-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.99 10.91a1.49 1.49 0 0 1 1.615-.022l3.371 2.09c.538.334.774.91.774 1.432c0 .523-.236 1.099-.774 1.432l-3.371 2.09c-.54.334-1.157.28-1.615-.022a1.67 1.67 0 0 1-.74-1.41v-4.18c0-.593.289-1.114.74-1.41m.823 1.254c-.019.012-.063.056-.063.156v4.18c0 .1.044.144.063.156l.001.001l3.372-2.09c.021-.013.064-.059.064-.157s-.043-.143-.064-.157l-3.371-2.09z"></svg:path><svg:path d="M8.7 1.25c-.22 0-.39 0-.536.016A2.75 2.75 0 0 0 5.71 3.87a2.89 2.89 0 0 0-2.055 2.721c-.6.18-1.119.465-1.543.923c-.652.705-.854 1.572-.862 2.586c-.007.975.167 2.207.382 3.736l.44 3.114c.168 1.196.305 2.168.518 2.929c.223.797.552 1.452 1.16 1.956c.604.5 1.32.715 2.166.817c.819.098 1.849.098 3.13.098h5.907c1.282 0 2.312 0 3.13-.098c.847-.102 1.563-.317 2.167-.817c.608-.504.937-1.16 1.16-1.956c.213-.761.35-1.733.519-2.93l.439-3.113c.216-1.53.39-2.761.382-3.736c-.008-1.014-.21-1.881-.862-2.586c-.424-.458-.943-.742-1.544-.923a2.89 2.89 0 0 0-2.054-2.72a2.75 2.75 0 0 0-2.454-2.605c-.147-.016-.316-.016-.536-.016zm10.11 5.078a1.38 1.38 0 0 0-1.348-1.078H6.538c-.669 0-1.212.47-1.349 1.078c.926-.078 2.06-.078 3.427-.078h6.768c1.366 0 2.5 0 3.427.078M16.769 3.75a1.25 1.25 0 0 0-1.092-.993a5 5 0 0 0-.417-.007H8.74c-.28 0-.361.001-.417.007a1.25 1.25 0 0 0-1.092.993zM3.213 8.533c.303-.327.758-.544 1.643-.662c.901-.12 2.108-.121 3.816-.121h6.656c1.708 0 2.915.002 3.816.121c.885.118 1.34.335 1.643.662c.296.32.457.755.463 1.579c.006.85-.15 1.97-.376 3.576l-.423 3c-.178 1.261-.302 2.133-.485 2.787c-.177.63-.384.965-.673 1.204c-.293.244-.687.4-1.388.484c-.719.086-1.658.087-3 .087h-5.81c-1.342 0-2.281-.001-3-.087c-.7-.085-1.095-.24-1.388-.483c-.289-.24-.496-.576-.673-1.205c-.183-.654-.307-1.526-.485-2.787l-.423-3c-.226-1.605-.382-2.726-.376-3.576c.006-.824.167-1.26.463-1.579"></svg:path></svg:g>`,
})
export class SolarVideoLibraryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraAddBoldIcon],svg[solar-videocamera-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12.5v-1c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554c.702.855.861 2.031.897 4.038l.67-.33c1.945-.972 2.918-1.459 3.63-1.019S22 9.68 22 11.854v.292c0 2.175 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02l-.67-.329c-.036 2.007-.195 3.183-.897 4.038a4 4 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5m7.5-3.75a.75.75 0 0 1 .75.75v1.75H12a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H7a.75.75 0 0 1 0-1.5h1.75V9.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideocameraAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraAddBoldDuotoneIcon],svg[solar-videocamera-add-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5zm-6.75 0a.75.75 0 0 0-1.5 0v1.75H7a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0v-1.75H12a.75.75 0 0 0 0-1.5h-1.75z"></svg:path>`,
})
export class SolarVideocameraAddBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraAddBrokenIcon],svg[solar-videocamera-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5z"></svg:path><svg:path stroke-linecap="round" d="M7 12h2.5m0 0H12m-2.5 0v2.5m0-2.5V9.5m-7.5 2v1c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554C4.57 20 6.212 20 9.5 20c3.287 0 4.931 0 6.038-.908q.304-.25.554-.554C17 17.43 17 15.788 17 12.5v-1c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C14.43 4 12.788 4 9.5 4c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554c-.428.522-.654 1.162-.774 2.038"></svg:path></svg:g>`,
})
export class SolarVideocameraAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraAddLineDuotoneIcon],svg[solar-videocamera-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5z" opacity=".5"></svg:path><svg:path d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5z"></svg:path><svg:path stroke-linecap="round" d="M7 12h2.5m0 0H12m-2.5 0v2.5m0-2.5V9.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarVideocameraAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraAddLinearIcon],svg[solar-videocamera-add-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5zm-15 2c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5z"></svg:path><svg:path stroke-linecap="round" d="M7 12h2.5m0 0H12m-2.5 0v2.5m0-2.5V9.5"></svg:path></svg:g>`,
})
export class SolarVideocameraAddLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraAddOutlineIcon],svg[solar-videocamera-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.451 3.25h.098c1.602 0 2.872 0 3.876.119c1.03.122 1.88.377 2.588.96q.361.296.659.658c.582.709.837 1.557.96 2.588q.04.348.064.739c.786-.392 1.452-.714 2.007-.896c.652-.213 1.343-.299 1.98.095s.87 1.05.97 1.728c.097.655.097 1.516.097 2.551v.416c0 1.035 0 1.896-.097 2.55c-.1.679-.333 1.335-.97 1.729s-1.328.308-1.98.095c-.555-.182-1.221-.504-2.007-.896q-.023.391-.065.739c-.122 1.03-.377 1.88-.96 2.588q-.296.361-.658.659c-.709.582-1.557.837-2.588.96c-1.005.118-2.274.118-3.876.118H9.45c-1.602 0-2.872 0-3.876-.119c-1.03-.122-1.88-.377-2.588-.96a5 5 0 0 1-.659-.658c-.582-.709-.837-1.557-.96-2.588c-.118-1.005-.118-2.274-.118-3.876V11.45c0-1.602 0-2.872.119-3.876c.122-1.03.377-1.88.96-2.588a5 5 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 3.25 7.85 3.25 9.451 3.25m6.799 9.25v-1c0-1.662-.001-2.843-.108-3.749c-.105-.889-.304-1.415-.63-1.813a3.3 3.3 0 0 0-.45-.45c-.398-.326-.924-.525-1.813-.63c-.906-.107-2.087-.108-3.749-.108s-2.843.001-3.749.108c-.889.105-1.415.304-1.813.63a3.3 3.3 0 0 0-.45.45c-.326.398-.525.924-.63 1.813c-.107.906-.108 2.087-.108 3.749v1c0 1.662.001 2.843.108 3.749c.105.889.304 1.415.63 1.813q.203.247.45.45c.398.326.924.525 1.813.63c.906.107 2.087.108 3.749.108s2.843-.001 3.749-.108c.889-.105 1.415-.304 1.813-.63q.247-.203.45-.45c.326-.398.525-.924.63-1.813c.107-.906.108-2.087.108-3.749m1.5 1.537l.244.121c.995.498 1.666.831 2.176.998c.499.163.65.1.724.055s.198-.153.275-.673c.079-.53.081-1.28.081-2.392v-.292c0-1.113-.002-1.862-.08-2.392c-.078-.52-.202-.627-.276-.673s-.225-.108-.724.055c-.51.167-1.18.5-2.176.998l-.244.122v4.072M9.5 8.75a.75.75 0 0 1 .75.75v1.75H12a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H7a.75.75 0 0 1 0-1.5h1.75V9.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideocameraAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraBoldIcon],svg[solar-videocamera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11.5v1c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554C4.57 20 6.212 20 9.5 20c3.287 0 4.931 0 6.038-.908q.304-.25.554-.554c.702-.855.861-2.031.897-4.038l.67.33c1.945.972 2.918 1.459 3.63 1.019S22 14.322 22 12.146v-.292c0-2.175 0-3.263-.711-3.703c-.712-.44-1.685.047-3.63 1.02l-.67.329c-.036-2.007-.195-3.183-.897-4.038a4 4 0 0 0-.554-.554C14.43 4 12.788 4 9.5 4c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554C2 6.57 2 8.212 2 11.5"></svg:path>`,
})
export class SolarVideocameraBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraBoldDuotoneIcon],svg[solar-videocamera-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5z"></svg:path>`,
})
export class SolarVideocameraBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraBrokenIcon],svg[solar-videocamera-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 11.5v1c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554C4.57 20 6.212 20 9.5 20c3.287 0 4.931 0 6.038-.908q.304-.25.554-.554C17 17.43 17 15.788 17 12.5v-1c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C14.43 4 12.788 4 9.5 4c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554c-.428.522-.654 1.162-.774 2.038"></svg:path><svg:path d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5z"></svg:path></svg:g>`,
})
export class SolarVideocameraBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraLineDuotoneIcon],svg[solar-videocamera-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5z"></svg:path><svg:path d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarVideocameraLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraLinearIcon],svg[solar-videocamera-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5zm15-2l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5z"></svg:path>`,
})
export class SolarVideocameraLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraOutlineIcon],svg[solar-videocamera-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.451 3.25h.098c1.602 0 2.872 0 3.876.119c1.03.122 1.88.377 2.588.96q.361.296.659.658c.582.709.837 1.557.96 2.588q.04.348.064.739c.786-.392 1.452-.714 2.007-.896c.652-.213 1.343-.299 1.98.095s.87 1.05.97 1.728c.097.655.097 1.516.097 2.551v.416c0 1.035 0 1.896-.097 2.55c-.1.679-.333 1.335-.97 1.729s-1.328.308-1.98.095c-.555-.182-1.221-.504-2.007-.896q-.023.391-.065.739c-.122 1.03-.377 1.88-.96 2.588q-.296.361-.658.659c-.709.582-1.557.837-2.588.96c-1.005.118-2.274.118-3.876.118H9.45c-1.602 0-2.872 0-3.876-.119c-1.03-.122-1.88-.377-2.588-.96a5 5 0 0 1-.659-.658c-.582-.709-.837-1.557-.96-2.588c-.118-1.005-.118-2.274-.118-3.876V11.45c0-1.602 0-2.872.119-3.876c.122-1.03.377-1.88.96-2.588a5 5 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 3.25 7.85 3.25 9.451 3.25m6.799 9.25v-1c0-1.662-.001-2.843-.108-3.749c-.105-.889-.304-1.415-.63-1.813a3.3 3.3 0 0 0-.45-.45c-.398-.326-.924-.525-1.813-.63c-.906-.107-2.087-.108-3.749-.108s-2.843.001-3.749.108c-.889.105-1.415.304-1.813.63a3.3 3.3 0 0 0-.45.45c-.326.398-.525.924-.63 1.813c-.107.906-.108 2.087-.108 3.749v1c0 1.662.001 2.843.108 3.749c.105.889.304 1.415.63 1.813q.203.247.45.45c.398.326.924.525 1.813.63c.906.107 2.087.108 3.749.108s2.843-.001 3.749-.108c.889-.105 1.415-.304 1.813-.63q.247-.203.45-.45c.326-.398.525-.924.63-1.813c.107-.906.108-2.087.108-3.749m1.5 1.537l.244.121c.995.498 1.666.831 2.176.998c.499.163.65.1.724.055s.198-.153.275-.673c.079-.53.081-1.28.081-2.392v-.292c0-1.113-.002-1.862-.08-2.392c-.078-.52-.202-.627-.276-.673s-.225-.108-.724.055c-.51.167-1.18.5-2.176.998l-.244.122v4.072" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideocameraOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraRecordBoldIcon],svg[solar-videocamera-record-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12.5v-1c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554c.702.855.861 2.031.897 4.038l.67-.33c1.945-.972 2.918-1.459 3.63-1.019S22 9.68 22 11.854v.292c0 2.175 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02l-.67-.329c-.036 2.007-.195 3.183-.897 4.038a4 4 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5m11.56-2.94a1.5 1.5 0 1 0-2.121-2.12a1.5 1.5 0 0 0 2.122 2.12" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideocameraRecordBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraRecordBoldDuotoneIcon],svg[solar-videocamera-record-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.908 5.462C2 6.57 2 8.212 2 11.5v1c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554C4.57 20 6.212 20 9.5 20c3.287 0 4.931 0 6.038-.908q.304-.25.554-.554C17 17.43 17 15.788 17 12.5v-1c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C14.43 4 12.788 4 9.5 4c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class SolarVideocameraRecordBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraRecordBrokenIcon],svg[solar-videocamera-record-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5zm-3.44-2.06a1.5 1.5 0 1 1-2.121 2.12a1.5 1.5 0 0 1 2.122-2.12Z"></svg:path><svg:path stroke-linecap="round" d="M2 11.5v1c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554C4.57 20 6.212 20 9.5 20c3.287 0 4.931 0 6.038-.908q.304-.25.554-.554C17 17.43 17 15.788 17 12.5v-1c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C14.43 4 12.788 4 9.5 4c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554c-.428.522-.654 1.162-.774 2.038"></svg:path></svg:g>`,
})
export class SolarVideocameraRecordBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraRecordLineDuotoneIcon],svg[solar-videocamera-record-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5zm-3.44-2.06a1.5 1.5 0 1 1-2.121 2.12a1.5 1.5 0 0 1 2.122-2.12Z" opacity=".5"></svg:path><svg:path d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5z"></svg:path></svg:g>`,
})
export class SolarVideocameraRecordLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraRecordLinearIcon],svg[solar-videocamera-record-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5zm-3.44-2.06a1.5 1.5 0 1 1-2.121 2.12a1.5 1.5 0 0 1 2.122-2.12Z"></svg:path><svg:path d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5z"></svg:path></svg:g>`,
})
export class SolarVideocameraRecordLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVideocameraRecordOutlineIcon],svg[solar-videocamera-record-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.451 3.25h.098c1.602 0 2.872 0 3.876.119c1.03.122 1.88.377 2.588.96q.361.296.659.658c.582.709.837 1.557.96 2.588q.04.348.064.739c.786-.392 1.452-.714 2.007-.896c.652-.213 1.343-.299 1.98.095s.87 1.05.97 1.728c.097.655.097 1.516.097 2.551v.416c0 1.035 0 1.896-.097 2.55c-.1.679-.333 1.335-.97 1.729s-1.328.308-1.98.095c-.555-.182-1.221-.504-2.007-.896q-.023.391-.065.739c-.122 1.03-.377 1.88-.96 2.588q-.296.361-.658.659c-.709.582-1.557.837-2.588.96c-1.005.118-2.274.118-3.876.118H9.45c-1.602 0-2.872 0-3.876-.119c-1.03-.122-1.88-.377-2.588-.96a5 5 0 0 1-.659-.658c-.582-.709-.837-1.557-.96-2.588c-.118-1.005-.118-2.274-.118-3.876V11.45c0-1.602 0-2.872.119-3.876c.122-1.03.377-1.88.96-2.588a5 5 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 3.25 7.85 3.25 9.451 3.25m6.799 9.25v-1c0-1.662-.001-2.843-.108-3.749c-.105-.889-.304-1.415-.63-1.813a3.3 3.3 0 0 0-.45-.45c-.398-.326-.924-.525-1.813-.63c-.906-.107-2.087-.108-3.749-.108s-2.843.001-3.749.108c-.889.105-1.415.304-1.813.63a3.3 3.3 0 0 0-.45.45c-.326.398-.525.924-.63 1.813c-.107.906-.108 2.087-.108 3.749v1c0 1.662.001 2.843.108 3.749c.105.889.304 1.415.63 1.813q.203.247.45.45c.398.326.924.525 1.813.63c.906.107 2.087.108 3.749.108s2.843-.001 3.749-.108c.889-.105 1.415-.304 1.813-.63q.247-.203.45-.45c.326-.398.525-.924.63-1.813c.107-.906.108-2.087.108-3.749m1.5 1.537l.244.121c.995.498 1.666.831 2.176.998c.499.163.65.1.724.055s.198-.153.275-.673c.079-.53.081-1.28.081-2.392v-.292c0-1.113-.002-1.862-.08-2.392c-.078-.52-.202-.627-.276-.673s-.225-.108-.724.055c-.51.167-1.18.5-2.176.998l-.244.122v4.072M13.03 7.97a.75.75 0 1 0-1.06 1.06a.75.75 0 0 0 1.06-1.06m-2.12-1.061a2.25 2.25 0 1 1 3.182 3.182a2.25 2.25 0 0 1-3.182-3.182" clip-rule="evenodd"></svg:path>`,
})
export class SolarVideocameraRecordOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVinylBoldIcon],svg[solar-vinyl-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.631 10.488a1.881 1.881 0 1 1 0 3.762a1.881 1.881 0 0 1 0-3.762"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2.487-18.716a.75.75 0 0 0-.975.716v5.56a3.381 3.381 0 1 0 1.5 2.81V5.093a8.05 8.05 0 0 1 4.273 4.868a.75.75 0 1 0 1.43-.45a9.54 9.54 0 0 0-6.228-6.228" clip-rule="evenodd"></svg:path>`,
})
export class SolarVinylBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVinylBoldDuotoneIcon],svg[solar-vinyl-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.818 3.395a.75.75 0 0 1 .669-.11a9.54 9.54 0 0 1 6.228 6.228a.75.75 0 1 1-1.43.45a8.05 8.05 0 0 0-4.273-4.87v7.276a3.381 3.381 0 1 1-1.5-2.81V4a.75.75 0 0 1 .306-.605" clip-rule="evenodd"></svg:path>`,
})
export class SolarVinylBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVinylBrokenIcon],svg[solar-vinyl-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path stroke-linecap="round" d="M21.95 13c-.501 5.054-4.765 9-9.95 9c-5.523 0-10-4.477-10-10c0-1.821.487-3.529 1.338-5M11 2.05a9.9 9.9 0 0 0-4 1.288"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 12V2.456a10.02 10.02 0 0 1 6.542 6.542"></svg:path></svg:g>`,
})
export class SolarVinylBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVinylLineDuotoneIcon],svg[solar-vinyl-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path stroke-linecap="round" d="M21.95 13c-.501 5.054-4.765 9-9.95 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.448 9-9.95" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 2.457a10.02 10.02 0 0 1 6.542 6.542M15 12V2.456"></svg:path></svg:g>`,
})
export class SolarVinylLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVinylLinearIcon],svg[solar-vinyl-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path stroke-linecap="round" d="M21.95 13c-.501 5.054-4.765 9-9.95 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.448 9-9.95"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 12V2.456a10.02 10.02 0 0 1 6.542 6.542"></svg:path></svg:g>`,
})
export class SolarVinylLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVinylOutlineIcon],svg[solar-vinyl-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.746 1.976a.75.75 0 0 1-.672.82a9.251 9.251 0 1 0 10.13 10.13a.75.75 0 1 1 1.493.149c-.54 5.433-5.122 9.676-10.697 9.676c-5.937 0-10.75-4.814-10.75-10.75c0-5.575 4.243-10.158 9.676-10.697a.75.75 0 0 1 .82.672m2.81-.123a.75.75 0 0 1 .669-.11a10.77 10.77 0 0 1 7.033 7.032a.75.75 0 1 1-1.431.45a9.28 9.28 0 0 0-5.077-5.683V12a3.75 3.75 0 1 1-1.5-3V2.457a.75.75 0 0 1 .306-.605M14.25 12a2.25 2.25 0 1 0-4.5 0a2.25 2.25 0 0 0 4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarVinylOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVinylRecordBoldIcon],svg[solar-vinyl-record-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0s-3.905 10.237 0 14.142M17.126 6.873a.75.75 0 1 0-1.06 1.061a5.75 5.75 0 0 1 0 8.132a.75.75 0 1 0 1.06 1.06a7.25 7.25 0 0 0 0-10.253M9.349 9.348a3.75 3.75 0 1 1 5.304 5.304a3.75 3.75 0 0 1-5.304-5.304m1.061 1.061a2.25 2.25 0 1 1 3.182 3.182a2.25 2.25 0 0 1-3.182-3.182M7.934 7.934a.75.75 0 0 0-1.06-1.06a7.25 7.25 0 0 0 0 10.253a.75.75 0 0 0 1.06-1.061a5.75 5.75 0 0 1 0-8.132" clip-rule="evenodd"></svg:path>`,
})
export class SolarVinylRecordBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVinylRecordBoldDuotoneIcon],svg[solar-vinyl-record-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0s-3.905 10.237 0 14.142" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.127 6.873a.75.75 0 1 0-1.061 1.06a5.75 5.75 0 0 1 0 8.132a.75.75 0 1 0 1.06 1.061a7.25 7.25 0 0 0 0-10.253M7.934 7.934a.75.75 0 0 0-1.06-1.061a7.25 7.25 0 0 0 0 10.253a.75.75 0 0 0 1.06-1.06a5.75 5.75 0 0 1 0-8.132"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.348 9.348a3.75 3.75 0 1 1 5.304 5.303a3.75 3.75 0 0 1-5.304-5.303m1.061 1.06a2.25 2.25 0 1 1 3.182 3.183a2.25 2.25 0 0 1-3.182-3.182" clip-rule="evenodd"></svg:path>`,
})
export class SolarVinylRecordBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVinylRecordBrokenIcon],svg[solar-vinyl-record-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path stroke-linecap="round" d="M7.404 16.597a6.5 6.5 0 0 1 0-9.193m9.192 0a6.47 6.47 0 0 1 1.827 3.597m-1.827 5.596A6.5 6.5 0 0 0 17.768 15"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarVinylRecordBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVinylRecordLineDuotoneIcon],svg[solar-vinyl-record-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="3" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0s-3.905 10.237 0 14.142Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7.404 16.597a6.5 6.5 0 0 1 0-9.193m9.192 0a6.5 6.5 0 0 1 0 9.193"></svg:path></svg:g>`,
})
export class SolarVinylRecordLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVinylRecordLinearIcon],svg[solar-vinyl-record-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path stroke-linecap="round" d="M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0s-3.905 10.237 0 14.142Z"></svg:path><svg:path stroke-linecap="round" d="M7.404 16.597a6.5 6.5 0 0 1 0-9.193m9.192 0a6.5 6.5 0 0 1 0 9.193"></svg:path></svg:g>`,
})
export class SolarVinylRecordLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVinylRecordOutlineIcon],svg[solar-vinyl-record-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.54 5.46A9.25 9.25 0 1 0 5.46 18.54A9.25 9.25 0 0 0 18.54 5.46M4.4 4.398C8.597.2 15.403.2 19.6 4.399s4.198 11.004 0 15.202s-11.004 4.198-15.202 0S.2 8.597 4.399 4.4m3.535 2.474a.75.75 0 0 1 0 1.061a5.75 5.75 0 0 0 0 8.132a.75.75 0 1 1-1.06 1.06a7.25 7.25 0 0 1 0-10.253a.75.75 0 0 1 1.06 0m8.132 0a.75.75 0 0 1 1.06 0a7.25 7.25 0 0 1 0 10.253a.75.75 0 1 1-1.06-1.06a5.75 5.75 0 0 0 0-8.132a.75.75 0 0 1 0-1.06M12 9.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarVinylRecordOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVirusBoldIcon],svg[solar-virus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 5.5a1.5 1.5 0 0 1-1.889 1.45l-.63.63a1 1 0 0 1-.073.064a7.1 7.1 0 0 1 1.409 2.867q.09-.01.183-.011a1.5 1.5 0 0 1 0 3h-.138a6.83 6.83 0 0 1-1.837 3.454l1.136 1.147a1.503 1.503 0 0 1 1.889 1.449a1.5 1.5 0 1 1-2.95-.389l-1.13-1.13a1 1 0 0 1-.105-.132a6.8 6.8 0 0 1-1.527.738l-.216.613a2.25 2.25 0 0 1-4.244 0l-.247-.7a7 7 0 0 1-1.4-.712l-1.377 1.41A2 2 0 1 1 5.81 18.17l1.255-1.286a7.14 7.14 0 0 1-1.75-2.909a2 2 0 1 1-.061-3.96A6.85 6.85 0 0 1 6.509 7.57l-.728-.728a2 2 0 1 1 1.06-1.06l.729.727a6.85 6.85 0 0 1 3.68-1.48v-.23a1.5 1.5 0 1 1 1.5 0v.254a7.1 7.1 0 0 1 3.606 1.538a1 1 0 0 1 .064-.071l.63-.631A1.5 1.5 0 1 1 20 5.5M11.75 13a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m-1.25-3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M9 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.25 13a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path>`,
})
export class SolarVirusBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVirusBoldDuotoneIcon],svg[solar-virus-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 12.057A6.865 6.865 0 0 1 12.057 19C8.19 18.969 5.03 15.81 5 11.944A6.865 6.865 0 0 1 11.944 5c3.865.031 7.025 3.19 7.056 7.057m-4.5-1.807a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M8.25 9a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M9 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.25 13a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" opacity=".5"></svg:path><svg:circle cx="19.5" cy="4.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m18.05 4.889l-1.63 1.63a1 1 0 0 0-.064.073c.386.313.74.666 1.053 1.052a1 1 0 0 0 .071-.064l1.631-1.63a1.5 1.5 0 0 1-1.06-1.061" opacity=".5"></svg:path><svg:circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" transform="matrix(1 0 0 -1 17.05 21.05)"></svg:circle><svg:path fill="currentColor" d="m9.63 18.55l.248.7a2.25 2.25 0 0 0 4.244 0l.217-.613a7.04 7.04 0 0 1-4.708-.087m-4.518-7.92a1.5 1.5 0 1 0 .04 2.72a7.1 7.1 0 0 1-.04-2.72m13.75 2.864a7.1 7.1 0 0 0-.047-2.983q.09-.01.184-.011a1.5 1.5 0 1 1-.137 2.994M13.35 5.153a1.5 1.5 0 1 0-2.72-.04a7.1 7.1 0 0 1 2.72.04" opacity=".5"></svg:path><svg:path fill="currentColor" d="m17.1 19.161l-1.25-1.251a7 7 0 0 0 1.17-.95l1.142 1.142a1.5 1.5 0 0 0-1.06 1.06"></svg:path><svg:circle cx="2" cy="2" r="2" fill="currentColor" transform="matrix(-1 0 0 1 6 2)"></svg:circle><svg:path fill="currentColor" d="M4.781 5.842a2 2 0 0 0 1.06-1.06l1.69 1.688l.037.04q-.586.472-1.057 1.058l-.041-.037z" opacity=".5"></svg:path><svg:circle cx="5" cy="20" r="2" fill="currentColor" transform="rotate(180 5 20)"></svg:circle><svg:path fill="currentColor" d="m5.815 18.174l1.27-1.27c.355.356.748.675 1.17.95l-1.399 1.4a2 2 0 0 0-1.04-1.08" opacity=".5"></svg:path>`,
})
export class SolarVirusBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVirusBrokenIcon],svg[solar-virus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.057 19A6.865 6.865 0 0 0 19 12.057C18.969 8.19 15.81 5.03 11.944 5A6.865 6.865 0 0 0 5 11.944c.031 3.865 3.19 7.025 7.057 7.056ZM18 6l-1.05 1.05M5 5l2 2m10.05 11.05l-.55-.55M6 19.05L7.05 18"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.5 13a2 2 0 1 0 2-2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M11 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path><svg:circle cx="9" cy="13" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.56 5.56a1.5 1.5 0 1 1 0-2.12M2 3.5A1.5 1.5 0 1 0 3.5 2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.05 19.55a1.5 1.5 0 1 0-1.5 1.5M3.44 19.44a1.5 1.5 0 1 1 0 2.12"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm6 10a1.5 1.5 0 1 0-.5-2.915v2.83q.236.084.5.085ZM10.585 19a1.5 1.5 0 0 0 2.83 0z"></svg:path></svg:g>`,
})
export class SolarVirusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVirusLineDuotoneIcon],svg[solar-virus-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.057 19A6.865 6.865 0 0 0 19 12.057C18.969 8.19 15.81 5.03 11.944 5A6.865 6.865 0 0 0 5 11.944c.031 3.865 3.19 7.025 7.057 7.056Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m18 6l-1.05 1.05M5 5l2 2" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17.05 18.05l-.55-.55"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 19.05L7.05 18" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M16.5 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M11 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" opacity=".5"></svg:path><svg:circle cx="9" cy="13" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="19.5" cy="4.5" r="1.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:circle cx="1.5" cy="1.5" r="1.5" stroke="currentColor" stroke-width="1.5" transform="matrix(-1 0 0 1 5 2)"></svg:circle><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Z" opacity=".5"></svg:path><svg:circle cx="1.5" cy="1.5" r="1.5" stroke="currentColor" stroke-width="1.5" transform="matrix(1 0 0 -1 17.05 21.05)"></svg:circle><svg:circle cx="4.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" transform="rotate(180 4.5 20.5)"></svg:circle><svg:path stroke="currentColor" stroke-width="1.5" d="M13.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm6 10a1.5 1.5 0 1 0-.5-2.915v2.83q.236.084.5.085ZM10.585 19a1.5 1.5 0 0 0 2.83 0z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarVirusLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVirusLinearIcon],svg[solar-virus-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.057 19A6.865 6.865 0 0 0 19 12.057C18.969 8.19 15.81 5.03 11.944 5A6.865 6.865 0 0 0 5 11.944c.031 3.865 3.19 7.025 7.057 7.056ZM18 6l-1.05 1.05M5 5l2 2m10.05 11.05l-.55-.55M6 19.05L7.05 18"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M16.5 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM11 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path><svg:circle cx="9" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="19.5" cy="4.5" r="1.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:circle cx="1.5" cy="1.5" r="1.5" stroke="currentColor" stroke-width="1.5" transform="matrix(-1 0 0 1 5 2)"></svg:circle><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Z"></svg:path><svg:circle cx="1.5" cy="1.5" r="1.5" stroke="currentColor" stroke-width="1.5" transform="matrix(1 0 0 -1 17.05 21.05)"></svg:circle><svg:circle cx="4.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" transform="rotate(180 4.5 20.5)"></svg:circle><svg:path stroke="currentColor" stroke-width="1.5" d="M13.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm6 10a1.5 1.5 0 1 0-.5-2.915v2.83q.236.084.5.085ZM10.585 19a1.5 1.5 0 0 0 2.83 0z"></svg:path></svg:g>`,
})
export class SolarVirusLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVirusOutlineIcon],svg[solar-virus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 10.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M13.25 13a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-5-4a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M10 8.75a.25.25 0 1 0 0 .5a.25.25 0 0 0 0-.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1.25a2.25 2.25 0 0 1 2.03 3.22l1.507 1.506a7.6 7.6 0 0 1 2.94-1.488a2.25 2.25 0 1 1 4.018.052c1.072.3 2.053.823 2.89 1.515l.584-.585a2.25 2.25 0 1 1 1.06 1.06l-.584.585a7.9 7.9 0 0 1 1.44 2.638l.115-.003a2.25 2.25 0 1 1-.05 4.5a7.6 7.6 0 0 1-1.9 3.24l.03.03a2.25 2.25 0 1 1-1.06 1.06l-.13-.13a7.6 7.6 0 0 1-2.382 1.066a2.25 2.25 0 0 1-4.05-.068a7.8 7.8 0 0 1-2.263-1.066a.8.8 0 0 1-.115.148l-1.033 1.034a2.25 2.25 0 1 1-1.043-1.078l1.016-1.017l.036-.033a7.9 7.9 0 0 1-2.017-3.44a2.25 2.25 0 1 1-.052-4.018a7.6 7.6 0 0 1 1.489-2.941L4.47 5.53a2.25 2.25 0 1 1-.97-4.28m.75 2.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m7.864 14.75a6.114 6.114 0 0 0 6.136-6.136v-.052c-.028-3.456-2.856-6.284-6.312-6.312a6.115 6.115 0 0 0-6.188 6.188c.028 3.456 2.856 6.284 6.313 6.312zm7.636-6.957a.75.75 0 0 1 0 1.414zM19.5 3.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-16 7.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m14.3 8.3a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m-13.3 1.7a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M11.25 3.5a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarVirusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolleyball2BoldIcon],svg[solar-volleyball-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.756 13.326l.261-.333a10.77 10.77 0 0 1 8.423 4.372A9.99 9.99 0 0 1 12 22a10 10 0 0 1-3.635-.681c2.548-.569 4.996-1.675 7.128-3.17a.75.75 0 1 0-.86-1.228c-2.497 1.75-5.44 2.913-8.418 3.237a10 10 0 0 1-2.29-2.259c3.077-.48 5.887-2.1 7.831-4.573m-1.009-1.144l-.17.217a10.9 10.9 0 0 1-7.511 4.098A9.96 9.96 0 0 1 2 12a9.97 9.97 0 0 1 2.864-7.006V5a17.85 17.85 0 0 0-.09 7.386a.75.75 0 1 0 1.47-.292A16.4 16.4 0 0 1 6.88 3.41a9.9 9.9 0 0 1 3.485-1.276l-.18.426a10.92 10.92 0 0 0 .563 9.623"></svg:path><svg:path fill="currentColor" d="M12.081 11.495a9.42 9.42 0 0 1-.514-8.354L12.047 2c4.585.021 8.44 3.127 9.598 7.35a17.3 17.3 0 0 0-7.564-3.673a.75.75 0 1 0-.308 1.468a15.76 15.76 0 0 1 7.851 4.213l.002.002l.37.373Q22 11.866 22 12a10 10 0 0 1-.794 3.91a12.27 12.27 0 0 0-9.125-4.415"></svg:path>`,
})
export class SolarVolleyball2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolleyball2BoldDuotoneIcon],svg[solar-volleyball-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.466 3.67A9.99 9.99 0 0 0 2 12c0 1.619.385 3.147 1.067 4.5H3.5c3.155 0 6.133-1.457 8.07-3.947L12 12a9.13 9.13 0 0 1-.686-8.354L12 2a10 10 0 0 0-3.446.61l-.37.765a14.7 14.7 0 0 0-.86 8.48a.75.75 0 1 1-1.471.29a16.15 16.15 0 0 1 .613-8.475"></svg:path><svg:path fill="currentColor" d="M14.155 6.08a.75.75 0 1 0-.31 1.468a13.74 13.74 0 0 1 6.865 3.723l.002.002l1.267 1.288l.006-.006a9.94 9.94 0 0 1-1.244 4.306L20.5 16.5a10.1 10.1 0 0 0-8.41-4.5H12a9.13 9.13 0 0 1-.686-8.354L12 2c4.942 0 9.047 3.585 9.855 8.296l-.078-.08l-.004-.004a15.24 15.24 0 0 0-7.618-4.132" opacity=".7"></svg:path><svg:path fill="currentColor" d="M15.433 17.323a.75.75 0 0 0-.867-1.225c-2.597 1.84-5.744 2.945-8.834 2.945h-.831A10 10 0 0 1 3.067 16.5H3.5c3.155 0 6.133-1.457 8.07-3.947L12 12h.092c3.379 0 6.534 1.689 8.408 4.5l.241.361A10 10 0 0 1 12.001 22a9.95 9.95 0 0 1-5.258-1.492c3.095-.212 6.147-1.385 8.69-3.185" opacity=".4"></svg:path>`,
})
export class SolarVolleyball2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolleyball2BrokenIcon],svg[solar-volleyball-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m11.57 12.553l.592.46zm-.256-8.907l.693.288zm9.929 7.097l.534-.526l-.004-.005zm.21 1.283a.75.75 0 1 0 1.07-1.052zm-15.72 7.017a.75.75 0 0 0 0 1.5zM3.5 15.75a.75.75 0 0 0 0 1.5zM8.192 3.356a.75.75 0 0 0-1.384-.577zm11.684 13.56a.75.75 0 1 0 1.248-.832zM5.853 12.145a.75.75 0 1 0 1.472-.29zm9.58 5.178a.75.75 0 1 0-.866-1.225zM14.155 6.08a.75.75 0 1 0-.31 1.468zM12 12.75h.092v-1.5H12zm-.592-1.21l-.43.553l1.184.92l.43-.553zm-.1-9.828l-.686 1.645l1.385.577l.685-1.646zm9.4 9.557l.745.757l1.07-1.052l-.746-.757zM10.622 3.357a9.88 9.88 0 0 0 .742 9.04l1.272-.795a8.38 8.38 0 0 1-.63-7.668zm.356 8.736A9.47 9.47 0 0 1 3.5 15.75v1.5c3.386 0 6.583-1.563 8.662-4.236zm1.114.657a9.36 9.36 0 0 1 7.784 4.166l1.248-.832a10.86 10.86 0 0 0-9.032-4.834zM6.808 2.779a16.2 16.2 0 0 0-.955 9.366l1.472-.29a14.7 14.7 0 0 1 .867-8.5zm7.759 13.32c-2.598 1.839-5.745 2.944-8.834 2.944v1.5c3.436 0 6.881-1.224 9.7-3.22zm-.722-8.551a13.74 13.74 0 0 1 6.867 3.725l1.061-1.06a15.24 15.24 0 0 0-7.618-4.133z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3.339 6.998A9.95 9.95 0 0 1 7 3.34C11.783.578 17.899 2.217 20.66 7S21.783 17.9 17 20.661S6.101 21.783 3.34 17a9.95 9.95 0 0 1-1.342-5"></svg:path></svg:g>`,
})
export class SolarVolleyball2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolleyball2LineDuotoneIcon],svg[solar-volleyball-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.57 12.553l.592.46zm-.256-8.907l.693.288zM3.5 15.75a.75.75 0 0 0 0 1.5zm16.376 1.166a.75.75 0 1 0 1.248-.832zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm0-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5A9.25 9.25 0 0 1 12 2.75zm0 11.5h.092v-1.5H12zm-.592-1.21l-.43.553l1.184.92l.43-.553zm-.1-9.828l-.686 1.645l1.385.577l.685-1.646zm-.686 1.645a9.88 9.88 0 0 0 .742 9.04l1.272-.795a8.38 8.38 0 0 1-.63-7.668zm.356 8.736A9.47 9.47 0 0 1 3.5 15.75v1.5c3.386 0 6.583-1.563 8.662-4.236zm1.114.657a9.36 9.36 0 0 1 7.784 4.166l1.248-.832a10.86 10.86 0 0 0-9.032-4.834z"></svg:path><svg:path fill="currentColor" d="m21.243 10.743l.534-.526l-.004-.005zm.21 1.283a.75.75 0 0 0 1.07-1.052zm-15.72 7.017a.75.75 0 0 0 0 1.5zm2.46-15.687a.75.75 0 0 0-1.385-.577zm-2.34 8.789a.75.75 0 1 0 1.472-.29zm9.58 5.178a.75.75 0 0 0-.867-1.225zM14.155 6.08a.75.75 0 0 0-.31 1.468zm6.553 5.189l.745.757l1.07-1.052l-.746-.757zm-13.9-8.49a16.2 16.2 0 0 0-.955 9.366l1.472-.29a14.7 14.7 0 0 1 .867-8.5zm7.759 13.32c-2.598 1.839-5.745 2.944-8.834 2.944v1.5c3.436 0 6.881-1.224 9.7-3.22zm-.722-8.551a13.74 13.74 0 0 1 6.867 3.725l1.06-1.06a15.24 15.24 0 0 0-7.617-4.133z" opacity=".5"></svg:path>`,
})
export class SolarVolleyball2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolleyball2LinearIcon],svg[solar-volleyball-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.57 12.553l.592.46zm-.256-8.907l.693.288zm9.929 7.097l.534-.526l-.004-.005zm.21 1.283a.75.75 0 1 0 1.07-1.052zm-15.72 7.017a.75.75 0 0 0 0 1.5zM3.5 15.75a.75.75 0 0 0 0 1.5zM8.192 3.356a.75.75 0 0 0-1.384-.577zm11.684 13.56a.75.75 0 1 0 1.248-.832zM5.853 12.145a.75.75 0 1 0 1.472-.29zm9.58 5.178a.75.75 0 1 0-.866-1.225zM14.155 6.08a.75.75 0 1 0-.31 1.468zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm0-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5A9.25 9.25 0 0 1 12 2.75zm0 11.5h.092v-1.5H12zm-.592-1.21l-.43.553l1.184.92l.43-.553zm-.1-9.828l-.686 1.645l1.385.577l.685-1.646zm9.4 9.557l.745.757l1.07-1.052l-.746-.757zM10.622 3.357a9.88 9.88 0 0 0 .742 9.04l1.272-.795a8.38 8.38 0 0 1-.63-7.668zm.356 8.736A9.47 9.47 0 0 1 3.5 15.75v1.5c3.386 0 6.583-1.563 8.662-4.236zm1.114.657a9.36 9.36 0 0 1 7.784 4.166l1.248-.832a10.86 10.86 0 0 0-9.032-4.834zM6.808 2.779a16.2 16.2 0 0 0-.955 9.366l1.472-.29a14.7 14.7 0 0 1 .867-8.5zm7.759 13.32c-2.598 1.839-5.745 2.944-8.834 2.944v1.5c3.436 0 6.881-1.224 9.7-3.22zm-.722-8.551a13.74 13.74 0 0 1 6.867 3.725l1.061-1.06a15.24 15.24 0 0 0-7.618-4.133z"></svg:path>`,
})
export class SolarVolleyball2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolleyball2OutlineIcon],svg[solar-volleyball-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.162 2.398A10.7 10.7 0 0 1 12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75a10.7 10.7 0 0 1-6.738-2.373A10.73 10.73 0 0 1 1.25 12a10.75 10.75 0 0 1 5.912-9.602m.925 1.218a14.67 14.67 0 0 0-.762 8.24a.75.75 0 1 1-1.472.289a16.1 16.1 0 0 1 .24-7.264A9.23 9.23 0 0 0 2.75 12c0 1.335.283 2.604.791 3.75a9.47 9.47 0 0 0 7.437-3.657l.117-.152a9.88 9.88 0 0 1-.473-8.584l.223-.536a9.2 9.2 0 0 0-2.758.795m4.408-.853l-.488 1.171a8.38 8.38 0 0 0 .423 7.321c3.211.1 6.204 1.617 8.183 4.125a9.2 9.2 0 0 0 .635-3.562l-.536-.545l-.002-.002a13.74 13.74 0 0 0-6.865-3.723a.75.75 0 1 1 .31-1.468a15.24 15.24 0 0 1 6.72 3.303a9.26 9.26 0 0 0-8.38-6.62m7.36 14.123a9.36 9.36 0 0 0-7.491-4.132l-.202.26a10.97 10.97 0 0 1-7.802 4.202A9.3 9.3 0 0 0 6 19.04c3.003-.061 6.044-1.155 8.567-2.942a.75.75 0 1 1 .866 1.225c-2.186 1.548-4.748 2.631-7.391 3.04A9.2 9.2 0 0 0 12 21.25a9.24 9.24 0 0 0 7.856-4.364" clip-rule="evenodd"></svg:path>`,
})
export class SolarVolleyball2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolleyballBoldIcon],svg[solar-volleyball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.017 12.993c1.923.046 3.769.6 5.363 1.57c-2.889 3.035-6.988 5.14-11.165 5.595a10 10 0 0 1-2.29-2.259c3.077-.48 5.887-2.1 7.831-4.573zm8.423 4.372A9.99 9.99 0 0 1 12 22a10 10 0 0 1-3.635-.681c3.903-.871 7.577-3.006 10.25-5.88a10.7 10.7 0 0 1 1.825 1.926m1.184-6.007l.002.002l.37.373Q22 11.866 22 12a10 10 0 0 1-.794 3.91a12.27 12.27 0 0 0-9.125-4.415a9.43 9.43 0 0 1-1.253-4.684a15.8 15.8 0 0 1 10.796 4.547M10.946 5.313a9.4 9.4 0 0 1 .621-2.172L12.047 2c4.584.021 8.44 3.127 9.598 7.348a17.3 17.3 0 0 0-10.7-4.035m-.368 7.086A10.8 10.8 0 0 1 7.2 15.238a16.42 16.42 0 0 1-.32-11.83a9.9 9.9 0 0 1 3.484-1.275l-.18.426a10.92 10.92 0 0 0 .563 9.623zM4.859 5A9.97 9.97 0 0 0 2 12c0 1.617.384 3.145 1.066 4.497c.954-.093 1.883-.31 2.767-.64a17.9 17.9 0 0 1-.969-10.863z"></svg:path>`,
})
export class SolarVolleyballBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolleyballBoldDuotoneIcon],svg[solar-volleyball-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.577 12.399A10.8 10.8 0 0 1 7.2 15.238a16.42 16.42 0 0 1-.32-11.83a9.9 9.9 0 0 1 3.484-1.275l-.18.426a10.92 10.92 0 0 0 .563 9.623zM4.859 5A9.97 9.97 0 0 0 2 12c0 1.617.384 3.145 1.066 4.497c.954-.093 1.883-.31 2.767-.64a17.9 17.9 0 0 1-.969-10.863z"></svg:path><svg:path fill="currentColor" d="M12.017 12.993c1.923.046 3.769.6 5.363 1.57c-2.889 3.035-6.988 5.14-11.165 5.594a10 10 0 0 1-2.29-2.258c3.077-.48 5.887-2.1 7.831-4.574zm8.423 4.372A9.99 9.99 0 0 1 12 22a10 10 0 0 1-3.635-.681c3.903-.872 7.577-3.006 10.25-5.88a10.7 10.7 0 0 1 1.825 1.926" opacity=".7"></svg:path><svg:path fill="currentColor" d="m21.624 11.358l.002.002l.37.373Q22 11.866 22 12c0 1.388-.282 2.71-.793 3.91a12.27 12.27 0 0 0-9.126-4.415a9.43 9.43 0 0 1-1.253-4.684a15.8 15.8 0 0 1 10.796 4.547M10.946 5.313a9.4 9.4 0 0 1 .622-2.172L12.048 2c4.583.021 8.439 3.127 9.597 7.348a17.3 17.3 0 0 0-10.699-4.035" opacity=".4"></svg:path>`,
})
export class SolarVolleyballBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolleyballBrokenIcon],svg[solar-volleyball-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m11.57 12.553l.592.46zm-.256-8.907l.693.288zm7.241 10.859a.75.75 0 0 0-1.11-1.01zm-.846-.185l-.555-.504zm3.534-3.577l.534-.526l-.004-.005zm.21 1.283a.75.75 0 1 0 1.07-1.052zm-15.72 7.017a.75.75 0 0 0 0 1.5zM3.5 15.75a.75.75 0 0 0 0 1.5zM8.192 3.356a.75.75 0 0 0-1.384-.577zM6.808 15.289a.75.75 0 0 0 1.384-.578zM11 5.75a.75.75 0 0 0 0 1.5zm8.876 11.166a.75.75 0 1 0 1.248-.832zM12 12.75h.092v-1.5H12zm-.592-1.21l-.43.553l1.184.92l.43-.553zm-.1-9.828l-.686 1.645l1.385.577l.685-1.646zm6.137 11.784l-.291.32l1.11 1.009l.291-.32zm3.263-2.227l.745.757l1.07-1.052l-.746-.757zm-3.554 2.547c-2.87 3.157-7.193 5.227-11.421 5.227v1.5c4.688 0 9.403-2.277 12.53-5.718zM10.622 3.357a9.88 9.88 0 0 0 .742 9.04l1.272-.795a8.38 8.38 0 0 1-.63-7.668zm.356 8.736A9.47 9.47 0 0 1 3.5 15.75v1.5c3.386 0 6.583-1.563 8.662-4.236zm-4.17-9.314a16.18 16.18 0 0 0 0 12.51l1.384-.578a14.68 14.68 0 0 1 0-11.355zM11 7.25c3.643 0 7.136 1.447 9.712 4.023l1.061-1.06A15.24 15.24 0 0 0 11 5.75zm1.092 5.5a9.36 9.36 0 0 1 7.784 4.166l1.248-.832a10.86 10.86 0 0 0-9.032-4.834z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3.339 6.998A9.95 9.95 0 0 1 7 3.34C11.783.578 17.899 2.217 20.66 7S21.783 17.9 17 20.661S6.101 21.783 3.34 17a9.95 9.95 0 0 1-1.342-5"></svg:path></svg:g>`,
})
export class SolarVolleyballBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolleyballLineDuotoneIcon],svg[solar-volleyball-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.57 12.553l.592.46zm-.256-8.907l.693.288zm7.241 10.859a.75.75 0 0 0-1.11-1.01zm-.846-.185l-.555-.504zm3.534-3.577l.534-.526l-.004-.005zm.21 1.283a.75.75 0 1 0 1.07-1.052zm-15.72 7.017a.75.75 0 0 0 0 1.5zM3.5 15.75a.75.75 0 0 0 0 1.5zM8.192 3.356a.75.75 0 0 0-1.384-.577zM6.808 15.289a.75.75 0 0 0 1.384-.578zM11 5.75a.75.75 0 0 0 0 1.5zm8.876 11.166a.75.75 0 1 0 1.248-.832zM12 12.75h.092v-1.5H12zm-.592-1.21l-.43.553l1.184.92l.43-.553zm-.1-9.828l-.686 1.645l1.385.577l.685-1.646zm6.137 11.784l-.291.32l1.11 1.009l.291-.32zm3.263-2.227l.745.757l1.07-1.052l-.746-.757zm-3.554 2.547c-2.87 3.157-7.193 5.227-11.421 5.227v1.5c4.688 0 9.403-2.277 12.53-5.718zM10.622 3.357a9.88 9.88 0 0 0 .742 9.04l1.272-.795a8.38 8.38 0 0 1-.63-7.668zm.356 8.736A9.47 9.47 0 0 1 3.5 15.75v1.5c3.386 0 6.583-1.563 8.662-4.236zm-4.17-9.314a16.18 16.18 0 0 0 0 12.51l1.384-.578a14.68 14.68 0 0 1 0-11.355zM11 7.25c3.643 0 7.136 1.447 9.712 4.023l1.061-1.06A15.24 15.24 0 0 0 11 5.75zm1.092 5.5a9.36 9.36 0 0 1 7.784 4.166l1.248-.832a10.86 10.86 0 0 0-9.032-4.834z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm0-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5A9.25 9.25 0 0 1 12 2.75z"></svg:path>`,
})
export class SolarVolleyballLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolleyballLinearIcon],svg[solar-volleyball-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.57 12.553l.592.46zm-.256-8.907l.693.288zm7.241 10.859a.75.75 0 0 0-1.11-1.01zm-.846-.185l-.555-.504zm3.534-3.577l.534-.526l-.004-.005zm.21 1.283a.75.75 0 1 0 1.07-1.052zm-15.72 7.017a.75.75 0 0 0 0 1.5zM3.5 15.75a.75.75 0 0 0 0 1.5zM8.192 3.356a.75.75 0 0 0-1.384-.577zM6.808 15.289a.75.75 0 0 0 1.384-.578zM11 5.75a.75.75 0 0 0 0 1.5zm8.876 11.166a.75.75 0 1 0 1.248-.832zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm0-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5A9.25 9.25 0 0 1 12 2.75zm0 11.5h.092v-1.5H12zm-.592-1.21l-.43.553l1.184.92l.43-.553zm-.1-9.828l-.686 1.645l1.385.577l.685-1.646zm6.137 11.784l-.291.32l1.11 1.009l.291-.32zm3.263-2.227l.745.757l1.07-1.052l-.746-.757zm-3.554 2.547c-2.87 3.157-7.193 5.227-11.421 5.227v1.5c4.688 0 9.403-2.277 12.53-5.718zM10.622 3.357a9.88 9.88 0 0 0 .742 9.04l1.272-.795a8.38 8.38 0 0 1-.63-7.668zm.356 8.736A9.47 9.47 0 0 1 3.5 15.75v1.5c3.386 0 6.583-1.563 8.662-4.236zm-4.17-9.314a16.18 16.18 0 0 0 0 12.51l1.384-.578a14.68 14.68 0 0 1 0-11.355zM11 7.25c3.643 0 7.136 1.447 9.712 4.023l1.061-1.06A15.24 15.24 0 0 0 11 5.75zm1.092 5.5a9.36 9.36 0 0 1 7.784 4.166l1.248-.832a10.86 10.86 0 0 0-9.032-4.834z"></svg:path>`,
})
export class SolarVolleyballLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolleyballOutlineIcon],svg[solar-volleyball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75c-2.55 0-4.894-.888-6.737-2.372l-.002-.002A10.73 10.73 0 0 1 1.25 12m6.792 8.363c1.2.569 2.542.887 3.958.887a9.24 9.24 0 0 0 7.856-4.364a9.4 9.4 0 0 0-1.72-1.922c-2.606 2.802-6.27 4.808-10.094 5.399m8.863-6.28C14.1 17.024 10.022 18.958 6 19.04a9.3 9.3 0 0 1-1.64-1.824c3.062-.24 5.9-1.757 7.802-4.202l.202-.26a9.35 9.35 0 0 1 4.54 1.33m-4.475-2.828c3.211.1 6.204 1.617 8.183 4.125a9.2 9.2 0 0 0 .635-3.562l-.536-.545l-.002-.002a13.74 13.74 0 0 0-9.348-4.016a8.4 8.4 0 0 0 1.068 4m-.95-5.497a15.24 15.24 0 0 1 9.395 3.625a9.26 9.26 0 0 0-8.38-6.62l-.488 1.171a8.4 8.4 0 0 0-.528 1.824m-.635-2.937a9.2 9.2 0 0 0-2.758.795a14.68 14.68 0 0 0 .037 10.929a9.5 9.5 0 0 0 2.854-2.452l.117-.152a9.88 9.88 0 0 1-.473-8.584zM6.76 15.171a16.17 16.17 0 0 1-.666-10.29A9.23 9.23 0 0 0 2.75 12c0 1.335.283 2.604.792 3.75a9.5 9.5 0 0 0 3.218-.578" clip-rule="evenodd"></svg:path>`,
})
export class SolarVolleyballOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeBoldIcon],svg[solar-volume-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.003 11.716c.038-1.843.057-2.764.678-3.552c.113-.144.28-.315.42-.431c.763-.636 1.771-.636 3.788-.636c.72 0 1.081 0 1.425-.092q.107-.03.211-.067c.336-.121.637-.33 1.238-.746c2.374-1.645 3.56-2.467 4.557-2.11c.191.069.376.168.541.29c.861.635.927 2.115 1.058 5.073C18.967 10.541 19 11.48 19 12s-.033 1.46-.081 2.555c-.131 2.958-.197 4.438-1.058 5.073a2.2 2.2 0 0 1-.54.29c-.997.357-2.184-.465-4.558-2.11c-.601-.416-.902-.625-1.238-.746a3 3 0 0 0-.211-.067c-.344-.092-.704-.092-1.425-.092c-2.017 0-3.025 0-3.789-.636a3 3 0 0 1-.419-.43c-.621-.79-.64-1.71-.678-3.552a14 14 0 0 1 0-.57"></svg:path>`,
})
export class SolarVolumeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeBoldDuotoneIcon],svg[solar-volume-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.763 6.192c-.601.416-.902.625-1.238.746v10.124c.336.121.637.33 1.238.746c2.374 1.645 3.56 2.467 4.557 2.11a2.1 2.1 0 0 0 .541-.29c.861-.635.927-2.115 1.058-5.073A70 70 0 0 0 19 12c0-.521-.033-1.46-.081-2.555c-.131-2.958-.197-4.438-1.058-5.073a2.1 2.1 0 0 0-.54-.29c-.997-.357-2.184.465-4.558 2.11" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.681 8.163c-.621.789-.64 1.71-.678 3.552a14 14 0 0 0 0 .57c.038 1.841.057 2.762.678 3.551c.113.144.28.315.42.431c.763.635 1.771.635 3.788.635c.72 0 1.081 0 1.425.093q.107.03.211.067V6.937q-.105.039-.211.067c-.344.093-.704.093-1.425.093c-2.017 0-3.025 0-3.789.635c-.14.116-.306.287-.419.431" opacity=".5"></svg:path>`,
})
export class SolarVolumeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeBrokenIcon],svg[solar-volume-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.959 8.577a3.2 3.2 0 0 1 1.381-1.3C7.94 7 8.626 7 10 7c.512 0 .768 0 1.016-.042q.37-.063.712-.214c.23-.101.444-.242.871-.524l.22-.144C15.36 4.399 16.632 3.56 17.7 3.925c.205.07.403.17.58.295c.922.648.993 2.157 1.133 5.174A68 68 0 0 1 19.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151l-.219-.144c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C10.768 17 10.512 17 10 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395q-.017-.27-.026-.528"></svg:path>`,
})
export class SolarVolumeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeCrossBoldIcon],svg[solar-volume-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.515 6.316a.75.75 0 0 1 .991.376c.468 1.035.994 2.768.994 5.308c0 2.192-.392 3.783-.8 4.844a7.7 7.7 0 0 1-.572 1.195a5 5 0 0 1-.289.425l-.007.01l-.003.003l-.002.002L20.25 18l.576.48a.75.75 0 0 1-1.156-.956l.003-.004l.031-.041a3 3 0 0 0 .137-.212c.12-.199.288-.516.459-.961c.342-.889.7-2.298.7-4.306c0-2.326-.48-3.849-.86-4.692a.75.75 0 0 1 .375-.992m-2.101 2.95a.75.75 0 0 1 .887.582c.11.53.199 1.24.199 2.152c0 1.11-.132 1.923-.273 2.474a5 5 0 0 1-.203.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002s-.001.001-.657-.363l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .141-.447c.11-.424.227-1.111.227-2.101a9 9 0 0 0-.168-1.848a.75.75 0 0 1 .582-.886" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.78 3.53a.75.75 0 0 0-1.06-1.06l-4.45 4.449a11 11 0 0 0-.193-1.39c-.172-.788-.477-1.473-1.116-1.923a3 3 0 0 0-.769-.39c-.818-.28-1.631-.057-2.457.345c-.814.395-1.8 1.046-3.032 1.857l-.267.176c-.447.295-.602.394-.76.464q-.257.115-.535.16c-.171.03-.354.032-.89.032h-.162c-1.217 0-2.062-.001-2.814.347A3.96 3.96 0 0 0 1.548 8.22c-.392.729-.438 1.491-.504 2.575l-.008.13C1.014 11.294 1 11.658 1 12s.014.706.036 1.074l.008.13c.066 1.084.112 1.846.504 2.575a3.96 3.96 0 0 0 1.727 1.624c.61.283 1.283.336 2.166.345L2.72 20.47a.75.75 0 1 0 1.06 1.06zM16.5 12a.75.75 0 0 0-1.255-.554l-.071.074l-6 6.274A.778.778 0 0 0 9.34 19c1.039.68 1.899 1.225 2.631 1.549c.743.328 1.48.489 2.222.236a3 3 0 0 0 .769-.391c.706-.497 1.005-1.28 1.167-2.18c.159-.884.213-2.056.281-3.516l.003-.058a68 68 0 0 0 .088-2.64"></svg:path>`,
})
export class SolarVolumeCrossBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeCrossBoldDuotoneIcon],svg[solar-volume-cross-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.78 3.53a.75.75 0 0 0-1.06-1.06l-4.45 4.449a11 11 0 0 0-.193-1.39c-.172-.788-.477-1.473-1.116-1.923a3 3 0 0 0-.769-.39c-.818-.28-1.631-.057-2.457.345c-.814.395-1.8 1.046-3.032 1.857l-.267.176c-.447.295-.602.394-.76.464q-.257.115-.535.16c-.171.03-.354.032-.89.032h-.162c-1.217 0-2.062-.001-2.814.347A3.96 3.96 0 0 0 1.548 8.22c-.392.729-.438 1.491-.504 2.575l-.008.13C1.014 11.294 1 11.658 1 12s.014.706.036 1.074l.008.13c.066 1.084.112 1.846.504 2.575a3.96 3.96 0 0 0 1.727 1.624c.61.283 1.283.336 2.166.345L2.72 20.47a.75.75 0 1 0 1.06 1.06z"></svg:path><svg:path fill="currentColor" d="m16.238 9.072l-8.624 8.624c.396.475 1.412 1.118 1.725 1.304c1.038.68 1.898 1.225 2.631 1.55c.742.328 1.48.488 2.222.235a3 3 0 0 0 .769-.391c.706-.496 1.005-1.28 1.167-2.18c.159-.884.213-2.056.281-3.516l.003-.058A68 68 0 0 0 16.5 12v-.108c.003-.567.012-2.43-.262-2.82m4.276-2.755a.75.75 0 0 1 .992.375c.467 1.035.994 2.768.994 5.308c0 2.192-.392 3.783-.8 4.844c-.204.53-.41.925-.573 1.195a5 5 0 0 1-.288.425l-.008.01l-.003.003v.002s-.002.001-.577-.478l.575.48a.75.75 0 0 1-1.156-.956l.003-.005l.01-.013l.021-.028a3 3 0 0 0 .137-.212c.12-.198.288-.516.459-.961c.342-.889.7-2.297.7-4.306c0-2.326-.48-3.849-.86-4.691a.75.75 0 0 1 .374-.992M19.3 9.848a.75.75 0 1 0-1.468.305c.088.426.168 1.034.168 1.847c0 .99-.118 1.677-.227 2.101a4 4 0 0 1-.179.534l-.005.01a.75.75 0 0 0 1.316.72L18.251 15c.654.363.655.362.655.362v-.001l.003-.003l.003-.008l.01-.018l.026-.053q.031-.064.076-.175a5 5 0 0 0 .202-.631c.142-.551.274-1.364.274-2.474c0-.91-.09-1.622-.2-2.152" opacity=".4"></svg:path>`,
})
export class SolarVolumeCrossBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeCrossBrokenIcon],svg[solar-volume-cross-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-.967.33-2.102-.328-4.2-1.703m-2.484-1.33C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395q-.017-.27-.026-.528m.45-3.923a3.2 3.2 0 0 1 1.381-1.3C3.94 7 4.626 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.835.587.972 1.879 1.094 4.357M20 18s1.5-1.8 1.5-6c0-2.433-.503-4.061-.927-5M18 15s.5-.9.5-3c0-.862-.084-1.522-.183-2M22 2L2 22"></svg:path>`,
})
export class SolarVolumeCrossBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeCrossLineDuotoneIcon],svg[solar-volume-cross-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.016 17.042C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17 17 0 0 1 1.5 12c0-.323.013-.671.035-1.029c.073-1.208.11-1.813.424-2.394a3.2 3.2 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.835.587.972 1.879 1.094 4.357"></svg:path><svg:path d="M15.5 8.5V12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-.967.33-2.102-.328-4.2-1.702C8.833 17.915 7.4 17 7 17" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M20 18s1.5-1.8 1.5-6c0-2.433-.503-4.061-.927-5M18 15s.5-.9.5-3c0-.862-.084-1.522-.183-2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 2L2 22"></svg:path></svg:g>`,
})
export class SolarVolumeCrossLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeCrossLinearIcon],svg[solar-volume-cross-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M16.25 12a.75.75 0 0 0-1.5 0zM7.016 6.958l.125.74zM8.6 6.22l-.413-.626zm-.871.524l.303.687zM3.34 16.723l-.315.68zm-1.805-3.695l-.749.046zm.424 2.395l.66-.356zM13.7 20.075l-.242-.71zm1.713-5.47l.749.035zM14.28 19.78l.43.613zM8.818 6.076l.413.626zM13.7 3.925l-.242.71zm.58.295l.43-.614zM3.34 7.277l-.315-.68zm-1.805 3.694l-.749-.045zm.424-2.394l.66.356zm7.952 9.168A.75.75 0 0 0 9.09 19zM9.012 6.846l.22-.144l-.827-1.252l-.219.144zm-6.729 6.137c-.02-.347-.033-.68-.033-.983H.75c0 .341.014.706.036 1.074zM2.25 12c0-.303.012-.636.033-.983l-1.497-.091A18 18 0 0 0 .75 12zm12.5 0c0 .512-.034 1.45-.086 2.57l1.498.07A68 68 0 0 0 16.25 12zM6 7.75c.488 0 .817.002 1.141-.053l-.25-1.479c-.171.03-.354.032-.89.032zm2.186-2.156c-.447.295-.602.394-.76.464l.605 1.373c.3-.133.574-.316.981-.585zM7.141 7.697a3.8 3.8 0 0 0 .89-.266l-.606-1.373q-.256.114-.534.16zM6.001 17.75c.536 0 .719.002.89.031l.25-1.479c-.324-.055-.653-.052-1.14-.052zm0-1.5c-1.445 0-1.932-.017-2.346-.208l-.63 1.361c.784.363 1.67.347 2.975.347zM.785 13.074c.07 1.153.104 1.947.512 2.704l1.32-.711c-.217-.405-.258-.82-.335-2.084zm2.869 2.968a2.47 2.47 0 0 1-1.036-.975l-1.32.711a3.96 3.96 0 0 0 1.726 1.625zm11.009-1.472c-.072 1.531-.123 2.603-.262 3.378c-.14.771-.337 1.066-.553 1.218l.862 1.227c.706-.496 1.005-1.28 1.167-2.18c.161-.895.215-2.086.284-3.573zm-.722 6.215a3 3 0 0 0 .769-.392l-.863-1.227a1.6 1.6 0 0 1-.39.199zM9.232 6.702c1.289-.85 2.194-1.445 2.908-1.792c.712-.346 1.069-.36 1.318-.275l.484-1.42c-.818-.28-1.631-.056-2.457.345c-.824.4-1.826 1.063-3.08 1.89zm4.226-2.067c.137.047.272.115.39.198l.863-1.227a3 3 0 0 0-.769-.39zM6 6.25c-1.304 0-2.19-.016-2.975.346l.63 1.362c.414-.192.901-.208 2.345-.208zm-3.717 4.767c.077-1.264.118-1.68.336-2.084l-1.32-.712C.89 8.979.855 9.772.785 10.926zm.742-4.42A3.96 3.96 0 0 0 1.298 8.22l1.32.712a2.47 2.47 0 0 1 1.037-.975zM9.089 19c1.039.68 1.899 1.224 2.631 1.549c.743.328 1.48.489 2.222.236l-.484-1.42c-.226.077-.54.074-1.13-.188c-.602-.266-1.358-.738-2.417-1.432zm7.034-10.46c-.06-1.227-.127-2.233-.296-3.01c-.172-.789-.477-1.474-1.116-1.924l-.863 1.227c.196.138.377.392.513 1.016c.139.635.202 1.514.264 2.765z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 18s1.5-1.8 1.5-6c0-2.433-.503-4.061-.927-5M18 15s.5-.9.5-3c0-.862-.084-1.522-.183-2M22 2L2 22"></svg:path></svg:g>`,
})
export class SolarVolumeCrossLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeCrossOutlineIcon],svg[solar-volume-cross-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.53 1.47a.75.75 0 0 1 0 1.06l-20 20a.75.75 0 0 1-1.06-1.06l3.721-3.722c-.883-.01-1.555-.062-2.166-.345a3.96 3.96 0 0 1-1.727-1.624c-.392-.729-.438-1.49-.504-2.575l-.008-.13A18 18 0 0 1 .75 12c0-.341.014-.706.036-1.074l.008-.13C.86 9.712.906 8.95 1.298 8.22a3.96 3.96 0 0 1 1.727-1.624c.752-.348 1.597-.348 2.814-.347H6c.537 0 .72-.002.891-.031a2.3 2.3 0 0 0 .534-.16c.16-.07.314-.17.761-.465l.267-.176c1.231-.811 2.218-1.462 3.032-1.857c.826-.402 1.64-.625 2.457-.346c.272.093.534.226.769.391c.64.45.944 1.135 1.116 1.924c.088.402.148.865.193 1.389l5.45-5.45a.75.75 0 0 1 1.06 0m-7.92 6.859c-.057-1.101-.121-1.894-.249-2.48c-.136-.624-.317-.878-.513-1.015a1.6 1.6 0 0 0-.39-.2c-.25-.084-.606-.07-1.318.276c-.714.347-1.62.942-2.909 1.792l-.219.144l-.05.033c-.38.25-.643.424-.931.552a3.8 3.8 0 0 1-.89.267c-.31.052-.626.052-1.082.052H6c-1.444 0-1.93.016-2.345.208a2.47 2.47 0 0 0-1.036.975c-.218.405-.259.82-.336 2.084c-.02.347-.033.68-.033.983s.012.636.033.983c.077 1.264.118 1.68.336 2.084c.209.389.635.79 1.036.975c.414.192.901.208 2.345.208h.06c.239 0 .44 0 .622.008zm5.655-2.013a.75.75 0 0 1 .991.376c.468 1.035.994 2.768.994 5.308c0 2.192-.392 3.783-.8 4.844a7.7 7.7 0 0 1-.572 1.195a5 5 0 0 1-.289.425l-.007.01l-.003.003l-.002.002L20 18l.576.48a.75.75 0 0 1-1.156-.956l.003-.004l.031-.041a3 3 0 0 0 .137-.212c.12-.199.288-.516.459-.961c.342-.889.7-2.298.7-4.306c0-2.326-.48-3.849-.86-4.692a.75.75 0 0 1 .375-.992m-2.101 2.95a.75.75 0 0 1 .887.582c.11.53.199 1.24.199 2.152c0 1.11-.132 1.923-.273 2.474a5 5 0 0 1-.203.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002s-.001.001-.63-.348l.629.35a.75.75 0 0 1-1.317-.72l.005-.01l.038-.087a4 4 0 0 0 .141-.447c.11-.424.227-1.111.227-2.101a9 9 0 0 0-.168-1.848a.75.75 0 0 1 .582-.886M15.5 11.25a.75.75 0 0 1 .75.75c0 .552-.036 1.525-.088 2.64l-.003.058c-.068 1.46-.122 2.632-.281 3.516c-.162.9-.461 1.683-1.167 2.18a3 3 0 0 1-.769.39c-.742.254-1.48.093-2.222-.235c-.732-.324-1.592-.868-2.631-1.549a.75.75 0 1 1 .822-1.255c1.059.694 1.815 1.166 2.416 1.432c.592.262.905.265 1.13.188c.138-.047.273-.115.391-.199c.217-.152.415-.447.553-1.218c.14-.775.191-1.847.263-3.377c.052-1.12.086-2.06.086-2.571a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarVolumeCrossOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeKnobBoldIcon],svg[solar-volume-knob-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 7.056a5.001 5.001 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM13 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415m12.02 12.021a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415m0-10.606a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415M6.697 18.718a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415"></svg:path>`,
})
export class SolarVolumeKnobBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeKnobBoldDuotoneIcon],svg[solar-volume-knob-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 7.056a5.001 5.001 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM13 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M20.5 13a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.696 5.282a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415" opacity=".7"></svg:path><svg:path fill="currentColor" d="M18.718 17.303a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415" opacity=".4"></svg:path><svg:path fill="currentColor" d="M18.718 6.697a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415" opacity=".7"></svg:path><svg:path fill="currentColor" d="M6.696 18.718a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415" opacity=".4"></svg:path>`,
})
export class SolarVolumeKnobBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeKnobBrokenIcon],svg[solar-volume-knob-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 12a5 5 0 1 0-5 5m0-10v4"></svg:path><svg:path fill="currentColor" d="M13 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.415m12.021 12.021a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.415m0-10.606a1 1 0 1 1-1.415-1.415a1 1 0 0 1 1.415 1.415M6.697 18.718a1 1 0 1 1-1.415-1.415a1 1 0 0 1 1.415 1.415"></svg:path></svg:g>`,
})
export class SolarVolumeKnobBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeKnobLineDuotoneIcon],svg[solar-volume-knob-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v4" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M20.5 13a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.415m12.021 12.021a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.415m0-10.606a1 1 0 1 1-1.415-1.415a1 1 0 0 1 1.415 1.415M6.697 18.718a1 1 0 1 1-1.415-1.415a1 1 0 0 1 1.415 1.415" opacity=".5"></svg:path></svg:g>`,
})
export class SolarVolumeKnobLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeKnobLinearIcon],svg[solar-volume-knob-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v4"></svg:path><svg:path fill="currentColor" d="M13 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415m12.02 12.021a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415m0-10.606a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415M6.697 18.718a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415"></svg:path></svg:g>`,
})
export class SolarVolumeKnobLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeKnobOutlineIcon],svg[solar-volume-knob-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 7.816a4.251 4.251 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM6.25 12a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.415m12.021 12.021a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.415m0-10.606a1 1 0 1 1-1.415-1.415a1 1 0 0 1 1.415 1.415M6.697 18.718a1 1 0 1 1-1.415-1.415a1 1 0 0 1 1.415 1.415"></svg:path>`,
})
export class SolarVolumeKnobOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeLineDuotoneIcon],svg[solar-volume-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M5.035 10.971c.073-1.208.11-1.813.424-2.394a3.2 3.2 0 0 1 1.38-1.3C7.44 7 8.127 7 9.5 7c.512 0 .768 0 1.016-.042q.37-.063.712-.214c.23-.101.444-.242.871-.524l.22-.144C14.86 4.399 16.132 3.56 17.2 3.925c.205.07.403.17.58.295c.922.648.992 2.157 1.133 5.174A68 68 0 0 1 19 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151l-.219-.144c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C10.268 17 10.012 17 9.5 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17 17 0 0 1 5 12c0-.323.013-.671.035-1.029Z"></svg:path>`,
})
export class SolarVolumeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeLinearIcon],svg[solar-volume-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M5.035 10.971c.073-1.208.11-1.813.424-2.394a3.2 3.2 0 0 1 1.38-1.3C7.44 7 8.127 7 9.5 7c.512 0 .768 0 1.016-.042q.37-.063.712-.214c.23-.101.444-.242.871-.524l.22-.144C14.86 4.399 16.132 3.56 17.2 3.925c.205.07.403.17.58.295c.922.648.992 2.157 1.133 5.174A68 68 0 0 1 19 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151l-.219-.144c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C10.268 17 10.012 17 9.5 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17 17 0 0 1 5 12c0-.323.013-.671.035-1.029Z"></svg:path>`,
})
export class SolarVolumeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeLoudBoldIcon],svg[solar-volume-loud-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.003 11.716c.037-1.843.056-2.764.668-3.552a3 3 0 0 1 .413-.431c.752-.636 1.746-.636 3.733-.636c.71 0 1.065 0 1.403-.092q.105-.03.209-.067c.33-.121.627-.33 1.22-.746c2.338-1.645 3.508-2.467 4.489-2.11c.188.069.37.168.533.29c.848.635.913 2.115 1.042 5.073c.048 1.096.08 2.034.08 2.555s-.032 1.46-.08 2.555c-.13 2.958-.194 4.438-1.042 5.073a2.1 2.1 0 0 1-.533.29c-.982.357-2.15-.465-4.49-2.11c-.592-.416-.889-.625-1.22-.746a3 3 0 0 0-.208-.067c-.338-.092-.693-.092-1.403-.092c-1.987 0-2.98 0-3.733-.636a3 3 0 0 1-.413-.43c-.612-.79-.63-1.71-.668-3.552a14 14 0 0 1 0-.57"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.49 5.552a.66.66 0 0 1 .97.094l-.529.471l.53-.47l.002.002l.003.004l.007.009l.079.112q.072.107.186.305c.149.264.339.652.526 1.171C21.64 8.291 22 9.851 22 12s-.36 3.71-.736 4.75c-.187.52-.377.907-.526 1.172a5 5 0 0 1-.265.417l-.007.009l-.003.003l-.001.002s-.001.001-.531-.47l.53.471a.66.66 0 0 1-.971.094a.77.77 0 0 1-.09-1.035l.03-.041q.04-.06.125-.207a6 6 0 0 0 .422-.943c.314-.871.644-2.253.644-4.222s-.33-3.35-.644-4.222a6 6 0 0 0-.422-.942a3 3 0 0 0-.157-.253m-1.641 1.833c.333-.197.753-.07.938.286l-.603.357l.603-.357l.001.002l.002.003l.003.007l.01.018l.024.053q.028.063.07.17c.053.145.12.35.185.62c.13.54.252 1.337.252 2.425c0 1.089-.122 1.886-.252 2.426c-.065.27-.132.475-.186.619a3 3 0 0 1-.094.223l-.009.018l-.003.007l-.002.003v.002s-.001.001-.604-.356l.603.357c-.185.355-.605.483-.938.286c-.33-.196-.45-.638-.272-.991l.004-.01l.035-.085c.032-.086.08-.23.13-.438c.1-.416.208-1.09.208-2.06c0-.971-.108-1.645-.208-2.06a4 4 0 0 0-.165-.524l-.004-.01a.76.76 0 0 1 .272-.991" clip-rule="evenodd"></svg:path>`,
})
export class SolarVolumeLoudBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeLoudBoldDuotoneIcon],svg[solar-volume-loud-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.003 11.716c.037-1.843.056-2.764.668-3.552a3 3 0 0 1 .413-.431c.752-.636 1.746-.636 3.733-.636c.71 0 1.065 0 1.403-.092q.105-.03.209-.067c.33-.121.627-.33 1.22-.746c2.338-1.645 3.508-2.467 4.489-2.11c.188.069.37.168.533.29c.848.635.913 2.115 1.042 5.073c.048 1.096.08 2.034.08 2.555s-.032 1.46-.08 2.555c-.13 2.958-.194 4.438-1.042 5.073a2.1 2.1 0 0 1-.533.29c-.982.357-2.15-.465-4.49-2.11c-.592-.416-.889-.625-1.22-.746a3 3 0 0 0-.208-.067c-.338-.092-.693-.092-1.403-.092c-1.987 0-2.98 0-3.733-.636a3 3 0 0 1-.413-.43c-.612-.79-.63-1.71-.668-3.552a14 14 0 0 1 0-.57"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.49 5.552a.66.66 0 0 1 .97.094l-.53.471l.53-.47h.002v.002l.004.004l.007.009l.078.112a5 5 0 0 1 .187.305c.149.265.339.652.526 1.171C21.64 8.291 22 9.851 22 12s-.36 3.71-.736 4.75c-.187.52-.377.907-.526 1.172a5 5 0 0 1-.265.417l-.007.009l-.003.003l-.001.002s-.001.001-.531-.47l.53.471a.66.66 0 0 1-.972.094a.77.77 0 0 1-.091-1.03l.003-.005l.028-.04a3 3 0 0 0 .126-.208c.11-.195.264-.506.422-.943c.314-.871.643-2.252.643-4.222c0-1.969-.329-3.35-.643-4.222a6 6 0 0 0-.422-.942a3 3 0 0 0-.126-.207l-.028-.041l-.003-.004" clip-rule="evenodd" opacity=".4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.757 8.416c.333-.197.753-.07.938.286l-.603.357l.603-.357l.001.002l.002.003l.003.007l.01.018l.024.053q.028.063.07.17c.053.145.12.35.185.62c.13.54.252 1.337.252 2.425c0 1.089-.122 1.886-.252 2.426c-.065.27-.132.475-.186.619a3 3 0 0 1-.094.223l-.009.018l-.003.007l-.002.003v.002s-.001.001-.604-.356l.603.357c-.185.355-.605.483-.938.286c-.33-.196-.45-.638-.272-.991l.004-.01l.035-.085c.032-.086.08-.23.13-.438c.1-.416.208-1.09.208-2.06c0-.971-.108-1.645-.208-2.061a4 4 0 0 0-.165-.523l-.004-.01c-.179-.354-.058-.796.272-.991" clip-rule="evenodd" opacity=".7"></svg:path>`,
})
export class SolarVolumeLoudBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeLoudBrokenIcon],svg[solar-volume-loud-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 6s1.5 1.8 1.5 6s-1.5 6-1.5 6m-2-9s.5.9.5 3s-.5 3-.5 3M1.959 8.577a3.2 3.2 0 0 1 1.381-1.3C3.94 7 4.626 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.923.648.993 2.157 1.133 5.174A68 68 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395q-.017-.27-.026-.528"></svg:path>`,
})
export class SolarVolumeLoudBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeLoudLineDuotoneIcon],svg[solar-volume-loud-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M1.535 10.971c.073-1.208.11-1.813.424-2.394a3.2 3.2 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.922.648.993 2.157 1.133 5.174A68 68 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17 17 0 0 1 1.5 12c0-.323.013-.671.035-1.029Z"></svg:path><svg:path stroke-linecap="round" d="M20 6s1.5 1.8 1.5 6s-1.5 6-1.5 6" opacity=".4"></svg:path><svg:path stroke-linecap="round" d="M18 9s.5.9.5 3s-.5 3-.5 3" opacity=".7"></svg:path></svg:g>`,
})
export class SolarVolumeLoudLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeLoudLinearIcon],svg[solar-volume-loud-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M1.535 10.971c.073-1.208.11-1.813.424-2.394a3.2 3.2 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.922.648.993 2.157 1.133 5.174A68 68 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17 17 0 0 1 1.5 12c0-.323.013-.671.035-1.029Z"></svg:path><svg:path stroke-linecap="round" d="M20 6s1.5 1.8 1.5 6s-1.5 6-1.5 6m-2-9s.5.9.5 3s-.5 3-.5 3"></svg:path></svg:g>`,
})
export class SolarVolumeLoudLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeLoudOutlineIcon],svg[solar-volume-loud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.14 4.91c-.714.347-1.62.942-2.909 1.792l-.219.144l-.05.033c-.38.25-.643.424-.931.552a3.8 3.8 0 0 1-.89.267c-.31.052-.626.052-1.082.052H6c-1.444 0-1.93.016-2.345.208a2.47 2.47 0 0 0-1.036.975c-.218.405-.259.82-.336 2.084c-.02.347-.033.68-.033.983s.012.636.033.983c.077 1.264.118 1.68.336 2.084c.209.389.635.79 1.036.975c.414.192.901.208 2.345.208h.06c.455 0 .77 0 1.081.052q.462.079.89.267c.288.128.552.301.932.552l.05.033l.218.144c1.29.85 2.195 1.445 2.91 1.792c.711.346 1.068.36 1.317.275c.137-.047.272-.115.39-.199c.217-.152.415-.447.553-1.218c.14-.775.191-1.847.263-3.377c.052-1.12.086-2.06.086-2.571s-.034-1.451-.086-2.57c-.072-1.531-.123-2.603-.262-3.378c-.14-.771-.337-1.066-.553-1.218a1.6 1.6 0 0 0-.391-.2c-.25-.084-.606-.07-1.318.276m-.655-1.35c.826-.4 1.64-.624 2.457-.345c.272.093.534.226.769.391c.706.497 1.005 1.28 1.167 2.18c.159.884.213 2.056.281 3.516l.003.058c.052 1.115.088 2.088.088 2.64s-.036 1.525-.088 2.64l-.003.058c-.068 1.46-.122 2.632-.281 3.516c-.162.9-.461 1.683-1.167 2.18a3 3 0 0 1-.769.39c-.818.28-1.631.057-2.457-.344c-.814-.396-1.8-1.047-3.032-1.858l-.267-.176c-.447-.295-.602-.394-.76-.464q-.257-.114-.535-.16c-.171-.03-.354-.032-.89-.032h-.162c-1.217 0-2.062.001-2.814-.347a3.96 3.96 0 0 1-1.727-1.624c-.392-.729-.438-1.49-.504-2.575l-.008-.13A18 18 0 0 1 .75 12c0-.341.014-.706.036-1.074l.008-.13C.86 9.712.906 8.95 1.298 8.22a3.96 3.96 0 0 1 1.727-1.624c.752-.348 1.597-.348 2.814-.347H6c.537 0 .72-.002.891-.031a2.3 2.3 0 0 0 .534-.16c.16-.07.314-.17.761-.465l.267-.176c1.231-.811 2.218-1.462 3.032-1.857m8.035 1.864a.75.75 0 0 1 1.056.096L20 6l.576-.48l.001.001l.002.002l.003.004l.007.009a2 2 0 0 1 .086.114a5 5 0 0 1 .203.311c.161.27.368.665.572 1.195c.408 1.061.8 2.653.8 4.844s-.392 3.783-.8 4.845a7.7 7.7 0 0 1-.572 1.194a5 5 0 0 1-.268.399l-.013.017l-.008.01l-.007.009l-.003.003l-.002.002L20 18l.576.48a.75.75 0 0 1-1.156-.955m0 0l.003-.005l.031-.041a3 3 0 0 0 .137-.212c.12-.198.288-.516.459-.961c.342-.889.7-2.297.7-4.306s-.358-3.417-.7-4.306a6 6 0 0 0-.459-.961a3 3 0 0 0-.171-.257l.003.004l-.001-.002l-.002-.002a.75.75 0 0 1 .1-1.052m-1.884 2.92a.75.75 0 0 1 1.02.292l-.628.349l.628-.349v.001l.001.002l.002.003l.004.007l.01.018l.026.054q.03.064.075.174c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5 5 0 0 1-.203.631a3 3 0 0 1-.102.228l-.01.019l-.003.007l-.002.003v.001s-.001.002-.63-.347l.629.348a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087c.035-.087.087-.234.141-.447c.11-.424.227-1.11.227-2.1s-.118-1.678-.227-2.102a4 4 0 0 0-.179-.534l-.005-.01a.75.75 0 0 1 .297-1.01" clip-rule="evenodd"></svg:path>`,
})
export class SolarVolumeLoudOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeOutlineIcon],svg[solar-volume-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.64 4.91c-.714.347-1.62.942-2.909 1.792l-.219.144l-.05.033c-.38.25-.643.424-.931.552a3.8 3.8 0 0 1-.89.267c-.31.052-.626.052-1.082.052H9.5c-1.444 0-1.93.016-2.345.208a2.47 2.47 0 0 0-1.036.975c-.218.405-.259.82-.336 2.084c-.02.347-.033.68-.033.983s.012.636.033.983c.077 1.264.118 1.68.336 2.084c.209.389.635.79 1.036.975c.414.192.901.208 2.345.208h.06c.455 0 .77 0 1.081.052q.462.079.89.267c.288.128.552.301.932.552l.05.033l.218.144c1.29.85 2.195 1.445 2.91 1.792c.711.346 1.068.36 1.317.275c.137-.047.272-.115.39-.199c.217-.152.415-.447.553-1.218c.14-.775.191-1.847.262-3.377c.053-1.12.087-2.06.087-2.571s-.034-1.451-.087-2.57c-.07-1.531-.122-2.603-.262-3.378c-.138-.771-.336-1.066-.552-1.218a1.6 1.6 0 0 0-.391-.2c-.25-.084-.605-.07-1.318.276m-.655-1.35c.826-.4 1.64-.624 2.457-.345c.272.093.534.226.769.391c.706.497 1.005 1.28 1.167 2.18c.159.884.213 2.056.281 3.516l.003.058c.052 1.115.088 2.088.088 2.64s-.036 1.525-.088 2.64l-.003.058c-.068 1.46-.122 2.632-.281 3.516c-.162.9-.461 1.683-1.167 2.18a3 3 0 0 1-.769.39c-.818.28-1.631.057-2.457-.344c-.814-.396-1.8-1.047-3.032-1.858l-.266-.176c-.448-.295-.602-.394-.762-.464q-.256-.114-.534-.16c-.171-.03-.354-.032-.89-.032h-.162c-1.217 0-2.062.001-2.814-.347a3.96 3.96 0 0 1-1.727-1.624c-.392-.729-.438-1.49-.504-2.575l-.008-.13A18 18 0 0 1 4.25 12c0-.341.014-.706.036-1.074l.008-.13c.066-1.084.112-1.846.504-2.575a3.96 3.96 0 0 1 1.727-1.624c.752-.348 1.597-.348 2.814-.347H9.5c.537 0 .72-.002.891-.031a2.3 2.3 0 0 0 .534-.16c.16-.07.314-.17.761-.465l.267-.176c1.231-.811 2.218-1.462 3.032-1.857" clip-rule="evenodd"></svg:path>`,
})
export class SolarVolumeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeSmallBoldIcon],svg[solar-volume-small-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.003 11.716c.04-1.843.059-2.764.697-3.552c.117-.144.288-.315.432-.431c.785-.636 1.822-.636 3.897-.636c.741 0 1.112 0 1.465-.092q.11-.03.218-.067c.345-.121.654-.33 1.273-.746c2.442-1.645 3.662-2.467 4.687-2.11c.196.069.387.168.556.29c.886.635.953 2.115 1.088 5.073c.05 1.096.084 2.034.084 2.555s-.034 1.46-.084 2.555c-.134 2.958-.202 4.438-1.088 5.073c-.17.122-.36.221-.556.29c-1.025.357-2.245-.465-4.687-2.11c-.619-.416-.928-.625-1.273-.746a3 3 0 0 0-.218-.067c-.353-.092-.724-.092-1.465-.092c-2.075 0-3.112 0-3.897-.636a3 3 0 0 1-.432-.43c-.638-.79-.658-1.71-.697-3.552a13 13 0 0 1 0-.57"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.45 8.416a.71.71 0 0 1 .98.286l-.63.357l.63-.357v.002l.002.003l.004.007l.01.018a2 2 0 0 1 .098.224c.056.144.126.349.193.619c.136.54.263 1.337.263 2.425c0 1.089-.127 1.886-.263 2.426c-.067.27-.137.475-.193.619a3 3 0 0 1-.099.223l-.009.018l-.004.007l-.001.003v.002s-.002.001-.631-.356l.63.357a.71.71 0 0 1-.98.286a.744.744 0 0 1-.284-.991l.005-.01q.01-.021.035-.085a4 4 0 0 0 .137-.438c.104-.416.217-1.09.217-2.06c0-.971-.113-1.645-.217-2.06a4 4 0 0 0-.172-.524l-.005-.01a.744.744 0 0 1 .284-.991" clip-rule="evenodd"></svg:path>`,
})
export class SolarVolumeSmallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeSmallBoldDuotoneIcon],svg[solar-volume-small-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.003 11.716c.04-1.843.059-2.764.697-3.552c.117-.144.288-.315.432-.431c.785-.636 1.822-.636 3.897-.636c.741 0 1.112 0 1.465-.092q.11-.03.218-.067c.345-.121.654-.33 1.273-.746c2.442-1.645 3.662-2.467 4.687-2.11c.196.069.387.168.556.29c.886.635.953 2.115 1.088 5.073c.05 1.096.084 2.034.084 2.555s-.034 1.46-.084 2.555c-.134 2.958-.202 4.438-1.088 5.073c-.17.122-.36.221-.556.29c-1.025.357-2.245-.465-4.687-2.11c-.619-.416-.928-.625-1.273-.746a3 3 0 0 0-.218-.067c-.353-.092-.724-.092-1.465-.092c-2.075 0-3.112 0-3.897-.636a3 3 0 0 1-.432-.43c-.638-.79-.658-1.71-.697-3.552a13 13 0 0 1 0-.57"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.45 8.416a.71.71 0 0 1 .98.286l-.63.357l.63-.357l.001.002l.002.003l.003.007l.01.018a2 2 0 0 1 .098.224c.056.144.126.349.194.619c.135.54.262 1.337.262 2.425c0 1.089-.127 1.886-.262 2.426c-.068.27-.138.475-.194.619a3 3 0 0 1-.098.223l-.01.018l-.003.007l-.002.003v.002s-.001.001-.63-.356l.629.357a.71.71 0 0 1-.98.286a.744.744 0 0 1-.284-.991l.005-.01l.036-.085a4 4 0 0 0 .136-.438c.104-.416.217-1.09.217-2.06c0-.971-.113-1.645-.217-2.061a4 4 0 0 0-.172-.523l-.005-.01a.744.744 0 0 1 .285-.991" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarVolumeSmallBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeSmallBrokenIcon],svg[solar-volume-small-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 9s.5.9.5 3s-.5 3-.5 3M1.959 8.577a3.2 3.2 0 0 1 1.381-1.3C3.94 7 4.626 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.923.648.993 2.157 1.133 5.174A68 68 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395q-.017-.27-.026-.528"></svg:path>`,
})
export class SolarVolumeSmallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeSmallLineDuotoneIcon],svg[solar-volume-small-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M1.535 10.971c.073-1.208.11-1.813.424-2.394a3.2 3.2 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.922.648.993 2.157 1.133 5.174A68 68 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17 17 0 0 1 1.5 12c0-.323.013-.671.035-1.029Z"></svg:path><svg:path stroke-linecap="round" d="M18 9s.5.9.5 3s-.5 3-.5 3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarVolumeSmallLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeSmallLinearIcon],svg[solar-volume-small-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M1.535 10.971c.073-1.208.11-1.813.424-2.394a3.2 3.2 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.922.648.993 2.157 1.133 5.174A68 68 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17 17 0 0 1 1.5 12c0-.323.013-.671.035-1.029Z"></svg:path><svg:path stroke-linecap="round" d="M18 9s.5.9.5 3s-.5 3-.5 3"></svg:path></svg:g>`,
})
export class SolarVolumeSmallLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarVolumeSmallOutlineIcon],svg[solar-volume-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.14 4.91c-.714.347-1.62.942-2.909 1.792l-.219.144l-.05.033c-.38.25-.643.424-.931.552a3.8 3.8 0 0 1-.89.267c-.31.052-.626.052-1.082.052H6c-1.444 0-1.93.016-2.345.208a2.47 2.47 0 0 0-1.036.975c-.218.405-.259.82-.336 2.084c-.02.347-.033.68-.033.983s.012.636.033.983c.077 1.264.118 1.68.336 2.084c.209.389.635.79 1.036.975c.414.192.901.208 2.345.208h.06c.455 0 .77 0 1.081.052q.462.079.89.267c.288.128.552.301.932.552l.05.033l.218.144c1.29.85 2.195 1.445 2.91 1.792c.711.346 1.068.36 1.317.275c.137-.047.272-.115.39-.199c.217-.152.415-.447.553-1.218c.14-.775.191-1.847.263-3.377c.052-1.12.086-2.06.086-2.571s-.034-1.451-.086-2.57c-.072-1.531-.123-2.603-.262-3.378c-.14-.771-.337-1.066-.553-1.218a1.6 1.6 0 0 0-.391-.2c-.25-.084-.606-.07-1.318.276m-.655-1.35c.826-.4 1.64-.624 2.457-.345c.272.093.534.226.769.391c.706.497 1.005 1.28 1.167 2.18c.159.884.213 2.056.281 3.516l.003.058c.052 1.115.088 2.088.088 2.64s-.036 1.525-.088 2.64l-.003.058c-.068 1.46-.122 2.632-.281 3.516c-.162.9-.461 1.683-1.167 2.18a3 3 0 0 1-.769.39c-.818.28-1.631.057-2.457-.344c-.814-.396-1.8-1.047-3.032-1.858l-.267-.176c-.447-.295-.602-.394-.76-.464q-.257-.114-.535-.16c-.171-.03-.354-.032-.89-.032h-.162c-1.217 0-2.062.001-2.814-.347a3.96 3.96 0 0 1-1.727-1.624c-.392-.729-.438-1.49-.504-2.575l-.008-.13A18 18 0 0 1 .75 12c0-.341.014-.706.036-1.074l.008-.13C.86 9.712.906 8.95 1.298 8.22a3.96 3.96 0 0 1 1.727-1.624c.752-.348 1.597-.348 2.814-.347H6c.537 0 .72-.002.891-.031a2.3 2.3 0 0 0 .534-.16c.16-.07.314-.17.761-.465l.267-.176c1.231-.811 2.218-1.462 3.032-1.857" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.656 8.637a.751.751 0 0 0-1.317.718c.007.014.025.053.043.097c.035.087.087.235.141.447c.11.424.227 1.111.227 2.101s-.118 1.677-.227 2.101c-.054.212-.106.36-.141.447l-.043.097a.75.75 0 0 0 .297 1.01c.362.202.835.04 1.036-.322l.027-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5 5 0 0 0-.203-.631a3 3 0 0 0-.075-.175z"></svg:path>`,
})
export class SolarVolumeSmallOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWadOfMoneyBoldIcon],svg[solar-wad-of-money-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 5c-2.317.006-3.557.063-4.472.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104c.915.611 2.155.668 4.472.674v-4.094a3.001 3.001 0 0 1 0-5.811zm1.5 14h4.5V5h-4.5zm6-14v4.095a3.001 3.001 0 0 1 0 5.81V19c2.317-.006 3.558-.063 4.472-.674a4 4 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104c-.915-.611-2.155-.668-4.472-.673"></svg:path>`,
})
export class SolarWadOfMoneyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWadOfMoneyBoldDuotoneIcon],svg[solar-wad-of-money-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 19h1.5c2.317-.005 3.558-.062 4.472-.674a4 4 0 0 0 1.104-1.103C22 16.213 22 14.809 22 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.103c-.915-.612-2.155-.669-4.472-.674h-1.5V9H15a3 3 0 1 1 0 6h-.75zm-4.5 0v-4H9a3 3 0 1 1 0-6h.75V5.001h-1.5c-2.317.005-3.557.062-4.472.674a4 4 0 0 0-1.104 1.103C2 7.787 2 9.192 2 12c0 2.81 0 4.214.674 5.223a4 4 0 0 0 1.104 1.103c.915.612 2.155.669 4.472.674z"></svg:path><svg:path fill="currentColor" d="M9.75 19h4.5V5h-4.5z" opacity=".5"></svg:path>`,
})
export class SolarWadOfMoneyBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWadOfMoneyBrokenIcon],svg[solar-wad-of-money-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M15 5H9c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104c.347.232.74.384 1.222.484M9 19h6c2.809 0 4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104c-.347-.232-.74-.384-1.222-.484"></svg:path><svg:path d="M9 9a3 3 0 1 0 0 6m6-6a3 3 0 1 1 0 6"></svg:path><svg:path stroke-linecap="round" d="M9 5v14m6-14v14"></svg:path></svg:g>`,
})
export class SolarWadOfMoneyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWadOfMoneyLineDuotoneIcon],svg[solar-wad-of-money-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 19c-2.809 0-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C2 16.213 2 14.81 2 12s0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C4.787 5 6.19 5 9 5h6c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C22 7.787 22 9.19 22 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C19.213 19 17.81 19 15 19z"></svg:path><svg:path d="M9 9a3 3 0 1 0 0 6m6-6a3 3 0 1 1 0 6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M9 5v13.5M15 5v13.5"></svg:path></svg:g>`,
})
export class SolarWadOfMoneyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWadOfMoneyLinearIcon],svg[solar-wad-of-money-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 19c-2.809 0-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C2 16.213 2 14.81 2 12s0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C4.787 5 6.19 5 9 5h6c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C22 7.787 22 9.19 22 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C19.213 19 17.81 19 15 19z"></svg:path><svg:path d="M9 9a3 3 0 1 0 0 6m6-6a3 3 0 1 1 0 6"></svg:path><svg:path stroke-linecap="round" d="M9 5v13.5M15 5v13.5"></svg:path></svg:g>`,
})
export class SolarWadOfMoneyLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWadOfMoneyOutlineIcon],svg[solar-wad-of-money-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.75 5.75v2.575a3.751 3.751 0 0 1 0 7.35v2.574c1.037-.002 1.824-.015 2.46-.08c.77-.078 1.235-.226 1.596-.467c.354-.237.66-.542.896-.896c.241-.361.39-.827.468-1.596c.08-.781.08-1.79.08-3.21s0-2.429-.08-3.21c-.079-.77-.227-1.235-.468-1.596a3.3 3.3 0 0 0-.896-.896c-.361-.241-.827-.39-1.596-.468c-.636-.064-1.423-.077-2.46-.08m-1.5 12.5V5.75h-4.5v12.5zm-6 0v-2.575a3.751 3.751 0 0 1 0-7.35V5.751c-1.037.002-1.824.015-2.46.08c-.77.078-1.235.226-1.596.467a3.3 3.3 0 0 0-.896.896c-.241.361-.39.827-.468 1.596c-.08.781-.08 1.79-.08 3.21s0 2.429.08 3.21c.079.77.227 1.235.468 1.596c.237.354.542.66.896.896c.361.241.827.39 1.596.468c.636.064 1.423.077 2.46.08m0-8.372a2.25 2.25 0 0 0 0 4.244zm7.5 4.244a2.251 2.251 0 0 0 0-4.244zm2.612-9.784c.888.09 1.629.28 2.277.713c.519.346.964.791 1.31 1.31c.434.648.623 1.39.713 2.277c.088.866.088 1.951.088 3.32v.084c0 1.369 0 2.454-.088 3.32c-.09.888-.28 1.629-.712 2.277a4.8 4.8 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713c-.866.088-1.951.088-3.32.088H8.958c-1.369 0-2.454 0-3.32-.088c-.888-.09-1.629-.28-2.277-.712a4.8 4.8 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277c-.088-.866-.088-1.951-.088-3.32v-.084c0-1.369 0-2.454.088-3.32c.09-.888.28-1.629.713-2.277a4.8 4.8 0 0 1 1.31-1.31c.648-.434 1.39-.623 2.277-.713c.866-.088 1.951-.088 3.32-.088h6.084c1.369 0 2.454 0 3.32.088" clip-rule="evenodd"></svg:path>`,
})
export class SolarWadOfMoneyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalkingBoldIcon],svg[solar-walking-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.528 10.753a4 4 0 0 0-.258-.003h-1.091l-.091.912c-.174 1.74-.235 2.44-.08 3.101c.156.662.522 1.261 1.453 2.742l2.575 4.096a.75.75 0 0 1-1.27.798l-2.575-4.096l-.073-.116c-.835-1.327-1.35-2.146-1.57-3.08s-.123-1.898.034-3.459l.013-.136l.076-.761c-.5.003-.872.012-1.17.049c-.378.045-.554.125-.679.225c-.124.1-.24.254-.367.613c-.133.377-.248.888-.419 1.657l-.304 1.368a.75.75 0 0 1-1.464-.326l.314-1.411c.158-.714.292-1.314.459-1.788c.177-.502.419-.943.843-1.283s.906-.48 1.435-.545c.499-.06 1.114-.06 1.845-.06h2.131c.136 0 .241 0 .34.007a2.75 2.75 0 0 1 2.417 1.887c.03.094.056.197.09.329l.005.024c.056.224.073.288.089.332c.21.606.845.955 1.469.807c.046-.01.109-.031.328-.104l.73-.243a.75.75 0 0 1 .474 1.422l-.73.244l-.032.01a5 5 0 0 1-.424.13a2.75 2.75 0 0 1-3.232-1.774a5 5 0 0 1-.119-.427l-.008-.034a4 4 0 0 0-.066-.25a1.25 1.25 0 0 0-1.098-.857m-3.112 6.123a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208" clip-rule="evenodd"></svg:path>`,
})
export class SolarWalkingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalkingBoldDuotoneIcon],svg[solar-walking-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.528 10.753a4 4 0 0 0-.258-.003h-1.091l-.091.912c-.174 1.74-.235 2.44-.08 3.101c.156.662.522 1.261 1.453 2.742l2.575 4.096a.75.75 0 1 1-1.27.798l-2.575-4.096l-.073-.116c-.835-1.327-1.35-2.146-1.57-3.08s-.123-1.898.034-3.459l.013-.136l.076-.761c-.5.003-.872.012-1.17.049c-.378.045-.554.125-.679.225c-.124.1-.24.254-.367.613c-.133.377-.248.888-.419 1.657l-.304 1.368a.75.75 0 1 1-1.464-.326l.314-1.411c.158-.714.292-1.314.459-1.788c.177-.502.419-.943.843-1.283s.906-.48 1.435-.545c.499-.06 1.114-.06 1.845-.06h2.131c.136 0 .241 0 .34.007a2.75 2.75 0 0 1 2.417 1.887c.03.094.056.197.09.329l.005.024c.056.224.073.288.089.332c.21.606.845.955 1.469.807c.046-.01.109-.031.328-.104l.73-.243a.75.75 0 0 1 .474 1.422l-.73.244l-.032.01a5 5 0 0 1-.424.13a2.75 2.75 0 0 1-3.232-1.774a5 5 0 0 1-.119-.427l-.008-.034a4 4 0 0 0-.066-.25a1.25 1.25 0 0 0-1.098-.857" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M9.416 16.876a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208" opacity=".5"></svg:path>`,
})
export class SolarWalkingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalkingBrokenIcon],svg[solar-walking-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="m10.341 11.587l.747.075zm.85 6.716a.75.75 0 1 0 1.27-.798zm2.574 4.096a.75.75 0 0 0 1.27-.798zm-7.461-9.267l.732.163zm-1.036 1.205a.75.75 0 1 0 1.464.326zm12.002-1.094l-.237-.711zm.967.468a.75.75 0 0 0-.474-1.422zm-5.655-3.706l-.054.748zm1.838 1.673l-.728.182zm-.08-.3l-.714.233zm-6.987-.938l.47.585zm7.174 1.635l.709-.246zm2.35 1.29l-.172-.73zm-2.785 6.736a.75.75 0 0 0-1.27.798zM9.754 9.925l-.159 1.587l1.493.15l.158-1.587zm.746-.675h-.291v1.5h.291zm-4.928 3.72l-.304 1.367l1.464.326l.304-1.368zm4.928-2.22h1.77v-1.5H10.5zm7.007 3.205l.73-.244l-.474-1.422l-.73.243zM12.27 10.75c.172 0 .22 0 .258.003l.107-1.496c-.105-.007-.217-.007-.365-.007zm2.877.747c-.036-.144-.062-.253-.095-.353l-1.426.467c.012.036.024.082.066.25zm-2.62-.744c.507.037.941.375 1.1.858l1.425-.467a2.75 2.75 0 0 0-2.417-1.887zM10.21 9.25c-.75 0-1.381-.001-1.89.06c-.529.065-1.012.205-1.435.545l.938 1.17c.125-.1.3-.18.678-.226c.397-.048.921-.049 1.709-.049zm-3.173 4.045c.171-.769.286-1.28.42-1.657c.126-.359.242-.513.366-.613l-.938-1.17c-.424.34-.666.78-.843 1.283c-.17.483-.306 1.099-.47 1.832zm6.656-1.435c.048.193.083.337.126.461l1.418-.492a5 5 0 0 1-.089-.332zm3.341.672c-.22.073-.282.093-.328.104l.346 1.46c.127-.03.268-.079.456-.141zm-3.215-.211a2.75 2.75 0 0 0 3.233 1.774l-.346-1.46a1.25 1.25 0 0 1-1.47-.806zm-4.223-.809c-.164 1.641-.273 2.633-.047 3.594l1.46-.343c-.155-.662-.094-1.361.08-3.101zm2.865 5.993c-.93-1.481-1.296-2.08-1.452-2.742l-1.46.343c.226.962.765 1.8 1.643 3.197zm.362 3.394l.943 1.5l1.27-.798l-.943-1.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5L6 22"></svg:path></svg:g>`,
})
export class SolarWalkingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalkingLineDuotoneIcon],svg[solar-walking-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path fill="currentColor" d="m10.341 11.587l.747.075zm1.485 6.317l-.635.4zm1.94 4.495a.75.75 0 0 0 1.27-.798zm-7.462-9.267l.732.163zm-1.036 1.205a.75.75 0 1 0 1.464.326zm12.002-1.094l-.237-.711zm.967.468a.75.75 0 0 0-.474-1.422zm-5.655-3.706l-.054.748zm1.838 1.673l-.728.182zm-.08-.3l-.714.233zm-6.987-.938l.47.585zm7.174 1.635l.709-.246zm2.35 1.29l-.172-.73zm-7.123-3.44l-.159 1.587l1.493.15l.158-1.587zm1.437 8.378l2.574 4.096l1.27-.798l-2.575-4.096zM10.5 9.25h-.291v1.5h.291zm-4.928 3.72l-.304 1.367l1.464.326l.304-1.368zm4.928-2.22h1.77v-1.5H10.5zm7.007 3.205l.73-.244l-.474-1.422l-.73.243zM12.27 10.75c.172 0 .22 0 .258.003l.107-1.496c-.105-.007-.217-.007-.365-.007zm2.877.747c-.036-.144-.062-.253-.095-.353l-1.426.467c.012.036.024.082.066.25zm-2.62-.744c.507.037.941.375 1.1.858l1.425-.467a2.75 2.75 0 0 0-2.417-1.887zM10.21 9.25c-.75 0-1.381-.001-1.89.06c-.529.065-1.012.205-1.435.545l.938 1.17c.125-.1.3-.18.678-.226c.397-.048.921-.049 1.709-.049zm-3.173 4.045c.171-.769.286-1.28.42-1.657c.126-.359.242-.513.366-.613l-.938-1.17c-.424.34-.666.78-.843 1.283c-.17.483-.306 1.099-.47 1.832zm6.656-1.435c.048.193.083.337.126.461l1.418-.492a5 5 0 0 1-.089-.332zm3.341.672c-.22.073-.282.093-.328.104l.346 1.46c.127-.03.268-.079.456-.141zm-3.215-.211a2.75 2.75 0 0 0 3.233 1.774l-.346-1.46a1.25 1.25 0 0 1-1.47-.806zm-4.223-.809c-.164 1.641-.273 2.633-.047 3.594l1.46-.343c-.155-.662-.094-1.361.08-3.101zm2.865 5.993c-.93-1.481-1.296-2.08-1.452-2.742l-1.46.343c.226.962.765 1.8 1.643 3.197z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5L6 22" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWalkingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalkingLinearIcon],svg[solar-walking-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="m10.341 11.587l.747.075zm1.485 6.317l-.635.4zm1.94 4.495a.75.75 0 0 0 1.27-.798zm-7.462-9.267l.732.163zm-1.036 1.205a.75.75 0 1 0 1.464.326zm12.002-1.094l-.237-.711zm.967.468a.75.75 0 0 0-.474-1.422zm-5.655-3.706l-.054.748zm1.838 1.673l-.728.182zm-.08-.3l-.714.233zm-6.987-.938l.47.585zm7.174 1.635l.709-.246zm2.35 1.29l-.172-.73zm-7.123-3.44l-.159 1.587l1.493.15l.158-1.587zm1.437 8.378l2.574 4.096l1.27-.798l-2.575-4.096zM10.5 9.25h-.291v1.5h.291zm-4.928 3.72l-.304 1.367l1.464.326l.304-1.368zm4.928-2.22h1.77v-1.5H10.5zm7.007 3.205l.73-.244l-.474-1.422l-.73.243zM12.27 10.75c.172 0 .22 0 .258.003l.107-1.496c-.105-.007-.217-.007-.365-.007zm2.877.747c-.036-.144-.062-.253-.095-.353l-1.426.467c.012.036.024.082.066.25zm-2.62-.744c.507.037.941.375 1.1.858l1.425-.467a2.75 2.75 0 0 0-2.417-1.887zM10.21 9.25c-.75 0-1.381-.001-1.89.06c-.529.065-1.012.205-1.435.545l.938 1.17c.125-.1.3-.18.678-.226c.397-.048.921-.049 1.709-.049zm-3.173 4.045c.171-.769.286-1.28.42-1.657c.126-.359.242-.513.366-.613l-.938-1.17c-.424.34-.666.78-.843 1.283c-.17.483-.306 1.099-.47 1.832zm6.656-1.435c.048.193.083.337.126.461l1.418-.492a5 5 0 0 1-.089-.332zm3.341.672c-.22.073-.282.093-.328.104l.346 1.46c.127-.03.268-.079.456-.141zm-3.215-.211a2.75 2.75 0 0 0 3.233 1.774l-.346-1.46a1.25 1.25 0 0 1-1.47-.806zm-4.223-.809c-.164 1.641-.273 2.633-.047 3.594l1.46-.343c-.155-.662-.094-1.361.08-3.101zm2.865 5.993c-.93-1.481-1.296-2.08-1.452-2.742l-1.46.343c.226.962.765 1.8 1.643 3.197z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5L6 22"></svg:path></svg:g>`,
})
export class SolarWalkingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalkingOutlineIcon],svg[solar-walking-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 2.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M9.25 4.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m4.278 6.253a4 4 0 0 0-.258-.003h-1.091l-.091.912c-.174 1.74-.235 2.44-.08 3.101c.156.662.522 1.261 1.453 2.742l2.574 4.096a.75.75 0 0 1-1.27.798l-2.574-4.096l-.073-.116c-.835-1.327-1.35-2.146-1.57-3.08s-.123-1.898.034-3.459l.013-.136l.076-.761c-.5.003-.872.012-1.17.049c-.378.045-.554.125-.679.225c-.124.1-.24.254-.367.613c-.133.377-.248.888-.419 1.657l-.304 1.368a.75.75 0 0 1-1.464-.326l.314-1.411c.158-.714.292-1.314.459-1.788c.177-.502.419-.943.843-1.283s.906-.48 1.435-.545c.499-.06 1.114-.06 1.845-.06h2.131c.136 0 .241 0 .34.007a2.75 2.75 0 0 1 2.417 1.887c.03.094.056.197.09.329l.005.024c.056.224.073.288.089.332c.21.606.845.955 1.469.807c.046-.01.109-.031.328-.104l.73-.243a.75.75 0 0 1 .474 1.422l-.73.244l-.032.01a5 5 0 0 1-.424.13a2.75 2.75 0 0 1-3.232-1.774a5 5 0 0 1-.119-.428l-.008-.033a4 4 0 0 0-.066-.25a1.25 1.25 0 0 0-1.098-.857m-3.112 6.123a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208" clip-rule="evenodd"></svg:path>`,
})
export class SolarWalkingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalkingRoundBoldIcon],svg[solar-walking-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.93 9.267c.199-.01.392-.017.57-.017c.554 0 1.154.062 1.694.14c1.521.218 2.673 1.34 3.134 2.722a.67.67 0 0 0 .746.449l1.803-.3a.75.75 0 1 1 .246 1.479l-1.803.3a2.17 2.17 0 0 1-2.415-1.454c-.307-.922-1.043-1.585-1.924-1.712a14 14 0 0 0-.805-.093l-.271 2.711c-.084.84-.094 1.062-.037 1.26c.056.198.182.38.697 1.049l4.43 5.74a.75.75 0 1 1-1.188.917l-4.43-5.74l-.07-.093c-.411-.53-.736-.951-.882-1.46c-.145-.51-.092-1.038-.025-1.706l.012-.116l.254-2.54c-1.673.273-2.916 1.846-2.916 3.697a.75.75 0 0 1-1.5 0c0-2.64 1.914-5.083 4.68-5.233m-.783 7.498a.75.75 0 0 1 .588.882a7.75 7.75 0 0 1-2.757 4.531l-.51.408a.75.75 0 0 1-.936-1.172l.509-.407a6.25 6.25 0 0 0 2.224-3.654a.75.75 0 0 1 .882-.588" clip-rule="evenodd"></svg:path>`,
})
export class SolarWalkingRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalkingRoundBoldDuotoneIcon],svg[solar-walking-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.93 9.267c.199-.01.392-.017.57-.017c.554 0 1.154.062 1.694.14c1.521.218 2.673 1.34 3.134 2.722a.67.67 0 0 0 .746.449l1.803-.3a.75.75 0 1 1 .246 1.479l-1.803.3a2.17 2.17 0 0 1-2.415-1.454c-.307-.922-1.043-1.585-1.924-1.712c-.268-.039-.54-.071-.805-.093l-.271 2.711c-.085.84-.094 1.062-.038 1.26c.057.198.183.38.698 1.049l4.43 5.74a.75.75 0 1 1-1.188.917l-4.43-5.74l-.07-.093c-.411-.53-.736-.951-.882-1.46c-.145-.51-.092-1.038-.025-1.706l.012-.116l.254-2.54c-1.673.273-2.916 1.846-2.916 3.697a.75.75 0 0 1-1.5 0c0-2.64 1.914-5.083 4.68-5.233" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-4.853 12.265a.75.75 0 0 1 .588.882a7.75 7.75 0 0 1-2.757 4.532l-.51.407a.75.75 0 1 1-.936-1.171l.509-.408a6.25 6.25 0 0 0 2.224-3.654a.75.75 0 0 1 .882-.588" opacity=".5"></svg:path>`,
})
export class SolarWalkingRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalkingRoundBrokenIcon],svg[solar-walking-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m7 22l.51-.407A7 7 0 0 0 10 17.5"></svg:path><svg:path fill="currentColor" d="m11.158 13.418l.747.074zm.813 2.841l-.594.458zm3.836 6.2a.75.75 0 1 0 1.187-.917zM10.97 10.015l-.04-.749zm2.117.116l-.107.742zm4.11 3.169l-.123-.74zm1.926.439a.75.75 0 1 0-.246-1.48zm-3.507-1.391l.712-.237zM6.25 14.5a.75.75 0 0 0 1.5 0zm6.235 3.652a.75.75 0 1 0 1.187-.916zm3.402 1.955a.75.75 0 1 0-1.188.916zM10.754 9.925l-.342 3.418l1.492.15l.342-3.418zm.746-.675c-.178 0-.371.006-.57.017l.08 1.498q.273-.015.49-.015zm0 1.5c.454 0 .976.051 1.48.124l.214-1.485c-.54-.077-1.14-.139-1.694-.139zm5.82 3.29l1.803-.3l-.246-1.48l-1.803.3zm-4.34-3.166c.882.127 1.617.79 1.925 1.712l1.423-.474c-.46-1.382-1.613-2.504-3.134-2.723zm-2.05-1.607c-2.766.15-4.68 2.592-4.68 5.233h1.5c0-1.976 1.416-3.635 3.26-3.735zm3.975 3.319a2.17 2.17 0 0 0 2.415 1.454l-.246-1.48a.67.67 0 0 1-.746-.448zm-4.493.757c-.072.723-.14 1.283.013 1.822l1.442-.413c-.056-.198-.047-.42.037-1.26zm2.153 2.458c-.515-.668-.64-.851-.698-1.05l-1.442.414c.154.538.508.977.952 1.552zm-1.187.916l1.107 1.435l1.187-.916l-1.107-1.435zm3.321 4.306l1.108 1.435l1.187-.916l-1.107-1.435z"></svg:path></svg:g>`,
})
export class SolarWalkingRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalkingRoundLineDuotoneIcon],svg[solar-walking-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m7 22l.51-.407A7 7 0 0 0 10 17.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="m11.158 13.418l.747.074zm.813 2.841l.594-.458zm3.836 6.2a.75.75 0 1 0 1.187-.917zM10.97 10.015l-.04-.749zm2.117.116l-.107.742zm4.11 3.169l-.123-.74zm1.926.439a.75.75 0 1 0-.246-1.48zm-3.507-1.391l.712-.237zM6.25 14.5a.75.75 0 0 0 1.5 0zm4.504-4.575l-.342 3.418l1.492.15l.342-3.418zm.624 6.792l4.429 5.741l1.187-.916l-4.429-5.741zM11.5 9.25c-.178 0-.371.006-.57.017l.08 1.498q.273-.015.49-.015zm0 1.5c.454 0 .976.051 1.48.124l.214-1.485c-.54-.077-1.14-.139-1.694-.139zm5.82 3.29l1.803-.3l-.246-1.48l-1.803.3zm-4.34-3.166c.882.127 1.617.79 1.925 1.712l1.423-.474c-.46-1.382-1.613-2.504-3.134-2.723zm-2.05-1.607c-2.766.15-4.68 2.592-4.68 5.233h1.5c0-1.976 1.416-3.635 3.26-3.735zm3.975 3.319a2.17 2.17 0 0 0 2.415 1.454l-.246-1.48a.67.67 0 0 1-.746-.448zm-4.493.757c-.072.723-.14 1.283.013 1.822l1.442-.413c-.056-.198-.047-.42.037-1.26zm2.153 2.458c-.515-.668-.64-.851-.698-1.05l-1.442.414c.154.538.508.977.952 1.552z"></svg:path></svg:g>`,
})
export class SolarWalkingRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalkingRoundLinearIcon],svg[solar-walking-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m7 22l.51-.407A7 7 0 0 0 10 17.5"></svg:path><svg:path fill="currentColor" d="m11.158 13.418l.747.074zm.813 2.841l.594-.458zm3.836 6.2a.75.75 0 1 0 1.187-.917zM10.97 10.015l-.04-.749zm2.117.116l-.107.742zm4.11 3.169l-.123-.74zm1.926.439a.75.75 0 1 0-.246-1.48zm-3.507-1.391l.712-.237zM6.25 14.5a.75.75 0 0 0 1.5 0zm4.504-4.575l-.342 3.418l1.492.15l.342-3.418zm.624 6.792l4.429 5.741l1.187-.916l-4.429-5.741zM11.5 9.25c-.178 0-.371.006-.57.017l.08 1.498q.273-.015.49-.015zm0 1.5c.454 0 .976.051 1.48.124l.214-1.485c-.54-.077-1.14-.139-1.694-.139zm5.82 3.29l1.803-.3l-.246-1.48l-1.803.3zm-4.34-3.166c.882.127 1.617.79 1.925 1.712l1.423-.474c-.46-1.382-1.613-2.504-3.134-2.723zm-2.05-1.607c-2.766.15-4.68 2.592-4.68 5.233h1.5c0-1.976 1.416-3.635 3.26-3.735zm3.975 3.319a2.17 2.17 0 0 0 2.415 1.454l-.246-1.48a.67.67 0 0 1-.746-.448zm-4.493.757c-.072.723-.14 1.283.013 1.822l1.442-.413c-.056-.198-.047-.42.037-1.26zm2.153 2.458c-.515-.668-.64-.851-.698-1.05l-1.442.414c.154.538.508.977.952 1.552z"></svg:path></svg:g>`,
})
export class SolarWalkingRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalkingRoundOutlineIcon],svg[solar-walking-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 2.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M9.25 4.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m1.68 4.767c.199-.01.392-.017.57-.017c.554 0 1.154.062 1.694.14c1.521.218 2.673 1.34 3.134 2.722a.67.67 0 0 0 .746.449l1.803-.3a.75.75 0 1 1 .246 1.479l-1.803.3a2.17 2.17 0 0 1-2.415-1.454c-.307-.922-1.043-1.585-1.924-1.712a14 14 0 0 0-.805-.093l-.271 2.711c-.084.84-.094 1.062-.037 1.26c.056.198.182.38.697 1.049l4.43 5.74a.75.75 0 1 1-1.188.917l-4.43-5.74l-.07-.093c-.411-.53-.736-.951-.882-1.46c-.145-.51-.092-1.038-.025-1.706l.012-.116l.254-2.54c-1.673.273-2.916 1.846-2.916 3.697a.75.75 0 0 1-1.5 0c0-2.64 1.914-5.083 4.68-5.233m-.783 7.498a.75.75 0 0 1 .588.882a7.75 7.75 0 0 1-2.757 4.531l-.51.408a.75.75 0 0 1-.936-1.172l.509-.407a6.25 6.25 0 0 0 2.224-3.654a.75.75 0 0 1 .882-.588" clip-rule="evenodd"></svg:path>`,
})
export class SolarWalkingRoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWallet2BoldIcon],svg[solar-wallet-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M21.1 8.004q-.085-.005-.181-.004h-2.525c-2.068 0-3.837 1.628-3.837 3.75s1.77 3.75 3.837 3.75h2.525q.096.001.182-.004a1.755 1.755 0 0 0 1.645-1.628c.004-.06.004-.125.004-.185V9.817c0-.06 0-.125-.004-.185a1.755 1.755 0 0 0-1.645-1.628m-2.928 4.746c.532 0 .963-.448.963-1s-.431-1-.963-1c-.533 0-.964.448-.964 1s.431 1 .964 1"></svg:path><svg:path d="M20.918 17a.22.22 0 0 1 .221.278c-.2.712-.519 1.32-1.03 1.83c-.749.75-1.698 1.081-2.87 1.239c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87C2 15.099 2 13.644 2 11.806v-.112C2 9.856 2 8.4 2.153 7.26c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238C7.401 3 8.856 3 10.694 3h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.511.512.83 1.119 1.03 1.831a.22.22 0 0 1-.221.278h-2.524c-2.837 0-5.337 2.24-5.337 5.25s2.5 5.25 5.337 5.25zM7 15.5a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75"></svg:path></svg:g>`,
})
export class SolarWallet2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWallet2BoldDuotoneIcon],svg[solar-wallet-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 14.75a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.188 8.004q-.094-.005-.2-.004h-2.773C15.944 8 14 9.736 14 12s1.944 4 4.215 4h2.773q.106.001.2-.004c.923-.056 1.739-.757 1.808-1.737c.004-.064.004-.133.004-.197V9.938c0-.064 0-.133-.004-.197c-.069-.98-.885-1.68-1.808-1.737m-3.217 5.063c.584 0 1.058-.478 1.058-1.067c0-.59-.474-1.067-1.058-1.067s-1.06.478-1.06 1.067c0 .59.475 1.067 1.06 1.067" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.14 8.002c0-1.181-.044-2.448-.798-3.355a4 4 0 0 0-.233-.256c-.749-.748-1.698-1.08-2.87-1.238C16.099 3 14.644 3 12.806 3h-2.112C8.856 3 7.4 3 6.26 3.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87C2 8.401 2 9.856 2 11.694v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238q.305-.308.526-.66c.45-.72.504-1.602.504-2.45l-.15.001h-2.774C15.944 16 14 14.264 14 12s1.944-4 4.215-4h2.773q.079 0 .151.002" opacity=".5"></svg:path>`,
})
export class SolarWallet2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWallet2BrokenIcon],svg[solar-wallet-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="18" cy="12" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 10.5c0-.077 0-.533-.002-.565c-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032 0-.488 0-.565M13 4c3.771 0 5.657 0 6.828 1.172c.809.808 1.06 1.956 1.137 3.828M10 20h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828M9 4c-3.114.01-4.765.108-5.828 1.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828c.653.654 1.528.943 2.828 1.07M7 9v1m0 5v-2.5"></svg:path></svg:g>`,
})
export class SolarWallet2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWallet2LineDuotoneIcon],svg[solar-wallet-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 15V9"></svg:path><svg:path stroke-width="1.5" d="M20.833 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148c-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9Z"></svg:path><svg:path stroke-width="1.5" d="M20.965 9c-.078-1.872-.328-3.02-1.137-3.828C18.657 4 16.771 4 13 4h-3C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.991 12H18" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWallet2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWallet2LinearIcon],svg[solar-wallet-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 15V9"></svg:path><svg:path stroke-width="1.5" d="M20.833 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148c-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9Z"></svg:path><svg:path stroke-width="1.5" d="M20.965 9c-.078-1.872-.328-3.02-1.137-3.828C18.657 4 16.771 4 13 4h-3C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.991 12h.01"></svg:path></svg:g>`,
})
export class SolarWallet2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWallet2OutlineIcon],svg[solar-wallet-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h3.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.924.925 1.219 2.163 1.326 3.77c.577.253 1.013.79 1.06 1.47c.005.061.005.126.005.186v3.866c0 .06 0 .125-.004.185c-.048.68-.484 1.218-1.061 1.472c-.107 1.606-.402 2.844-1.326 3.769c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m10.224 12.5H18.23c-2.145 0-3.981-1.628-3.981-3.75s1.836-3.75 3.98-3.75h1.938c-.114-1.341-.371-2.05-.87-2.548c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-3c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h3c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.499-.498.756-1.206.87-2.548m.756-6H18.23c-1.424 0-2.481 1.059-2.481 2.25s1.057 2.25 2.48 2.25h2.718c.206-.013.295-.152.302-.236V9.986c-.007-.084-.096-.223-.302-.235zM7 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarWallet2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalletBoldIcon],svg[solar-wallet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M21.1 8.004q-.085-.005-.181-.004h-2.525c-2.068 0-3.837 1.628-3.837 3.75s1.77 3.75 3.837 3.75h2.525q.096.001.182-.004a1.755 1.755 0 0 0 1.645-1.628c.004-.06.004-.125.004-.185V9.817c0-.06 0-.125-.004-.185a1.755 1.755 0 0 0-1.645-1.628m-2.928 4.746c.532 0 .963-.448.963-1s-.431-1-.963-1c-.533 0-.964.448-.964 1s.431 1 .964 1"></svg:path><svg:path d="M20.918 17a.22.22 0 0 1 .221.278c-.2.712-.519 1.32-1.03 1.83c-.749.75-1.698 1.081-2.87 1.239c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87C2 15.099 2 13.644 2 11.806v-.112C2 9.856 2 8.4 2.153 7.26c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238C7.401 3 8.856 3 10.694 3h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.511.512.83 1.119 1.03 1.831a.22.22 0 0 1-.221.278h-2.524c-2.837 0-5.337 2.24-5.337 5.25s2.5 5.25 5.337 5.25zM5.75 7a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path></svg:g>`,
})
export class SolarWalletBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalletBoldDuotoneIcon],svg[solar-wallet-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 7a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.188 8.004q-.094-.005-.2-.004h-2.773C15.944 8 14 9.736 14 12s1.944 4 4.215 4h2.773q.106.001.2-.004c.923-.056 1.739-.757 1.808-1.737c.004-.064.004-.133.004-.197V9.938c0-.064 0-.133-.004-.197c-.069-.98-.885-1.68-1.808-1.737m-3.217 5.063c.584 0 1.058-.478 1.058-1.067c0-.59-.474-1.067-1.058-1.067s-1.06.478-1.06 1.067c0 .59.475 1.067 1.06 1.067" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.14 8.002c0-1.181-.044-2.448-.798-3.355a4 4 0 0 0-.233-.256c-.749-.748-1.698-1.08-2.87-1.238C16.099 3 14.644 3 12.806 3h-2.112C8.856 3 7.4 3 6.26 3.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87C2 8.401 2 9.856 2 11.694v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238q.305-.308.526-.66c.45-.72.504-1.602.504-2.45l-.15.001h-2.774C15.944 16 14 14.264 14 12s1.944-4 4.215-4h2.773q.079 0 .151.002" opacity=".5"></svg:path>`,
})
export class SolarWalletBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalletBrokenIcon],svg[solar-wallet-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 10.5c0-.077 0-.533-.002-.565c-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.488.002-.565"></svg:path><svg:circle cx="18" cy="12" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 4c3.771 0 5.657 0 6.828 1.172c.809.808 1.06 1.956 1.137 3.828M10 20h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828M9 4c-3.114.01-4.765.108-5.828 1.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828c.653.654 1.528.943 2.828 1.07"></svg:path></svg:g>`,
})
export class SolarWalletBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalletLineDuotoneIcon],svg[solar-wallet-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8h4"></svg:path><svg:path stroke-width="1.5" d="M20.833 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148c-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9Z"></svg:path><svg:path stroke-width="1.5" d="M20.965 9c-.078-1.872-.328-3.02-1.137-3.828C18.657 4 16.771 4 13 4h-3C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828" opacity=".4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.991 12H18" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWalletLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalletLinearIcon],svg[solar-wallet-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8h4"></svg:path><svg:path stroke-width="1.5" d="M20.833 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148c-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9Z"></svg:path><svg:path stroke-width="1.5" d="M20.965 9c-.078-1.872-.328-3.02-1.137-3.828C18.657 4 16.771 4 13 4h-3C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.991 12h.01"></svg:path></svg:g>`,
})
export class SolarWalletLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalletMoneyBoldIcon],svg[solar-wallet-money-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.41 9.86a3 3 0 0 0-.175-.003H17.8c-1.992 0-3.698 1.581-3.698 3.643s1.706 3.643 3.699 3.643h2.433q.092.001.175-.004a1.7 1.7 0 0 0 1.586-1.581c.004-.059.004-.122.004-.18v-3.756c0-.058 0-.121-.004-.18a1.7 1.7 0 0 0-1.585-1.581m-2.823 4.611c.513 0 .93-.434.93-.971s-.417-.971-.93-.971s-.929.434-.929.971s.416.971.93.971" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.234 18.6a.214.214 0 0 1 .214.27c-.194.692-.501 1.282-.994 1.778c-.721.727-1.636 1.05-2.766 1.203c-1.098.149-2.5.149-4.272.149h-2.037c-1.771 0-3.174 0-4.272-.149c-1.13-.153-2.045-.476-2.766-1.203C2.62 19.923 2.3 19 2.148 17.862C2 16.754 2 15.34 2 13.555v-.11c0-1.785 0-3.2.148-4.306C2.3 8 2.62 7.08 3.34 6.351c.721-.726 1.636-1.05 2.766-1.202C7.205 5 8.608 5 10.379 5h2.037c1.771 0 3.174 0 4.272.149c1.13.153 2.045.476 2.766 1.202c.493.497.8 1.087.994 1.78a.214.214 0 0 1-.214.269h-2.433c-2.734 0-5.143 2.177-5.143 5.1s2.41 5.1 5.144 5.1zM5.614 8.886a.725.725 0 0 0-.722.728c0 .403.323.729.722.729H9.47c.4 0 .723-.326.723-.729a.726.726 0 0 0-.723-.728z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m7.777 4.024l1.958-1.443a2.97 2.97 0 0 1 3.53 0l1.969 1.451C14.41 4 13.49 4 12.483 4h-2.17c-.922 0-1.769 0-2.536.024"></svg:path>`,
})
export class SolarWalletMoneyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalletMoneyBoldDuotoneIcon],svg[solar-wallet-money-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.892 9.614c0-.402.323-.728.722-.728H9.47c.4 0 .723.326.723.728a.726.726 0 0 1-.723.729H5.614a.726.726 0 0 1-.722-.729"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.188 10.004q-.094-.005-.2-.004h-2.773C15.944 10 14 11.736 14 14s1.944 4 4.215 4h2.773q.106.001.2-.004c.923-.056 1.739-.757 1.808-1.737c.004-.064.004-.133.004-.197v-4.124c0-.064 0-.133-.004-.197c-.069-.98-.885-1.68-1.808-1.737m-3.217 5.063c.584 0 1.058-.478 1.058-1.067c0-.59-.474-1.067-1.058-1.067s-1.06.478-1.06 1.067c0 .59.475 1.067 1.06 1.067" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.14 10.002c0-1.181-.044-2.448-.798-3.355a4 4 0 0 0-.233-.256c-.749-.748-1.698-1.08-2.87-1.238C16.099 5 14.644 5 12.806 5h-2.112C8.856 5 7.4 5 6.26 5.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87C2 10.401 2 11.856 2 13.694v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238q.305-.308.526-.66c.45-.72.504-1.602.504-2.45l-.15.001h-2.774C15.944 18 14 16.264 14 14s1.944-4 4.215-4h2.773q.079 0 .151.002" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.101 2.572L8 3.992l-1.733 1.16C7.405 5 8.859 5 10.694 5h2.112c1.838 0 3.294 0 4.433.153q.344.045.662.114L16 4l-2.113-1.428a3.42 3.42 0 0 0-3.786 0"></svg:path>`,
})
export class SolarWalletMoneyBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalletMoneyBrokenIcon],svg[solar-wallet-money-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.998 12.5c0-.077.002-.533 0-.565c-.036-.501-.465-.9-1.005-.933c-.035-.002-.076-.002-.16-.002h-2.602C16.446 11 15 12.343 15 14s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.488.002-.565"></svg:path><svg:circle cx="18" cy="14" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 22h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828m0-6c-.078-1.872-.328-3.02-1.137-3.828C18.657 6 16.771 6 13 6h-3C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14s0 5.657 1.172 6.828c.653.654 1.528.943 2.828 1.07M6 6l3.735-2.477a3.24 3.24 0 0 1 3.53 0L17 6"></svg:path></svg:g>`,
})
export class SolarWalletMoneyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalletMoneyLineDuotoneIcon],svg[solar-wallet-money-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 9h4" opacity=".5"></svg:path><svg:path stroke-width="1.5" d="M20.833 10h-2.602C16.446 10 15 11.343 15 13s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148c-.036-.501-.465-.9-1.005-.933c-.035-.002-.076-.002-.16-.002Z"></svg:path><svg:path stroke-width="1.5" d="M20.965 10c-.078-1.872-.328-3.02-1.137-3.828C18.657 5 16.771 5 13 5h-3C6.229 5 4.343 5 3.172 6.172S2 9.229 2 13s0 5.657 1.172 6.828S6.229 21 10 21h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="m6 5l3.735-2.477a3.24 3.24 0 0 1 3.53 0L17 5" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.991 13H18" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWalletMoneyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalletMoneyLinearIcon],svg[solar-wallet-money-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 10h4"></svg:path><svg:path stroke-width="1.5" d="M20.833 11h-2.602C16.446 11 15 12.343 15 14s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002c.54-.033.97-.432 1.005-.933c.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148c-.036-.501-.465-.9-1.005-.933c-.035-.002-.076-.002-.16-.002Z"></svg:path><svg:path stroke-width="1.5" d="M20.965 11c-.078-1.872-.328-3.02-1.137-3.828C18.657 6 16.771 6 13 6h-3C6.229 6 4.343 6 3.172 7.172S2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h3c3.771 0 5.657 0 6.828-1.172c.809-.808 1.06-1.956 1.137-3.828"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="m6 6l3.735-2.477a3.24 3.24 0 0 1 3.53 0L17 6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.991 14h.01"></svg:path></svg:g>`,
})
export class SolarWalletMoneyLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalletMoneyOutlineIcon],svg[solar-wallet-money-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="solarWalletMoneyOutline0" fill="currentColor" d="M19 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:defs><svg:path fill="currentColor" fill-rule="evenodd" d="M20.924 11.75H18.23c-1.424 0-2.481 1.059-2.481 2.25s1.057 2.25 2.48 2.25h2.718c.206-.013.295-.152.302-.236v-4.028c-.007-.084-.096-.223-.302-.235zm-.074-1.5q.1-.001.19.004c.87.053 1.641.71 1.706 1.628c.004.06.004.125.004.185v3.866c0 .06 0 .125-.004.185c-.065.918-.836 1.575-1.707 1.629q-.089.004-.19.003h-2.618c-2.145 0-3.981-1.628-3.981-3.75s1.836-3.75 3.98-3.75z" clip-rule="evenodd"></svg:path><svg:use href="#solarWalletMoneyOutline0"></svg:use><svg:path fill="currentColor" fill-rule="evenodd" d="M20.85 10.25q.1-.001.19.004c.225.013.443.067.645.156c-.107-1.606-.402-2.844-1.326-3.769c-.749-.748-1.698-1.08-2.87-1.238l-.042-.005l-.032-.023l-3.736-2.477a3.99 3.99 0 0 0-4.358 0L5.586 5.375l-.033.023l-.042.005c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h3.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.924-.925 1.219-2.163 1.326-3.77q-.305.136-.646.158q-.089.004-.19.003h-.681c-.114 1.342-.371 2.05-.87 2.548c-.423.423-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14h-3c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289s.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h3c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812c.499.498.756 1.207.87 2.548zm-10.906-5h3.112q.775 0 1.46.003L12.85 4.148c-.8-.53-1.9-.53-2.7 0L8.483 5.253q.686-.004 1.46-.003" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6 9.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path><svg:use href="#solarWalletMoneyOutline0" fill-rule="evenodd" clip-rule="evenodd"></svg:use>`,
})
export class SolarWalletMoneyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWalletOutlineIcon],svg[solar-wallet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 3.25h3.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.924.925 1.219 2.163 1.326 3.77c.577.253 1.013.79 1.06 1.47c.005.061.005.126.005.186v3.866c0 .06 0 .125-.004.185c-.048.68-.484 1.218-1.061 1.472c-.107 1.606-.402 2.844-1.326 3.769c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m10.224 12.5H18.23c-2.145 0-3.981-1.628-3.981-3.75s1.836-3.75 3.98-3.75h1.938c-.114-1.341-.371-2.05-.87-2.548c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-3c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h3c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.499-.498.756-1.206.87-2.548M5.25 8A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m15.674 1.75H18.23c-1.424 0-2.481 1.059-2.481 2.25s1.057 2.25 2.48 2.25h2.718c.206-.013.295-.152.302-.236V9.986c-.007-.084-.096-.223-.302-.235z" clip-rule="evenodd"></svg:path>`,
})
export class SolarWalletOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWallpaperBoldIcon],svg[solar-wallpaper-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.72 7.349a1.86 1.86 0 1 1-3.72 0a1.86 1.86 0 0 1 3.72 0m6.28.405c0-.374 0-.642-.037-.878a3.02 3.02 0 0 0-1.315-2.047c-.078-.052-.177.016-.164.109c.1.744.117 1.627.12 2.59v8.943c-.003.964-.02 1.847-.12 2.591c-.013.093.086.16.164.109a3.02 3.02 0 0 0 1.315-2.047c.037-.236.037-.504.037-.878zm-18.605.06l.002-.465c.004-.894.025-1.714.12-2.411c.012-.093-.087-.16-.165-.109a3.02 3.02 0 0 0-1.315 2.047C2 7.112 2 7.38 2 7.754v8.492c0 .374 0 .642.037.878a3.02 3.02 0 0 0 1.315 2.047c.078.052.177-.016.164-.109c-.094-.697-.115-1.517-.12-2.41V7.813"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.085 2.108C15.28 2 14.253 2 12.981 2H11.02c-1.272 0-2.298 0-3.104.108c-.838.113-1.543.354-2.103.914s-.8 1.265-.913 2.102c-.108.806-.108 1.832-.108 3.104v7.544c0 1.272 0 2.298.108 3.104c.113.837.354 1.542.913 2.102c.56.56 1.265.801 2.103.914C8.72 22 9.747 22 11.019 22h1.962c1.272 0 2.298 0 3.104-.108c.838-.113 1.543-.354 2.103-.914s.8-1.265.913-2.102c.108-.806.108-1.832.108-3.104V8.228c0-1.272 0-2.298-.108-3.104c-.113-.837-.354-1.542-.913-2.102c-.56-.56-1.265-.801-2.103-.914m.723 14.522l.987 1.04c.018-.536.019-1.175.019-1.95V8.28c0-1.336-.002-2.267-.096-2.97c-.092-.683-.26-1.044-.517-1.302c-.258-.257-.619-.425-1.302-.517c-.702-.094-1.633-.096-2.969-.096h-1.86c-1.335 0-2.267.002-2.97.096c-.682.092-1.043.26-1.3.517c-.258.258-.426.62-.518 1.302c-.094.703-.096 1.634-.096 2.97v4.624l.003-.003c.917-.941 2.336-.876 3.184.118l2.94 3.448c.236.276.545.289.783.093l.204-.169c1.076-.886 2.552-.77 3.508.24" clip-rule="evenodd"></svg:path>`,
})
export class SolarWallpaperBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWallpaperBoldDuotoneIcon],svg[solar-wallpaper-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.721 7.349a1.86 1.86 0 1 1-3.72 0a1.86 1.86 0 0 1 3.72 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.086 2.108C15.279 2 14.254 2 12.982 2h-1.963c-1.272 0-2.298 0-3.104.108c-.837.113-1.542.354-2.102.914s-.801 1.265-.914 2.102c-.108.806-.108 1.832-.108 3.104v7.544c0 1.272 0 2.298.108 3.104c.113.837.354 1.542.914 2.102s1.265.801 2.102.914C8.721 22 9.747 22 11.019 22h1.963c1.272 0 2.297 0 3.104-.108c.837-.113 1.542-.354 2.102-.914s.8-1.265.913-2.102c.109-.806.109-1.832.109-3.104V8.228c0-1.272 0-2.298-.109-3.104c-.112-.837-.353-1.542-.913-2.102s-1.265-.801-2.102-.914m.723 14.522l.986 1.04c.019-.536.02-1.175.02-1.95V8.28c0-1.336-.002-2.267-.097-2.97c-.091-.683-.26-1.044-.517-1.302c-.257-.257-.619-.425-1.301-.517c-.703-.094-1.634-.096-2.97-.096h-1.86c-1.335 0-2.266.002-2.97.096c-.682.092-1.043.26-1.3.517c-.258.258-.426.62-.518 1.302c-.094.703-.096 1.634-.096 2.97v4.624l.004-.003c.916-.941 2.335-.876 3.183.118l2.94 3.448c.236.276.546.289.783.093l.205-.169c1.076-.886 2.551-.77 3.508.24" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.016 4.5H5c-.465 0-.697 0-.891.03A2.5 2.5 0 0 0 2.03 6.61C2 6.803 2 7.035 2 7.5v9c0 .465 0 .697.03.891a2.5 2.5 0 0 0 2.08 2.079c.194.031.426.031.891.031h.016a6 6 0 0 1-.117-.624c-.108-.806-.108-1.832-.108-3.104V8.228c0-1.272 0-2.298.108-3.104q.043-.325.117-.624m13.968 15q.074-.299.116-.624c.109-.806.109-1.832.109-3.104V8.228c0-1.272 0-2.298-.109-3.104a6 6 0 0 0-.116-.624H19c.465 0 .697 0 .891.03a2.5 2.5 0 0 1 2.079 2.08c.031.194.031.426.031.891v9c0 .465 0 .697-.03.891a2.5 2.5 0 0 1-2.079 2.078c-.194.031-.426.031-.891.031z" opacity=".5"></svg:path>`,
})
export class SolarWallpaperBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWallpaperBrokenIcon],svg[solar-wallpaper-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M18.25 15a.75.75 0 0 0 1.5 0zM11 2.75h2v-1.5h-2zm2 18.5h-2v1.5h2zM5.75 16V8h-1.5v8zM11 21.25c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556l-1.06 1.06c.601.603 1.36.861 2.26.983c.878.118 1.998.116 3.391.116zM4.25 16c0 1.393-.002 2.513.117 3.392c.12.9.38 1.658.981 2.26L6.41 20.59c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191zM13 22.75c1.393 0 2.513.002 3.392-.116c.9-.122 1.658-.38 2.26-.982L17.59 20.59c-.277.277-.665.457-1.4.556c-.754.101-1.756.103-3.191.103zm0-20c1.435 0 2.437.002 3.192.103c.734.099 1.122.28 1.399.556l1.06-1.06c-.601-.603-1.36-.861-2.26-.982c-.878-.119-1.998-.117-3.391-.117zM19.75 8c0-1.393.002-2.513-.116-3.392c-.122-.9-.38-1.658-.982-2.26L17.59 3.41c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191zM11 1.25c-1.393 0-2.513-.002-3.392.117c-.9.12-1.658.38-2.26.981L6.41 3.41c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103zM5.75 8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399l-1.06-1.06c-.603.601-.861 1.36-.982 2.26C4.248 5.486 4.25 6.606 4.25 8zm12.422 10.984c-.092.87-.28 1.305-.581 1.607l1.06 1.06c.658-.657.906-1.5 1.012-2.51zM18.25 8v7h1.5V8z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03m-14 15c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03"></svg:path><svg:circle cx="14.5" cy="6.5" r="1.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m5 14.816l1.29-1.324c.672-.69 1.684-.65 2.315.09l3.16 3.706c.507.594 1.304.675 1.89.192l.22-.18c.843-.695 1.984-.615 2.75.193L19 19.5"></svg:path></svg:g>`,
})
export class SolarWallpaperBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWallpaperLineDuotoneIcon],svg[solar-wallpaper-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03m-14 15c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03" opacity=".5"></svg:path><svg:circle cx="14.5" cy="6.5" r="1.5" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m5 14.816l1.29-1.324c.672-.69 1.684-.65 2.315.09l3.16 3.706c.507.594 1.304.675 1.89.192l.22-.18c.843-.695 1.984-.615 2.75.193l1.901 2.007" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWallpaperLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWallpaperLinearIcon],svg[solar-wallpaper-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16zm14 11.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03m-14 15c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03"></svg:path><svg:circle cx="14.5" cy="6.5" r="1.5"></svg:circle><svg:path stroke-linecap="round" d="m5 14.816l1.29-1.324c.672-.69 1.684-.65 2.315.09l3.16 3.706c.507.594 1.304.675 1.89.192l.22-.18c.843-.695 1.984-.615 2.75.193l1.901 2.007"></svg:path></svg:g>`,
})
export class SolarWallpaperLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWallpaperOutlineIcon],svg[solar-wallpaper-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.945 1.25h2.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.4.4.648.87.806 1.404c.211.003.388.012.55.038a3.25 3.25 0 0 1 2.702 2.702c.04.253.04.542.04.943v9.13c0 .401 0 .69-.04.943a3.25 3.25 0 0 1-2.702 2.702a4 4 0 0 1-.55.038c-.158.534-.406 1.003-.806 1.404c-.602.602-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982c-.4-.4-.648-.87-.806-1.404a4 4 0 0 1-.55-.038a3.25 3.25 0 0 1-2.702-2.702c-.04-.253-.04-.542-.04-.943v-9.13c0-.401 0-.69.04-.943A3.25 3.25 0 0 1 3.992 3.79c.162-.026.339-.035.55-.038c.158-.534.406-1.003.806-1.404c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117M4.302 5.262l-.076.01a1.75 1.75 0 0 0-1.454 1.454c-.02.122-.022.28-.022.774v9c0 .493.002.652.022.774a1.75 1.75 0 0 0 1.53 1.464c-.052-.749-.052-1.639-.052-2.683v-8.11c0-1.044 0-1.934.052-2.683m1.448 9.859V16c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556a1.6 1.6 0 0 0 .371-.596L16.08 18.01c-.503-.531-1.198-.567-1.728-.13l-.22.18c-.916.755-2.177.607-2.937-.284l-3.16-3.706c-.35-.41-.85-.42-1.207-.054zm12.48 2.975l-1.06-1.119c-1.03-1.085-2.615-1.21-3.772-.256l-.22.18c-.255.211-.588.198-.842-.1l-3.16-3.706c-.912-1.069-2.437-1.138-3.422-.127l-.004.004V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h2c1.435 0 2.437.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v8c0 .833 0 1.519-.02 2.096m1.468.642l.076-.01a1.75 1.75 0 0 0 1.454-1.454c.02-.122.022-.28.022-.774v-9c0-.493-.002-.652-.021-.774a1.75 1.75 0 0 0-1.53-1.464c.051.749.051 1.639.051 2.683v8.11c0 1.044 0 1.934-.052 2.683M14.5 5.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarWallpaperOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWashingMachineBoldIcon],svg[solar-washing-machine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.994 8.25H3.006c.027-2.636.191-4.104 1.166-5.078C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.975.974 1.139 2.442 1.166 5.078M5.75 5.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m8.75 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.75 15a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3 9.75h18V13c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-1.129C16.18 21 14.806 21 13 21h-2c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-1.475a3.1 3.1 0 0 1-1.078-.697C3 18.657 3 16.771 3 13zm9 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarWashingMachineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWashingMachineBoldDuotoneIcon],svg[solar-washing-machine-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 15a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3 9h18v4c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-1.129C16.18 21 14.806 21 13 21h-2c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-1.475a3.1 3.1 0 0 1-1.078-.697C3 18.657 3 16.771 3 13zm9 2.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4.172 3.172c-.974.974-1.139 2.442-1.166 5.078V9H21v-.75c-.028-2.636-.197-4.104-1.171-5.078C18.657 2 16.77 2 13 2h-2C7.23 2 5.343 2 4.172 3.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.5 4.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm9 .75a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarWashingMachineBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWashingMachineBrokenIcon],svg[solar-washing-machine-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 22v-1m12 1v-1M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v3c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3.108 18.765 3.01 17.114 3 14m0-5h9m9 0h-5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 15a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 5.5h3"></svg:path><svg:path fill="currentColor" d="M15.5 5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarWashingMachineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWashingMachineLineDuotoneIcon],svg[solar-washing-machine-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 22v-1m12 1v-1" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v3c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 9h18" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 15a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 5.5h3"></svg:path><svg:path fill="currentColor" d="M15.5 5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWashingMachineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWashingMachineLinearIcon],svg[solar-washing-machine-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 22v-1m12 1v-1"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v3c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 9h18"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 15a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 5.5h3"></svg:path><svg:path fill="currentColor" d="M15.5 5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarWashingMachineLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWashingMachineMinimalisticBoldIcon],svg[solar-washing-machine-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.115 14.208q-.17.11-.344.218A4.25 4.25 0 0 0 16.25 14v-.005q-.201.035-.404.065l-.015.003q-.241.037-.486.079c-.7.126-1.267.075-1.758-.106c-.457-.168-.801-.436-1.055-.633l-.024-.018c-.275-.214-.455-.347-.678-.43c-.203-.074-.493-.123-.973-.036c-.704.126-1.333.426-1.915.769c-.248.147-.48.296-.707.443z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14zm14.75 4q0-.33-.036-.649l.02-.013l-.091-.448A5.752 5.752 0 0 0 6.25 14a5.75 5.75 0 0 0 11.5 0M8 5.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarWashingMachineMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWashingMachineMinimalisticBoldDuotoneIcon],svg[solar-washing-machine-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.25 6A.75.75 0 0 1 8 5.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.714 14.649a5.75 5.75 0 1 0-.07.461l.09-.448zm-9.599-.857a18 18 0 0 0-.344-.218A4.25 4.25 0 0 1 16.25 14v.005q-.201-.035-.404-.065l-.015-.003q-.241-.037-.486-.079c-.7-.126-1.267-.075-1.758.106c-.457.168-.801.436-1.055.633l-.024.018c-.275.214-.455.347-.678.43c-.203.074-.493.123-.973.036c-.704-.126-1.333-.426-1.915-.769c-.248-.147-.48-.296-.707-.443z" clip-rule="evenodd"></svg:path>`,
})
export class SolarWashingMachineMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWashingMachineMinimalisticBrokenIcon],svg[solar-washing-machine-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 14c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10"></svg:path><svg:path d="M17 14a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></svg:path><svg:path stroke-linecap="round" d="M16 6h-4M9 6H8m-.766 8.362c.855.428 1.833 1.159 3.49 1.457c2.362.426 2.126-1.648 4.488-1.223c.72.13 1.206.35 1.55.585"></svg:path></svg:g>`,
})
export class SolarWashingMachineMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWashingMachineMinimalisticLineDuotoneIcon],svg[solar-washing-machine-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path d="M17 14a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></svg:path><svg:path stroke-linecap="round" d="M8 6h8m-8.766 8.362c.855.428 1.833 1.159 3.49 1.457c2.362.426 2.126-1.648 4.488-1.223c.72.13 1.206.35 1.55.585"></svg:path></svg:g>`,
})
export class SolarWashingMachineMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWashingMachineMinimalisticLinearIcon],svg[solar-washing-machine-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></svg:path><svg:path d="M17 14a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></svg:path><svg:path stroke-linecap="round" d="M8 6h8m-8.766 8.362c.855.428 1.833 1.159 3.49 1.457c2.362.426 2.126-1.648 4.488-1.223c.72.13 1.206.35 1.55.585"></svg:path></svg:g>`,
})
export class SolarWashingMachineMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWashingMachineMinimalisticOutlineIcon],svg[solar-washing-machine-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14M7.25 6A.75.75 0 0 1 8 5.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6m.505 7.787q.251.133.499.274c.713.399 1.453.813 2.603 1.02c.48.087.77.038.973-.037c.223-.082.403-.215.678-.429l.024-.018c.254-.197.598-.464 1.055-.633c.491-.181 1.057-.232 1.758-.106q.506.091.904.235L16.25 14a4.25 4.25 0 0 0-8.495-.213m8.19 1.797a4 4 0 0 0-.866-.25c-.48-.086-.77-.037-.973.037c-.223.082-.403.216-.678.43l-.024.018c-.254.197-.598.464-1.055.633c-.491.181-1.057.232-1.758.106a8.7 8.7 0 0 1-2.493-.87a4.251 4.251 0 0 0 7.847-.104M6.25 14a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarWashingMachineMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWashingMachineOutlineIcon],svg[solar-washing-machine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.125.928.148 2.067.152 3.45v.073l.001.91v3.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.46.459-.994.761-1.609.963V22a.75.75 0 0 1-1.5 0v-.374c-1.102.124-2.482.124-4.194.124h-2.112c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-.678c-.615-.202-1.15-.504-1.609-.963c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.034l.001-.072c.004-1.384.027-2.523.152-3.451c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M3.75 9.75V13c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289V9.75zm16.494-1.5H3.756c.01-1.034.042-1.858.134-2.54c.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h2c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.092.68.123 1.505.134 2.539M5.75 5.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M12 12.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 15a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.5 5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarWashingMachineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchRoundBoldIcon],svg[solar-watch-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 18.977c3.866 0 7-3.124 7-6.977s-3.134-6.977-7-6.977S5 8.147 5 12s3.134 6.977 7 6.977M12 8.44c.387 0 .7.312.7.698v2.565l1.652 1.583a.696.696 0 0 1 .02.987a.7.7 0 0 1-.99.019l-1.867-1.79A.7.7 0 0 1 11.3 12V9.138c0-.386.313-.698.7-.698" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.858 2.074C10.414 2 11.113 2 11.951 2h.098c.838 0 1.537 0 2.093.074c.585.079 1.115.252 1.54.675s.598.951.677 1.535q.035.272.052.59A8.4 8.4 0 0 0 12 3.628a8.4 8.4 0 0 0-4.41 1.246q.015-.318.051-.59c.079-.584.252-1.111.677-1.535s.955-.596 1.54-.675m5.824 19.176c.425-.423.598-.95.677-1.534q.035-.272.052-.59A8.4 8.4 0 0 1 12 20.373a8.4 8.4 0 0 1-4.41-1.245q.015.317.051.589c.079.584.252 1.111.677 1.535s.955.596 1.54.675c.556.074 1.255.074 2.093.074h.098c.838 0 1.537 0 2.093-.074c.585-.079 1.115-.252 1.54-.675"></svg:path>`,
})
export class SolarWatchRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchRoundBoldDuotoneIcon],svg[solar-watch-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.977c3.866 0 7-3.124 7-6.977s-3.134-6.977-7-6.977S5 8.147 5 12s3.134 6.977 7 6.977" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.209 2h1.582c1.539 0 2.308 0 2.856.44c.549.44.716 1.19 1.05 2.692L17 6.5l.156.782A7 7 0 0 0 12 5.023c-2.04 0-3.877.87-5.156 2.259L7 6.5l.304-1.368c.334-1.501.5-2.252 1.049-2.692S9.671 2 11.209 2m5.947 14.719A7 7 0 0 1 12 18.977c-2.04 0-3.877-.87-5.156-2.258L7 17.5l.304 1.368c.334 1.501.5 2.252 1.049 2.692s1.317.44 2.856.44h1.582c1.539 0 2.308 0 2.856-.44s.715-1.19 1.05-2.692L17 17.5zM12.7 9.138a.7.7 0 0 0-.7-.698a.7.7 0 0 0-.7.698V12c0 .19.077.372.215.503l1.866 1.79a.7.7 0 0 0 .99-.02a.696.696 0 0 0-.02-.987L12.7 11.703z"></svg:path>`,
})
export class SolarWatchRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchRoundBrokenIcon],svg[solar-watch-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m17 6.5l-.304-1.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21c-1.54 0-2.31 0-2.857.44c-.549.44-.715 1.19-1.05 2.692L7 6.5m10 11l-.304 1.368c-.334 1.501-.5 2.252-1.049 2.692s-1.317.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44c-.549-.44-.715-1.19-1.05-2.692L7 17.5"></svg:path><svg:path stroke-linecap="round" d="M4.755 10.058a7.5 7.5 0 1 1 0 3.884"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 8.923V12l2 1.923"></svg:path></svg:g>`,
})
export class SolarWatchRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchRoundLineDuotoneIcon],svg[solar-watch-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m17 6.5l-.304-1.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21c-1.54 0-2.31 0-2.857.44c-.549.44-.715 1.19-1.05 2.692L7 6.5m10 11l-.304 1.368c-.334 1.501-.5 2.252-1.049 2.692s-1.317.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44c-.549-.44-.715-1.19-1.05-2.692L7 17.5" opacity=".5"></svg:path><svg:path d="M19.5 12a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 8.923V12l2 1.923" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWatchRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchRoundLinearIcon],svg[solar-watch-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m17 6.5l-.304-1.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21c-1.54 0-2.31 0-2.857.44c-.549.44-.715 1.19-1.05 2.692L7 6.5m10 11l-.304 1.368c-.334 1.501-.5 2.252-1.049 2.692s-1.317.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44c-.549-.44-.715-1.19-1.05-2.692L7 17.5"></svg:path><svg:path d="M19.5 12a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 8.923V12l2 1.923"></svg:path></svg:g>`,
})
export class SolarWatchRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchRoundOutlineIcon],svg[solar-watch-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.164 1.25h1.672c.731 0 1.346 0 1.845.06c.529.065 1.012.205 1.435.545s.666.78.843 1.283c.168.474.3 1.074.46 1.788l.237 1.068A8.23 8.23 0 0 1 20.25 12a8.23 8.23 0 0 1-2.594 6.006l-.238 1.068c-.158.714-.291 1.314-.459 1.788c-.177.502-.419.943-.843 1.283c-.423.34-.906.48-1.435.545c-.499.06-1.114.06-1.845.06h-1.672c-.731 0-1.346 0-1.845-.06c-.529-.065-1.012-.205-1.435-.545s-.666-.78-.843-1.283c-.168-.474-.3-1.074-.46-1.788l-.237-1.068A8.23 8.23 0 0 1 3.75 12c0-2.367.997-4.502 2.594-6.006l.238-1.068c.158-.714.291-1.314.459-1.788c.177-.502.419-.943.843-1.283c.423-.34.906-.48 1.435-.545c.499-.06 1.114-.06 1.845-.06M8.172 4.69A8.2 8.2 0 0 1 12 3.75c1.382 0 2.684.34 3.828.94a10 10 0 0 0-.283-1.052c-.127-.359-.243-.513-.367-.613c-.125-.1-.3-.18-.678-.225c-.398-.049-.921-.05-1.709-.05H11.21c-.788 0-1.312.001-1.709.05c-.377.045-.553.125-.678.225c-.124.1-.24.254-.367.613c-.095.268-.18.604-.283 1.052m0 14.62c.103.448.188.784.283 1.052c.127.359.243.513.367.613c.125.1.3.18.678.226c.397.048.921.049 1.709.049h1.582c.788 0 1.311-.001 1.71-.05c.376-.045.552-.125.677-.225c.124-.1.24-.254.367-.613c.095-.268.18-.604.283-1.052c-1.144.6-2.446.94-3.828.94a8.2 8.2 0 0 1-3.828-.94M12 5.25a6.75 6.75 0 1 0 0 13.5a6.75 6.75 0 0 0 0-13.5m0 2.923a.75.75 0 0 1 .75.75v2.758l1.77 1.702a.75.75 0 1 1-1.04 1.08l-2-1.922a.75.75 0 0 1-.23-.541V8.923a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarWatchRoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareBoldIcon],svg[solar-watch-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarWatchSquareBold0"><svg:g fill="none"><svg:path fill="#fff" d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 7.787 19 9.19 19 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12m7.5 10h-1c-1.405 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552c-.14-.21-.222-.452-.27-.766q.244.038.495.063c.905.092 2.022.092 3.361.092h.154c1.339 0 2.456 0 3.361-.092q.25-.026.494-.063c-.047.314-.13.557-.27.766a2 2 0 0 1-.55.552C14.606 22 13.904 22 12.5 22m0-20h-1c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.14.21-.222.452-.27.766q.244-.038.495-.063c.905-.092 2.022-.092 3.361-.092h.154c1.339 0 2.456 0 3.361.092q.25.025.494.063c-.047-.314-.13-.557-.27-.766a2 2 0 0 0-.55-.552C14.606 2 13.904 2 12.5 2"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M12 8.25a.75.75 0 0 1 .75.75v2.758l1.77 1.701a.75.75 0 1 1-1.04 1.082l-2-1.924a.75.75 0 0 1-.23-.54V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarWatchSquareBold0)"></svg:path>`,
})
export class SolarWatchSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareBoldDuotoneIcon],svg[solar-watch-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.792 2h-1.583C9.67 2 8.9 2 8.353 2.44s-.715 1.19-1.049 2.692l-.065.292C8.22 5 9.594 5 12 5s3.782 0 4.761.424l-.065-.292c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2M7.24 18.576C8.217 19 9.593 19 12 19s3.782 0 4.76-.424l-.064.292c-.334 1.501-.5 2.252-1.049 2.692s-1.317.44-2.856.44H11.21c-1.538 0-2.308 0-2.856-.44s-.715-1.19-1.049-2.692z"></svg:path><svg:path fill="currentColor" d="M6.778 18.326C7.787 19 9.19 19 12 19s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 16.213 19 14.81 19 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 5 14.81 5 12 5s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C5 7.787 5 9.19 5 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 8.25a.75.75 0 0 1 .75.75v2.758l1.77 1.701a.75.75 0 1 1-1.04 1.082l-2-1.924a.75.75 0 0 1-.23-.54V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarWatchSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareBrokenIcon],svg[solar-watch-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.077L14 14"></svg:path><svg:path d="m16.778 5.5l-.082-.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21c-1.54 0-2.31 0-2.857.44c-.549.44-.715 1.19-1.05 2.692l-.08.368"></svg:path><svg:path d="m16.778 5.5l-.082-.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21c-1.54 0-2.31 0-2.857.44c-.549.44-.715 1.19-1.05 2.692l-.08.368m9.555 13l-.082.368c-.334 1.501-.5 2.252-1.049 2.692s-1.318.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44c-.549-.44-.715-1.19-1.05-2.692l-.08-.368"></svg:path><svg:path stroke-linecap="round" d="M18.961 9.2c-.076-1.535-.304-2.493-.986-3.175C16.95 5 15.3 5 12 5S7.05 5 6.025 6.025S5 8.7 5 12s0 4.95 1.025 5.975S8.7 19 12 19s4.95 0 5.975-1.025c.793-.793.972-1.96 1.013-3.975"></svg:path></svg:g>`,
})
export class SolarWatchSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareLineDuotoneIcon],svg[solar-watch-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 7.787 19 9.19 19 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.077L14 14" opacity=".5"></svg:path><svg:path d="m16.778 5.5l-.082-.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21c-1.54 0-2.31 0-2.857.44c-.549.44-.715 1.19-1.05 2.692l-.08.368m9.555 13l-.082.368c-.334 1.501-.5 2.252-1.049 2.692s-1.318.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44c-.549-.44-.715-1.19-1.05-2.692l-.08-.368" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWatchSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareLinearIcon],svg[solar-watch-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 7.787 19 9.19 19 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.077L14 14"></svg:path><svg:path d="m16.778 5.5l-.082-.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21c-1.54 0-2.31 0-2.857.44c-.549.44-.715 1.19-1.05 2.692l-.08.368"></svg:path><svg:path d="m16.778 5.5l-.082-.368c-.334-1.501-.5-2.252-1.049-2.692S14.33 2 12.791 2H11.21c-1.54 0-2.31 0-2.857.44c-.549.44-.715 1.19-1.05 2.692l-.08.368m9.555 13l-.082.368c-.334 1.501-.5 2.252-1.049 2.692s-1.318.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44c-.549-.44-.715-1.19-1.05-2.692l-.08-.368"></svg:path></svg:g>`,
})
export class SolarWatchSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticBoldIcon],svg[solar-watch-square-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.674 6.778C5 7.787 5 9.19 5 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C7.787 19 9.19 19 12 19s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 16.213 19 14.81 19 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 5 14.81 5 12 5s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104M12 8.25a.75.75 0 0 1 .75.75v2.758l1.77 1.701a.75.75 0 1 1-1.04 1.082l-2-1.924a.75.75 0 0 1-.23-.54V9a.75.75 0 0 1 .75-.75M6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2m0 20a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarWatchSquareMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticBoldDuotoneIcon],svg[solar-watch-square-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.778 18.326C7.787 19 9.19 19 12 19s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 16.213 19 14.81 19 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 5 14.81 5 12 5s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C5 7.787 5 9.19 5 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 8.25a.75.75 0 0 1 .75.75v2.758l1.77 1.701a.75.75 0 1 1-1.04 1.082l-2-1.924a.75.75 0 0 1-.23-.54V9a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2m0 20a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarWatchSquareMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticBrokenIcon],svg[solar-watch-square-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 9v3.077L14 14"></svg:path><svg:path d="M7 2h10M7 22h10m1.961-12.8c-.076-1.535-.304-2.493-.986-3.175C16.95 5 15.3 5 12 5S7.05 5 6.025 6.025S5 8.7 5 12s0 4.95 1.025 5.975S8.7 19 12 19s4.95 0 5.975-1.025c.793-.793.972-1.96 1.013-3.975"></svg:path></svg:g>`,
})
export class SolarWatchSquareMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticChargeBoldIcon],svg[solar-watch-square-minimalistic-charge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.674 6.778C5 7.787 5 9.19 5 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C7.787 19 9.19 19 12 19s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 16.213 19 14.81 19 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 5 14.81 5 12 5s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104m7.7 1.679c.3.286.312.76.026 1.06l-1.65 1.733H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.086-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.857-3a.75.75 0 0 1 1.06-.026M6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2m0 20a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarWatchSquareMinimalisticChargeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticChargeBoldDuotoneIcon],svg[solar-watch-square-minimalistic-charge-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.778 18.326C7.787 19 9.19 19 12 19s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 16.213 19 14.81 19 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 5 14.81 5 12 5s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C5 7.787 5 9.19 5 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.374 8.457c.3.286.312.76.026 1.06l-1.65 1.733H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.086-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.857-3a.75.75 0 0 1 1.06-.026"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2m0 20a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarWatchSquareMinimalisticChargeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticChargeBrokenIcon],svg[solar-watch-square-minimalistic-charge-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12.857 9L10 12h4l-2.857 3"></svg:path><svg:path d="M7 2h10M7 22h10m1.961-12.8c-.076-1.535-.304-2.493-.986-3.175C16.95 5 15.3 5 12 5S7.05 5 6.025 6.025S5 8.7 5 12s0 4.95 1.025 5.975S8.7 19 12 19s4.95 0 5.975-1.025c.793-.793.972-1.96 1.013-3.975"></svg:path></svg:g>`,
})
export class SolarWatchSquareMinimalisticChargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticChargeLineDuotoneIcon],svg[solar-watch-square-minimalistic-charge-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 7.787 19 9.19 19 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.857 9L10 12h4l-2.857 3"></svg:path><svg:path stroke-linecap="round" d="M7 2h10M7 22h10"></svg:path></svg:g>`,
})
export class SolarWatchSquareMinimalisticChargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticChargeLinearIcon],svg[solar-watch-square-minimalistic-charge-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 7.787 19 9.19 19 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.857 9L10 12h4l-2.857 3"></svg:path><svg:path stroke-linecap="round" d="M7 2h10M7 22h10"></svg:path></svg:g>`,
})
export class SolarWatchSquareMinimalisticChargeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticChargeOutlineIcon],svg[solar-watch-square-minimalistic-charge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2m5.708 2.25h.084c1.369 0 2.454 0 3.32.088c.888.09 1.629.28 2.277.713c.519.346.964.791 1.31 1.31c.434.648.623 1.39.713 2.277c.088.866.088 1.951.088 3.32v.084c0 1.369 0 2.454-.088 3.32c-.09.888-.28 1.629-.712 2.277a4.8 4.8 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713c-.866.088-1.951.088-3.32.088h-.084c-1.369 0-2.454 0-3.32-.088c-.888-.09-1.629-.28-2.277-.712a4.8 4.8 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277c-.088-.866-.088-1.951-.088-3.32v-.084c0-1.369 0-2.454.088-3.32c.09-.888.28-1.629.713-2.277a4.8 4.8 0 0 1 1.31-1.31c.648-.434 1.39-.623 2.277-.713c.866-.088 1.951-.088 3.32-.088M8.79 5.83c-.77.079-1.235.227-1.596.468a3.3 3.3 0 0 0-.896.896c-.241.361-.39.827-.468 1.596c-.08.781-.08 1.79-.08 3.21s0 2.429.08 3.21c.079.77.227 1.235.468 1.596c.237.354.542.66.896.896c.361.241.827.39 1.596.468c.781.08 1.79.08 3.21.08s2.429 0 3.21-.08c.77-.079 1.235-.227 1.596-.468c.354-.237.66-.542.896-.896c.241-.361.39-.827.468-1.596c.08-.781.08-1.79.08-3.21s0-2.429-.08-3.21c-.079-.77-.227-1.235-.468-1.596a3.3 3.3 0 0 0-.896-.896c-.361-.241-.827-.39-1.596-.468c-.781-.08-1.79-.08-3.21-.08s-2.429 0-3.21.08m4.584 2.627c.3.286.312.76.026 1.06l-1.65 1.733H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.086-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.857-3a.75.75 0 0 1 1.06-.026M6.25 22a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarWatchSquareMinimalisticChargeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticLineDuotoneIcon],svg[solar-watch-square-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 7.787 19 9.19 19 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.077L14 14"></svg:path><svg:path stroke-linecap="round" d="M7 2h10M7 22h10"></svg:path></svg:g>`,
})
export class SolarWatchSquareMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticLinearIcon],svg[solar-watch-square-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 12c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 7.787 19 9.19 19 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 19 14.81 19 12 19s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 16.213 5 14.81 5 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.077L14 14"></svg:path><svg:path stroke-linecap="round" d="M7 2h10M7 22h10"></svg:path></svg:g>`,
})
export class SolarWatchSquareMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareMinimalisticOutlineIcon],svg[solar-watch-square-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2m5.708 2.25h.084c1.369 0 2.454 0 3.32.088c.888.09 1.629.28 2.277.713c.519.346.964.791 1.31 1.31c.434.648.623 1.39.713 2.277c.088.866.088 1.951.088 3.32v.084c0 1.369 0 2.454-.088 3.32c-.09.888-.28 1.629-.712 2.277a4.8 4.8 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713c-.866.088-1.951.088-3.32.088h-.084c-1.369 0-2.454 0-3.32-.088c-.888-.09-1.629-.28-2.277-.712a4.8 4.8 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277c-.088-.866-.088-1.951-.088-3.32v-.084c0-1.369 0-2.454.088-3.32c.09-.888.28-1.629.713-2.277a4.8 4.8 0 0 1 1.31-1.31c.648-.434 1.39-.623 2.277-.713c.866-.088 1.951-.088 3.32-.088M8.79 5.83c-.77.079-1.235.227-1.596.468a3.3 3.3 0 0 0-.896.896c-.241.361-.39.827-.468 1.596c-.08.781-.08 1.79-.08 3.21s0 2.429.08 3.21c.079.77.227 1.235.468 1.596c.237.354.542.66.896.896c.361.241.827.39 1.596.468c.781.08 1.79.08 3.21.08s2.429 0 3.21-.08c.77-.079 1.235-.227 1.596-.468c.354-.237.66-.542.896-.896c.241-.361.39-.827.468-1.596c.08-.781.08-1.79.08-3.21s0-2.429-.08-3.21c-.079-.77-.227-1.235-.468-1.596a3.3 3.3 0 0 0-.896-.896c-.361-.241-.827-.39-1.596-.468c-.781-.08-1.79-.08-3.21-.08s-2.429 0-3.21.08M12 8.25a.75.75 0 0 1 .75.75v2.758l1.77 1.701a.75.75 0 1 1-1.04 1.082l-1.616-1.555c-.303-.29-.454-.436-.534-.624c-.08-.187-.08-.397-.08-.817V9a.75.75 0 0 1 .75-.75M6.25 22a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarWatchSquareMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWatchSquareOutlineIcon],svg[solar-watch-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.164 1.25h1.672c.731 0 1.346 0 1.845.06c.529.065 1.012.205 1.435.545s.666.78.843 1.283c.166.47.3 1.067.457 1.775q.113.064.223.138c.519.346.964.791 1.31 1.31c.434.648.623 1.39.713 2.277c.088.866.088 1.951.088 3.32v.084c0 1.369 0 2.454-.088 3.32c-.09.888-.28 1.629-.712 2.277a4.75 4.75 0 0 1-1.534 1.448c-.158.708-.29 1.304-.457 1.775c-.177.502-.419.943-.843 1.283c-.423.34-.906.48-1.435.545c-.499.06-1.114.06-1.845.06h-1.672c-.731 0-1.346 0-1.845-.06c-.529-.065-1.012-.205-1.435-.545s-.666-.78-.843-1.283c-.166-.47-.3-1.067-.457-1.775A4.75 4.75 0 0 1 5.05 17.64c-.433-.648-.622-1.39-.712-2.277c-.088-.866-.088-1.951-.088-3.32v-.084c0-1.369 0-2.454.088-3.32c.09-.888.28-1.629.713-2.277a4.75 4.75 0 0 1 1.533-1.448c.158-.708.29-1.304.457-1.775c.177-.502.419-.943.843-1.283c.423-.34.906-.48 1.435-.545c.499-.06 1.114-.06 1.845-.06m-2.92 3.137q.193-.029.394-.049c.866-.088 1.951-.088 3.32-.088h.084c1.369 0 2.454 0 3.32.088q.202.02.395.049a8 8 0 0 0-.212-.75c-.127-.358-.243-.512-.367-.612c-.125-.1-.3-.18-.678-.225c-.398-.049-.921-.05-1.709-.05H11.21c-.788 0-1.312.001-1.709.05c-.377.045-.553.125-.678.225c-.124.1-.24.254-.367.613a8 8 0 0 0-.212.749m0 15.226c.072.302.14.545.211.75c.127.358.243.512.367.612c.125.1.3.18.678.226c.398.048.921.049 1.709.049h1.582c.788 0 1.312-.001 1.71-.05c.376-.045.552-.125.677-.225c.124-.1.24-.254.367-.613a8 8 0 0 0 .212-.749q-.193.029-.395.049c-.866.088-1.951.088-3.32.088h-.084c-1.369 0-2.454 0-3.32-.088a9 9 0 0 1-.395-.049M8.79 5.83c-.77.079-1.235.227-1.596.468a3.3 3.3 0 0 0-.896.896c-.241.361-.39.827-.468 1.596c-.08.781-.08 1.79-.08 3.21s0 2.429.08 3.21c.079.77.227 1.235.468 1.596c.237.354.542.66.896.896c.361.241.827.39 1.596.468c.781.08 1.79.08 3.21.08s2.429 0 3.21-.08c.77-.079 1.235-.227 1.596-.468c.354-.237.66-.542.896-.896c.241-.361.39-.827.468-1.596c.08-.781.08-1.79.08-3.21s0-2.429-.08-3.21c-.079-.77-.227-1.235-.468-1.596a3.3 3.3 0 0 0-.896-.896c-.361-.241-.827-.39-1.596-.468c-.781-.08-1.79-.08-3.21-.08s-2.429 0-3.21.08M12 8.25a.75.75 0 0 1 .75.75v2.758l1.77 1.701a.75.75 0 1 1-1.04 1.082l-1.616-1.555c-.303-.29-.454-.436-.534-.624c-.08-.187-.08-.397-.08-.817V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarWatchSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterBoldIcon],svg[solar-water-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.582 6.01c.69-1.015 2.133-.977 2.862-.1C8.426 7.091 9.81 8.25 12 8.25c2.228 0 3.591-.93 4.519-2.096c.721-.907 2.259-1.053 3.015.023c.618.88 1.294 1.58 2.628 1.877a.75.75 0 0 1-.324 1.464c-1.841-.408-2.799-1.436-3.532-2.479c-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.347.165C16.517 8.565 14.74 9.75 12 9.75c-2.823 0-4.59-1.532-5.71-2.882l.577-.48l-.577.48a.33.33 0 0 0-.261-.118a.24.24 0 0 0-.207.104c-.746 1.097-1.703 2.23-3.66 2.664a.75.75 0 1 1-.324-1.464C3.25 7.74 3.926 6.974 4.582 6.01m0 5c.69-1.015 2.133-.977 2.862-.1c.982 1.181 2.366 2.34 4.556 2.34c2.228 0 3.591-.93 4.519-2.096c.721-.907 2.259-1.053 3.015.023c.618.88 1.294 1.58 2.628 1.877a.75.75 0 0 1-.324 1.464c-1.841-.408-2.799-1.436-3.532-2.479c-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.347.165C16.517 13.566 14.74 14.75 12 14.75c-2.823 0-4.59-1.533-5.71-2.882a.33.33 0 0 0-.261-.118a.24.24 0 0 0-.207.104c-.746 1.097-1.703 2.23-3.66 2.664a.75.75 0 0 1-.324-1.465c1.412-.312 2.088-1.079 2.744-2.043m0 5c.69-1.015 2.133-.977 2.862-.1c.982 1.181 2.366 2.34 4.556 2.34c2.228 0 3.591-.93 4.519-2.096c.721-.907 2.259-1.053 3.015.023c.618.88 1.294 1.58 2.628 1.877a.75.75 0 0 1-.324 1.464c-1.841-.408-2.799-1.436-3.532-2.479c-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.347.165C16.517 18.566 14.74 19.75 12 19.75c-2.823 0-4.59-1.532-5.71-2.882a.33.33 0 0 0-.261-.118a.24.24 0 0 0-.207.104c-.746 1.097-1.703 2.23-3.66 2.664a.75.75 0 0 1-.324-1.465c1.412-.312 2.088-1.079 2.744-2.043" clip-rule="evenodd"></svg:path>`,
})
export class SolarWaterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterBoldDuotoneIcon],svg[solar-water-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.582 6.01c.69-1.015 2.133-.977 2.862-.1C8.426 7.091 9.81 8.25 12 8.25c2.228 0 3.591-.93 4.519-2.096c.721-.907 2.259-1.053 3.015.023c.618.88 1.294 1.58 2.628 1.877a.75.75 0 0 1-.324 1.464c-1.841-.408-2.799-1.436-3.532-2.479c-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.347.165C16.517 8.565 14.74 9.75 12 9.75c-2.823 0-4.59-1.532-5.71-2.882a.33.33 0 0 0-.261-.118a.24.24 0 0 0-.207.104c-.746 1.097-1.703 2.23-3.66 2.664a.75.75 0 1 1-.324-1.464C3.25 7.74 3.926 6.974 4.582 6.01m0 10c.69-1.015 2.133-.977 2.862-.1c.982 1.181 2.366 2.34 4.556 2.34c2.228 0 3.591-.93 4.519-2.096c.721-.907 2.259-1.053 3.015.023c.618.88 1.294 1.58 2.628 1.877a.75.75 0 0 1-.324 1.464c-1.841-.408-2.799-1.436-3.532-2.479c-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.347.165C16.517 18.566 14.74 19.75 12 19.75c-2.823 0-4.59-1.532-5.71-2.882a.33.33 0 0 0-.261-.118a.24.24 0 0 0-.207.104c-.746 1.097-1.703 2.23-3.66 2.664a.75.75 0 0 1-.324-1.465c1.412-.312 2.088-1.079 2.744-2.043" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4.582 11.01c.69-1.015 2.133-.977 2.862-.1c.982 1.181 2.366 2.34 4.556 2.34c2.228 0 3.591-.93 4.519-2.096c.721-.907 2.259-1.053 3.015.023c.618.88 1.294 1.58 2.628 1.877a.75.75 0 0 1-.324 1.464c-1.841-.408-2.799-1.436-3.532-2.479c-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.347.165C16.517 13.566 14.74 14.75 12 14.75c-2.823 0-4.59-1.533-5.71-2.882a.33.33 0 0 0-.261-.118a.24.24 0 0 0-.207.104c-.746 1.097-1.703 2.23-3.66 2.664a.75.75 0 0 1-.324-1.465c1.412-.312 2.088-1.079 2.744-2.043" opacity=".5"></svg:path>`,
})
export class SolarWaterBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterBrokenIcon],svg[solar-water-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19c-2.507 0-4.082-1.345-5.133-2.611c-.44-.53-1.28-.522-1.665.043c-.701 1.03-1.518 1.98-3.202 2.354m20 0c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.566-1.815.013c-.41.516-.899.99-1.49 1.379M12 9c2.507 0 4.082-1.345 5.134-2.611c.439-.53 1.28-.522 1.664.043c.701 1.03 1.518 1.98 3.202 2.354m-20 0c1.588-.352 2.404-1.216 3.08-2.178c.423-.602 1.355-.565 1.814.013c.41.515.9.99 1.491 1.379M22 13.786c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.566-1.815.013C16.055 12.943 14.485 14 12 14c-2.507 0-4.082-1.345-5.133-2.611c-.44-.53-1.28-.522-1.665.043c-.701 1.03-1.518 1.98-3.202 2.354"></svg:path>`,
})
export class SolarWaterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterLineDuotoneIcon],svg[solar-water-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 8.786c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.565-1.815.013C16.055 7.943 14.485 9 12 9C9.493 9 7.918 7.655 6.867 6.389c-.44-.53-1.28-.522-1.665.043C4.5 7.462 3.684 8.412 2 8.786m20 10c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.566-1.815.013C16.055 17.943 14.485 19 12 19c-2.507 0-4.082-1.345-5.133-2.611c-.44-.53-1.28-.522-1.665.043c-.701 1.03-1.518 1.98-3.202 2.354"></svg:path><svg:path d="M22 13.786c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.566-1.815.013C16.055 12.943 14.485 14 12 14c-2.507 0-4.082-1.345-5.133-2.611c-.44-.53-1.28-.522-1.665.043c-.701 1.03-1.518 1.98-3.202 2.354" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWaterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterLinearIcon],svg[solar-water-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.786c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.565-1.815.013C16.055 7.943 14.485 9 12 9C9.493 9 7.918 7.655 6.867 6.389c-.44-.53-1.28-.522-1.665.043C4.5 7.462 3.684 8.412 2 8.786m20 10c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.566-1.815.013C16.055 17.943 14.485 19 12 19c-2.507 0-4.082-1.345-5.133-2.611c-.44-.53-1.28-.522-1.665.043c-.701 1.03-1.518 1.98-3.202 2.354m20-5c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.566-1.815.013C16.055 12.943 14.485 14 12 14c-2.507 0-4.082-1.345-5.133-2.611c-.44-.53-1.28-.522-1.665.043c-.701 1.03-1.518 1.98-3.202 2.354"></svg:path>`,
})
export class SolarWaterLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterOutlineIcon],svg[solar-water-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.582 6.01c.69-1.015 2.133-.977 2.862-.1C8.426 7.091 9.81 8.25 12 8.25c2.228 0 3.591-.93 4.519-2.096c.721-.907 2.259-1.053 3.015.023c.618.88 1.294 1.58 2.628 1.877a.75.75 0 0 1-.324 1.464c-1.841-.408-2.799-1.436-3.532-2.479c-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.347.165C16.517 8.565 14.74 9.75 12 9.75c-2.823 0-4.59-1.532-5.71-2.882l.577-.48l-.577.48a.33.33 0 0 0-.261-.118a.24.24 0 0 0-.207.104c-.746 1.097-1.703 2.23-3.66 2.664a.75.75 0 1 1-.324-1.464C3.25 7.74 3.926 6.974 4.582 6.01m0 5c.69-1.015 2.133-.977 2.862-.1c.982 1.181 2.366 2.34 4.556 2.34c2.228 0 3.591-.93 4.519-2.096c.721-.907 2.259-1.053 3.015.023c.618.88 1.294 1.58 2.628 1.877a.75.75 0 0 1-.324 1.464c-1.841-.408-2.799-1.436-3.532-2.479c-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.347.165C16.517 13.566 14.74 14.75 12 14.75c-2.823 0-4.59-1.533-5.71-2.882a.33.33 0 0 0-.261-.118a.24.24 0 0 0-.207.104c-.746 1.097-1.703 2.23-3.66 2.664a.75.75 0 0 1-.324-1.465c1.412-.312 2.088-1.079 2.744-2.043m0 5c.69-1.015 2.133-.977 2.862-.1c.982 1.181 2.366 2.34 4.556 2.34c2.228 0 3.591-.93 4.519-2.096c.721-.907 2.259-1.053 3.015.023c.618.88 1.294 1.58 2.628 1.877a.75.75 0 0 1-.324 1.464c-1.841-.408-2.799-1.436-3.532-2.479c-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.347.165C16.517 18.566 14.74 19.75 12 19.75c-2.823 0-4.59-1.532-5.71-2.882a.33.33 0 0 0-.261-.118a.24.24 0 0 0-.207.104c-.746 1.097-1.703 2.23-3.66 2.664a.75.75 0 0 1-.324-1.465c1.412-.312 2.088-1.079 2.744-2.043" clip-rule="evenodd"></svg:path>`,
})
export class SolarWaterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterSunBoldIcon],svg[solar-water-sun-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.4 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.394-.393a.75.75 0 0 1 0-1.06m15.2 0a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M4.57 18.866c.687-1.074 2.157-1.039 2.888-.104c.99 1.267 2.372 2.488 4.542 2.488c2.209 0 3.57-.979 4.505-2.23c.72-.962 2.286-1.119 3.04.024c.626.945 1.304 1.687 2.627 1.998a.75.75 0 1 1-.344 1.46c-1.852-.436-2.807-1.533-3.534-2.631a.28.28 0 0 0-.253-.128a.43.43 0 0 0-.335.177C16.54 21.48 14.76 22.75 12 22.75c-2.842 0-4.611-1.64-5.724-3.065a.3.3 0 0 0-.246-.125a.23.23 0 0 0-.196.114c-.74 1.156-1.695 2.365-3.662 2.828a.75.75 0 1 1-.344-1.46c1.401-.33 2.08-1.14 2.742-2.176" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M22.172 16.042c-1.323-.311-2.001-1.053-2.626-1.999a1.75 1.75 0 0 0-1.677-.79Q18 12.646 18 12a6 6 0 1 0-11.906 1.062a1.7 1.7 0 0 0-1.524.804c-.662 1.035-1.34 1.846-2.742 2.176a.75.75 0 1 0 .344 1.46c1.967-.463 2.922-1.672 3.662-2.828a.23.23 0 0 1 .196-.114a.3.3 0 0 1 .246.125C7.389 16.11 9.158 17.75 12 17.75c2.76 0 4.539-1.27 5.706-2.83a.43.43 0 0 1 .335-.177a.28.28 0 0 1 .253.127c.727 1.1 1.682 2.196 3.534 2.632a.75.75 0 0 0 .344-1.46"></svg:path>`,
})
export class SolarWaterSunBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterSunBoldDuotoneIcon],svg[solar-water-sun-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M22.172 16.042c-1.323-.311-2.001-1.053-2.626-1.999a1.75 1.75 0 0 0-1.677-.79Q18 12.646 18 12a6 6 0 1 0-11.906 1.062a1.7 1.7 0 0 0-1.524.804c-.662 1.035-1.34 1.846-2.742 2.176a.75.75 0 1 0 .344 1.46c1.967-.463 2.922-1.672 3.662-2.828a.23.23 0 0 1 .196-.114a.3.3 0 0 1 .246.125C7.389 16.11 9.158 17.75 12 17.75c2.76 0 4.539-1.27 5.706-2.83a.43.43 0 0 1 .335-.177a.28.28 0 0 1 .253.127c.727 1.1 1.682 2.196 3.534 2.632a.75.75 0 0 0 .344-1.46"></svg:path><svg:path fill="currentColor" d="M4.4 4.398a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.394-.392a.75.75 0 0 1 0-1.06m15.201 0a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0M4.57 18.866c.687-1.074 2.157-1.039 2.888-.104c.99 1.267 2.372 2.488 4.542 2.488c2.209 0 3.57-.979 4.505-2.229c.72-.962 2.286-1.12 3.04.023c.626.945 1.304 1.687 2.627 1.999a.75.75 0 1 1-.344 1.46c-1.852-.437-2.807-1.534-3.534-2.632a.28.28 0 0 0-.253-.128a.43.43 0 0 0-.335.177C16.54 21.48 14.76 22.75 12 22.75c-2.842 0-4.611-1.64-5.724-3.064a.3.3 0 0 0-.246-.126a.23.23 0 0 0-.196.114c-.74 1.156-1.695 2.365-3.662 2.829a.75.75 0 1 1-.344-1.46c1.401-.33 2.08-1.142 2.742-2.177" opacity=".5"></svg:path>`,
})
export class SolarWaterSunBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterSunBrokenIcon],svg[solar-water-sun-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M22 16.773c-1.588-.374-2.404-1.293-3.08-2.316c-.424-.64-1.355-.601-1.815.014C16.055 15.876 14.485 17 12 17c-2.507 0-4.082-1.431-5.133-2.777c-.44-.562-1.28-.555-1.665.046C4.5 15.366 3.684 16.376 2 16.773"></svg:path><svg:path d="M17.917 11a6.002 6.002 0 0 0-11.834 0M12 2v1m10 9h-1M3 12H2m17.07-7.07l-.393.393M5.322 5.322L4.93 4.93"></svg:path><svg:path stroke-linejoin="round" d="M12 22c-2.507 0-4.082-1.345-5.133-2.611c-.44-.53-1.28-.522-1.665.043c-.701 1.03-1.518 1.98-3.202 2.354m20 0c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.566-1.815.013c-.41.516-.899.99-1.49 1.379"></svg:path></svg:g>`,
})
export class SolarWaterSunBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterSunLineDuotoneIcon],svg[solar-water-sun-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M22 16.773c-1.588-.374-2.404-1.293-3.08-2.316c-.424-.64-1.355-.601-1.815.014C16.055 15.876 14.485 17 12 17c-2.507 0-4.082-1.431-5.133-2.777c-.44-.562-1.28-.555-1.665.046C4.5 15.366 3.684 16.376 2 16.773" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M22 21.773c-1.588-.374-2.404-1.293-3.08-2.316c-.424-.64-1.355-.601-1.815.014C16.055 20.876 14.485 22 12 22c-2.507 0-4.082-1.431-5.133-2.777c-.44-.562-1.28-.555-1.665.046C4.5 20.366 3.684 21.376 2 21.773"></svg:path><svg:path d="M17.917 11a6.002 6.002 0 0 0-11.834 0M12 2v1m10 9h-1M3 12H2"></svg:path><svg:path d="m19.07 4.93l-.393.393M5.322 5.322L4.93 4.93" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWaterSunLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterSunLinearIcon],svg[solar-water-sun-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M22 16.773c-1.588-.374-2.404-1.293-3.08-2.316c-.424-.64-1.355-.601-1.815.014C16.055 15.876 14.485 17 12 17c-2.507 0-4.082-1.431-5.133-2.777c-.44-.562-1.28-.555-1.665.046C4.5 15.366 3.684 16.376 2 16.773m20 5c-1.588-.374-2.404-1.293-3.08-2.316c-.424-.64-1.355-.601-1.815.014C16.055 20.876 14.485 22 12 22c-2.507 0-4.082-1.431-5.133-2.777c-.44-.562-1.28-.555-1.665.046C4.5 20.366 3.684 21.376 2 21.773"></svg:path><svg:path d="M17.917 11a6.002 6.002 0 0 0-11.834 0M12 2v1m10 9h-1M3 12H2m17.07-7.07l-.393.393M5.322 5.322L4.93 4.93"></svg:path></svg:g>`,
})
export class SolarWaterSunLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterSunOutlineIcon],svg[solar-water-sun-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.4 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.394-.393a.75.75 0 0 1 0-1.06m15.2 0a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0M12 6.75c-2.6 0-4.76 1.892-5.177 4.374a.75.75 0 0 1-1.48-.248a6.752 6.752 0 0 1 13.314 0a.75.75 0 1 1-1.48.248A5.25 5.25 0 0 0 12 6.75M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M4.57 13.866c.687-1.074 2.157-1.039 2.888-.104c.99 1.267 2.372 2.488 4.542 2.488c2.209 0 3.57-.979 4.505-2.23c.72-.961 2.286-1.119 3.04.024c.626.945 1.304 1.687 2.627 1.998a.75.75 0 1 1-.344 1.46c-1.852-.436-2.807-1.533-3.534-2.631a.28.28 0 0 0-.253-.128a.43.43 0 0 0-.335.176C16.54 16.48 14.76 17.75 12 17.75c-2.842 0-4.611-1.64-5.724-3.065a.3.3 0 0 0-.246-.125a.23.23 0 0 0-.196.114c-.74 1.156-1.695 2.365-3.662 2.828a.75.75 0 1 1-.344-1.46c1.401-.33 2.08-1.14 2.742-2.176m0 5c.687-1.074 2.157-1.039 2.888-.104c.99 1.267 2.372 2.488 4.542 2.488c2.209 0 3.57-.979 4.505-2.23c.72-.962 2.286-1.119 3.04.024c.626.945 1.304 1.687 2.627 1.998a.75.75 0 1 1-.344 1.46c-1.852-.436-2.807-1.533-3.534-2.631a.28.28 0 0 0-.253-.128a.43.43 0 0 0-.335.177C16.54 21.48 14.76 22.75 12 22.75c-2.842 0-4.611-1.64-5.724-3.065a.3.3 0 0 0-.246-.125a.23.23 0 0 0-.196.114c-.74 1.156-1.695 2.365-3.662 2.828a.75.75 0 1 1-.344-1.46c1.401-.33 2.08-1.14 2.742-2.176" clip-rule="evenodd"></svg:path>`,
})
export class SolarWaterSunOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropBoldIcon],svg[solar-waterdrop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.612 22C6.855 22 3 18.057 3 13.193v-.265C3 8.317 5.729 4.163 9.903 2.421a5.43 5.43 0 0 1 4.194 0C18.272 4.163 21 8.317 21 12.928v.265C21 18.057 17.145 22 12.389 22zm.454-16.039a.75.75 0 0 1-.366.996c-1.545.715-2.793 2.168-3.37 3.993a.75.75 0 1 1-1.43-.453c.692-2.186 2.206-3.993 4.17-4.901a.75.75 0 0 1 .996.365" clip-rule="evenodd"></svg:path>`,
})
export class SolarWaterdropBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropBoldDuotoneIcon],svg[solar-waterdrop-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.612 22h.777C17.145 22 21 18.057 21 13.193v-.265c0-4.611-2.729-8.765-6.903-10.507a5.43 5.43 0 0 0-4.194 0C5.73 4.163 3 8.317 3 12.928v.265C3 18.057 6.855 22 11.612 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.066 5.961a.75.75 0 0 1-.366.996c-1.545.715-2.793 2.168-3.37 3.993a.75.75 0 1 1-1.43-.453c.691-2.186 2.206-3.993 4.17-4.902a.75.75 0 0 1 .996.366"></svg:path>`,
})
export class SolarWaterdropBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropBrokenIcon],svg[solar-waterdrop-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3.447 16A9 9 0 0 1 3 13.193v-.265C3 8.317 5.729 4.163 9.903 2.421a5.43 5.43 0 0 1 4.194 0C18.272 4.163 21 8.317 21 12.928v.265C21 18.057 17.145 22 12.389 22h-.777A8.47 8.47 0 0 1 6 19.874"></svg:path><svg:path d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448"></svg:path></svg:g>`,
})
export class SolarWaterdropBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropLineDuotoneIcon],svg[solar-waterdrop-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 13.193C3 18.057 6.855 22 11.612 22h.777C17.145 22 21 18.057 21 13.193v-.265c0-4.611-2.729-8.765-6.903-10.507a5.43 5.43 0 0 0-4.194 0C5.73 4.163 3 8.317 3 12.928z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448"></svg:path></svg:g>`,
})
export class SolarWaterdropLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropLinearIcon],svg[solar-waterdrop-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 13.193C3 18.057 6.855 22 11.612 22h.777C17.145 22 21 18.057 21 13.193v-.265c0-4.611-2.729-8.765-6.903-10.507a5.43 5.43 0 0 0-4.194 0C5.73 4.163 3 8.317 3 12.928z"></svg:path><svg:path stroke-linecap="round" d="M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448"></svg:path></svg:g>`,
})
export class SolarWaterdropLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropOutlineIcon],svg[solar-waterdrop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.7 6.957a.75.75 0 1 0-.629-1.361c-1.965.908-3.48 2.715-4.171 4.901a.75.75 0 0 0 1.43.453c.577-1.825 1.825-3.278 3.37-3.993"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.386 1.729a6.18 6.18 0 0 0-4.772 0C5.154 3.59 2.25 8.022 2.25 12.929v.264c0 5.262 4.175 9.557 9.362 9.557h.777c5.186 0 9.361-4.295 9.361-9.557v-.265c0-4.906-2.903-9.337-7.364-11.2m-4.194 1.384a4.68 4.68 0 0 1 3.616 0c3.888 1.623 6.442 5.498 6.442 9.815v.265c0 4.466-3.535 8.057-7.861 8.057h-.777c-4.326 0-7.862-3.591-7.862-8.057v-.265c0-4.317 2.554-8.192 6.442-9.815" clip-rule="evenodd"></svg:path>`,
})
export class SolarWaterdropOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropsBoldIcon],svg[solar-waterdrops-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833m12 0C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833m-6-10C16 10.134 14.21 12 12 12s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C14.434 4.472 16 6.393 16 7.833"></svg:path>`,
})
export class SolarWaterdropsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropsBoldDuotoneIcon],svg[solar-waterdrops-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833"></svg:path><svg:path fill="currentColor" d="M22 17.833C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833" opacity=".7"></svg:path><svg:path fill="currentColor" d="M16 7.833C16 10.134 14.21 12 12 12s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C14.434 4.472 16 6.393 16 7.833" opacity=".4"></svg:path>`,
})
export class SolarWaterdropsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropsBrokenIcon],svg[solar-waterdrops-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833Zm12 0C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833Z"></svg:path><svg:path stroke-linecap="round" d="M13.262 3.235a1.724 1.724 0 0 0-2.524 0C9.566 4.472 8 6.393 8 7.833C8 10.134 9.79 12 12 12s4-1.866 4-4.167A2.7 2.7 0 0 0 15.854 7"></svg:path></svg:g>`,
})
export class SolarWaterdropsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropsLineDuotoneIcon],svg[solar-waterdrops-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833Zm12 0C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833Z"></svg:path><svg:path d="M16 7.833C16 10.134 14.21 12 12 12s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C14.434 4.472 16 6.393 16 7.833Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWaterdropsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropsLinearIcon],svg[solar-waterdrops-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833Zm12 0C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833Zm-6-10C16 10.134 14.21 12 12 12s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C14.434 4.472 16 6.393 16 7.833Z"></svg:path>`,
})
export class SolarWaterdropsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropsOutlineIcon],svg[solar-waterdrops-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.717 3.75a.974.974 0 0 0-1.434 0c-.572.604-1.224 1.358-1.728 2.121c-.522.792-.805 1.475-.805 1.962c0 1.916 1.484 3.417 3.25 3.417s3.25-1.5 3.25-3.417c0-.487-.283-1.17-.805-1.962c-.504-.763-1.156-1.517-1.728-2.12M10.194 2.72a2.474 2.474 0 0 1 3.612 0c.6.634 1.318 1.46 1.89 2.326c.554.838 1.054 1.836 1.054 2.788c0 2.686-2.098 4.917-4.75 4.917s-4.75-2.23-4.75-4.917c0-.952.5-1.95 1.054-2.788c.572-.867 1.29-1.692 1.89-2.326M6.717 13.75a.974.974 0 0 0-1.434 0c-.572.603-1.224 1.357-1.728 2.12c-.522.792-.805 1.475-.805 1.962c0 1.916 1.484 3.417 3.25 3.417s3.25-1.5 3.25-3.417c0-.487-.283-1.17-.805-1.962c-.504-.763-1.156-1.517-1.728-2.12m-2.523-1.032a2.474 2.474 0 0 1 3.612 0c.6.634 1.318 1.46 1.89 2.326c.554.838 1.054 1.836 1.054 2.788c0 2.686-2.098 4.917-4.75 4.917s-4.75-2.23-4.75-4.917c0-.952.5-1.95 1.054-2.788c.572-.867 1.29-1.692 1.89-2.326m14.523 1.032a.974.974 0 0 0-1.434 0c-.572.603-1.224 1.357-1.728 2.12c-.522.792-.805 1.475-.805 1.962c0 1.916 1.484 3.417 3.25 3.417s3.25-1.5 3.25-3.417c0-.487-.283-1.17-.805-1.962c-.504-.763-1.156-1.517-1.728-2.12m-2.523-1.032a2.474 2.474 0 0 1 3.612 0c.6.634 1.318 1.46 1.89 2.326c.554.838 1.054 1.836 1.054 2.788c0 2.686-2.098 4.917-4.75 4.917s-4.75-2.23-4.75-4.917c0-.952.5-1.95 1.054-2.788c.572-.867 1.29-1.692 1.89-2.326" clip-rule="evenodd"></svg:path>`,
})
export class SolarWaterdropsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWeigherBoldIcon],svg[solar-weigher-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14zm4.25 8a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m8.105-11.69a18.3 18.3 0 0 0-6.71 0l-.476.088c-.88.164-1.4 1.194-1.068 2.118l.744 2.076c.108.301.399.467.68.389q.267-.075.534-.137l-.64-1.99c-.155-.487.071-1.022.507-1.197c.436-.174.917.079 1.073.565l.752 2.342a12.9 12.9 0 0 1 4.724.417c.281.078.572-.088.68-.389l.744-2.076c.332-.924-.188-1.954-1.068-2.118z" clip-rule="evenodd"></svg:path>`,
})
export class SolarWeigherBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWeigherBoldDuotoneIcon],svg[solar-weigher-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8.645 6.31a18.3 18.3 0 0 1 6.71 0l.476.088c.88.164 1.4 1.194 1.068 2.118l-.744 2.076c-.108.301-.399.467-.68.389a12.9 12.9 0 0 0-4.724-.417L10 8.222c-.156-.486-.637-.74-1.073-.565s-.662.71-.506 1.197l.64 1.99q-.27.063-.534.137c-.282.078-.573-.088-.68-.389L7.1 8.516c-.332-.924.188-1.954 1.068-2.118z"></svg:path>`,
})
export class SolarWeigherBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWeigherBrokenIcon],svg[solar-weigher-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M8 18h8"></svg:path><svg:path d="m15.124 5.52l.425.071a2 2 0 0 1 1.528 2.716l-.666 1.664a1.27 1.27 0 0 1-1.486.76a12.06 12.06 0 0 0-5.85 0a1.27 1.27 0 0 1-1.487-.76l-.665-1.664A2 2 0 0 1 8.45 5.59l.425-.07A19 19 0 0 1 11 5.287m-.82 4.642l-.675-1.883"></svg:path></svg:g>`,
})
export class SolarWeigherBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWeigherLineDuotoneIcon],svg[solar-weigher-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M8 18h8m.412-8.03l.665-1.663A2 2 0 0 0 15.55 5.59l-.425-.07a19 19 0 0 0-6.248 0l-.425.07a2 2 0 0 0-1.528 2.716l.665 1.664c.236.59.871.914 1.487.76c1.92-.48 3.93-.48 5.85 0a1.27 1.27 0 0 0 1.486-.76Zm-6.232-.041l-.675-1.883"></svg:path></svg:g>`,
})
export class SolarWeigherLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWeigherLinearIcon],svg[solar-weigher-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></svg:path><svg:path stroke-linecap="round" d="M8 18h8m.412-8.03l.665-1.663A2 2 0 0 0 15.55 5.59l-.425-.07a19 19 0 0 0-6.247 0l-.426.07a2 2 0 0 0-1.528 2.716L7.59 9.97c.235.59.87.914 1.486.76c1.92-.48 3.93-.48 5.85 0a1.27 1.27 0 0 0 1.487-.76Zm-6.232-.041l-.676-1.883"></svg:path></svg:g>`,
})
export class SolarWeigherLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWeigherOutlineIcon],svg[solar-weigher-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14m2.042 1.89a19.8 19.8 0 0 1 6.494 0l.425.072a2.75 2.75 0 0 1 2.101 3.734l-.665 1.664a2.02 2.02 0 0 1-2.365 1.209a11.3 11.3 0 0 0-5.486 0a2.02 2.02 0 0 1-2.365-1.21l-.666-1.663a2.75 2.75 0 0 1 2.102-3.734zM15 6.26a18.3 18.3 0 0 0-6 0l-.426.071A1.25 1.25 0 0 0 7.62 8.03l.666 1.664a.52.52 0 0 0 .608.31q.238-.059.477-.109L8.8 8.299a.75.75 0 0 1 1.412-.506l.672 1.877a12.8 12.8 0 0 1 4.224.334a.52.52 0 0 0 .608-.311l.666-1.664a1.25 1.25 0 0 0-.955-1.698zM7.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarWeigherOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWheelAngleBoldIcon],svg[solar-wheel-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12c0 5.523-2.072 10-4.629 10H8.657c.867-.561 1.656-1.55 2.2-2.724c.873-1.888 1.4-4.46 1.4-7.276s-.527-5.388-1.4-7.276C10.312 3.549 9.523 2.56 8.656 2h7.714C18.928 2 21 6.477 21 12"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.31 5.134C3.51 6.866 3 9.293 3 12s.509 5.134 1.31 6.866c.824 1.778 1.855 2.634 2.804 2.634c.95 0 1.981-.856 2.804-2.634c.802-1.732 1.31-4.158 1.31-6.866s-.508-5.134-1.31-6.866C9.095 3.356 8.064 2.5 7.114 2.5s-1.98.856-2.804 2.634M5.571 12c0 3.314.691 6 1.543 6c.787 0 1.436-2.29 1.531-5.25H7.63a.76.76 0 0 1-.772-.75a.76.76 0 0 1 .772-.75h1.016C8.55 8.29 7.901 6 7.115 6C6.261 6 5.57 8.686 5.57 12" clip-rule="evenodd"></svg:path>`,
})
export class SolarWheelAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWheelAngleBoldDuotoneIcon],svg[solar-wheel-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.433 4.773C3.557 6.595 3 9.15 3 12s.557 5.405 1.433 7.227C5.333 21.1 6.461 22 7.5 22s2.166-.9 3.067-2.773C11.443 17.405 12 14.85 12 12s-.557-5.405-1.433-7.227C9.667 2.9 8.539 2 7.5 2s-2.166.9-3.067 2.773M5.813 12c0 3.488.755 6.316 1.687 6.316c.86 0 1.57-2.411 1.674-5.526H8.063c-.466 0-.844-.354-.844-.79s.378-.79.843-.79h1.112C9.071 8.095 8.361 5.685 7.5 5.685c-.932 0-1.687 2.828-1.687 6.316" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.567 19.227C9.667 21.1 8.539 22 7.5 22h8.872C18.928 22 21 17.523 21 12S18.928 2 16.372 2H7.5c1.039 0 2.166.9 3.067 2.773C11.443 6.595 12 9.15 12 12s-.557 5.405-1.433 7.227" opacity=".5"></svg:path>`,
})
export class SolarWheelAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWheelAngleBrokenIcon],svg[solar-wheel-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 12c0 5.523-2.015 10-4.5 10m0-20c1.845 0 3.431 2.468 4.126 6M3 12C3 6.477 5.015 2 7.5 2S12 6.477 12 12S9.985 22 7.5 22c-1.845 0-3.431-2.468-4.126-6"></svg:path><svg:path d="M7.5 22c2.485 0 4.5-4.477 4.5-10S9.985 2 7.5 2"></svg:path><svg:path d="M9 12c0 3.314-.672 6-1.5 6S6 15.314 6 12s.672-6 1.5-6S9 8.686 9 12ZM7.5 2h9m-9 20h9"></svg:path><svg:path stroke-linecap="round" d="M9 12H8"></svg:path></svg:g>`,
})
export class SolarWheelAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWheelAngleLineDuotoneIcon],svg[solar-wheel-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16.5 22c2.485 0 4.5-4.477 4.5-10S18.985 2 16.5 2M12 12c0 5.523-2.015 10-4.5 10S3 17.523 3 12S5.015 2 7.5 2S12 6.477 12 12ZM7.5 2h9m-9 20h9"></svg:path><svg:path stroke-linecap="round" d="M9 12c0 3.314-.672 6-1.5 6S6 15.314 6 12s.672-6 1.5-6S9 8.686 9 12Zm0 0H8" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWheelAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWheelAngleLinearIcon],svg[solar-wheel-angle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16.5 22c2.485 0 4.5-4.477 4.5-10S18.985 2 16.5 2M12 12c0 5.523-2.015 10-4.5 10S3 17.523 3 12S5.015 2 7.5 2S12 6.477 12 12Z"></svg:path><svg:path d="M7.5 22c2.485 0 4.5-4.477 4.5-10S9.985 2 7.5 2"></svg:path><svg:path d="M9 12c0 3.314-.672 6-1.5 6S6 15.314 6 12s.672-6 1.5-6S9 8.686 9 12ZM7.5 2h9m-9 20h9"></svg:path><svg:path stroke-linecap="round" d="M9 12H8"></svg:path></svg:g>`,
})
export class SolarWheelAngleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWheelAngleOutlineIcon],svg[solar-wheel-angle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.002 5.237C4.24 6.929 3.75 9.32 3.75 12s.49 5.071 1.252 6.763c.793 1.763 1.734 2.487 2.498 2.487s1.705-.724 2.498-2.487C10.76 17.071 11.25 14.68 11.25 12s-.49-5.071-1.252-6.763C9.205 3.474 8.264 2.75 7.5 2.75s-1.705.724-2.498 2.487m5.237-2.487c.44.536.816 1.18 1.127 1.871c.867 1.927 1.384 4.537 1.384 7.379s-.517 5.452-1.384 7.379c-.311.691-.688 1.335-1.127 1.871H16.5c.764 0 1.705-.724 2.498-2.487c.762-1.692 1.252-4.083 1.252-6.763s-.49-5.071-1.252-6.763C18.205 3.474 17.264 2.75 16.5 2.75zM7.5 1.25h9c1.722 0 3.03 1.515 3.866 3.371c.867 1.927 1.384 4.537 1.384 7.379s-.517 5.452-1.384 7.379c-.835 1.856-2.144 3.371-3.866 3.371h-9c-1.722 0-3.03-1.515-3.866-3.371C2.767 17.452 2.25 14.842 2.25 12s.517-5.452 1.384-7.379C4.47 2.765 5.778 1.25 7.5 1.25m-.333 6.69C6.914 8.95 6.75 10.385 6.75 12s.164 3.05.417 4.06c.107.43.223.753.333.973c.11-.22.226-.543.333-.972c.213-.851.363-2.004.405-3.311H8a.75.75 0 0 1 0-1.5h.238c-.042-1.307-.192-2.46-.405-3.31a5 5 0 0 0-.333-.973c-.11.22-.226.543-.333.972M7.674 6.7l-.01.008zm-.339.008L7.326 6.7zm-.009 10.59l.01-.008zm.339-.008l.009.008zM6.27 6.09c.203-.343.594-.84 1.23-.84s1.027.497 1.23.84c.232.393.415.91.558 1.485c.29 1.161.462 2.725.462 4.425s-.172 3.264-.462 4.424c-.143.575-.326 1.093-.558 1.486c-.203.343-.594.84-1.23.84s-1.027-.497-1.23-.84c-.232-.393-.415-.91-.558-1.486c-.29-1.16-.462-2.724-.462-4.424s.172-3.264.462-4.425c.143-.574.326-1.092.558-1.485" clip-rule="evenodd"></svg:path>`,
})
export class SolarWheelAngleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWheelBoldIcon],svg[solar-wheel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m5.954-9.25h-3.049a3 3 0 0 1-.803 1.39l1.524 2.64a6 6 0 0 0 2.328-4.03m-3.626 4.782l-1.525-2.64a3 3 0 0 1-1.606 0l-1.525 2.64A6 6 0 0 0 12 18c.825 0 1.612-.167 2.328-.468m-5.954-.751l1.524-2.64a3 3 0 0 1-.804-1.391H6.046a6 6 0 0 0 2.328 4.03m9.58-5.531h-3.049a3 3 0 0 0-.803-1.39l1.524-2.64a6 6 0 0 1 2.328 4.03m-3.626-4.782A6 6 0 0 0 12 6c-.825 0-1.612.167-2.328.468l1.525 2.64a3 3 0 0 1 1.606 0zM9.898 9.86L8.374 7.22a6 6 0 0 0-2.328 4.03h3.049c.138-.535.42-1.013.803-1.39" clip-rule="evenodd"></svg:path>`,
})
export class SolarWheelBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWheelBoldDuotoneIcon],svg[solar-wheel-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" opacity=".5"><svg:path d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 6a6 6 0 1 0 0-12a6 6 0 0 0 0 12m3-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path></svg:g><svg:path fill="currentColor" d="m9.672 17.532l1.525-2.64a3 3 0 0 1-1.299-.751l-1.524 2.64c.397.301.832.555 1.298.75M6.046 12.75h3.048a3 3 0 0 1 0-1.5H6.047a6 6 0 0 0 0 1.5m2.327-5.53l1.524 2.64a3 3 0 0 1 1.299-.751l-1.525-2.64a6 6 0 0 0-1.298.75m4.429 1.89l1.525-2.64c.465.195.901.449 1.298.75l-1.524 2.64a3 3 0 0 0-1.299-.75m2.103 3.641a3 3 0 0 0 0-1.5h3.048a6 6 0 0 1 0 1.5zm-2.103 2.141c.497-.137.942-.4 1.299-.75l1.524 2.64a6 6 0 0 1-1.298.75z"></svg:path>`,
})
export class SolarWheelBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWheelBrokenIcon],svg[solar-wheel-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M6 12h4m4 0h4m-9 5.196l2-3.464m2-3.464l2-3.464m0 10.392l-2-3.464m-2-3.464L9 6.804M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path><svg:path stroke-linecap="round" d="M15 17.197A6 6 0 1 1 17.197 15"></svg:path></svg:g>`,
})
export class SolarWheelBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWheelLineDuotoneIcon],svg[solar-wheel-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M6 12h4m4 0h4m-9 5.196l2-3.464m2-3.464l2-3.464m0 10.392l-2-3.464m-2-3.464L9 6.804" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWheelLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWheelLinearIcon],svg[solar-wheel-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M6 12h4m4 0h4m-9 5.196l2-3.464m2-3.464l2-3.464m0 10.392l-2-3.464m-2-3.464L9 6.804"></svg:path></svg:g>`,
})
export class SolarWheelLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWheelOutlineIcon],svg[solar-wheel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m5.553-.75h2.55a2.74 2.74 0 0 1 .675-1.166l-1.276-2.21a5.25 5.25 0 0 0-1.949 3.376m3.248-4.126l1.275 2.21a2.76 2.76 0 0 1 1.348 0l1.275-2.21A5.2 5.2 0 0 0 12 6.75c-.689 0-1.347.133-1.95.374m5.197.75l-1.276 2.21c.314.322.549.721.675 1.166h2.55a5.25 5.25 0 0 0-1.95-3.375m1.949 4.876h-2.55a2.74 2.74 0 0 1-.675 1.166l1.276 2.21a5.25 5.25 0 0 0 1.949-3.376m-3.248 4.126l-1.275-2.21a2.75 2.75 0 0 1-1.348 0l-1.275 2.21c.602.241 1.26.374 1.949.374s1.347-.133 1.95-.374m-5.197-.75l1.276-2.21a2.75 2.75 0 0 1-.674-1.166h-2.55a5.25 5.25 0 0 0 1.948 3.375m2.634-3.037l-.011-.006l-.01-.006a1.25 1.25 0 0 1-.005-2.151l.015-.008l.015-.01a1.24 1.24 0 0 1 1.217 0l.018.01l.017.01a1.25 1.25 0 0 1-.01 2.15l-.007.005l-.008.005a1.24 1.24 0 0 1-1.231.001M5.25 12a6.75 6.75 0 1 1 13.5 0a6.75 6.75 0 0 1-13.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarWheelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWhiskBoldIcon],svg[solar-whisk-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.233 3.654C13.992.896 18.478.32 21.08 2.92s2.026 7.087-.733 9.845c-1.848 1.848-4.835 3.113-7.384 3.022a7 7 0 0 1-.667-.057L6.86 21.166a2.847 2.847 0 0 1-4.026-4.026l5.435-5.435a7 7 0 0 1-.057-.665c-.091-2.55 1.173-5.538 3.021-7.386m1.061 1.06c1.64-1.64 3.846-2.246 5.658-1.84a10 10 0 0 0-.796.426c-1.308.776-2.665 1.928-3.58 2.842c-.912.913-2.257 2.463-3.228 3.956c-.228.351-.443.71-.628 1.063l-.009-.175c-.075-2.098 1.003-4.691 2.583-6.272m7.138-.783c.409-.084.54.006.586.05c.046.046.135.179.051.587c-.082.404-.31.922-.659 1.51c-.693 1.17-1.756 2.429-2.612 3.285c-.858.857-2.327 2.13-3.713 3.032c-.699.454-1.332.784-1.83.936c-.248.076-.423.095-.533.087a.3.3 0 0 1-.094-.019l-.017-.01l-.01-.018a.3.3 0 0 1-.019-.093c-.008-.11.01-.285.086-.533c.153-.498.483-1.131.938-1.83c.901-1.385 2.174-2.855 3.031-3.712c.857-.856 2.116-1.92 3.285-2.613c.589-.35 1.107-.576 1.51-.659m-5.53 9.721c-.35.228-.709.443-1.062.628l.175.009c2.098.075 4.69-1.003 6.27-2.583c1.641-1.641 2.248-3.846 1.841-5.658a10 10 0 0 1-.426.796c-.776 1.308-1.927 2.665-2.842 3.58c-.913.913-2.463 2.257-3.956 3.228" clip-rule="evenodd"></svg:path>`,
})
export class SolarWhiskBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWhiskBoldDuotoneIcon],svg[solar-whisk-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.952 2.874c-1.812-.406-4.018.2-5.658 1.84c-1.58 1.58-2.659 4.174-2.583 6.272q.003.088.009.175c.185-.354.4-.712.628-1.063c.97-1.493 2.315-3.043 3.228-3.956c.915-.914 2.272-2.066 3.58-2.842c.26-.155.528-.3.796-.426m3.126.047c-2.6-2.6-7.087-2.025-9.845.733C9.385 5.502 8.12 8.49 8.212 11.04c.045 1.27.432 2.504 1.338 3.41s2.14 1.292 3.411 1.338c2.55.09 5.537-1.174 7.385-3.022c2.758-2.758 3.333-7.244.732-9.845m-1.06 1.06c-.046-.044-.178-.134-.587-.05c-.403.083-.92.31-1.51.66c-1.168.693-2.428 1.756-3.284 2.612c-.857.857-2.13 2.327-3.032 3.713c-.454.698-.785 1.331-.937 1.83c-.076.247-.095.422-.086.532a.3.3 0 0 0 .018.093l.01.018l.018.01a.3.3 0 0 0 .093.019c.11.008.285-.01.533-.087c.499-.152 1.132-.482 1.83-.936c1.386-.902 2.856-2.175 3.713-3.032c.856-.856 1.92-2.115 2.613-3.284c.35-.59.576-1.107.659-1.51c.084-.41-.006-.542-.051-.587M12.839 14.28c.354-.185.712-.4 1.063-.628c1.493-.97 3.043-2.315 3.956-3.228c.914-.915 2.066-2.272 2.842-3.58c.155-.26.3-.528.426-.796c.406 1.812-.2 4.017-1.84 5.658c-1.58 1.58-4.174 2.658-6.271 2.583z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.269 11.705c.141 1.029.535 1.998 1.281 2.744c.747.747 1.717 1.141 2.745 1.282L6.86 21.166a2.847 2.847 0 0 1-4.026-4.026z" opacity=".5"></svg:path>`,
})
export class SolarWhiskBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWhiskBrokenIcon],svg[solar-whisk-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12.9 15.127l-3.02 3.02m-3.02 3.02a2.847 2.847 0 0 1-4.026-4.027l6.039-6.039m11.675-7.65c1.209 1.209-1.45 4.672-3.22 6.442s-6.04 5.234-7.247 4.026M20.548 3.452c2.224 2.223 1.825 6.227-.732 8.784s-7.512 3.906-9.735 1.683M20.548 3.452c-2.223-2.224-6.227-1.825-8.784.732s-3.907 7.512-1.683 9.735M20.548 3.452c-.6-.602-1.76-.245-2.992.483M10.08 13.92c-1.209-1.208 2.255-5.476 4.026-7.246"></svg:path>`,
})
export class SolarWhiskBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWhiskLineDuotoneIcon],svg[solar-whisk-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.816 12.236c2.557-2.557 2.956-6.561.733-8.784c-2.224-2.224-6.228-1.825-8.785.732s-3.907 7.512-1.683 9.735c2.223 2.223 7.178.874 9.735-1.683Z"></svg:path><svg:path d="m12.9 15.127l-6.04 6.039a2.847 2.847 0 0 1-4.026-4.026l6.039-6.039" opacity=".5"></svg:path><svg:path d="M20.549 3.451c1.208 1.209-1.45 4.672-3.221 6.442c-1.77 1.77-6.04 5.234-7.247 4.026c-1.209-1.208 2.255-5.476 4.026-7.247s5.233-4.429 6.442-3.22Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWhiskLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWhiskLinearIcon],svg[solar-whisk-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m12.9 15.127l-6.04 6.04a2.847 2.847 0 0 1-4.026-4.027l6.039-6.039m11.675-7.65c1.209 1.209-1.45 4.672-3.22 6.442s-6.04 5.234-7.247 4.026M20.548 3.452c-1.208-1.209-4.67 1.45-6.441 3.22s-5.235 6.039-4.026 7.247M20.548 3.452c2.224 2.223 1.825 6.227-.732 8.784s-7.512 3.906-9.735 1.683M20.548 3.452c-2.223-2.224-6.227-1.825-8.784.732s-3.907 7.512-1.683 9.735"></svg:path>`,
})
export class SolarWhiskLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWhiskOutlineIcon],svg[solar-whisk-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.952 2.874c-1.812-.406-4.017.2-5.658 1.84c-1.168 1.168-2.079 2.91-2.43 4.614a6.8 6.8 0 0 0-.144 1.834c.185-.354.4-.713.628-1.064c.971-1.493 2.316-3.043 3.229-3.956c.914-.914 2.271-2.066 3.579-2.842c.261-.155.528-.3.796-.426m3.127.047c-2.6-2.6-7.087-2.025-9.846.733c-1.39 1.39-2.432 3.403-2.838 5.371a9 9 0 0 0-.187 1.68L2.304 16.61a3.597 3.597 0 1 0 5.086 5.087l5.906-5.906a9 9 0 0 0 1.679-.186c1.968-.407 3.981-1.449 5.371-2.839c2.759-2.758 3.333-7.244.733-9.845m-1.06 1.06c-.046-.044-.178-.134-.587-.05c-.403.083-.921.31-1.51.66c-1.17.693-2.429 1.756-3.285 2.612s-2.13 2.327-3.032 3.713c-.454.698-.785 1.331-.937 1.83c-.075.247-.094.422-.086.532a.3.3 0 0 0 .018.093l.01.018l.018.01a.3.3 0 0 0 .094.019c.11.008.284-.01.533-.087c.498-.152 1.131-.482 1.83-.936c1.385-.902 2.855-2.175 3.712-3.032c.857-.856 1.92-2.115 2.613-3.284c.35-.59.576-1.107.66-1.51c.083-.41-.007-.542-.052-.587m-7.18 10.299c.354-.185.712-.4 1.063-.628c1.493-.97 3.043-2.315 3.956-3.228c.915-.915 2.066-2.272 2.842-3.58c.155-.26.3-.528.426-.796c.406 1.812-.2 4.017-1.84 5.658c-1.168 1.167-2.91 2.078-4.615 2.43a6.8 6.8 0 0 1-1.832.144m-1.417 1.264a4.4 4.4 0 0 1-1.872-1.095a4.4 4.4 0 0 1-1.094-1.87l-5.091 5.09a2.097 2.097 0 1 0 2.966 2.965z" clip-rule="evenodd"></svg:path>`,
})
export class SolarWhiskOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterBoldIcon],svg[solar-wi-fi-router-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.084 3.5a4.75 4.75 0 0 0-4.39 2.934a.75.75 0 1 1-1.387-.574a6.252 6.252 0 0 1 11.553 0a.75.75 0 0 1-1.386.574a4.75 4.75 0 0 0-4.39-2.934"></svg:path><svg:path fill="currentColor" d="M12.085 6a2.25 2.25 0 0 0-2.16 1.618a.75.75 0 0 1-1.44-.42a3.751 3.751 0 0 1 7.2 0a.75.75 0 0 1-1.44.42A2.25 2.25 0 0 0 12.085 6"></svg:path><svg:path fill="currentColor" d="M13.084 7.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.651 4.378a.75.75 0 0 0-1.302.744l3.787 6.628H6c-1.886 0-2.828 0-3.414.586S2 13.864 2 15.75s0 2.828.586 3.414s1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586S22 17.636 22 15.75s0-2.828-.586-3.414s-1.528-.586-3.414-.586h-.136l3.787-6.628a.75.75 0 0 0-1.302-.744l-4 7l-.22.372H7.88l-.23-.372zM6 16.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarWiFiRouterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterBoldDuotoneIcon],svg[solar-wi-fi-router-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.586 12.336C2 12.922 2 13.864 2 15.75s0 2.828.586 3.414s1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586S22 17.636 22 15.75s0-2.828-.586-3.414s-1.528-.586-3.414-.586H6c-1.886 0-2.828 0-3.414.586M6 16.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.651 4.378a.75.75 0 0 0-1.302.744l3.787 6.628H7.86l-.209-.372zm16.699 0a.75.75 0 1 1 1.301.744l-3.787 6.628h-1.723l.208-.372z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.084 3.5a4.75 4.75 0 0 0-4.39 2.934a.75.75 0 1 1-1.387-.574a6.252 6.252 0 0 1 11.553 0a.75.75 0 0 1-1.386.574a4.75 4.75 0 0 0-4.39-2.934" clip-rule="evenodd" opacity=".4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.085 6a2.25 2.25 0 0 0-2.16 1.618a.75.75 0 0 1-1.44-.42a3.751 3.751 0 0 1 7.2 0a.75.75 0 0 1-1.44.42A2.25 2.25 0 0 0 12.085 6" clip-rule="evenodd" opacity=".7"></svg:path><svg:path fill="currentColor" d="M13.084 7.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarWiFiRouterBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterBrokenIcon],svg[solar-wi-fi-router-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 11L3 4m14 7l4-7m-7 11h4m-.833-9.603A5.502 5.502 0 0 0 7 5.397"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0"></svg:path><svg:path fill="currentColor" d="M13.084 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 19H6c-1.886 0-2.828 0-3.414-.586S2 16.886 2 15s0-2.828.586-3.414S4.114 11 6 11h12c1.886 0 2.828 0 3.414.586S22 13.114 22 15s0 2.828-.586 3.414S19.886 19 18 19h-1"></svg:path></svg:g>`,
})
export class SolarWiFiRouterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterLineDuotoneIcon],svg[solar-wi-fi-router-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 15c0-1.886 0-2.828.586-3.414S4.114 11 6 11h12c1.886 0 2.828 0 3.414.586S22 13.114 22 15s0 2.828-.586 3.414S19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586S2 16.886 2 15Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 11L3 4m14 7l4-7"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 15h4" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.167 5.397A5.502 5.502 0 0 0 7 5.397" opacity=".4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0" opacity=".7"></svg:path><svg:path fill="currentColor" d="M13.084 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarWiFiRouterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterLinearIcon],svg[solar-wi-fi-router-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 15c0-1.886 0-2.828.586-3.414S4.114 11 6 11h12c1.886 0 2.828 0 3.414.586S22 13.114 22 15s0 2.828-.586 3.414S19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586S2 16.886 2 15Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 11L3 4m14 7l4-7m-7 11h4m-.833-9.603A5.502 5.502 0 0 0 7 5.397"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0"></svg:path><svg:path fill="currentColor" d="M13.084 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarWiFiRouterLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterMinimalisticBoldIcon],svg[solar-wi-fi-router-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.11 7.434a4.752 4.752 0 0 1 8.78 0a.75.75 0 0 0 1.386-.574a6.252 6.252 0 0 0-11.553 0a.75.75 0 0 0 1.386.574"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.586 12.336C2 12.922 2 13.864 2 15.75s0 2.828.586 3.414s1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586S22 17.636 22 15.75s0-2.828-.586-3.414s-1.528-.586-3.414-.586h-.75v-3a.75.75 0 0 0-1.5 0v3H6c-1.886 0-2.828 0-3.414.586M6 16.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.34 8.618a2.251 2.251 0 0 1 4.32 0a.75.75 0 1 0 1.44-.42a3.751 3.751 0 0 0-7.2 0a.75.75 0 0 0 1.44.42"></svg:path>`,
})
export class SolarWiFiRouterMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterMinimalisticBoldDuotoneIcon],svg[solar-wi-fi-router-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.5 4.5a4.75 4.75 0 0 0-4.39 2.934a.75.75 0 1 1-1.387-.574a6.252 6.252 0 0 1 11.553 0a.75.75 0 0 1-1.386.574A4.75 4.75 0 0 0 16.5 4.5" clip-rule="evenodd" opacity=".4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.5 7a2.25 2.25 0 0 0-2.16 1.618a.75.75 0 0 1-1.44-.42a3.751 3.751 0 0 1 7.2 0a.75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 7" clip-rule="evenodd" opacity=".7"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 15.75c0-1.886 0-2.828.586-3.414S4.114 11.75 6 11.75h12c1.886 0 2.828 0 3.414.586S22 13.864 22 15.75s0 2.828-.586 3.414s-1.528.586-3.414.586H6c-1.886 0-2.828 0-3.414-.586S2 17.636 2 15.75m4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.25 8.75a.75.75 0 0 0-1.5 0v3h1.5z"></svg:path>`,
})
export class SolarWiFiRouterMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterMinimalisticBrokenIcon],svg[solar-wi-fi-router-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.583 7.397a5.502 5.502 0 0 0-10.167 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.38 8.658a3.001 3.001 0 0 0-5.76 0"></svg:path><svg:path fill="currentColor" d="M7 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 20H6c-1.886 0-2.828 0-3.414-.586S2 17.886 2 16s0-2.828.586-3.414S4.114 12 6 12h12c1.886 0 2.828 0 3.414.586S22 14.114 22 16s0 2.828-.586 3.414S19.886 20 18 20h-1m-.5-8V9"></svg:path></svg:g>`,
})
export class SolarWiFiRouterMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterMinimalisticLineDuotoneIcon],svg[solar-wi-fi-router-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.583 7.397a5.502 5.502 0 0 0-10.167 0" opacity=".4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.38 8.658a3.001 3.001 0 0 0-5.76 0" opacity=".7"></svg:path><svg:path fill="currentColor" d="M7 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 16c0-1.886 0-2.828.586-3.414S4.114 12 6 12h12c1.886 0 2.828 0 3.414.586S22 14.114 22 16s0 2.828-.586 3.414S19.886 20 18 20H6c-1.886 0-2.828 0-3.414-.586S2 17.886 2 16Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 12V9"></svg:path></svg:g>`,
})
export class SolarWiFiRouterMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterMinimalisticLinearIcon],svg[solar-wi-fi-router-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.583 7.397a5.502 5.502 0 0 0-10.167 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.38 8.658a3.001 3.001 0 0 0-5.76 0"></svg:path><svg:path fill="currentColor" d="M7 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 16c0-1.886 0-2.828.586-3.414S4.114 12 6 12h12c1.886 0 2.828 0 3.414.586S22 14.114 22 16s0 2.828-.586 3.414S19.886 20 18 20H6c-1.886 0-2.828 0-3.414-.586S2 17.886 2 16Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 12V9"></svg:path></svg:g>`,
})
export class SolarWiFiRouterMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterMinimalisticOutlineIcon],svg[solar-wi-fi-router-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 4.75a4.75 4.75 0 0 0-4.391 2.934a.75.75 0 1 1-1.386-.574a6.252 6.252 0 0 1 11.553 0a.75.75 0 0 1-1.386.574A4.75 4.75 0 0 0 16.5 4.75"></svg:path><svg:path fill="currentColor" d="M16.5 7.25a2.25 2.25 0 0 0-2.16 1.618a.75.75 0 1 1-1.44-.42a3.751 3.751 0 0 1 7.2 0a.75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 7.25M6 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.948 11.25h9.802V9a.75.75 0 0 1 1.5 0v2.25h.802c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M18 12.75c.964 0 1.612.002 2.095.066c.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066H6c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095s.002-1.612.067-2.095c.062-.461.169-.659.3-.789s.327-.237.788-.3c.483-.064 1.131-.066 2.095-.066z" clip-rule="evenodd"></svg:path>`,
})
export class SolarWiFiRouterMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterOutlineIcon],svg[solar-wi-fi-router-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.693 5.684a4.752 4.752 0 0 1 8.781 0a.75.75 0 0 0 1.386-.574a6.252 6.252 0 0 0-11.553 0a.75.75 0 0 0 1.386.574M7 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3.25 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.628 3.349a.75.75 0 0 1 1.023.279l3.784 6.622h9.13l3.784-6.622a.75.75 0 0 1 1.302.744l-3.359 5.878c.793 0 1.462.007 2.002.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.541-.073 1.21-.08 2.003-.08l-3.36-5.878a.75.75 0 0 1 .28-1.023m14.357 8.401H18c.964 0 1.612.002 2.095.066c.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066H6c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095s.002-1.612.067-2.095c.062-.461.169-.659.3-.789s.327-.237.788-.3c.483-.064 1.131-.066 2.095-.066z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.084 5.25a2.25 2.25 0 0 0-2.16 1.618a.75.75 0 0 1-1.44-.42a3.751 3.751 0 0 1 7.2 0a.75.75 0 0 1-1.44.42a2.25 2.25 0 0 0-2.16-1.618"></svg:path><svg:path fill="currentColor" d="M12.084 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarWiFiRouterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterRoundBoldIcon],svg[solar-wi-fi-router-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 3.5a4.75 4.75 0 0 0-4.39 2.934a.75.75 0 1 1-1.387-.574a6.252 6.252 0 0 1 11.553 0a.75.75 0 0 1-1.385.574A4.75 4.75 0 0 0 16.5 3.5"></svg:path><svg:path fill="currentColor" d="M16.5 6a2.25 2.25 0 0 0-2.16 1.618a.75.75 0 0 1-1.44-.42a3.751 3.751 0 0 1 7.2 0a.75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 6"></svg:path><svg:path fill="currentColor" d="M16.5 8.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2M7 14a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 14.75a5 5 0 0 1 5-5h10a5 5 0 0 1 1.531 9.761l1.112 1.853a.75.75 0 0 1-1.286.772l-1.432-2.386h-9.85l-1.432 2.386a.75.75 0 0 1-1.286-.772l1.112-1.853A5 5 0 0 1 2 14.75m2.75 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0M12 14a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarWiFiRouterRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterRoundBoldDuotoneIcon],svg[solar-wi-fi-router-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 14.75a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5m2.75 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0M12 14a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m5.469 19.511l-1.112 1.853a.75.75 0 0 0 1.286.772l1.432-2.386H7a5 5 0 0 1-1.531-.239m11.456.239l1.432 2.386a.75.75 0 0 0 1.286-.772l-1.112-1.853a5 5 0 0 1-1.531.24z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.5 3.5a4.75 4.75 0 0 0-4.39 2.934a.75.75 0 1 1-1.387-.574a6.252 6.252 0 0 1 11.553 0a.75.75 0 0 1-1.386.574A4.75 4.75 0 0 0 16.5 3.5" clip-rule="evenodd" opacity=".4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.5 6a2.25 2.25 0 0 0-2.16 1.618a.75.75 0 0 1-1.44-.42a3.751 3.751 0 0 1 7.2 0a.75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 6" clip-rule="evenodd" opacity=".7"></svg:path><svg:path fill="currentColor" d="M17.5 7.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarWiFiRouterRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterRoundBrokenIcon],svg[solar-wi-fi-router-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 10H7a5 5 0 0 0 0 10h10a5 5 0 0 0 4-8"></svg:path><svg:path fill="currentColor" d="M18.33 22.335a.75.75 0 1 0 1.34-.67zm-1-2l1 2l1.34-.67l-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2l-1 2l-1.34-.67l1-2z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M8.5 15a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 15h6.5m3.083-9.603a5.502 5.502 0 0 0-10.167 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.38 6.658a3.001 3.001 0 0 0-5.76 0"></svg:path><svg:path fill="currentColor" d="M17.5 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarWiFiRouterRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterRoundLineDuotoneIcon],svg[solar-wi-fi-router-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 15a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5Z"></svg:path><svg:path fill="currentColor" d="M18.33 22.335a.75.75 0 1 0 1.34-.67zm-1-2l1 2l1.34-.67l-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2l-1 2l-1.34-.67l1-2z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M8.5 15a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 15h6.5" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.583 5.397a5.502 5.502 0 0 0-10.167 0" opacity=".4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.38 6.658a3.001 3.001 0 0 0-5.76 0" opacity=".7"></svg:path><svg:path fill="currentColor" d="M17.5 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarWiFiRouterRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterRoundLinearIcon],svg[solar-wi-fi-router-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 15a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5Z"></svg:path><svg:path fill="currentColor" d="M18.33 22.335a.75.75 0 1 0 1.34-.67zm-1-2l1 2l1.34-.67l-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2l-1 2l-1.34-.67l1-2z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M8.5 15a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 15h6.5m3.083-9.603a5.502 5.502 0 0 0-10.167 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.38 6.658a3.001 3.001 0 0 0-5.76 0"></svg:path><svg:path fill="currentColor" d="M17.5 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarWiFiRouterRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWiFiRouterRoundOutlineIcon],svg[solar-wi-fi-router-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.109 5.684a4.752 4.752 0 0 1 8.781 0a.75.75 0 1 0 1.386-.574a6.252 6.252 0 0 0-11.553 0a.75.75 0 0 0 1.386.574"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7 12.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M6.25 15a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.25 15a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7 9.25a5.75 5.75 0 0 0-2.03 11.132l-.64 1.283a.75.75 0 1 0 1.34.67l.805-1.609q.26.024.525.024h10q.265 0 .525-.024l.804 1.61a.75.75 0 1 0 1.342-.671l-.642-1.283A5.752 5.752 0 0 0 17 9.25zM2.75 15A4.25 4.25 0 0 1 7 10.75h10a4.25 4.25 0 0 1 0 8.5H7A4.25 4.25 0 0 1 2.75 15" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.5 5.25a2.25 2.25 0 0 0-2.16 1.618a.75.75 0 1 1-1.44-.42a3.751 3.751 0 0 1 7.2 0a.75.75 0 1 1-1.44.42A2.25 2.25 0 0 0 16.5 5.25"></svg:path><svg:path fill="currentColor" d="M16.5 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarWiFiRouterRoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget2BoldIcon],svg[solar-widget-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6.634a4.634 4.634 0 1 1 9.268 0a4.634 4.634 0 0 1-9.268 0m10.732 10.732a4.634 4.634 0 1 1 9.268 0a4.634 4.634 0 0 1-9.268 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5m11-11c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5"></svg:path>`,
})
export class SolarWidget2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget2BoldDuotoneIcon],svg[solar-widget-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6.634a4.634 4.634 0 1 1 9.268 0a4.634 4.634 0 0 1-9.268 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.732 17.366a4.634 4.634 0 1 1 9.269 0a4.634 4.634 0 0 1-9.269 0" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5"></svg:path><svg:path fill="currentColor" d="M13 6.5c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5" opacity=".5"></svg:path>`,
})
export class SolarWidget2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget2BrokenIcon],svg[solar-widget-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2.668 5.35A4 4 0 1 0 5.35 2.668M21.832 19.15a4 4 0 1 0-2.682 2.682"></svg:path><svg:path d="M2.5 17.5c0-1.886 0-2.828.586-3.414S4.614 13.5 6.5 13.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5Zm11-11c0-1.886 0-2.828.586-3.414S15.614 2.5 17.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S13.5 8.386 13.5 6.5Z"></svg:path></svg:g>`,
})
export class SolarWidget2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget2LineDuotoneIcon],svg[solar-widget-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.5 6.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z"></svg:path><svg:path d="M13.5 17.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z" opacity=".5"></svg:path><svg:path d="M2.5 17.5c0-1.886 0-2.828.586-3.414S4.614 13.5 6.5 13.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5Z"></svg:path><svg:path d="M13.5 6.5c0-1.886 0-2.828.586-3.414S15.614 2.5 17.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S13.5 8.386 13.5 6.5Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWidget2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget2LinearIcon],svg[solar-widget-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M2.5 6.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm11 11a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm8-11c0-1.886 0-2.828-.586-3.414S19.386 2.5 17.5 2.5s-2.828 0-3.414.586S13.5 4.614 13.5 6.5s0 2.828.586 3.414s1.528.586 3.414.586s2.828 0 3.414-.586s.586-1.528.586-3.414Zm-11 11c0-1.886 0-2.828-.586-3.414S8.386 13.5 6.5 13.5s-2.828 0-3.414.586S2.5 15.614 2.5 17.5s0 2.828.586 3.414s1.528.586 3.414.586s2.828 0 3.414-.586s.586-1.528.586-3.414Z"></svg:path>`,
})
export class SolarWidget2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget2OutlineIcon],svg[solar-widget-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.448 1.75c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.104c0 .898 0 1.648.08 2.242c.084.628.27 1.195.726 1.65c.455.456 1.022.642 1.65.726c.594.08 1.343.08 2.242.08h.104c.899 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.344.08-2.242v-.104c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.343-.08-2.242-.08zm-2.832 1.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095s.002-1.612.066-2.095c.063-.461.17-.659.3-.789M6.448 12.75c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.726c-.456.455-.642 1.022-.726 1.65c-.08.594-.08 1.343-.08 2.242v.104c0 .899 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.343.08-2.242v-.104c0-.899 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08zm-2.832 1.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.066c.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095s.002-1.612.067-2.095c.062-.461.169-.659.3-.789M1.75 6.5a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M6.5 3.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m6.25 14.25a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m4.75-3.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarWidget2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget3BoldIcon],svg[solar-widget-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m11 11a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m9.5-11a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0m-11 11a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarWidget3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget3BoldDuotoneIcon],svg[solar-widget-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M22.25 6.5a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0m-11 11a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0"></svg:path><svg:path d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m11 11a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWidget3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget3BrokenIcon],svg[solar-widget-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21.5 6.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0Zm-11 11a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z"></svg:path><svg:path stroke-linecap="round" d="M2.668 5.35A4 4 0 1 0 5.35 2.668M21.832 19.15a4 4 0 1 0-2.682 2.682"></svg:path></svg:g>`,
})
export class SolarWidget3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget3LineDuotoneIcon],svg[solar-widget-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.5 6.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm11 11a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z" opacity=".5"></svg:path><svg:path d="M21.5 6.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0Zm-11 11a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z"></svg:path></svg:g>`,
})
export class SolarWidget3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget3LinearIcon],svg[solar-widget-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M2.5 6.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm11 11a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm8-11a4 4 0 1 0-8 0a4 4 0 0 0 8 0Zm-11 11a4 4 0 1 0-8 0a4 4 0 0 0 8 0Z"></svg:path>`,
})
export class SolarWidget3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget3OutlineIcon],svg[solar-widget-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 1.75a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M3.25 6.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m14.25 6.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5m-3.25 4.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m-1.5-11a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m4.75-3.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m-11 9.5a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M3.25 17.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarWidget3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget4BoldIcon],svg[solar-widget-4-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.21c0-1.984 0-2.977.659-3.593S4.379 2 6.5 2s3.182 0 3.841.617C11 3.233 11 4.226 11 6.21v11.58c0 1.984 0 2.977-.659 3.593S8.621 22 6.5 22s-3.182 0-3.841-.617C2 20.767 2 19.774 2 17.79zm11 9.19c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6zm0-9.9c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5"></svg:path>`,
})
export class SolarWidget4BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget4BoldDuotoneIcon],svg[solar-widget-4-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.21c0-1.984 0-2.977.659-3.593S4.379 2 6.5 2s3.182 0 3.841.617C11 3.233 11 4.226 11 6.21v11.58c0 1.984 0 2.977-.659 3.593S8.621 22 6.5 22s-3.182 0-3.841-.617C2 20.767 2 19.774 2 17.79z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6zm0-9.9c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5"></svg:path>`,
})
export class SolarWidget4BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget4BrokenIcon],svg[solar-widget-4-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2.5 13v4.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586s2.828 0 3.414-.586s.586-1.528.586-3.414v-11c0-1.886 0-2.828-.586-3.414S8.386 2.5 6.5 2.5s-2.828 0-3.414.586S2.5 4.614 2.5 6.5V9m19 9c-.005 1.557-.054 2.383-.586 2.914c-.586.586-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414v-2c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586c.404.404.53.978.569 1.914"></svg:path><svg:path d="M13.5 5.5c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083c.367-.152.833-.152 1.765-.152h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-2c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C13.5 6.898 13.5 6.432 13.5 5.5Z"></svg:path></svg:g>`,
})
export class SolarWidget4BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget4LineDuotoneIcon],svg[solar-widget-4-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414v11c0 1.886 0 2.828-.586 3.414S8.386 21.5 6.5 21.5s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5z" opacity=".5"></svg:path><svg:path d="M13.5 15.5c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414v2c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414zm0-10c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083c.367-.152.833-.152 1.765-.152h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-2c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C13.5 6.898 13.5 6.432 13.5 5.5Z"></svg:path></svg:g>`,
})
export class SolarWidget4LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget4LinearIcon],svg[solar-widget-4-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414v11c0 1.886 0 2.828-.586 3.414S8.386 21.5 6.5 21.5s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5zm11 9c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414v2c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414zm0-10c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083c.367-.152.833-.152 1.765-.152h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-2c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C13.5 6.898 13.5 6.432 13.5 5.5Z"></svg:path>`,
})
export class SolarWidget4LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget4OutlineIcon],svg[solar-widget-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.448 1.75h.104c.898 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v11.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08h-.104c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242V6.448c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M4.405 3.317c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v11c0 .964.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095v-11c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3C8.112 3.253 7.464 3.25 6.5 3.25s-1.612.002-2.095.067m13.043 7.433h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242v2.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08h-.104c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-2.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.343-.08 2.242-.08m-2.043 1.566c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094v2c0 .964.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095v-2c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066s-1.612.002-2.095.066m1.07-10.566c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.12.29-.167.59-.188.907c-.021.304-.021.675-.021 1.12v.05c0 .445 0 .816.02 1.12c.022.317.07.617.19.907a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h2.05c.445 0 .816 0 1.12-.02a2.8 2.8 0 0 0 .907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.8 2.8 0 0 0-.19-.907a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021zm-1.453 1.595c.077-.032.194-.061.435-.078c.247-.017.567-.017 1.043-.017h2c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435c.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017h-2c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 14.25 5.5c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435c.127-.307.37-.55.677-.677" clip-rule="evenodd"></svg:path>`,
})
export class SolarWidget4OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget5BoldIcon],svg[solar-widget-5-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6zM2 8.6c0 2.074 0 3.111.659 3.756S4.379 13 6.5 13s3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756S8.621 2 6.5 2s-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4zm11-3.1c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5m-11 13c0 1.087 0 1.63.171 2.06a2.3 2.3 0 0 0 1.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178c.551-.236.99-.69 1.218-1.262c.171-.43.171-.973.171-2.06s0-1.63-.171-2.06a2.3 2.3 0 0 0-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178c-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5"></svg:path>`,
})
export class SolarWidget5BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget5BoldDuotoneIcon],svg[solar-widget-5-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2 8.6c0 2.074 0 3.111.659 3.756S4.379 13 6.5 13s3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756S8.621 2 6.5 2s-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4zm11-3.1c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5"></svg:path><svg:path fill="currentColor" d="M2 18.5c0 1.087 0 1.63.171 2.06a2.3 2.3 0 0 0 1.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178c.551-.236.99-.69 1.218-1.262c.171-.43.171-.973.171-2.06s0-1.63-.171-2.06a2.3 2.3 0 0 0-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178c-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5" opacity=".5"></svg:path>`,
})
export class SolarWidget5BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget5BrokenIcon],svg[solar-widget-5-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21.483 19c-.04.936-.165 1.51-.569 1.914c-.586.586-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414v-2c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586c.532.531.581 1.357.585 2.914"></svg:path><svg:path d="M2 8.5c0 1.886 0 2.828.586 3.414S4.114 12.5 6 12.5s2.828 0 3.414-.586S10 10.386 10 8.5v-2c0-1.886 0-2.828-.586-3.414S7.886 2.5 6 2.5s-2.828 0-3.414.586S2 4.614 2 6.5z"></svg:path><svg:path stroke-linecap="round" d="M15.5 2.513c-.327.017-.562.055-.765.14a2 2 0 0 0-1.083 1.082c-.152.367-.152.833-.152 1.765s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.367.152.833.152 1.765.152h2c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.152-.367.152-.833.152-1.765s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083c-.204-.084-.438-.122-.765-.139"></svg:path><svg:path d="M2 18.5c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.367.152.833.152 1.765.152h2c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C10 19.898 10 19.432 10 18.5s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 15.5 7.932 15.5 7 15.5H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 17.102 2 17.568 2 18.5Z"></svg:path></svg:g>`,
})
export class SolarWidget5BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget5LineDuotoneIcon],svg[solar-widget-5-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.5 15.5c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414v2c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414z" opacity=".5"></svg:path><svg:path d="M2 8.5c0 1.886 0 2.828.586 3.414S4.114 12.5 6 12.5s2.828 0 3.414-.586S10 10.386 10 8.5v-2c0-1.886 0-2.828-.586-3.414S7.886 2.5 6 2.5s-2.828 0-3.414.586S2 4.614 2 6.5zm11.5-3c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083c.367-.152.833-.152 1.765-.152h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-2c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C13.5 6.898 13.5 6.432 13.5 5.5Z"></svg:path><svg:path d="M2 18.5c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.367.152.833.152 1.765.152h2c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C10 19.898 10 19.432 10 18.5s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 15.5 7.932 15.5 7 15.5H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 17.102 2 17.568 2 18.5Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWidget5LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget5LinearIcon],svg[solar-widget-5-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M13.5 15.5c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414v2c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414zM2 8.5c0 1.886 0 2.828.586 3.414S4.114 12.5 6 12.5s2.828 0 3.414-.586S10 10.386 10 8.5v-2c0-1.886 0-2.828-.586-3.414S7.886 2.5 6 2.5s-2.828 0-3.414.586S2 4.614 2 6.5zm11.5-3c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083c.367-.152.833-.152 1.765-.152h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-2c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C13.5 6.898 13.5 6.432 13.5 5.5ZM2 18.5c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.367.152.833.152 1.765.152h2c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C10 19.898 10 19.432 10 18.5s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 15.5 7.932 15.5 7 15.5H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 17.102 2 17.568 2 18.5Z"></svg:path>`,
})
export class SolarWidget5LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget5OutlineIcon],svg[solar-widget-5-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.948 1.75c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v2.104c0 .898 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.344.08-2.242V6.448c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.725-1.65c-.456-.456-1.023-.642-1.65-.726c-.595-.08-1.344-.08-2.243-.08zM3.116 3.616c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v2c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.066c-.461-.063-.659-.17-.789-.3s-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094v-2c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789m14.331 7.134c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.726c-.456.455-.642 1.022-.726 1.65c-.08.594-.08 1.344-.08 2.242v2.104c0 .899 0 1.648.08 2.242c.084.628.27 1.195.726 1.65c.455.456 1.022.642 1.65.726c.594.08 1.343.08 2.242.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.343.08-2.242v-2.104c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.343-.08-2.242-.08zm-2.832 1.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.066c.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094v2c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095v-2c0-.964.002-1.612.066-2.095c.063-.461.17-.659.3-.789M16.475 1.75h2.05c.445 0 .816 0 1.12.02c.317.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907a2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188c-.304.021-.675.021-1.12.021h-2.05c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19a2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907c-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12a2.8 2.8 0 0 1 .19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188c.304-.021.675-.021 1.12-.021m-1.018 1.517c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435A17 17 0 0 0 14.25 5.5c0 .476 0 .796.017 1.043c.017.241.046.358.078.435c.127.307.37.55.677.677c.077.032.194.061.435.078c.247.017.567.017 1.043.017h2c.476 0 .796 0 1.043-.017c.241-.017.358-.046.435-.078c.307-.127.55-.37.677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17 17 0 0 0 18.5 3.25h-2c-.476 0-.796 0-1.043.017M4.975 14.75c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.12.29-.167.59-.188.907c-.021.304-.021.675-.021 1.12v.05c0 .445 0 .816.02 1.12c.022.317.07.617.19.907a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h2.05c.445 0 .816 0 1.12-.02c.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.8 2.8 0 0 0-.19-.907a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021zm-1.453 1.595c.077-.032.194-.061.435-.078A17 17 0 0 1 5 16.25h2c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435c.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078A17 17 0 0 1 7 20.75H5c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 2.75 18.5c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435c.127-.307.37-.55.677-.677" clip-rule="evenodd"></svg:path>`,
})
export class SolarWidget5OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget6BoldIcon],svg[solar-widget-6-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.5a4.5 4.5 0 0 1 9 0v3c0 .349 0 .523-.038.666a1.13 1.13 0 0 1-.796.796C10.023 11 9.85 11 9.5 11h-3A4.5 4.5 0 0 1 2 6.5m11 8c0-.349 0-.523.038-.666c.104-.388.408-.692.796-.796c.143-.038.317-.038.666-.038h3a4.5 4.5 0 1 1-4.5 4.5zm-11 3A4.5 4.5 0 0 1 6.5 13h2.7c.63 0 .945 0 1.186.123c.211.107.384.28.491.491c.123.24.123.556.123 1.186v2.7a4.5 4.5 0 1 1-9 0m11-11a4.5 4.5 0 1 1 4.5 4.5h-3.214c-.15 0-.224 0-.287-.007a1.125 1.125 0 0 1-.992-.992C13 9.938 13 9.864 13 9.714z"></svg:path>`,
})
export class SolarWidget6BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget6BoldDuotoneIcon],svg[solar-widget-6-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17.5A4.5 4.5 0 0 1 6.5 13h2.7c.63 0 .945 0 1.186.123c.211.107.384.28.491.491c.123.24.123.556.123 1.186v2.7a4.5 4.5 0 1 1-9 0m11-11a4.5 4.5 0 1 1 4.5 4.5h-3.214c-.15 0-.224 0-.287-.007a1.125 1.125 0 0 1-.992-.992C13 9.938 13 9.864 13 9.714z"></svg:path><svg:path fill="currentColor" d="M2 6.5a4.5 4.5 0 0 1 9 0v3c0 .349 0 .523-.038.666a1.13 1.13 0 0 1-.796.796C10.023 11 9.85 11 9.5 11h-3A4.5 4.5 0 0 1 2 6.5m11 8c0-.349 0-.523.038-.666c.104-.388.408-.692.796-.796c.143-.038.317-.038.666-.038h3a4.5 4.5 0 1 1-4.5 4.5z" opacity=".5"></svg:path>`,
})
export class SolarWidget6BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget6BrokenIcon],svg[solar-widget-6-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2.5 6.5a4 4 0 0 0 4 4h2.667c.31 0 .465 0 .592-.034a1 1 0 0 0 .707-.707c.034-.127.034-.282.034-.592V6.5a4 4 0 0 0-4-4m11 19a4 4 0 0 1-4-4v-2.667c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707c.127-.034.282-.034.592-.034H17.5a4 4 0 0 1 4 4"></svg:path><svg:path d="M2.5 17.5a4 4 0 0 1 4-4h2.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v2.4a4 4 0 0 1-8 0Zm11-11a4 4 0 1 1 4 4h-2.857c-.133 0-.2 0-.255-.006a1 1 0 0 1-.882-.882c-.006-.056-.006-.122-.006-.255z"></svg:path></svg:g>`,
})
export class SolarWidget6BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget6LineDuotoneIcon],svg[solar-widget-6-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.5 6.5a4 4 0 1 1 8 0v2.667c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707c-.127.034-.282.034-.592.034H6.5a4 4 0 0 1-4-4Zm11 8.333c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707c.127-.034.282-.034.592-.034H17.5a4 4 0 1 1-4 4z" opacity=".5"></svg:path><svg:path d="M2.5 17.5a4 4 0 0 1 4-4h2.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v2.4a4 4 0 0 1-8 0Zm11-11a4 4 0 1 1 4 4h-2.857c-.133 0-.2 0-.255-.006a1 1 0 0 1-.882-.882c-.006-.056-.006-.122-.006-.255z"></svg:path></svg:g>`,
})
export class SolarWidget6LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget6LinearIcon],svg[solar-widget-6-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M2.5 6.5a4 4 0 1 1 8 0v2.667c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707c-.127.034-.282.034-.592.034H6.5a4 4 0 0 1-4-4Zm11 8.333c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707c.127-.034.282-.034.592-.034H17.5a4 4 0 1 1-4 4zM2.5 17.5a4 4 0 0 1 4-4h2.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v2.4a4 4 0 0 1-8 0Zm11-11a4 4 0 1 1 4 4h-2.857c-.133 0-.2 0-.255-.006a1 1 0 0 1-.882-.882c-.006-.056-.006-.122-.006-.255z"></svg:path>`,
})
export class SolarWidget6LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidget6OutlineIcon],svg[solar-widget-6-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 6.5a4.75 4.75 0 0 1 9.5 0v2.731c0 .242.001.495-.06.722a1.75 1.75 0 0 1-1.237 1.237c-.227.061-.48.06-.722.06H6.5A4.75 4.75 0 0 1 1.75 6.5M6.5 3.25a3.25 3.25 0 1 0 0 6.5h2.667c.161 0 .258 0 .33-.003l.07-.006a.25.25 0 0 0 .174-.174l.006-.07a8 8 0 0 0 .003-.33V6.5A3.25 3.25 0 0 0 6.5 3.25m8.27 9.5h2.73a4.75 4.75 0 1 1-4.75 4.75v-2.731c0-.242-.001-.495.06-.722a1.75 1.75 0 0 1 1.237-1.237c.227-.061.48-.06.722-.06m-.337 1.51a.25.25 0 0 0-.174.173l-.005.07a8 8 0 0 0-.004.33V17.5a3.25 3.25 0 1 0 3.25-3.25h-2.667c-.162 0-.258 0-.33.004zm-4.936.001a8 8 0 0 0-.596-.011H6.5a3.25 3.25 0 1 0 3.25 3.25v-2.4c0-.292 0-.467-.011-.596a.6.6 0 0 0-.018-.12a.25.25 0 0 0-.104-.105a.6.6 0 0 0-.121-.018m.224.119v.002zm-.102-1.614c.213.018.446.057.676.175c.33.167.598.435.765.765c.118.23.158.463.175.676c.016.198.016.434.016.692V17.5a4.75 4.75 0 1 1-4.75-4.75h2.426c.258 0 .494 0 .692.016M12.75 6.5a4.75 4.75 0 1 1 4.75 4.75h-2.885c-.104 0-.212 0-.31-.011a1.75 1.75 0 0 1-1.544-1.543a3 3 0 0 1-.011-.311zm4.75-3.25a3.25 3.25 0 0 0-3.25 3.25v2.999l.002.03a.25.25 0 0 0 .25.22l.14.001H17.5a3.25 3.25 0 0 0 0-6.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarWidget6OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidgetAddBoldIcon],svg[solar-widget-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 2.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25V9.5a.75.75 0 0 1-1.5 0V7.25H14.5a.75.75 0 0 1 0-1.5h2.25V3.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 6.5c0-2.121 0-3.182.659-3.841S4.379 2 6.5 2s3.182 0 3.841.659S11 4.379 11 6.5s0 3.182-.659 3.841S8.621 11 6.5 11s-3.182 0-3.841-.659S2 8.621 2 6.5m11 11c0-2.121 0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22s-3.182 0-3.841-.659S13 19.621 13 17.5m-11 0c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5"></svg:path>`,
})
export class SolarWidgetAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidgetAddBoldDuotoneIcon],svg[solar-widget-add-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 2.75a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25V9.5a.75.75 0 0 1-1.5 0V7.25H14.5a.75.75 0 0 1 0-1.5h2.25V3.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 6.5c0-2.121 0-3.182.659-3.841S4.379 2 6.5 2s3.182 0 3.841.659S11 4.379 11 6.5s0 3.182-.659 3.841S8.621 11 6.5 11s-3.182 0-3.841-.659S2 8.621 2 6.5m11 11c0-2.121 0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22s-3.182 0-3.841-.659S13 19.621 13 17.5"></svg:path><svg:path fill="currentColor" d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5" opacity=".5"></svg:path>`,
})
export class SolarWidgetAddBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidgetAddBrokenIcon],svg[solar-widget-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14.5 6.5h3m0 0h3m-3 0v3m0-3v-3m-14.95 12c.065-.65.21-1.088.536-1.414c.586-.586 1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586c-.31-.31-.456-.718-.524-1.313"></svg:path><svg:path d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 8.386 2.5 6.5Zm11 11c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414Z"></svg:path></svg:g>`,
})
export class SolarWidgetAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidgetAddLineDuotoneIcon],svg[solar-widget-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14.5 6.5h3m0 0h3m-3 0v3m0-3v-3"></svg:path><svg:path d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 8.386 2.5 6.5Zm11 11c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414Z"></svg:path><svg:path d="M2.5 17.5c0-1.886 0-2.828.586-3.414S4.614 13.5 6.5 13.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWidgetAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidgetAddLinearIcon],svg[solar-widget-add-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14.5 6.5h3m0 0h3m-3 0v3m0-3v-3"></svg:path><svg:path d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 8.386 2.5 6.5Zm11 11c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414Zm-11 0c0-1.886 0-2.828.586-3.414S4.614 13.5 6.5 13.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5Z"></svg:path></svg:g>`,
})
export class SolarWidgetAddLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidgetAddOutlineIcon],svg[solar-widget-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.448 1.75c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.104c0 .898 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.344.08-2.242v-.104c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08zM3.616 3.616c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788C3.253 8.112 3.25 7.464 3.25 6.5s.002-1.612.067-2.095c.062-.461.169-.659.3-.789" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.25 3.5a.75.75 0 0 0-1.5 0v2.25H14.5a.75.75 0 0 0 0 1.5h2.25V9.5a.75.75 0 0 0 1.5 0V7.25h2.25a.75.75 0 0 0 0-1.5h-2.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.448 12.75h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08h-.104c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.343-.08 2.242-.08m-2.043 1.566c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094s.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066s-1.612.002-2.095.066M6.448 12.75c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.726c-.456.455-.642 1.022-.726 1.65c-.08.594-.08 1.343-.08 2.242v.104c0 .899 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.343.08-2.242v-.104c0-.899 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08zm-2.832 1.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.066c.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095s.002-1.612.067-2.095c.062-.461.169-.659.3-.789" clip-rule="evenodd"></svg:path>`,
})
export class SolarWidgetAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidgetBoldIcon],svg[solar-widget-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.5c0-2.121 0-3.182.659-3.841S4.379 2 6.5 2s3.182 0 3.841.659S11 4.379 11 6.5s0 3.182-.659 3.841S8.621 11 6.5 11s-3.182 0-3.841-.659S2 8.621 2 6.5m11 11c0-2.121 0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22s-3.182 0-3.841-.659S13 19.621 13 17.5m-11 0c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5m11-11c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5"></svg:path>`,
})
export class SolarWidgetBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidgetBoldDuotoneIcon],svg[solar-widget-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.5c0-2.121 0-3.182.659-3.841S4.379 2 6.5 2s3.182 0 3.841.659S11 4.379 11 6.5s0 3.182-.659 3.841S8.621 11 6.5 11s-3.182 0-3.841-.659S2 8.621 2 6.5m11 11c0-2.121 0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22s-3.182 0-3.841-.659S13 19.621 13 17.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5m11-11c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5"></svg:path>`,
})
export class SolarWidgetBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidgetBrokenIcon],svg[solar-widget-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2.55 4.5c.065-.65.21-1.088.536-1.414C3.672 2.5 4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586c-.31-.31-.456-.718-.524-1.313M21.45 15.5c-.065-.65-.21-1.088-.536-1.414c-.586-.586-1.528-.586-3.414-.586s-2.828 0-3.414.586s-.586 1.528-.586 3.414s0 2.828.586 3.414s1.528.586 3.414.586s2.828 0 3.414-.586c.327-.326.471-.764.535-1.414"></svg:path><svg:path d="M2.5 17.5c0-1.886 0-2.828.586-3.414S4.614 13.5 6.5 13.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5Zm11-11c0-1.886 0-2.828.586-3.414S15.614 2.5 17.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S13.5 8.386 13.5 6.5Z"></svg:path></svg:g>`,
})
export class SolarWidgetBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidgetLineDuotoneIcon],svg[solar-widget-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 8.386 2.5 6.5Zm11 11c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414Z" opacity=".5"></svg:path><svg:path d="M2.5 17.5c0-1.886 0-2.828.586-3.414S4.614 13.5 6.5 13.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5Zm11-11c0-1.886 0-2.828.586-3.414S15.614 2.5 17.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S13.5 8.386 13.5 6.5Z"></svg:path></svg:g>`,
})
export class SolarWidgetLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidgetLinearIcon],svg[solar-widget-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 8.386 2.5 6.5Zm11 11c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414Zm-11 0c0-1.886 0-2.828.586-3.414S4.614 13.5 6.5 13.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S2.5 19.386 2.5 17.5Zm11-11c0-1.886 0-2.828.586-3.414S15.614 2.5 17.5 2.5s2.828 0 3.414.586s.586 1.528.586 3.414s0 2.828-.586 3.414s-1.528.586-3.414.586s-2.828 0-3.414-.586S13.5 8.386 13.5 6.5Z"></svg:path>`,
})
export class SolarWidgetLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWidgetOutlineIcon],svg[solar-widget-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.448 1.75c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.104c0 .898 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.344.08-2.242v-.104c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08zM3.616 3.616c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788C3.253 8.112 3.25 7.464 3.25 6.5s.002-1.612.067-2.095c.062-.461.169-.659.3-.789m13.831 9.134c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.726c-.456.455-.642 1.022-.726 1.65c-.08.594-.08 1.343-.08 2.242v.104c0 .899 0 1.648.08 2.242c.084.628.27 1.195.726 1.65c.455.456 1.022.642 1.65.726c.594.08 1.343.08 2.242.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.343.08-2.242v-.104c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.343-.08-2.242-.08zm-2.832 1.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.066c.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095s.002-1.612.066-2.095c.063-.461.17-.659.3-.789M6.448 12.75h.104c.898 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08h-.104c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08m-2.043 1.566c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094s.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066s-1.612.002-2.095.066M17.448 1.75c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.104c0 .898 0 1.648.08 2.242c.084.628.27 1.195.726 1.65c.455.456 1.022.642 1.65.726c.594.08 1.343.08 2.242.08h.104c.899 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.344.08-2.242v-.104c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.343-.08-2.242-.08zm-2.832 1.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095s.002-1.612.066-2.095c.063-.461.17-.659.3-.789" clip-rule="evenodd"></svg:path>`,
})
export class SolarWidgetOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWindBoldIcon],svg[solar-wind-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 5.5A3.25 3.25 0 1 1 9.5 8.75H3a.75.75 0 0 1 0-1.5h6.5A1.75 1.75 0 1 0 7.75 5.5v.357a.75.75 0 1 1-1.5 0zm8 2a4.25 4.25 0 1 1 4.25 4.25H2a.75.75 0 0 1 0-1.5h16.5a2.75 2.75 0 1 0-2.75-2.75V8a.75.75 0 0 1-1.5 0zm-11 6.5a.75.75 0 0 1 .75-.75h14.5a4.25 4.25 0 1 1-4.25 4.25V17a.75.75 0 0 1 1.5 0v.5a2.75 2.75 0 1 0 2.75-2.75H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarWindBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWindBoldDuotoneIcon],svg[solar-wind-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 5.5A3.25 3.25 0 1 1 9.5 8.75H3a.75.75 0 0 1 0-1.5h6.5A1.75 1.75 0 1 0 7.75 5.5v.357a.75.75 0 1 1-1.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.25 14a.75.75 0 0 1 .75-.75h14.5a4.25 4.25 0 1 1-4.25 4.25V17a.75.75 0 0 1 1.5 0v.5a2.75 2.75 0 1 0 2.75-2.75H4a.75.75 0 0 1-.75-.75" opacity=".4"></svg:path><svg:path fill="currentColor" d="M14.25 7.5a4.25 4.25 0 1 1 4.25 4.25H2a.75.75 0 0 1 0-1.5h16.5a2.75 2.75 0 1 0-2.75-2.75V8a.75.75 0 0 1-1.5 0z" opacity=".7"></svg:path>`,
})
export class SolarWindBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWindBrokenIcon],svg[solar-wind-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 8h2m2-2.143V5.5A2.5 2.5 0 1 1 9.5 8H8m-4 6h1m10 3v.5a3.5 3.5 0 1 0 3.5-3.5H9m-7-3h6m7-3v-.5a3.5 3.5 0 1 1 3.5 3.5h-6.25"></svg:path>`,
})
export class SolarWindBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWindLineDuotoneIcon],svg[solar-wind-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3 8h6.5A2.5 2.5 0 1 0 7 5.5v.357M4 14h14.5a3.5 3.5 0 1 1-3.5 3.5V17"></svg:path><svg:path d="M2 11h16.5A3.5 3.5 0 1 0 15 7.5V8" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWindLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWindLinearIcon],svg[solar-wind-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3 8h6.5A2.5 2.5 0 1 0 7 5.5v.357M4 14h14.5a3.5 3.5 0 1 1-3.5 3.5V17"></svg:path><svg:path d="M2 11h16.5A3.5 3.5 0 1 0 15 7.5V8"></svg:path></svg:g>`,
})
export class SolarWindLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWindOutlineIcon],svg[solar-wind-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 5.5A3.25 3.25 0 1 1 9.5 8.75H3a.75.75 0 0 1 0-1.5h6.5A1.75 1.75 0 1 0 7.75 5.5v.357a.75.75 0 1 1-1.5 0zm8 2a4.25 4.25 0 1 1 4.25 4.25H2a.75.75 0 0 1 0-1.5h16.5a2.75 2.75 0 1 0-2.75-2.75V8a.75.75 0 0 1-1.5 0zm-11 6.5a.75.75 0 0 1 .75-.75h14.5a4.25 4.25 0 1 1-4.25 4.25V17a.75.75 0 0 1 1.5 0v.5a2.75 2.75 0 1 0 2.75-2.75H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarWindOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWindowFrameBoldIcon],svg[solar-window-frame-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464c-1.08 1.08-1.363 2.647-1.438 5.286h19.948c-.075-2.64-.358-4.205-1.439-5.286C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M2 12q0-.934.003-1.75H8.25v11.706c-2.34-.097-3.775-.41-4.786-1.42C2 19.07 2 16.714 2 12m4-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-.819 0-1.566 0-2.25-.008V10.25h12.247Q22 11.066 22 12"></svg:path>`,
})
export class SolarWindowFrameBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWindowFrameBoldDuotoneIcon],svg[solar-window-frame-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c4.714 0 7.071 0 8.535 1.464c1.08 1.08 1.364 2.647 1.439 5.286L22 9.5H2.026v-.75c.075-2.64.358-4.205 1.438-5.286C4.93 2 7.286 2 12 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M2 12c0 4.714 0 7.071 1.464 8.535c1.01 1.01 2.446 1.324 4.786 1.421L9 22V9.5H2.026l-.023.75Q2 11.066 2 12" opacity=".7"></svg:path><svg:path fill="currentColor" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-.819 0-2.316 0-3-.008V9.5h13l-.003.75Q22 11.066 22 12"></svg:path>`,
})
export class SolarWindowFrameBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWindowFrameBrokenIcon],svg[solar-window-frame-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 9.5h20M9 21V10m-7 2c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"></svg:path></svg:g>`,
})
export class SolarWindowFrameBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWindowFrameLineDuotoneIcon],svg[solar-window-frame-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path fill="currentColor" d="M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M2 8.75a.75.75 0 0 0 0 1.5zm20 1.5a.75.75 0 0 0 0-1.5zM8.25 21a.75.75 0 0 0 1.5 0zm1.5-11a.75.75 0 0 0-1.5 0zM2 10.25h20v-1.5H2zM9.75 21V10h-1.5v11z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWindowFrameLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWindowFrameLinearIcon],svg[solar-window-frame-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path fill="currentColor" d="M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 9.5h20M9 21V10"></svg:path></svg:g>`,
})
export class SolarWindowFrameLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWindowFrameOutlineIcon],svg[solar-window-frame-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.113.836-.158 1.811-.177 2.947a.8.8 0 0 0-.004.256c-.009.713-.009 1.486-.009 2.326v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-.84 0-1.613-.01-2.326a.8.8 0 0 0-.003-.256c-.018-1.136-.064-2.111-.177-2.947c-.194-1.445-.6-2.585-1.494-3.48c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM2.75 12q0-.942.003-1.75H8.25V21q0 .108.029.207a18 18 0 0 1-1.665-.133c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386m6.96 9.242c.687.008 1.446.008 2.29.008c2.378 0 4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386q0-.942-.003-1.75H9.75V21a.8.8 0 0 1-.04.242M2.926 6.614a21 21 0 0 0-.15 2.136h18.447a21 21 0 0 0-.15-2.136c-.171-1.279-.498-2.05-1.068-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619" clip-rule="evenodd"></svg:path>`,
})
export class SolarWindowFrameOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWineglassBoldIcon],svg[solar-wineglass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.895C5 3.848 5.848 3 6.895 3h10.21C18.152 3 19 3.848 19 4.895V8q0 .126-.004.25a.8.8 0 0 0-.277.055l-.004.001l-.017.007a10 10 0 0 1-.331.126a21 21 0 0 1-.904.31c-.741.234-1.609.457-2.275.495c-1.084.062-1.86-.358-2.82-.898l-.044-.024c-.933-.524-2.05-1.151-3.597-1.064c-.862.05-1.88.322-2.641.563a22 22 0 0 0-1.083.374L5 8zm.213 4.825a7.01 7.01 0 0 0 6.037 5.24v5.29H8a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-3.25v-5.29a7.01 7.01 0 0 0 5.99-5.06c-.226.081-.51.18-.825.279c-.762.24-1.78.514-2.642.563c-1.546.087-2.664-.54-3.597-1.064l-.043-.024c-.961-.54-1.737-.96-2.821-.898c-.666.038-1.534.261-2.274.495a21 21 0 0 0-1.236.436l-.016.007l-.004.001z"></svg:path>`,
})
export class SolarWineglassBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWineglassBoldDuotoneIcon],svg[solar-wineglass-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.895C5 3.848 5.848 3 6.895 3h10.21C18.152 3 19 3.848 19 4.895V8A7 7 0 1 1 5 8z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 20.25h-3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM12 15a7 7 0 0 0 6.925-5.97c-.402.157-2.332.886-3.694.963c-1.327.075-2.28-.459-3.23-.993c-.952-.534-1.904-1.068-3.232-.993c-1.371.078-3.318.816-3.702.966A7 7 0 0 0 12 15" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.75 14.96a7 7 0 0 1-1.5 0v5.29h1.5z" opacity=".5"></svg:path>`,
})
export class SolarWineglassBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWineglassBrokenIcon],svg[solar-wineglass-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.75 15.286a.75.75 0 0 0-1.5 0zm3 6.464a.75.75 0 0 0 0-1.5zm-7.5-1.5a.75.75 0 0 0 0 1.5zM8 3.75a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zm-.75 13.036V21h1.5v-5.714zm4.5 4.964H12v1.5h3.75zm-3.75 0H8.25v1.5H12zm6.25-15.355V8h1.5V4.895zM5.75 8V4.895h-1.5V8zM12 14.25A6.25 6.25 0 0 1 5.75 8h-1.5A7.75 7.75 0 0 0 12 15.75zM18.25 8A6.25 6.25 0 0 1 12 14.25v1.5A7.75 7.75 0 0 0 19.75 8zm-1.145-4.25c.633 0 1.145.513 1.145 1.145h1.5a2.645 2.645 0 0 0-2.645-2.645zm-10.21-1.5A2.645 2.645 0 0 0 4.25 4.895h1.5c0-.632.513-1.145 1.145-1.145zm0 1.5H8v-1.5H6.895zm5.105 0h5.105v-1.5H12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.5 9S7.581 8.087 9 8c1.233-.076 2.116.462 3 1m6.5 0s-2.081.913-3.5 1"></svg:path></svg:g>`,
})
export class SolarWineglassBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWineglassLineDuotoneIcon],svg[solar-wineglass-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M15.75 21.75a.75.75 0 0 0 0-1.5zm-7.5-1.5a.75.75 0 0 0 0 1.5zm7.5 0H12v1.5h3.75zm-3.75 0H8.25v1.5H12zM6.895 3.75h10.21v-1.5H6.895zM18.25 4.895V8h1.5V4.895zM5.75 8V4.895h-1.5V8zM12 14.25A6.25 6.25 0 0 1 5.75 8h-1.5A7.75 7.75 0 0 0 12 15.75zM18.25 8A6.25 6.25 0 0 1 12 14.25v1.5A7.75 7.75 0 0 0 19.75 8zm-1.145-4.25c.633 0 1.145.513 1.145 1.145h1.5a2.645 2.645 0 0 0-2.645-2.645zm-10.21-1.5A2.645 2.645 0 0 0 4.25 4.895h1.5c0-.632.513-1.145 1.145-1.145z"></svg:path><svg:path fill="currentColor" d="M12.75 15.286a.75.75 0 0 0-1.5 0zM11.25 21a.75.75 0 0 0 1.5 0zm0-5.714V21h1.5v-5.714z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.5 9S7.581 8.087 9 8c2.465-.152 3.535 2.152 6 2c1.419-.087 3.5-1 3.5-1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWineglassLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWineglassLinearIcon],svg[solar-wineglass-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.75 15.286a.75.75 0 0 0-1.5 0zm3 6.464a.75.75 0 0 0 0-1.5zm-7.5-1.5a.75.75 0 0 0 0 1.5zm3-4.964V21h1.5v-5.714zm4.5 4.964H12v1.5h3.75zm-3.75 0H8.25v1.5H12zM6.895 3.75h10.21v-1.5H6.895zM18.25 4.895V8h1.5V4.895zM5.75 8V4.895h-1.5V8zM12 14.25A6.25 6.25 0 0 1 5.75 8h-1.5A7.75 7.75 0 0 0 12 15.75zM18.25 8A6.25 6.25 0 0 1 12 14.25v1.5A7.75 7.75 0 0 0 19.75 8zm-1.145-4.25c.633 0 1.145.513 1.145 1.145h1.5a2.645 2.645 0 0 0-2.645-2.645zm-10.21-1.5A2.645 2.645 0 0 0 4.25 4.895h1.5c0-.632.513-1.145 1.145-1.145z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.5 9S7.581 8.087 9 8c2.465-.152 3.535 2.152 6 2c1.419-.087 3.5-1 3.5-1"></svg:path></svg:g>`,
})
export class SolarWineglassLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWineglassOutlineIcon],svg[solar-wineglass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 4.895A2.645 2.645 0 0 1 6.895 2.25h10.21a2.645 2.645 0 0 1 2.645 2.645V8a7.75 7.75 0 0 1-7 7.714v4.536h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-4.536A7.75 7.75 0 0 1 4.25 8zM6.895 3.75c-.632 0-1.145.513-1.145 1.145v3.193c.203-.078.45-.17.725-.265c.708-.243 1.663-.521 2.479-.572c1.469-.09 2.528.555 3.389 1.08l.047.028c.898.547 1.594.952 2.564.892c.603-.037 1.398-.258 2.085-.493a18 18 0 0 0 1.14-.437l.016-.006l.003-.002l.045-.018A6 6 0 0 0 18.25 8V4.895c0-.632-.512-1.145-1.145-1.145zm11.014 6.29a6.253 6.253 0 0 1-11.947-.42l.164-.068c.208-.083.5-.195.835-.31c.687-.235 1.482-.456 2.085-.493c.97-.06 1.666.345 2.564.892l.047.028c.86.524 1.92 1.17 3.389 1.08c.816-.05 1.77-.33 2.48-.572q.202-.07.383-.137" clip-rule="evenodd"></svg:path>`,
})
export class SolarWineglassOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWineglassTriangleBoldIcon],svg[solar-wineglass-triangle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.3 3H4.7C3.2 3 2.439 4.794 3.485 5.864L6.235 9h11.53l2.751-3.136C21.562 4.794 20.8 3 19.3 3m-2.851 7.5H7.551l3.699 4.216v5.534H7.756a.75.75 0 1 0 0 1.5h8.488a.75.75 0 0 0 0-1.5H12.75v-5.533z"></svg:path>`,
})
export class SolarWineglassTriangleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWineglassTriangleBoldDuotoneIcon],svg[solar-wineglass-triangle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.3 3H4.7C3.2 3 2.439 4.794 3.485 5.864l7.801 7.976a1 1 0 0 0 1.43 0l7.801-7.976C21.562 4.794 20.8 3 19.3 3" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.006 21a.75.75 0 0 1 .75-.75h8.488a.75.75 0 0 1 0 1.5H7.756a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.285 13.84a1 1 0 0 0 1.43 0L16.471 10H7.53z"></svg:path><svg:path fill="currentColor" d="M11.285 13.84a1 1 0 0 0 1.43 0l.035-.035v6.445h-1.5v-6.446z" opacity=".5"></svg:path>`,
})
export class SolarWineglassTriangleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWineglassTriangleBrokenIcon],svg[solar-wineglass-triangle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 14.571l8.516-8.707C21.562 4.794 20.8 3 19.3 3H14m-2 11.571L3.484 5.864C2.438 4.794 3.2 3 4.7 3H10m2 11.571V21m0 0h4.244M12 21H7.756M7.473 9.75h9.054"></svg:path>`,
})
export class SolarWineglassTriangleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWineglassTriangleLineDuotoneIcon],svg[solar-wineglass-triangle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.244 21H7.756M4.701 3h14.598c1.5 0 2.263 1.794 1.217 2.864l-7.801 7.976a1 1 0 0 1-1.43 0L3.484 5.864C2.438 4.794 3.2 3 4.7 3Z"></svg:path><svg:path d="M12 14.571V21M7.473 9.75h9.054" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWineglassTriangleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWineglassTriangleLinearIcon],svg[solar-wineglass-triangle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 14.571l8.516-8.707C21.562 4.794 20.8 3 19.3 3H4.701C3.2 3 2.438 4.794 3.484 5.864zm0 0V21m0 0h4.244M12 21H7.756M7.473 9.75h9.054"></svg:path>`,
})
export class SolarWineglassTriangleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWineglassTriangleOutlineIcon],svg[solar-wineglass-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.948 6.388C1.43 4.837 2.545 2.25 4.7 2.25h14.598c2.156 0 3.27 2.587 1.753 4.138l-8.302 8.49v5.372h3.494a.75.75 0 0 1 0 1.5H7.756a.75.75 0 0 1 0-1.5h3.494v-5.373zM12 13.498l2.933-2.998H9.067zM7.6 9h8.8l3.58-3.66c.575-.589.165-1.59-.68-1.59H4.7c-.845 0-1.255 1.001-.68 1.59z" clip-rule="evenodd"></svg:path>`,
})
export class SolarWineglassTriangleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWinrarBoldIcon],svg[solar-winrar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.848 3.235C18 3.602 18 4.068 18 5v14c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 22 15.932 22 15 22s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C12 20.398 12 19.932 12 19V5c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C13.602 2 14.068 2 15 2s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083M15.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.65 21a4 4 0 0 1-.127-.804c-.023-.33-.023-.724-.023-1.152V4.956c0-.428 0-.822.023-1.152c.017-.254.05-.525.127-.804H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 4.602 2 5.068 2 6s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 9 4.068 9 5 9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 10.602 2 11.068 2 12s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 15 4.068 15 5 15c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 16.602 2 17.068 2 18s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 21 4.068 21 5 21zm8.7 0c.705-.003 1.097-.02 1.415-.152a2 2 0 0 0 1.083-1.083C22 19.398 22 18.932 22 18s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083c-.295-.122-.653-.146-1.265-.15v4.042c0 .428 0 .822-.023 1.152c-.017.254-.05.525-.127.804m.15-6.001c.612-.005.97-.029 1.265-.151a2 2 0 0 0 1.083-1.083C22 13.398 22 12.932 22 12s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083c-.295-.122-.653-.146-1.265-.15zm0-6c.612-.005.97-.029 1.265-.151a2 2 0 0 0 1.083-1.083C22 7.398 22 6.932 22 6s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083c-.318-.132-.71-.15-1.415-.152c.077.28.11.55.127.804c.023.33.023.724.023 1.152z"></svg:path>`,
})
export class SolarWinrarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWinrarBoldDuotoneIcon],svg[solar-winrar-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.666 9c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 3 3.734 3 4.666 3h7.268a2 2 0 0 0-.116.235c-.152.367-.152.833-.152 1.765v4zm17-3c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.064 9 19.598 9 18.666 9h-1V5c0-.932 0-1.398-.152-1.765A2 2 0 0 0 17.398 3h1.268c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765" opacity=".3"></svg:path><svg:path fill="currentColor" d="M17.514 20.765c.152-.367.152-.833.152-1.765v-4h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-1.268q.066-.113.116-.235m-5.58.235H4.666c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 15 3.734 15 4.666 15h7v4c0 .932 0 1.398.152 1.765q.05.122.116.235" opacity=".7"></svg:path><svg:path fill="currentColor" d="M17.666 9h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-1zm-6 0v6h-7c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 9 3.734 9 4.666 9z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.514 3.235c.152.367.152.833.152 1.765v14c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765V5c0-.932 0-1.398.152-1.765q.05-.122.116-.235a2 2 0 0 1 .967-.848C13.268 2 13.734 2 14.666 2s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083M15.416 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarWinrarBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWinrarBrokenIcon],svg[solar-winrar-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M19 9c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 10.602 22 11.068 22 12s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 15 19.932 15 19 15m0-6c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 7.398 22 6.932 22 6s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C20.398 3 19.932 3 19 3h-1.268M19 9h-1m1 6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 16.602 22 17.068 22 18s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 21 19.932 21 19 21h-1.268M19 15h-1M5 15c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 13.398 2 12.932 2 12s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 9 5.068 9 6 9c-.932 0-2.398 0-2.765-.152a2 2 0 0 1-1.083-1.083C2 7.398 2 6.932 2 6s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 3 4.068 3 5 3h7.268M5 15c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 16.602 2 17.068 2 18s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 21 4.068 21 5 21m0-6h7m.268-12a2 2 0 0 0-.116.235C12 3.602 12 4.068 12 5v4m.268-6a2 2 0 0 1 .967-.848C13.602 2 14.068 2 15 2s1.398 0 1.765.152a2 2 0 0 1 .967.848m0 0q.066.113.116.235C18 3.602 18 4.068 18 5v4m0 0v6m-6-6v6m0-6h-2m8 6v4c0 .932 0 1.398-.152 1.765q-.05.122-.116.235M12 15v4c0 .932 0 1.398.152 1.765q.051.122.116.235m0 0a2 2 0 0 0 .967.848C13.602 22 14.068 22 15 22s1.398 0 1.765-.152a2 2 0 0 0 .967-.848m-5.464 0H9"></svg:path><svg:path d="M15 11v2"></svg:path></svg:g>`,
})
export class SolarWinrarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWinrarLineDuotoneIcon],svg[solar-winrar-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12.268 3a2 2 0 0 0-.116.235C12 3.602 12 4.068 12 5v4m.268-6a2 2 0 0 1 .967-.848C13.602 2 14.068 2 15 2s1.398 0 1.765.152a2 2 0 0 1 .967.848m-5.464 0H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 4.602 2 5.068 2 6s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 9 4.068 9 5 9h7m5.732-6H19c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 4.602 22 5.068 22 6s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 9 19.932 9 19 9h-1m-.268-6q.066.113.116.235C18 3.602 18 4.068 18 5v4m0 0v6m-6-6v6m6 0v4c0 .932 0 1.398-.152 1.765q-.05.122-.116.235M18 15h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 16.602 22 17.068 22 18s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 21 19.932 21 19 21h-1.268M12 15H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 16.602 2 17.068 2 18s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 21 4.068 21 5 21h7.268M12 15v4c0 .932 0 1.398.152 1.765q.051.122.116.235m0 0a2 2 0 0 0 .967.848C13.602 22 14.068 22 15 22s1.398 0 1.765-.152a2 2 0 0 0 .967-.848"></svg:path><svg:path d="M5 9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 10.602 2 11.068 2 12s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 15 4.068 15 5 15m14-6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 10.602 22 11.068 22 12s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 15 19.932 15 19 15" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 11v2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWinrarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWinrarLinearIcon],svg[solar-winrar-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 10.602 2 11.068 2 12s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 15 4.068 15 5 15m0-6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 7.398 2 6.932 2 6s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 3 4.068 3 5 3h7.268M5 9h7m7 0c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 10.602 22 11.068 22 12s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 15 19.932 15 19 15m0-6c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 7.398 22 6.932 22 6s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C20.398 3 19.932 3 19 3h-1.268M19 9h-1m1 6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 16.602 22 17.068 22 18s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 21 19.932 21 19 21h-1.268M19 15h-1M5 15c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 16.602 2 17.068 2 18s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 21 4.068 21 5 21h7.268M5 15h7m.268-12a2 2 0 0 0-.116.235C12 3.602 12 4.068 12 5v4m.268-6a2 2 0 0 1 .967-.848C13.602 2 14.068 2 15 2s1.398 0 1.765.152a2 2 0 0 1 .967.848m0 0q.066.113.116.235C18 3.602 18 4.068 18 5v4m0 0v6m-6-6v6m6 0v4c0 .932 0 1.398-.152 1.765q-.05.122-.116.235M12 15v4c0 .932 0 1.398.152 1.765q.051.122.116.235m0 0a2 2 0 0 0 .967.848C13.602 22 14.068 22 15 22s1.398 0 1.765-.152a2 2 0 0 0 .967-.848"></svg:path><svg:path stroke-linecap="round" d="M15 11v2"></svg:path></svg:g>`,
})
export class SolarWinrarLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWinrarOutlineIcon],svg[solar-winrar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.025 1.25h-.05c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19a2.75 2.75 0 0 0-1.07.79H4.976c-.445 0-.816 0-1.12.02a2.8 2.8 0 0 0-.907.19A2.75 2.75 0 0 0 1.46 3.948c-.12.29-.167.59-.188.907c-.021.304-.021.675-.021 1.12v.05c0 .445 0 .816.02 1.12c.022.317.07.617.19.907c.15.362.373.684.653.948a2.75 2.75 0 0 0-.654.948c-.12.29-.167.59-.188.907c-.021.304-.021.675-.021 1.12v.05c0 .445 0 .816.02 1.12c.022.318.07.617.19.907c.15.362.373.684.653.948a2.75 2.75 0 0 0-.654.948c-.12.29-.167.59-.188.907c-.021.304-.021.675-.021 1.12v.05c0 .445 0 .816.02 1.12c.022.317.07.617.19.907a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h6.904c.283.344.65.617 1.069.79c.29.121.59.168.907.19c.304.02.675.02 1.12.02h.05c.445 0 .816 0 1.12-.02c.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.07-.79h.903c.445 0 .816 0 1.12-.02c.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.8 2.8 0 0 0-.19-.907a2.75 2.75 0 0 0-.652-.948a2.75 2.75 0 0 0 .653-.948c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.8 2.8 0 0 0-.19-.907A2.75 2.75 0 0 0 21.889 9a2.75 2.75 0 0 0 .653-.948c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.8 2.8 0 0 0-.19-.907a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021h-.904a2.75 2.75 0 0 0-1.069-.79a2.8 2.8 0 0 0-.907-.19c-.304-.02-.675-.02-1.12-.02M5 3.75h6.279l-.008.105c-.021.304-.021.675-.021 1.12V8.25H5c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 2.75 6c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435c.127-.307.37-.55.677-.677c.077-.032.194-.061.435-.078A17 17 0 0 1 5 3.75m0 6h6.25v4.5H5c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 2.75 12c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435c.127-.307.37-.55.677-.677c.077-.032.194-.061.435-.078A17 17 0 0 1 5 9.75m0 6h6.25v3.275c0 .445 0 .816.02 1.12l.009.105H5c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 2.75 18c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435c.127-.307.37-.55.677-.677c.077-.032.194-.061.435-.078A17 17 0 0 1 5 15.75m14 4.5h-.279l.008-.105c.021-.304.021-.675.021-1.12V15.75H19c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435c.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017m0-6h-.25v-4.5H19c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435c.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017m0-6h-.25V4.975c0-.445 0-.816-.02-1.12l-.009-.105H19c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435c.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017m-2.522 12.905a1.25 1.25 0 0 0 .677-.677c.032-.077.061-.194.078-.435c.017-.247.017-.567.017-1.043V5c0-.476 0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17 17 0 0 0 15 2.75c-.476 0-.796 0-1.043.017c-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435A17 17 0 0 0 12.75 5v14c0 .476 0 .796.017 1.043c.017.241.046.358.078.435q.032.077.072.147c.137.237.35.424.605.53c.077.032.194.061.435.078c.247.017.567.017 1.043.017s.796 0 1.043-.017c.241-.017.358-.046.435-.078" clip-rule="evenodd"></svg:path>`,
})
export class SolarWinrarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWirelessChargeBoldIcon],svg[solar-wireless-charge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.065 18A7.845 7.845 0 0 0 20 10.065c-.036-4.419-3.646-8.03-8.065-8.065A7.846 7.846 0 0 0 4 9.935c.036 4.419 3.646 8.03 8.065 8.065m1.309-11.543c.3.286.311.76.026 1.06L11.75 9.25H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.087-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.858-3a.75.75 0 0 1 1.06-.026" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.117 20.924a1 1 0 0 0 .133.04V22a.75.75 0 0 0 1.5 0v-1.035a1 1 0 0 0 .133-.04a1 1 0 0 0 .54-.542c.077-.184.077-.417.077-.883v-.604a9 9 0 0 1-3-.043v.647c0 .466 0 .7.076.883a1 1 0 0 0 .541.541"></svg:path>`,
})
export class SolarWirelessChargeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWirelessChargeBoldDuotoneIcon],svg[solar-wireless-charge-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.117 20.924a1 1 0 0 0 .133.04V22a.75.75 0 0 0 1.5 0v-1.035a1 1 0 0 0 .133-.04a1 1 0 0 0 .54-.542c.077-.184.077-.417.077-.883v-.604a9 9 0 0 1-3-.043v.647c0 .466 0 .7.076.883a1 1 0 0 0 .541.541"></svg:path><svg:path fill="currentColor" d="M21 10.073A8.826 8.826 0 0 1 12.073 19C7.103 18.96 3.04 14.898 3 9.927A8.826 8.826 0 0 1 11.927 1c4.97.04 9.033 4.102 9.073 9.073" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.374 6.457c.3.286.312.76.026 1.06L11.75 9.25H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.086-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.857-3a.75.75 0 0 1 1.06-.026"></svg:path>`,
})
export class SolarWirelessChargeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWirelessChargeBrokenIcon],svg[solar-wireless-charge-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M11.25 22a.75.75 0 0 0 1.5 0zm0-1v1h1.5v-1z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.857 7L10 10h4l-2.857 3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13.5 18v1.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 21 12.466 21 12 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V18"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4.582 7A8 8 0 1 0 9 2.582"></svg:path></svg:g>`,
})
export class SolarWirelessChargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWirelessChargeLineDuotoneIcon],svg[solar-wireless-charge-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.065 18A7.845 7.845 0 0 0 20 10.065c-.036-4.419-3.646-8.03-8.065-8.065A7.846 7.846 0 0 0 4 9.935c.036 4.419 3.646 8.03 8.065 8.065Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.857 7L10 10h4l-2.857 3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.25 22a.75.75 0 0 0 1.5 0zm-.133-1.076l-.287.693zm-.54-.541l-.694.287zm2.847 0l.693.287zm-.541.54l.287.694zM11.25 21v1h1.5v-1zm1.5-3v1.5h1.5V18zm-1.5 1.5V18h-1.5v1.5zm.75.75c-.243 0-.388 0-.496-.008c-.101-.007-.114-.017-.1-.011l-.574 1.386c.199.082.394.11.572.122c.17.011.375.011.598.011zm-2.25-.75c0 .223 0 .427.011.598c.012.178.04.373.122.572l1.386-.574c.006.014-.004.001-.011-.1a8 8 0 0 1-.008-.496zm1.654.731a.25.25 0 0 1-.135-.135l-1.386.574c.178.428.519.77.947.947zm1.346-.731c0 .243 0 .388-.008.496c-.007.101-.017.114-.011.1l1.386.574c.082-.199.11-.394.122-.572c.011-.17.011-.375.011-.598zM12 21.75c.223 0 .427 0 .598-.011c.178-.012.373-.04.572-.122l-.574-1.386c.014-.006.001.004-.1.011a8 8 0 0 1-.496.008zm.731-1.654a.25.25 0 0 1-.135.135l.574 1.386a1.75 1.75 0 0 0 .947-.947z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWirelessChargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWirelessChargeLinearIcon],svg[solar-wireless-charge-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.065 18A7.845 7.845 0 0 0 20 10.065c-.036-4.419-3.646-8.03-8.065-8.065A7.846 7.846 0 0 0 4 9.935c.036 4.419 3.646 8.03 8.065 8.065Z"></svg:path><svg:path fill="currentColor" d="M11.25 22a.75.75 0 0 0 1.5 0zm0-1v1h1.5v-1z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.857 7L10 10h4l-2.857 3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13.5 18v1.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 21 12.466 21 12 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883V18"></svg:path></svg:g>`,
})
export class SolarWirelessChargeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWirelessChargeOutlineIcon],svg[solar-wireless-charge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.93 2.75a7.096 7.096 0 0 0-7.18 7.18c.033 4.008 3.312 7.287 7.32 7.32c4 .032 7.212-3.18 7.18-7.18c-.033-4.008-3.312-7.287-7.32-7.32M3.25 9.942a8.596 8.596 0 0 1 8.692-8.692c4.827.04 8.769 3.98 8.808 8.809a8.594 8.594 0 0 1-6.5 8.431v1.032c0 .214 0 .41-.011.576c-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-.947.947c-.144.06-.285.09-.42.107V22a.75.75 0 0 1-1.5 0v-.276a1.6 1.6 0 0 1-.42-.107a1.75 1.75 0 0 1-.947-.947a1.8 1.8 0 0 1-.122-.572c-.011-.165-.011-.362-.011-.576v-1.098c-3.716-1.041-6.467-4.453-6.5-8.482m8 8.764v.794c0 .243 0 .388.008.496c.004.067.01.095.012.103a.25.25 0 0 0 .131.13a1 1 0 0 0 .103.013c.108.008.253.008.496.008s.388 0 .496-.008a1 1 0 0 0 .103-.012a.25.25 0 0 0 .13-.131a1 1 0 0 0 .013-.103c.008-.108.008-.253.008-.496v-.772a9 9 0 0 1-1.5-.022m2.124-12.25a.75.75 0 0 1 .026 1.061L11.75 9.25H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.086-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.857-3a.75.75 0 0 1 1.06-.026" clip-rule="evenodd"></svg:path>`,
})
export class SolarWirelessChargeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWomenBoldIcon],svg[solar-women-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 15.96a7.001 7.001 0 1 0-1.5 0v1.79H9.5a.75.75 0 0 0 0 1.5h1.75V22a.75.75 0 1 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75z"></svg:path>`,
})
export class SolarWomenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWomenBoldDuotoneIcon],svg[solar-women-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="9" r="7" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M11.25 15.96v1.79H9.5a.75.75 0 0 0 0 1.5h1.75V22a.75.75 0 0 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75v-1.79a7 7 0 0 1-1.5 0"></svg:path>`,
})
export class SolarWomenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWomenBrokenIcon],svg[solar-women-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9.5 17.75a.75.75 0 0 0 0 1.5zm5 1.5a.75.75 0 0 0 0-1.5zM11.25 22a.75.75 0 1 0 1.5 0zm0-6v2.5h1.5V16zm.75 1.75H9.5v1.5H12zm2.5 0H12v1.5h2.5zm-3.25.75V22h1.5v-3.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.5 2.936A7 7 0 1 1 5.936 5.5"></svg:path></svg:g>`,
})
export class SolarWomenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWomenLineDuotoneIcon],svg[solar-women-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9.5 17.75a.75.75 0 0 0 0 1.5zm5 1.5a.75.75 0 0 0 0-1.5zM11.25 22a.75.75 0 1 0 1.5 0zm0-6v2.5h1.5V16zm.75 1.75H9.5v1.5H12zm2.5 0H12v1.5h2.5zm-3.25.75V22h1.5v-3.5z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"></svg:path></svg:g>`,
})
export class SolarWomenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWomenLinearIcon],svg[solar-women-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9.5 17.75a.75.75 0 0 0 0 1.5zm5 1.5a.75.75 0 0 0 0-1.5zM11.25 22a.75.75 0 1 0 1.5 0zm0-6v2.5h1.5V16zm.75 1.75H9.5v1.5H12zm2.5 0H12v1.5h2.5zm-3.25.75V22h1.5v-3.5z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"></svg:path></svg:g>`,
})
export class SolarWomenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarWomenOutlineIcon],svg[solar-women-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5M4.25 9a7.75 7.75 0 1 1 8.5 7.714v1.036h1.75a.75.75 0 0 1 0 1.5h-1.75V22a.75.75 0 1 1-1.5 0v-2.75H9.5a.75.75 0 0 1 0-1.5h1.75v-1.036A7.75 7.75 0 0 1 4.25 9" clip-rule="evenodd"></svg:path>`,
})
export class SolarWomenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarXxxBoldIcon],svg[solar-xxx-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22M4.084 8.376a.75.75 0 0 1 1.04.208L6.5 10.648l1.376-2.064a.75.75 0 0 1 1.374.406a.75.75 0 0 1 1.374-.406L12 10.648l1.376-2.064a.75.75 0 0 1 1.374.406a.749.749 0 0 1 1.374-.406l1.376 2.064l1.376-2.064a.75.75 0 1 1 1.248.832L18.401 12l1.723 2.584a.75.75 0 1 1-1.248.832L17.5 13.352l-1.376 2.064a.75.75 0 0 1-1.374-.406a.749.749 0 0 1-1.374.406L12 13.352l-1.376 2.064a.75.75 0 0 1-1.374-.406a.749.749 0 0 1-1.374.406L6.5 13.352l-1.376 2.064a.75.75 0 1 1-1.248-.832L5.599 12L3.876 9.416a.75.75 0 0 1 .208-1.04" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.124 9.416L7.401 12l1.723 2.584a.75.75 0 0 1 .126.405a.75.75 0 0 1 .126-.405L11.099 12L9.376 9.416a.75.75 0 0 1-.126-.404a.75.75 0 0 1-.126.404m5.5 0L12.901 12l1.723 2.584a.75.75 0 0 1 .126.405a.75.75 0 0 1 .126-.405L16.599 12l-1.723-2.584a.75.75 0 0 1-.126-.405a.75.75 0 0 1-.126.405"></svg:path>`,
})
export class SolarXxxBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarXxxBoldDuotoneIcon],svg[solar-xxx-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.084 8.376a.75.75 0 0 1 1.04.208L6.5 10.648l1.376-2.064a.75.75 0 0 1 1.374.406a.75.75 0 0 1 1.374-.406L12 10.648l1.376-2.064a.75.75 0 0 1 1.374.406a.749.749 0 0 1 1.374-.406l1.376 2.064l1.376-2.064a.75.75 0 0 1 1.248.832L18.401 12l1.723 2.584a.75.75 0 1 1-1.248.832L17.5 13.352l-1.376 2.064a.75.75 0 0 1-1.374-.406a.75.75 0 0 1-1.374.406L12 13.352l-1.376 2.064a.75.75 0 0 1-1.374-.406a.75.75 0 0 1-1.374.406L6.5 13.352l-1.376 2.064a.75.75 0 1 1-1.248-.832L5.599 12L3.876 9.416a.75.75 0 0 1 .208-1.04m10.54 1.04L12.901 12l1.723 2.584a.75.75 0 0 1 .126.405a.75.75 0 0 1 .126-.405L16.599 12l-1.723-2.584a.75.75 0 0 1-.126-.404a.75.75 0 0 1-.126.404M7.401 12l1.723-2.584a.75.75 0 0 0 .126-.404c.002.139.043.28.126.404L11.099 12l-1.723 2.584a.75.75 0 0 0-.126.405a.75.75 0 0 0-.126-.405z" clip-rule="evenodd"></svg:path>`,
})
export class SolarXxxBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarXxxBrokenIcon],svg[solar-xxx-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m8.5 9l-2 3m0 0l-2 3m2-3l-2-3m2 3l2 3M14 9l-2 3m0 0l-2 3m2-3l-2-3m2 3l2 3m5.5-6l-2 3m0 0l-2 3m2-3l-2-3m2 3l2 3m2.5-3c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarXxxBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarXxxLineDuotoneIcon],svg[solar-xxx-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m8.5 9l-2 3m0 0l-2 3m2-3l-2-3m2 3l2 3M14 9l-2 3m0 0l-2 3m2-3l-2-3m2 3l2 3m5.5-6l-2 3m0 0l-2 3m2-3l-2-3m2 3l2 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarXxxLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarXxxLinearIcon],svg[solar-xxx-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m8.5 9l-2 3m0 0l-2 3m2-3l-2-3m2 3l2 3M14 9l-2 3m0 0l-2 3m2-3l-2-3m2 3l2 3m5.5-6l-2 3m0 0l-2 3m2-3l-2-3m2 3l2 3"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarXxxLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarXxxOutlineIcon],svg[solar-xxx-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.124 8.584a.75.75 0 1 0-1.248.832L5.599 12l-1.723 2.584a.75.75 0 1 0 1.248.832L6.5 13.352l1.376 2.064a.75.75 0 0 0 1.374-.406a.75.75 0 0 0 1.374.406L12 13.352l1.376 2.064a.75.75 0 0 0 1.374-.406a.749.749 0 0 0 1.374.406l1.376-2.064l1.376 2.064a.75.75 0 1 0 1.248-.832L18.401 12l1.723-2.584a.75.75 0 1 0-1.248-.832L17.5 10.648l-1.376-2.064a.75.75 0 0 0-1.374.406a.749.749 0 0 0-1.374-.406L12 10.648l-1.376-2.064a.75.75 0 0 0-1.374.406a.75.75 0 0 0-1.374-.406L6.5 10.648zm4 6L7.401 12l1.723-2.584a.75.75 0 0 0 .126-.404c.002.139.043.28.126.404L11.099 12l-1.723 2.584a.75.75 0 0 0-.126.405a.75.75 0 0 0-.126-.405m5.5 0L12.901 12l1.723-2.584a.75.75 0 0 0 .126-.404c.002.139.043.28.126.404L16.599 12l-1.723 2.584a.75.75 0 0 0-.126.405a.75.75 0 0 0-.126-.405"></svg:path><svg:path d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62"></svg:path></svg:g>`,
})
export class SolarXxxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarZipFileBoldIcon],svg[solar-zip-file-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-1v2h1.5c.471 0 .707 0 .854.146c.146.147.146.383.146.854s0 .707-.146.854C14.207 6 13.97 6 13.5 6H12v2h1.5c.471 0 .707 0 .854.146c.146.147.146.383.146.854s0 .707-.146.854C14.207 10 13.97 10 13.5 10H13c-.471 0-.707 0-.854-.146C12 9.707 12 9.47 12 9V8h-1.5c-.471 0-.707 0-.854-.146C9.5 7.707 9.5 7.47 9.5 7s0-.707.146-.854C9.793 6 10.03 6 10.5 6H12V4h-1.5c-.471 0-.707 0-.854-.146C9.5 3.707 9.5 3.47 9.5 3v-.997c-2.794.02-4.324.164-5.328 1.169M9.5 12.875V13a2.5 2.5 0 0 0 5 0v-.125a.875.875 0 0 0-.875-.875h-3.25a.875.875 0 0 0-.875.875" clip-rule="evenodd"></svg:path>`,
})
export class SolarZipFileBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarZipFileBoldDuotoneIcon],svg[solar-zip-file-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-1l-2.5.003c-2.794.02-4.324.164-5.328 1.169" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.5 8H12v1c0 .471 0 .707.146.854c.147.146.383.146.854.146h.5c.471 0 .707 0 .854-.146c.146-.147.146-.383.146-.854s0-.707-.146-.854C14.207 8 13.97 8 13.5 8M9.646 6.146C9.5 6.293 9.5 6.53 9.5 7s0 .707.146.854C9.793 8 10.03 8 10.5 8H12V6h-1.5c-.471 0-.707 0-.854.146M13.5 4H12v2h1.5c.471 0 .707 0 .854-.146c.146-.147.146-.383.146-.854s0-.707-.146-.854C14.207 4 13.97 4 13.5 4M12 4V2l-2.5.003V3c0 .471 0 .707.146.854C9.793 4 10.03 4 10.5 4zm-2.5 9v-.125c0-.483.392-.875.875-.875h3.25c.483 0 .875.392.875.875V13a2.5 2.5 0 0 1-5 0"></svg:path>`,
})
export class SolarZipFileBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarZipFileBrokenIcon],svg[solar-zip-file-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path><svg:path stroke-linecap="round" d="M9.5 15.5v-.125c0-.483.392-.875.875-.875h3.25c.483 0 .875.392.875.875v.125a2.5 2.5 0 0 1-5 0Z"></svg:path><svg:path d="M9.5 3c0-.471 0-.707.146-.854C9.793 2 10.03 2 10.5 2h.5c.471 0 .707 0 .854.146C12 2.293 12 2.53 12 3v.5c0 .471 0 .707-.146.854c-.147.146-.383.146-.854.146h-.5c-.471 0-.707 0-.854-.146C9.5 4.207 9.5 3.97 9.5 3.5zm0 5c0-.471 0-.707.146-.854C9.793 7 10.03 7 10.5 7h.5c.471 0 .707 0 .854.146C12 7.293 12 7.53 12 8v.5c0 .471 0 .707-.146.854c-.147.146-.383.146-.854.146h-.5c-.471 0-.707 0-.854-.146C9.5 9.207 9.5 8.97 9.5 8.5zM12 5.5c0-.471 0-.707.146-.854c.147-.146.383-.146.854-.146h.5c.471 0 .707 0 .854.146c.146.147.146.383.146.854V6c0 .471 0 .707-.146.854C14.207 7 13.97 7 13.5 7H13c-.471 0-.707 0-.854-.146C12 6.707 12 6.47 12 6zm0 5c0-.471 0-.707.146-.854c.147-.146.383-.146.854-.146h.5c.471 0 .707 0 .854.146c.146.147.146.383.146.854v.5c0 .471 0 .707-.146.854c-.147.146-.383.146-.854.146H13c-.471 0-.707 0-.854-.146C12 11.707 12 11.47 12 11z"></svg:path></svg:g>`,
})
export class SolarZipFileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarZipFileLineDuotoneIcon],svg[solar-zip-file-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarZipFileLineDuotone0"><svg:g fill="none" stroke-width="1.5"><svg:path stroke="gray" stroke-linecap="round" d="M9.5 15.5v-.125c0-.483.392-.875.875-.875h3.25c.483 0 .875.392.875.875v.125a2.5 2.5 0 0 1-5 0Z"></svg:path><svg:path stroke="gray" d="M9.5 3c0-.471 0-.707.146-.854C9.793 2 10.03 2 10.5 2h.5c.471 0 .707 0 .854.146C12 2.293 12 2.53 12 3v.5c0 .471 0 .707-.146.854c-.147.146-.383.146-.854.146h-.5c-.471 0-.707 0-.854-.146C9.5 4.207 9.5 3.97 9.5 3.5zm0 5c0-.471 0-.707.146-.854C9.793 7 10.03 7 10.5 7h.5c.471 0 .707 0 .854.146C12 7.293 12 7.53 12 8v.5c0 .471 0 .707-.146.854c-.147.146-.383.146-.854.146h-.5c-.471 0-.707 0-.854-.146C9.5 9.207 9.5 8.97 9.5 8.5zM12 5.5c0-.471 0-.707.146-.854c.147-.146.383-.146.854-.146h.5c.471 0 .707 0 .854.146c.146.147.146.383.146.854V6c0 .471 0 .707-.146.854C14.207 7 13.97 7 13.5 7H13c-.471 0-.707 0-.854-.146C12 6.707 12 6.47 12 6zm0 5c0-.471 0-.707.146-.854c.147-.146.383-.146.854-.146h.5c.471 0 .707 0 .854.146c.146.147.146.383.146.854v.5c0 .471 0 .707-.146.854c-.147.146-.383.146-.854.146H13c-.471 0-.707 0-.854-.146C12 11.707 12 11.47 12 11z"></svg:path><svg:path stroke="#fff" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarZipFileLineDuotone0)"></svg:path>`,
})
export class SolarZipFileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarZipFileLinearIcon],svg[solar-zip-file-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"></svg:path><svg:path stroke-linecap="round" d="M9.5 15.5v-.125c0-.483.392-.875.875-.875h3.25c.483 0 .875.392.875.875v.125a2.5 2.5 0 0 1-5 0Z"></svg:path><svg:path d="M9.5 3c0-.471 0-.707.146-.854C9.793 2 10.03 2 10.5 2h.5c.471 0 .707 0 .854.146C12 2.293 12 2.53 12 3v.5c0 .471 0 .707-.146.854c-.147.146-.383.146-.854.146h-.5c-.471 0-.707 0-.854-.146C9.5 4.207 9.5 3.97 9.5 3.5zm0 5c0-.471 0-.707.146-.854C9.793 7 10.03 7 10.5 7h.5c.471 0 .707 0 .854.146C12 7.293 12 7.53 12 8v.5c0 .471 0 .707-.146.854c-.147.146-.383.146-.854.146h-.5c-.471 0-.707 0-.854-.146C9.5 9.207 9.5 8.97 9.5 8.5zM12 5.5c0-.471 0-.707.146-.854c.147-.146.383-.146.854-.146h.5c.471 0 .707 0 .854.146c.146.147.146.383.146.854V6c0 .471 0 .707-.146.854C14.207 7 13.97 7 13.5 7H13c-.471 0-.707 0-.854-.146C12 6.707 12 6.47 12 6zm0 5c0-.471 0-.707.146-.854c.147-.146.383-.146.854-.146h.5c.471 0 .707 0 .854.146c.146.147.146.383.146.854v.5c0 .471 0 .707-.146.854c-.147.146-.383.146-.854.146H13c-.471 0-.707 0-.854-.146C12 11.707 12 11.47 12 11z"></svg:path></svg:g>`,
})
export class SolarZipFileLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarZipFileOutlineIcon],svg[solar-zip-file-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.466 1.25h2.59c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.008-.135 2.264-.151 3.813-.153zM8.75 2.763c-.805.016-1.473.05-2.04.127c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-.25v1.001l.216-.001h.568c.206 0 .427 0 .615.025c.219.03.5.105.735.341c.236.236.311.516.341.735c.025.188.025.41.025.615v.568c0 .206 0 .427-.025.615c-.03.219-.105.5-.341.735a1.24 1.24 0 0 1-.735.341c-.188.025-.41.025-.615.025h-.785l.001.216v.785l.216-.001h.568c.206 0 .427 0 .615.025c.219.03.5.105.735.341c.236.236.311.516.341.735c.025.188.025.41.025.615v.568c0 .206 0 .427-.025.615c-.03.219-.105.5-.341.735a1.24 1.24 0 0 1-.735.341a5 5 0 0 1-.615.025h-.568c-.206 0-.427 0-.615-.025c-.219-.03-.5-.105-.735-.341a1.24 1.24 0 0 1-.341-.735a5 5 0 0 1-.025-.614v-.786l-.216.001h-.568c-.206 0-.427 0-.615-.025c-.219-.03-.5-.105-.735-.341a1.24 1.24 0 0 1-.341-.735c-.025-.188-.025-.41-.025-.615v-.568c0-.206 0-.427.025-.615c.03-.219.105-.5.341-.735c.236-.236.516-.311.735-.341c.188-.025.41-.025.615-.025h.568l.217.001l-.001-.217V5.25l-.216.001h-.568c-.206 0-.427 0-.615-.025c-.219-.03-.5-.105-.735-.341a1.24 1.24 0 0 1-.341-.735c-.025-.188-.025-.41-.025-.615zm1.581-.013l.917.001l.001.249v.5l-.001.249H10.5l-.249-.001l-.001-.249V3l.001-.249zm2.42 2.501c-.002.07-.002.15-.002.249V6l.001.249l.249.001h.5l.249-.001L13.75 6v-.5l-.001-.249l-.249-.001H13zm-2.5 2.5c-.002.07-.002.15-.002.249v.5l.001.249l.249.001h.5l.249-.001l.001-.249V8l-.001-.249L11 7.75h-.5zm2.5 2.5c-.002.07-.002.15-.002.249v.5l.001.249l.249.001h.5l.249-.001l.001-.249v-.5l-.001-.249l-.249-.001H13zm-2.377 4.999a.125.125 0 0 0-.125.125v.125a1.75 1.75 0 1 0 3.5 0v-.125a.125.125 0 0 0-.125-.125zm-1.625.125c0-.897.728-1.625 1.625-1.625h3.25c.898 0 1.625.728 1.625 1.625v.125a3.25 3.25 0 0 1-6.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarZipFileOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
