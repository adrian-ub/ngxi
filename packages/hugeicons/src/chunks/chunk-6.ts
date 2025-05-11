import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoliceBadgeIcon],svg[hugeicons-police-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.268 4.328C5.954 3.028 8.573 2 12 2s6.046 1.027 7.732 2.328c.237.182.356.274.453.436c.082.136.14.342.143.5c.002.189-.06.357-.187.692c-.31.83-.466 1.244-.529 1.654c-.079.518-.08.645-.007 1.163c.058.412.375 1.287 1.007 3.037A6.4 6.4 0 0 1 21 14c0 3-2.5 5.375-5 6c-2.192.548-3.333 1.333-4 2c-.667-.667-1.808-1.452-4-2c-2.5-.625-5-3-5-6c0-.82.156-1.548.388-2.19c.633-1.75.949-2.625 1.007-3.037c.073-.518.072-.645-.007-1.163c-.063-.41-.218-.825-.53-1.654c-.125-.335-.188-.503-.185-.692a1.1 1.1 0 0 1 .142-.5c.097-.162.216-.254.453-.436"></svg:path><svg:path d="m12.691 7.578l.704 1.42a.87.87 0 0 0 .568.423l1.276.213c.816.137 1.008.734.42 1.323l-.992 1a.88.88 0 0 0-.208.73l.284 1.238c.224.98-.292 1.359-1.152.847l-1.196-.714a.86.86 0 0 0-.792 0l-1.196.714c-.856.512-1.376.129-1.152-.847l.284-1.238a.88.88 0 0 0-.208-.73l-.991-1c-.584-.589-.396-1.186.42-1.323l1.275-.213a.87.87 0 0 0 .564-.424l.704-1.42c.384-.77 1.008-.77 1.388 0"></svg:path></svg:g>`,
})
export class HugeiconsPoliceBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoliceCapIcon],svg[hugeicons-police-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.08 9.734C1.53 12.578 4.006 14 4.006 14h15.989s2.476-1.422 1.925-4.266c-.347-1.791-4.191-4.146-6.99-5.644C13.573 3.363 12.894 3 12 3s-1.573.363-2.93 1.09C6.271 5.588 2.427 7.943 2.08 9.734M4.142 14c-1.474 1.325-1.931 4.576 1.164 5.384c2.057.536 4.337 1.103 5.635 1.422c.523.13.785.194 1.059.194s.536-.064 1.06-.194c1.297-.319 3.577-.886 5.634-1.422c3.095-.808 2.638-4.06 1.164-5.384"></svg:path><svg:path d="m10.39 7.73l1.106-.602a1.06 1.06 0 0 1 1.008 0l1.106.602c.29.158.453.48.367.796c-.218.8-.752 2.07-1.977 2.474c-1.225-.404-1.76-1.675-1.977-2.474c-.086-.316.077-.638.367-.796"></svg:path></svg:g>`,
})
export class HugeiconsPoliceCapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoliceCarIcon],svg[hugeicons-police-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m2.5 13l2 1m17-.5l-2 .5M8 18.5l.246-.614c.365-.913.548-1.37.929-1.628c.38-.258.872-.258 1.856-.258h1.938c.984 0 1.476 0 1.856.258s.564.715.93 1.628L16 18.5M2 18v2.882c0 .379.24.725.622.894c.247.11.483.224.769.224h1.718c.286 0 .522-.114.77-.224c.38-.169.621-.515.621-.894V19m11 0v1.882c0 .379.24.725.622.894c.247.11.483.224.769.224h1.718c.286 0 .522-.114.77-.224c.38-.169.621-.515.621-.894V18m-2-8.5l1-.5M4 9.5L3 9m1.5 1.5l1.088-2.993c.44-1.21.66-1.815 1.184-2.16C7.296 5 7.992 5 9.383 5h5.234c1.391 0 2.087 0 2.61.346c.525.346.745.951 1.185 2.161L19.5 10.5"></svg:path><svg:path d="M4.5 10.5h15c.957.957 2.5 2.29 2.5 3.777v3.278c0 .539-.38.992-.883 1.055L18 19H6l-3.117-.39C2.38 18.547 2 18.094 2 17.555v-3.278c0-1.487 1.543-2.82 2.5-3.777M10 3.8c0-.994.537-1.8 1.2-1.8h1.6c.663 0 1.2.806 1.2 1.8c0 .663-.358 1.2-.8 1.2h-2.4c-.442 0-.8-.537-.8-1.2"></svg:path></svg:g>`,
})
export class HugeiconsPoliceCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoliceStationIcon],svg[hugeicons-police-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.618 7c.647.124 1.125.342 1.503.724c.879.888.879 2.318.879 5.178V22H6v-9.098c0-2.86 0-4.29.879-5.178c.378-.382.856-.6 1.503-.724M18 22h3c.471 0 .707 0 .854-.147C22 21.707 22 21.471 22 21v-5c0-1.886 0-2.828-.586-3.414S19.886 12 18 12M6 22H3c-.471 0-.707 0-.854-.147C2 21.707 2 21.471 2 21v-5c0-1.886 0-2.828.586-3.414S4.114 12 6 12m6 10v-3m-3-4h1.2m4.8 0h-1.2"></svg:path><svg:path d="M8.042 4C10.966 4 12 2 12 2s1.034 2 3.958 2c.217 1.688-.305 5.65-3.958 7c-3.652-1.35-4.175-5.312-3.958-7"></svg:path></svg:g>`,
})
export class HugeiconsPoliceStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPolicyIcon],svg[hugeicons-policy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.47 22c-3.992 0-5.989 0-7.23-1.172C3 19.657 3 17.771 3 14v-4c0-3.771 0-5.657 1.24-6.828C5.481 2 7.478 2 11.47 2h1.06c3.993 0 5.989 0 7.23 1.172C21 4.343 21 6.229 21 10m-9.5 12H13M8 7h8m-8 5h5"></svg:path><svg:path d="m17.5 18.59l-.902 3.153a.2.2 0 0 0 .268.235l1.985-.793a.4.4 0 0 1 .298 0l2.004.8a.2.2 0 0 0 .27-.226l-.764-3.268M22 15.995A3 3 0 0 0 19 13c-1.657 0-3 1.341-3 2.995a2.997 2.997 0 0 0 3 2.995c1.657 0 3-1.34 3-2.995"></svg:path></svg:g>`,
})
export class HugeiconsPolicyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPolyTankIcon],svg[hugeicons-poly-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.002 22.256a27 27 0 0 1-4.22-.34c-1.39-.23-2.22-.37-2.87-1.14c-.66-.76-.66-1.7-.66-3.25v-4.962a1 1 0 0 1 0-.107V9.266c0-1.22 0-1.95.47-2.65c.468-.687 1.075-.938 1.99-1.315l.01-.005c.65-.26 1.28-.47 1.91-.63v-.17c0-1.07 0-1.72.51-2.23c.51-.52 1.16-.52 2.24-.52h1.24c1.08 0 1.73 0 2.24.52c.51.51.51 1.16.51 2.23v.17c.63.16 1.25.36 1.89.62l.002.001c.949.39 1.558.64 2.018 1.33c.47.699.47 1.429.47 2.649v8.26c0 1.55 0 2.48-.66 3.25c-.631.76-1.458.896-2.815 1.121l-.055.01c-1.37.23-2.79.34-4.22.34zm-6.25-10.728V9.276c0-1.11.01-1.51.21-1.81c.2-.29.48-.42 1.34-.77c.75-.31 1.47-.53 2.22-.68h.03c1.6-.33 3.3-.33 4.9 0h.03c.75.15 1.47.37 2.23.68c.85.35 1.13.47 1.33.77s.21.7.21 1.81v2.254c-4-1.014-8.498-1.015-12.5-.002m0 1.543c3.98-1.084 8.522-1.083 12.5.003v4.462c0 1.37-.01 1.94-.3 2.28c-.28.33-.72.41-1.97.62q-.609.1-1.23.17v-1.1c0-1.07 0-1.72-.52-2.24c-.51-.51-1.16-.51-2.23-.51s-1.71 0-2.24.52c-.51.51-.51 1.16-.51 2.23v1.1a23 23 0 0 1-1.23-.17c-1.24-.21-1.69-.29-1.97-.63c-.29-.33-.3-.9-.3-2.27zm7.5 6.435v1.221c-.832.042-1.67.042-2.5 0v-1.221c0-.5 0-1.07.06-1.17c.09-.08.69-.08 1.19-.08s1.11 0 1.18.07c.07.11.07.68.07 1.18m-1.87-16.25c-.5 0-1.07 0-1.18.07c-.07.1-.07.59-.07 1.06c1.24-.17 2.5-.17 3.74 0c0-.47 0-.96-.07-1.06c-.11-.07-.68-.07-1.18-.07z" color="currentColor"></svg:path>`,
})
export class HugeiconsPolyTankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPolygonIcon],svg[hugeicons-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 14.015v-4.03c0-1.226 0-1.84.228-2.39c.229-.552.662-.985 1.53-1.852l1.985-1.986c.867-.867 1.3-1.3 1.852-1.529C8.145 2 8.759 2 9.985 2h4.03c1.226 0 1.84 0 2.39.228c.552.229.985.662 1.852 1.53l1.986 1.985c.867.867 1.3 1.3 1.529 1.852c.228.55.228 1.164.228 2.39v4.03c0 1.226 0 1.84-.228 2.39c-.229.552-.662.985-1.53 1.852l-1.985 1.986c-.867.867-1.3 1.3-1.852 1.529c-.55.228-1.164.228-2.39.228h-4.03c-1.226 0-1.84 0-2.39-.228c-.552-.229-.985-.662-1.852-1.53l-1.986-1.985c-.867-.867-1.3-1.3-1.529-1.852C2 15.855 2 15.241 2 14.015" color="currentColor"></svg:path>`,
})
export class HugeiconsPolygonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoolIcon],svg[hugeicons-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 21h-1c-1.451 0-2.722-.859-3-2c-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2s-2.722-.859-3-2c-.278 1.141-1.549 2-3 2H2M19 3l-.265.088c-1.32.44-1.98.66-2.357 1.184S16 5.492 16 6.883V17M11 3l-.265.088c-1.32.44-1.98.66-2.357 1.184S8 5.492 8 6.883V17M8 7h8m-8 4h8m-8 4h8" color="currentColor"></svg:path>`,
})
export class HugeiconsPoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoolTableIcon],svg[hugeicons-pool-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.35 17c-1.343 0-2.015 0-2.433-.44C2.5 16.122 2.5 15.415 2.5 14V6c0-1.414 0-2.121.417-2.56C3.335 3 4.007 3 5.35 3h13.3c1.344 0 2.015 0 2.433.44c.417.439.417 1.146.417 2.56v8c0 1.414 0 2.121-.417 2.56c-.418.44-1.09.44-2.433.44zm6.662-8H12"></svg:path><svg:path d="M3 14a3 3 0 0 1 3 3M3 6a3 3 0 0 0 3-3m15 11a3 3 0 0 0-3 3m3-11a3 3 0 0 1-3-3m-4 14a2 2 0 1 0-4 0m4-14a2 2 0 1 1-4 0m.5 8.5L4 21"></svg:path></svg:g>`,
})
export class HugeiconsPoolTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoopIcon],svg[hugeicons-poop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.2 14c1.13.836 1.8 1.874 1.8 3c0 2.761-4.03 5-9 5s-9-2.239-9-5c0-1.126.67-2.164 1.8-3m7.959-6c-1.536-.884-2.83-1.214-3.862-1.203m0 0C7.009 6.818 6 7.983 6 9c0 1.657 2.594 3 5.793 3s5.078-1.518 5.793-3c1.448-3-.965-6.5-6.276-7c1.127 1.365 2.221 4.235-2.413 4.797"></svg:path><svg:path d="M17.014 10c1.821.721 2.986 1.826 2.986 3.066C20 15.239 16.418 17 12 17s-8-1.761-8-3.934c0-1.107.93-2.107 2.426-2.822"></svg:path></svg:g>`,
})
export class HugeiconsPoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPopcornIcon],svg[hugeicons-popcorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m5.003 12.001l1.035 5.015c.462 2.237.693 3.356 1.522 4.015c1.576 1.252 7.3 1.256 8.881 0c.83-.66 1.06-1.778 1.521-4.015l1.035-5.015m-3.993.014l-1 9.984"></svg:path><svg:path d="M11.094 2.313c.397.183.737.537.93.716c.194-.18.485-.533.882-.716c1.571-.728 3.704-.141 4.577 1.351c.355.605.632 1.44.565 2.325c1.21 0 2.884.904 2.949 2.85c.059 1.76-.846 2.559-1.59 2.937c-.372.19-.796.238-1.214.238H5.807c-.418 0-.842-.049-1.214-.238c-.744-.378-1.649-1.176-1.59-2.938c.065-1.945 1.796-2.806 3.005-2.806c-.067-.884.154-1.763.509-2.368c.873-1.492 3.006-2.08 4.577-1.351"></svg:path></svg:g>`,
})
export class HugeiconsPopcornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPot01Icon],svg[hugeicons-pot-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9h20M4 9l.504 5.543c.236 2.592.353 3.887 1.213 4.672c.859.785 2.16.785 4.762.785h3.042c2.602 0 3.903 0 4.762-.785c.86-.785.977-2.08 1.213-4.672L20 9M4 6h16M9 6l.623-2.057A1.5 1.5 0 0 1 11.016 3h1.969a1.5 1.5 0 0 1 1.392.943L15 6" color="currentColor"></svg:path>`,
})
export class HugeiconsPot01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPot02Icon],svg[hugeicons-pot-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10h20M4 10l.504 5.543c.236 2.592.353 3.887 1.213 4.672c.859.785 2.16.785 4.762.785h3.042c2.602 0 3.903 0 4.762-.785c.86-.785.977-2.08 1.213-4.672L20 10M4 8l5-1.35m0 0l6-1.621m-6 1.62l.206-1.737a1.56 1.56 0 0 1 1.14-1.327l1.969-.532a1.55 1.55 0 0 1 1.645.575L15 5.029m0 0l5-1.35" color="currentColor"></svg:path>`,
})
export class HugeiconsPot02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPotionIcon],svg[hugeicons-potion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 15a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></svg:path><svg:path d="M13 15a2.5 2.5 0 0 1-5 0m4.46-10.016q.025-.237.01-.476l-.122-1.978c-.022-.34.309-.601.65-.513l4.613 1.194a.495.495 0 0 1 .298.759l-1.13 1.653q-.136.2-.238.417m-4.08-1.056a3 3 0 0 1-.09.48L11.517 8m.943-3.016L11 4.606m1.46.378l4.08 1.056m0 0q-.104.223-.17.46L15.66 9m.882-2.96L18 6.418M5 15h14m-4.992-3h-.009"></svg:path></svg:g>`,
})
export class HugeiconsPotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoundIcon],svg[hugeicons-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.625 14C9.375 16.917 7.5 19.833 5 21h11.875S18.75 21 20 19.833M15 14H4m14-5.5a5.5 5.5 0 1 0-5.5 5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoundCircleIcon],svg[hugeicons-pound-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M15.07 10.234c-.041-.58-.348-1.985-1.528-2.504c-1.475-.649-3.416.168-3.598 2.271c-.085.987.393 2.022 1.087 2.533c.639.47 1.607.446 2.511.446H8.526m3.03 0c-.17.69-1.103 2.672-2.59 3.499h5.411c.21 0 .8.054 1.636-.546"></svg:path></svg:g>`,
})
export class HugeiconsPoundCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoundReceiveIcon],svg[hugeicons-pound-receive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.25 13.025h7.5m-7.5 0c0 .7 2 2 3 2.5m-3-2.5c0-.7 2.167-2 3-2.5m-4.588-2c0-2.12-1.67-4.614-4.412-4.523c-.725.024-1.525.256-2.39.765c-1.388.918-3.18 3.969-1.017 7.17c1.052 1.557 2.024 1.588 4.907 1.588h-7.5m4.453.482c-.538 1.494-2.168 4.892-4.379 5.98h8.886c.408 0 1.624.212 3.019-1.063" color="currentColor"></svg:path>`,
})
export class HugeiconsPoundReceiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoundSendIcon],svg[hugeicons-pound-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 13h-7.5m7.5 0c0 .7-1.994 2.008-2.5 2.5M22 13c0-.7-1.994-2.008-2.5-2.5m-7.067-1.591c0-2.682-2.67-6.573-6.802-4.142c-1.388.918-3.18 3.969-1.017 7.17c1.052 1.556 2.091 1.784 4.975 1.784H2m4.474.286c-.538 1.494-2.168 4.892-4.379 5.98h8.886c.409 0 1.624.212 3.019-1.063" color="currentColor"></svg:path>`,
})
export class HugeiconsPoundSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoundSquareIcon],svg[hugeicons-pound-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.23 0-6.345 1.198-7.747q.256-.3.555-.555C5.655 2.5 7.77 2.5 12 2.5s6.345 0 7.747 1.198q.3.256.555.555C21.5 5.655 21.5 7.77 21.5 12s0 6.345-1.198 7.747q-.256.3-.555.555C18.345 21.5 16.23 21.5 12 21.5s-6.345 0-7.747-1.198q-.3-.256-.555-.555C2.5 18.345 2.5 16.23 2.5 12"></svg:path><svg:path d="M15.022 10.234c-.043-.58-.371-1.985-1.633-2.504c-1.576-.649-3.653.168-3.847 2.271c-.091.987.42 2.022 1.163 2.533c.682.47 1.718.446 2.684.446H8.026m3.24 0c-.182.69-1.18 2.671-2.77 3.499h5.786c.224 0 .856.054 1.75-.546"></svg:path></svg:g>`,
})
export class HugeiconsPoundSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPowerServiceIcon],svg[hugeicons-power-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.5 8L10 12h4l-2.5 4"></svg:path><svg:path d="M21.011 14.14c.522-.145.783-.216.886-.354s.103-.358.103-.8v-1.972c0-.442 0-.663-.103-.8c-.103-.138-.364-.21-.886-.353c-1.95-.537-3.171-2.617-2.668-4.594c.139-.544.208-.816.142-.975s-.256-.27-.635-.49l-1.725-.998c-.372-.216-.558-.324-.725-.3c-.167.022-.356.214-.733.598a3.75 3.75 0 0 1-5.333 0c-.377-.384-.565-.576-.732-.599s-.353.085-.725.3l-1.725 1c-.38.22-.57.33-.635.489c-.066.16.003.431.141.975c.503 1.977-.718 4.057-2.669 4.594c-.522.144-.783.215-.886.353s-.103.358-.103.8v1.973c0 .441 0 .662.103.8c.103.137.364.208.886.352c1.95.537 3.171 2.617 2.668 4.594c-.139.544-.208.816-.142.975s.256.27.635.49l1.725.999c.372.215.558.323.725.3s.356-.215.733-.599a3.75 3.75 0 0 1 5.336 0c.377.384.565.576.732.599s.353-.085.726-.3l1.724-1c.38-.22.57-.33.635-.489c.066-.16-.003-.431-.141-.975c-.504-1.977.716-4.057 2.666-4.594"></svg:path></svg:g>`,
})
export class HugeiconsPowerServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPowerSocket01Icon],svg[hugeicons-power-socket-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.23 0-6.345 1.198-7.747q.256-.3.555-.555C5.655 2.5 7.77 2.5 12 2.5s6.345 0 7.747 1.198q.3.256.555.555C21.5 5.655 21.5 7.77 21.5 12s0 6.345-1.198 7.747q-.256.3-.555.555C18.345 21.5 16.23 21.5 12 21.5s-6.345 0-7.747-1.198q-.3-.256-.555-.555C2.5 18.345 2.5 16.23 2.5 12"></svg:path><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:path d="M14.491 12h.01M9.5 12h.009"></svg:path></svg:g>`,
})
export class HugeiconsPowerSocket01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPowerSocket02Icon],svg[hugeicons-power-socket-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.23 0-6.345 1.198-7.747q.256-.3.555-.555C5.655 2.5 7.77 2.5 12 2.5s6.345 0 7.747 1.198q.3.256.555.555C21.5 5.655 21.5 7.77 21.5 12s0 6.345-1.198 7.747q-.256.3-.555.555C18.345 21.5 16.23 21.5 12 21.5s-6.345 0-7.747-1.198q-.3-.256-.555-.555C2.5 18.345 2.5 16.23 2.5 12"></svg:path><svg:path d="M15 9H9c-1.414 0-2.121 0-2.56.44C6 9.878 6 10.585 6 12s0 2.121.44 2.56C6.878 15 7.585 15 9 15h6c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56s0-2.121-.44-2.56C17.122 9 16.415 9 15 9m-.509 3h.01M9.5 12h.009"></svg:path></svg:g>`,
})
export class HugeiconsPowerSocket02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPpt01Icon],svg[hugeicons-ppt-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m-10 20v-5.3a.7.7 0 0 1 .7-.7h1.033c.774 0 1.563.432 1.661 1.199c.026.2.026.395 0 .595c-.1.77-.89 1.206-1.668 1.206H4m6 3v-5.3a.7.7 0 0 1 .7-.7h1.177c.697 0 1.422.342 1.578 1.021a1.9 1.9 0 0 1-.003.88c-.161.717-.91 1.099-1.643 1.099H11m5.5-3h2m0 0h2m-2 0v6"></svg:path></svg:g>`,
})
export class HugeiconsPpt01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPpt02Icon],svg[hugeicons-ppt-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.786 22H10.5c-3.272 0-4.907 0-6.043-.798a4.1 4.1 0 0 1-.859-.805c-.85-1.066-.85-2.6-.85-5.67v-2.545c0-2.963 0-4.445.47-5.628C3.975 4.65 5.574 3.15 7.602 2.44C8.863 2 10.442 2 13.6 2c1.805 0 2.707 0 3.428.252c1.158.406 2.072 1.263 2.505 2.35c.268.676.268 1.523.268 3.216V10"></svg:path><svg:path d="M2.807 12A3.333 3.333 0 0 1 6.14 8.667c.666 0 1.45.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.056-1.432.056-2.098A3.333 3.333 0 0 1 12.807 2M7.205 17.915V13.5a.5.5 0 0 1 .5-.5h1.228c.49 0 .987.217 1.16.666c.14.362.134.687 0 1.056c-.176.483-.7.736-1.223.736H7.707M17.739 13h1.755m0 0h1.756m-1.756 0v5m-6.771-.085V13.5a.5.5 0 0 1 .5-.5h1.062c.578 0 1.16.313 1.259.871c.04.228.04.449-.004.687c-.103.57-.69.9-1.28.9h-1.537"></svg:path></svg:g>`,
})
export class HugeiconsPpt02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrawnIcon],svg[hugeicons-prawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.5 5a8.5 8.5 0 1 0 8.5 8.5c0-.47-.384-.859-.845-.766A4.25 4.25 0 0 0 14.75 16.9M10.5 5h6.8c.939 0 1.722.773 1.49 1.683A6.8 6.8 0 0 1 12.2 11.8h-1.7a2.55 2.55 0 0 0 0 5.1h4.25M10.5 5v3.4m4.25 8.5v.85M5.4 20.3l3.4-3.4M3.275 9.25l4.675 3.825M13.5 8h-.009"></svg:path><svg:path d="M9 2h11.16c1.161 0 2.031 1.051 1.804 2.178c-.295 1.46-1.62 2.5-3.045 2.822"></svg:path></svg:g>`,
})
export class HugeiconsPrawnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrayerRug01Icon],svg[hugeicons-prayer-rug-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 21h11c1.886 0 2.828 0 3.414-.586S20 18.886 20 17v-6c0-1.886 0-2.828-.586-3.414S17.886 7 16 7H8"></svg:path><svg:path d="M8 21H4a2 2 0 0 1-2-2m0 0a2 2 0 0 1 2-2v0c1.886 0 2.828 0 3.414-.586S8 14.886 8 13V8c0-1.886 0-2.828-.586-3.414S5.886 4 4 4v0a2 2 0 0 0-2 2zm9-2.643h.331c.29 0 .435 0 .557.029c.122.028.355.145.82.377c1.602.802 2.671-.6 3.596-1.736c.464-.57.696-.855.696-1.027s-.232-.457-.696-1.027c-.925-1.136-1.994-2.539-3.596-1.736c-.465.232-.698.349-.82.377c-.122.03-.267.03-.557.03H11M20 16h2m-2 4h2m-2-8h2m-2-4h2"></svg:path></svg:g>`,
})
export class HugeiconsPrayerRug01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrayerRug02Icon],svg[hugeicons-prayer-rug-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 4H8c-1.414 0-2.121 0-2.56.44C5 4.878 5 5.585 5 7v10c0 1.414 0 2.121.44 2.56C5.878 20 6.585 20 8 20h8c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56V7c0-1.414 0-2.121-.44-2.56C18.122 4 17.415 4 16 4"></svg:path><svg:path d="M9.387 11.32c-1.143-2.05.49-2.949 1.744-3.823c.476-.331.713-.497.868-.497c.154 0 .392.166.867.497c1.255.874 2.89 1.773 1.748 3.824c-.2.36-.3.54-.334.668c-.033.128-.033.278-.033.578l-.002 3.411c0 .482 0 .723-.146.872c-.147.15-.382.15-.854.15h-2.49c-.472 0-.708 0-.854-.15s-.147-.39-.147-.872v-3.41c0-.3 0-.45-.033-.58c-.033-.128-.134-.308-.334-.668M14 4V2m4 2V2m-8 2V2M6 4V2m8 20v-2m4 2v-2m-8 2v-2m-4 2v-2"></svg:path></svg:g>`,
})
export class HugeiconsPrayerRug02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPreferenceHorizontalIcon],svg[hugeicons-preference-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 4H3m8 15H3m18 0h-4m4-7.5H11M21 4h-2M5 11.5H3M14.5 2c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C15.199 6 14.966 6 14.5 6s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 5.199 13 4.966 13 4.5v-1c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 2 14.034 2 14.5 2m-2 15c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C11 20.199 11 19.966 11 19.5v-1c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077m-3-7.5c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 12.699 8 12.466 8 12v-1c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077" color="currentColor"></svg:path>`,
})
export class HugeiconsPreferenceHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPreferenceVerticalIcon],svg[hugeicons-preference-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 11v10m15-8v8m0-18v4m-7.5-4v10M4 3v2m7.5 14v2M2 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C2.801 8 3.034 8 3.5 8h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541C6 8.801 6 9.034 6 9.5s0 .699-.076.883a1 1 0 0 1-.541.54C5.199 11 4.966 11 4.5 11h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C2 10.199 2 9.966 2 9.5m15 2c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C17 12.199 17 11.966 17 11.5m-7.5 3c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C10.301 13 10.534 13 11 13h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C12.699 16 12.466 16 12 16h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883" color="currentColor"></svg:path>`,
})
export class HugeiconsPreferenceVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrescriptionIcon],svg[hugeicons-prescription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 21l-9-9m-5 7V5c0-1.655.345-2 2-2h2.5a4.5 4.5 0 1 1 0 9H5m14 3l-6 6" color="currentColor"></svg:path>`,
})
export class HugeiconsPrescriptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentation01Icon],svg[hugeicons-presentation-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11c0 2.828 0 4.243.879 5.121C4.257 17 5.672 17 8.5 17h7c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C19.743 2 18.328 2 15.5 2h-7c-2.828 0-4.243 0-5.121.879C2.5 3.757 2.5 5.172 2.5 8zM7 22l5-3l5 3m-5-5v5" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentation01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentation02Icon],svg[hugeicons-presentation-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 17h18V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8zm-1 0h20M7 22l5-3l5 3m-5-4.803V22" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentation02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentation03Icon],svg[hugeicons-presentation-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 10c0 2.828 0 4.243.879 5.121C4.757 16 6.172 16 9 16h6c2.828 0 4.243 0 5.121-.879C21 14.243 21 12.828 21 10V4.5H3z"></svg:path><svg:circle cx="12" cy="20.5" r="1.5"></svg:circle><svg:path d="M12 16v3m9-17H3c-.471 0-.707 0-.854.146C2 2.293 2 2.53 2 3v.5c0 .471 0 .707.146.854c.147.146.383.146.854.146h18c.471 0 .707 0 .854-.146C22 4.207 22 3.97 22 3.5V3c0-.471 0-.707-.146-.854C21.707 2 21.47 2 21 2"></svg:path></svg:g>`,
})
export class HugeiconsPresentation03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentation04Icon],svg[hugeicons-presentation-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h7c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121v-2c0-2.828 0-4.243-.879-5.121C19.743 3.5 18.328 3.5 15.5 3.5h-7c-2.828 0-4.243 0-5.121.879C2.5 5.257 2.5 6.672 2.5 9.5zM12 2v1.5M7 22l5-3l5 3m-5-4.222V22" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentation04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentation05Icon],svg[hugeicons-presentation-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11c0 2.828 0 4.243.879 5.121C4.257 17 5.672 17 8.5 17h7c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C19.743 2 18.328 2 15.5 2h-7c-2.828 0-4.243 0-5.121.879C2.5 3.757 2.5 5.172 2.5 8zm6 11l.328-.328c.578-.578.867-.867 1.235-1.02c.367-.152.776-.152 1.594-.152h.686c.818 0 1.226 0 1.594.152c.367.152.656.441 1.234 1.02L15.5 22M12 17.5V22" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentation05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentation06Icon],svg[hugeicons-presentation-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 17h18V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8zm-1 0h20M8.5 22l.328-.328c.578-.578.867-.867 1.235-1.02c.367-.152.776-.152 1.594-.152h.686c.818 0 1.226 0 1.594.152c.367.152.656.441 1.234 1.02L15.5 22M12 17.5V22" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentation06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentation07Icon],svg[hugeicons-presentation-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h7c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121v-2c0-2.828 0-4.243-.879-5.121C19.743 3.5 18.328 3.5 15.5 3.5h-7c-2.828 0-4.243 0-5.121.879C2.5 5.257 2.5 6.672 2.5 9.5zm6 10.5l.328-.328c.578-.578.867-.867 1.235-1.02c.367-.152.776-.152 1.594-.152h.686c.818 0 1.226 0 1.594.152c.367.152.656.441 1.234 1.02L15.5 22M12 2v1.5m0 14V22" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentation07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentationBarChart01Icon],svg[hugeicons-presentation-bar-chart-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18v4m-2-4l-5 4m9-4l5 4M2.5 12c0 2.828 0 4.243.879 5.121C4.257 18 5.672 18 8.5 18h7c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C19.743 2 18.328 2 15.5 2h-7c-2.828 0-4.243 0-5.121.879C2.5 3.757 2.5 5.172 2.5 8zM8 13v-3m4 3V7m4 6v-2" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentationBarChart01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentationBarChart02Icon],svg[hugeicons-presentation-bar-chart-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18v4m-3.5 0l.328-.328c.578-.578.867-.867 1.235-1.02c.367-.152.776-.152 1.594-.152h.686c.818 0 1.226 0 1.594.152c.367.152.656.441 1.234 1.02L15.5 22m-13-10c0 2.828 0 4.243.879 5.121C4.257 18 5.672 18 8.5 18h7c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C19.743 2 18.328 2 15.5 2h-7c-2.828 0-4.243 0-5.121.879C2.5 3.757 2.5 5.172 2.5 8zM8 13v-3m4 3V7m4 6v-2" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentationBarChart02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentationLineChart01Icon],svg[hugeicons-presentation-line-chart-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 8c0-2.828 0-4.243.879-5.121C4.257 2 5.672 2 8.5 2h7c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v3c0 2.828 0 4.243-.879 5.121C19.743 17 18.328 17 15.5 17h-7c-2.828 0-4.243 0-5.121-.879C2.5 15.243 2.5 13.828 2.5 11z"></svg:path><svg:path d="m8 9.725l.697-.915c.878-1.154 2.432-1.062 3.209.19c.75 1.21 2.237 1.344 3.134.283L16 8.15M7 22l5-3l5 3m-5-4.5V22"></svg:path></svg:g>`,
})
export class HugeiconsPresentationLineChart01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentationLineChart02Icon],svg[hugeicons-presentation-line-chart-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 8c0-2.828 0-4.243.879-5.121C4.257 2 5.672 2 8.5 2h7c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v3c0 2.828 0 4.243-.879 5.121C19.743 17 18.328 17 15.5 17h-7c-2.828 0-4.243 0-5.121-.879C2.5 15.243 2.5 13.828 2.5 11z"></svg:path><svg:path d="m8 9.725l.697-.915c.878-1.154 2.432-1.062 3.209.19c.75 1.21 2.237 1.344 3.134.283L16 8.15M8.5 22l.328-.328c.578-.578.867-.867 1.235-1.02c.367-.152.776-.152 1.594-.152h.686c.818 0 1.226 0 1.594.152c.367.152.656.441 1.234 1.02L15.5 22M12 17.5V22"></svg:path></svg:g>`,
})
export class HugeiconsPresentationLineChart02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentationOnlineIcon],svg[hugeicons-presentation-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.409 17.118c-.359-1.516-.538-2.274-.303-2.858c.146-.363.396-.676.72-.9C6.346 13 7.13 13 8.702 13h6.597c1.57 0 2.355 0 2.875.36c.324.224.574.537.72.9c.235.584.056 1.342-.303 2.858c-.353 1.494-.53 2.24-.97 2.777a3 3 0 0 1-1.02.802c-.628.303-1.402.303-2.949.303h-3.304c-1.547 0-2.32 0-2.948-.303a3 3 0 0 1-1.02-.802c-.442-.537-.618-1.283-.971-2.777M3 21h18m-10-5h2m-5-5c1.838-2.595 6.119-2.737 8 0m-2-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentationOnlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentationPodiumIcon],svg[hugeicons-presentation-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.294 14c-1.374 0-2.062 0-2.637-.236a3.35 3.35 0 0 1-1.551-1.315c-.343-.543-.494-1.254-.796-2.675c-.258-1.216-.387-1.823-.262-2.305a1.98 1.98 0 0 1 .931-1.233C5.395 6 5.983 6 7.159 6h9.683c1.175 0 1.763 0 2.179.236c.457.258.793.704.93 1.233c.126.482-.003 1.09-.26 2.305c-.303 1.421-.454 2.132-.797 2.675a3.34 3.34 0 0 1-1.551 1.315C16.768 14 16.08 14 14.706 14M6 6l.515-2.06A2.56 2.56 0 0 1 9 2m9 4l-.515-2.06A2.56 2.56 0 0 0 15 2"></svg:path><svg:path d="m9.284 12l.776 5.573c.045.322.068.484.023.61c-.206.582-.995.204-1.422.38a.9.9 0 0 0-.341.248c-.112.13-.181.308-.32.665c-.261.674-.85 1.623-.217 2.262c.26.262.72.262 1.64.262h5.153c.921 0 1.382 0 1.641-.262c.633-.64.044-1.588-.217-2.262c-.139-.357-.208-.535-.32-.665a.9.9 0 0 0-.34-.248c-.428-.176-1.217.202-1.423-.38c-.045-.126-.022-.288.023-.61L14.716 12"></svg:path></svg:g>`,
})
export class HugeiconsPresentationPodiumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPreviousIcon],svg[hugeicons-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.065 12.626c.254 1.211 1.608 2.082 4.315 3.822c2.945 1.893 4.417 2.84 5.61 2.475c.403-.124.775-.34 1.088-.635C20 17.418 20 15.612 20 12s0-5.418-.922-6.288a2.8 2.8 0 0 0-1.088-.635c-1.193-.365-2.665.582-5.61 2.475c-2.707 1.74-4.06 2.61-4.315 3.822c-.087.412-.087.84 0 1.252M4 4v16" color="currentColor"></svg:path>`,
})
export class HugeiconsPreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrinterIcon],svg[hugeicons-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.354 18c-2.123 0-3.185 0-3.94-.453a3.04 3.04 0 0 1-1.15-1.223c-.392-.77-.287-1.787-.075-3.822c.176-1.698.264-2.547.698-3.171c.285-.41.67-.745 1.121-.977C4.695 8 5.582 8 7.354 8h9.292c1.772 0 2.659 0 3.346.354c.451.232.836.567 1.121.977c.434.624.522 1.473.698 3.172c.212 2.034.317 3.052-.076 3.821a3.04 3.04 0 0 1-1.148 1.223C19.83 18 18.769 18 16.646 18M17 8V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v2"></svg:path><svg:path d="M13.989 16H10.01c-.685 0-1.028 0-1.32.109a1.87 1.87 0 0 0-.945.8c-.168.281-.251.642-.417 1.363c-.26 1.128-.39 1.691-.301 2.143c.117.602.484 1.112.995 1.382c.382.203.918.203 1.988.203h3.978c1.07 0 1.606 0 1.988-.203c.51-.27.878-.78.995-1.382c.089-.452-.041-1.015-.3-2.143c-.167-.72-.25-1.082-.418-1.362a1.87 1.87 0 0 0-.946-.801C15.017 16 14.674 16 13.988 16M18 12h.009"></svg:path></svg:g>`,
})
export class HugeiconsPrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrinterOffIcon],svg[hugeicons-printer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2 2l20 20M7.354 18c-2.123 0-3.185 0-3.94-.453a3.04 3.04 0 0 1-1.15-1.223c-.392-.77-.287-1.787-.075-3.822c.176-1.698.264-2.547.698-3.171c.285-.41.67-.745 1.121-.977C4.695 8 5.582 8 7.354 8H8m13.252 9q.29-.309.483-.685c.393-.769.287-1.785.076-3.818c-.177-1.696-.265-2.545-.698-3.168a3.1 3.1 0 0 0-1.121-.976C19.304 8 18.418 8 16.646 8H12.5M17 8V6.01c0-1.878 0-2.816-.585-3.4c-.586-.583-1.528-.583-3.414-.583h-2c-1.047 0-2.728-.236-3.501.677M13.989 16H10.01c-.685 0-1.028 0-1.32.109a1.87 1.87 0 0 0-.945.8c-.168.281-.251.642-.417 1.363c-.26 1.128-.39 1.691-.301 2.143c.117.602.484 1.112.995 1.382c.382.203.918.203 1.988.203h3.978c1.07 0 1.606 0 1.988-.203c.51-.27.878-.78.995-1.382c.089-.452-.041-1.015-.3-2.143c-.167-.72-.25-1.082-.418-1.362a1.87 1.87 0 0 0-.946-.801C15.017 16 14.674 16 13.988 16M18 12h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsPrinterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrinterThreeDIcon],svg[hugeicons-printer-three-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M8 2H2v.5a2 2 0 0 0 2 2h4zm14 0h-6v2.5h4a2 2 0 0 0 2-2zm-6 0H8v8h8zm-2.5 11h-3L8 10h8zm0 0h-3v1.757a3 3 0 0 0 .879 2.122L12 17.5l.621-.621a3 3 0 0 0 .879-2.122zM2 22h8a2 2 0 0 0 2-2m2-15v.01m0 2.49v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsPrinterThreeDIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrismIcon],svg[hugeicons-prism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15c.323 0 .607.2 1.175.601l3.744 2.642c2.185 1.542 3.278 2.313 3.052 3.035M12 15c-.323 0-.607.2-1.175.601l-3.744 2.642c-2.185 1.542-3.278 2.313-3.052 3.035M12 15v-3.5m7.97 9.778c-.225.722-1.559.722-4.226.722H8.256c-2.667 0-4.001 0-4.227-.722m15.942 0V8M4.029 21.278V8M12 2c.323 0 .607.2 1.175.601l3.744 2.642c2.185 1.542 3.278 2.313 3.052 3.035S18.41 9 15.744 9H8.256c-2.667 0-4.001 0-4.227-.722s.867-1.493 3.052-3.035l3.744-2.642C11.393 2.201 11.677 2 12 2m0 0v4.5" color="currentColor"></svg:path>`,
})
export class HugeiconsPrismIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrism01Icon],svg[hugeicons-prism-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.58 8l-.593-1.15C13.664 4.283 13.002 3 12 3s-1.664 1.283-2.987 3.85L4.59 15.427c-1.28 2.481-1.92 3.721-1.423 4.647S4.97 21 7.578 21h8.844c2.609 0 3.913 0 4.41-.926c.496-.926-.143-2.166-1.422-4.647l-.35-.678M8 10l14-3M8 10l13.462 1.5M8 10l14 6M8 10l-6 1" color="currentColor"></svg:path>`,
})
export class HugeiconsPrism01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrisonIcon],svg[hugeicons-prison-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3v18M9 3v18m6-6v6m0-18v6m6-6v18M2 3h20m-1 6h-6c-.943 0-1.414 0-1.707.293S13 10.057 13 11v2c0 .943 0 1.414.293 1.707S14.057 15 15 15h6M2 21h20m-5-9h-1" color="currentColor"></svg:path>`,
})
export class HugeiconsPrisonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrisonGuardIcon],svg[hugeicons-prison-guard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 8c-1.671-.628-3.749-1-6-1s-4.329.372-6 1"></svg:path><svg:path d="m6.97 8l-.73-1.413c-.579-1.12-.868-1.68-.686-2.176c.182-.495.743-.673 1.865-1.027l3.97-1.255c.272-.086.407-.129.546-.129s.275.043.546.129l4.238 1.34c1.01.319 1.516.478 1.708.927c.193.448-.014.983-.428 2.051L17.398 8M7 8v1.725c0 1.793.921 3.455 2.428 4.378l.514.315a3.93 3.93 0 0 0 4.116 0l.515-.315A5.13 5.13 0 0 0 17 9.725V8m-2 6l1 3m0 0l-1.369 1.195c-1.254 1.096-1.88 1.643-2.631 1.643s-1.377-.547-2.631-1.643L8 17m8 0l1.734.578c.998.333 1.497.5 1.94.756a5 5 0 0 1 1.167.936C21.188 19.647 22 21 22 22M9 14l-1 3m0 0l-1.734.578c-.998.333-1.497.5-1.94.756a5 5 0 0 0-1.167.936C2.812 19.647 2 21 2 22"></svg:path></svg:g>`,
})
export class HugeiconsPrisonGuardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrisonerIcon],svg[hugeicons-prisoner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 7c-1.671-.628-3.749-1-6-1s-4.329.372-6 1m1 0v1.725c0 1.793.921 3.455 2.428 4.378l.514.315a3.93 3.93 0 0 0 4.116 0l.515-.315A5.13 5.13 0 0 0 17 8.725V7"></svg:path><svg:path d="M7 8V5.956c0-1.345.921-2.591 2.428-3.283l.514-.236c1.267-.582 2.85-.582 4.116 0l.515.236C16.078 3.365 17 4.61 17 5.956V8m-2 5l1 3m0 0l-1.369 1.195c-1.254 1.096-1.88 1.643-2.631 1.643s-1.377-.547-2.631-1.643L8 16m8 0l1.734.578c.998.333 1.497.5 1.94.756a5 5 0 0 1 1.167.936C21.188 18.647 22 20 22 22M9 13l-1 3m0 0l-1.734.578c-.998.333-1.497.5-1.94.756a5 5 0 0 0-1.167.936C2.812 18.647 2 20 2 22"></svg:path></svg:g>`,
})
export class HugeiconsPrisonerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProductLoadingIcon],svg[hugeicons-product-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 10.265V6h15v4.265c0 3.175 0 4.762-.976 5.749c-.977.986-2.548.986-5.69.986h-1.667c-3.143 0-4.714 0-5.69-.986c-.977-.986-.977-2.574-.977-5.749M4.5 6l.721-1.538c.56-1.194.84-1.79 1.406-2.126C7.194 2 7.92 2 9.375 2h5.25c1.454 0 2.181 0 2.748.336s.847.932 1.406 2.126L19.5 6m-9 3h3M12 19.5V22m0-2.5H7m5 0h5m-10 0H4.5A2.5 2.5 0 0 0 2 22m5-2.5V22m10-2.5h2.5A2.5 2.5 0 0 1 22 22m-5-2.5V22" color="currentColor"></svg:path>`,
})
export class HugeiconsProductLoadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProfileIcon],svg[hugeicons-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12M11 7h6M7 7h1m-1 5h1m-1 5h1m3-5h6m-6 5h6" color="currentColor"></svg:path>`,
})
export class HugeiconsProfileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProfile02Icon],svg[hugeicons-profile-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 12c0-4.243 0-6.364 1.464-7.682C4.93 3 7.286 3 12 3s7.071 0 8.535 1.318S22 7.758 22 12s0 6.364-1.465 7.682C19.072 21 16.714 21 12 21s-7.071 0-8.536-1.318S2 16.242 2 12"></svg:path><svg:path d="M8.4 8h-.8c-.754 0-1.131 0-1.366.234C6 8.47 6 8.846 6 9.6v.8c0 .754 0 1.131.234 1.366C6.47 12 6.846 12 7.6 12h.8c.754 0 1.131 0 1.366-.234C10 11.53 10 11.154 10 10.4v-.8c0-.754 0-1.131-.234-1.366C9.53 8 9.154 8 8.4 8M6 16h4m4-8h4m-4 4h4m-4 4h4"></svg:path></svg:g>`,
})
export class HugeiconsProfile02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProfitIcon],svg[hugeicons-profit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2a7 7 0 1 0 0 14a7 7 0 0 0 0-14m3 16c-2 0-3 1.5-3 1.5s1 1.5 3 1.5s3-1.5 3-1.5s-1-1.5-3-1.5m-6 0c-2 0-3 1.5-3 1.5S7 21 9 21s3-1.5 3-1.5S11 18 9 18m3 4v-6"></svg:path><svg:path d="M10.438 11.667V6.333m1.562 0V5m0 8v-1.333M10.438 9h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5M13.563 9c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"></svg:path></svg:g>`,
})
export class HugeiconsProfitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProgrammingFlagIcon],svg[hugeicons-programming-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 7c0-1.886 0-2.828.586-3.414S6.114 3 8 3h7c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9s0 4.243-.879 5.121C19.243 15 17.828 15 15 15H4zm0 14V8"></svg:path><svg:path d="m16 7l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L16 11M9 7L7.773 8.057C7.258 8.502 7 8.724 7 9s.258.498.773.943L9 11m4.5-4l-2 4"></svg:path></svg:g>`,
})
export class HugeiconsProgrammingFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProgressIcon],svg[hugeicons-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 12.25C3.75 7.69 7.44 4 12 4s8.25 3.69 8.25 8.25S16.56 20.5 12 20.5s-8.25-3.69-8.25-8.25M12 2.5c-5.38 0-9.75 4.37-9.75 9.75S6.62 22 12 22s9.75-4.37 9.75-9.75S17.38 2.5 12 2.5m0 3c-.41 0-.75.34-.75.75v5.57L6.43 14.6a.743.743 0 0 0-.27 1.02a6.75 6.75 0 0 0 2.47 2.48c1.02.59 2.19.9 3.37.9s2.35-.31 3.38-.9c1.02-.6 1.87-1.45 2.47-2.47c.59-1.03.9-2.2.9-3.38s-.31-2.35-.9-3.38a6.96 6.96 0 0 0-2.47-2.47c-1.03-.59-2.19-.9-3.38-.9m.75 6.75v-5.2c.66.1 1.3.32 1.88.65c.79.46 1.46 1.13 1.92 1.93c.46.79.7 1.7.7 2.62s-.24 1.83-.7 2.62c-.46.8-1.13 1.47-1.92 1.93c-.8.46-1.71.7-2.63.7a5.22 5.22 0 0 1-4.12-2l4.5-2.6c.23-.13.37-.38.37-.65" color="currentColor"></svg:path>`,
})
export class HugeiconsProgressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProgress01Icon],svg[hugeicons-progress-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23.063c-5.93 0-10.75-4.82-10.75-10.75S6.07 1.563 12 1.563s10.75 4.82 10.75 10.75s-4.82 10.75-10.75 10.75m0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25s-4.15-9.25-9.25-9.25" color="currentColor"></svg:path>`,
})
export class HugeiconsProgress01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProgress02Icon],svg[hugeicons-progress-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 23.063c-5.93 0-10.75-4.82-10.75-10.75S6.07 1.563 12 1.563s10.75 4.82 10.75 10.75s-4.82 10.75-10.75 10.75m0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25s-4.15-9.25-9.25-9.25"></svg:path><svg:path d="M19.5 12.313a7.46 7.46 0 0 0-2.2-5.3a7.46 7.46 0 0 0-5.3-2.2v7.5z"></svg:path></svg:g>`,
})
export class HugeiconsProgress02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProgress03Icon],svg[hugeicons-progress-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12.313c0 5.93 4.82 10.75 10.75 10.75s10.75-4.82 10.75-10.75S17.93 1.563 12 1.563S1.25 6.383 1.25 12.313m1.5 0c0-5.1 4.15-9.25 9.25-9.25s9.25 4.15 9.25 9.25s-4.15 9.25-9.25 9.25s-9.25-4.15-9.25-9.25m14.55-5.3a7.47 7.47 0 0 0-5.3-2.2v15c1.99 0 3.89-.79 5.3-2.2c1.41-1.4 2.2-3.31 2.2-5.3s-.79-3.9-2.2-5.3" color="currentColor"></svg:path>`,
})
export class HugeiconsProgress03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProgress04Icon],svg[hugeicons-progress-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12.313c0-5.93 4.82-10.75 10.75-10.75s10.75 4.82 10.75 10.75s-4.82 10.75-10.75 10.75s-10.75-4.82-10.75-10.75m1.5 0c0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25s-4.15-9.25-9.25-9.25s-9.25 4.15-9.25 9.25m13.42-6.24c1.23.83 2.19 2 2.76 3.37h-.01c.57 1.37.72 2.88.43 4.33c-.29 1.46-1 2.79-2.05 3.84a7.47 7.47 0 0 1-8.17 1.63a7.5 7.5 0 0 1-3.37-2.76a7.56 7.56 0 0 1-1.26-4.17H12v-7.5c1.49 0 2.94.44 4.17 1.26" color="currentColor"></svg:path>`,
})
export class HugeiconsProgress04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProjectorIcon],svg[hugeicons-projector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0m3 0h-3m-8 0H2m4 4h.008"></svg:path><svg:path d="M14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4"></svg:path></svg:g>`,
})
export class HugeiconsProjectorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProjector01Icon],svg[hugeicons-projector-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.5 10h-5c-1.875 0-2.812 0-3.47.477a2.5 2.5 0 0 0-.553.553C2 11.689 2 12.626 2 14.5s0 2.812.477 3.47a2.5 2.5 0 0 0 .554.553C3.688 19 4.625 19 6.5 19h11c1.875 0 2.812 0 3.47-.477a2.5 2.5 0 0 0 .553-.553C22 17.312 22 16.375 22 14.5s0-2.812-.477-3.47a2.5 2.5 0 0 0-.553-.553c-.453-.328-1.038-.43-1.97-.463M5.5 13.5h.009"></svg:path><svg:circle cx="15.5" cy="10" r="3.5"></svg:circle><svg:path d="M6.5 19L5 22m12.5-3l1.5 3M12.5 5l-1-1m8 0l-1 1m-3-1V2"></svg:path></svg:g>`,
})
export class HugeiconsProjector01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPromotionIcon],svg[hugeicons-promotion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.926 2.911L8.274 6.105a2.43 2.43 0 0 1-1.617.182a8 8 0 0 0-.695-.14C4.137 5.94 3 7.384 3 9.045v.912c0 1.66 1.137 3.105 2.962 2.896a7 7 0 0 0 .695-.139a2.43 2.43 0 0 1 1.617.183l6.652 3.193c1.527.733 2.291 1.1 3.142.814c.852-.286 1.144-.899 1.728-2.125a12.17 12.17 0 0 0 0-10.556c-.584-1.226-.876-1.84-1.728-2.125c-.851-.286-1.615.08-3.142.814"></svg:path><svg:path d="M11.458 20.77L9.967 22c-3.362-2.666-2.951-3.937-2.951-9H8.15c.46 2.86 1.545 4.216 3.043 5.197c.922.604 1.112 1.876.265 2.574M7.5 12.5v-6"></svg:path></svg:g>`,
})
export class HugeiconsPromotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPropertyAddIcon],svg[hugeicons-property-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.998 12.5l.002-1c0-4.478 0-6.718-1.391-8.109S15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109S7.021 21 11.5 21c.53 0 1-.002 1-.002M2 7h19m-11 9h1.5M6 16h1m3-4h6M6 12h1m8 6.5h7M18.5 22v-7" color="currentColor"></svg:path>`,
})
export class HugeiconsPropertyAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPropertyDeleteIcon],svg[hugeicons-property-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.998 12.5s.002-.47.002-1c0-4.478 0-6.718-1.391-8.109S15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109S7.021 21 11.5 21c.53 0 1-.002 1-.002M2 7h19m-11 9h1.5M6 16h1m3-4h6M6 12h1m9 4l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3" color="currentColor"></svg:path>`,
})
export class HugeiconsPropertyDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPropertyEditIcon],svg[hugeicons-property-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 11.5c0-4.478 0-6.718-1.391-8.109S15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109c1.339 1.338 3.462 1.389 7.609 1.39M2 7h19m-11 9h1.5M6 16h1m3-4h6M6 12h1m14.263 2.872c-.9-1.007-1.442-.947-2.042-.767c-.42.06-1.863 1.737-2.463 2.271c-.987.972-1.977 1.972-2.043 2.102c-.187.303-.36.84-.444 1.438c-.157.899-.467 1.866-.096 1.997c.18.24 1.08-.08 1.982-.211c.6-.108 1.021-.228 1.322-.408c.42-.251 1.201-1.138 2.547-2.456c.844-.886 1.658-1.498 1.898-2.097c.24-.899-.12-1.378-.66-1.87" color="currentColor"></svg:path>`,
})
export class HugeiconsPropertyEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPropertyNewIcon],svg[hugeicons-property-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109M2.5 8h19M11 17h6M7 17h1m3-4h6M7 13h1" color="currentColor"></svg:path>`,
})
export class HugeiconsPropertyNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPropertySearchIcon],svg[hugeicons-property-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.5 21c-4.478 0-6.718 0-8.109-1.391S2 15.979 2 11.5c0-4.478 0-6.718 1.391-8.109S7.021 2 11.5 2c4.478 0 6.718 0 8.109 1.391S21 7.021 21 11.5M2 7h19m-11 9h1m-5 0h1m3-4h4m-8 0h1"></svg:path><svg:path d="M20.4 20.4L22 22m-.8-4.4a3.6 3.6 0 1 0-7.2 0a3.6 3.6 0 0 0 7.2 0"></svg:path></svg:g>`,
})
export class HugeiconsPropertySearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPropertyViewIcon],svg[hugeicons-property-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.998 12.503s.002-.47.002-1c0-4.48 0-6.72-1.391-8.111S15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.392S2 7.023 2 11.502c0 4.48 0 6.72 1.391 8.112C4.558 20.781 6.321 20.97 9.5 21M2 7h19M6 16h1m3-4h5m-9 0h1m10 6.5h.009"></svg:path><svg:path d="M21.772 18.023c.152.213.228.32.228.477c0 .158-.076.264-.228.477C21.089 19.935 19.345 22 17 22s-4.089-2.065-4.772-3.023c-.152-.213-.228-.32-.228-.477c0-.158.076-.264.228-.477C12.911 17.065 14.655 15 17 15s4.089 2.065 4.772 3.023"></svg:path></svg:g>`,
})
export class HugeiconsPropertyViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProtectionMaskIcon],svg[hugeicons-protection-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.276 22v-3.55c0-1.278-.341-1.933-1.011-3.039A8.7 8.7 0 0 1 2 10.89C2 5.979 6.076 2 11.103 2c4.364 0 8.01 2.998 8.897 7"></svg:path><svg:path d="m15.075 14.845l3.916-2.43c.092-.058.138-.087.184-.11c.046-.022.1-.041.207-.08c.551-.202 1.162-.42 1.657 0c.262.22.385.61.632 1.389c.194.614.41 1.221.299 1.873c-.058.341-.21.661-.513 1.301l-1.43 3.014c-.553 1.168-.83 1.752-1.751 2.059c-.92.306-1.328.075-2.141-.389c-3.686-2.1-10.825-8.212-8.77-10.984c.775-1.047 2.758-.753 7.71 4.357m0 0L14.01 20.08"></svg:path></svg:g>`,
})
export class HugeiconsProtectionMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPulleyIcon],svg[hugeicons-pulley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 3h18"></svg:path><svg:circle cx="15.5" cy="10.5" r="3.5"></svg:circle><svg:circle cx="8.5" cy="17.5" r="3.5"></svg:circle><svg:path d="M5 17.5V3m7 14.5v-7M15.5 7V3M19 17v-6.5m0 6.5c-.714 0-1.097.2-1.383.896c-.373.908-.826 2.254-.511 2.807c.168.297.554.297 1.325.297h1.137c.772 0 1.158 0 1.326-.297c.315-.553-.138-1.9-.51-2.807C20.11 17.232 19.741 17 19 17"></svg:path></svg:g>`,
})
export class HugeiconsPulleyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPulse01Icon],svg[hugeicons-pulse-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12h4l1.5-4l2 7L13 6l2.5 12l2.5-6h4" color="currentColor"></svg:path>`,
})
export class HugeiconsPulse01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPulse02Icon],svg[hugeicons-pulse-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12h3l1.5-4L9 15l1.5-3h2l2-5l2 10l2.5-5h3" color="currentColor"></svg:path>`,
})
export class HugeiconsPulse02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPulseRectangle01Icon],svg[hugeicons-pulse-rectangle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.318 19.682C3 18.364 3 16.242 3 12s0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318"></svg:path><svg:path d="M5.5 12h2L9 9.5l1.5 4.5l2-6l2 8l2-4h2"></svg:path></svg:g>`,
})
export class HugeiconsPulseRectangle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPulseRectangle02Icon],svg[hugeicons-pulse-rectangle-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.318 19.682C3 18.364 3 16.242 3 12s0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318"></svg:path><svg:path d="M6 13h1.5L9 9l1.5 7l1.5-3h1.5L15 8l1.5 5H18"></svg:path></svg:g>`,
})
export class HugeiconsPulseRectangle02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPumpkinIcon],svg[hugeicons-pumpkin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 18c0 2-2 4-4 4s-4-2-4-4m7-10c-.599-1.196-1.718-2-3-2s-2.401.804-3 2"></svg:path><svg:path d="M15.412 19.408C19.647 21.802 22 16.406 22 12.704S19.775 6 17.031 6c-.936 0-2.09.479-3.031 1.437M8.588 19.408C4.353 21.802 2 16.406 2 12.704S4.225 6 6.969 6c.936 0 2.09.479 3.031 1.437M12 6c0-1.333.6-4 3-4"></svg:path></svg:g>`,
})
export class HugeiconsPumpkinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPunchIcon],svg[hugeicons-punch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.6 13.782V11.5m0 2.282a1.79 1.79 0 0 1-1.8 1.779A1.79 1.79 0 0 1 3 13.782V13c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 4.955C6.375 4 8.251 4 12 4s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 7.375 21 9.261 21 13.03c0 1.526 0 2.29-.157 2.918a5.37 5.37 0 0 1-3.95 3.904c-.408.1-1.11.135-1.968.148c-.846 0-1.575.076-1.575-1c0-1.016.327-2.105 1.575-2.105h.675m-9-3.113v1.334a1.79 1.79 0 0 0 1.8 1.779c.994 0 1.8-.797 1.8-1.779m0 0v-4.002m0 4.002v.796a1.79 1.79 0 0 0 1.8 1.779c.994 0 1.8-.796 1.8-1.779v-.796m3.6-3.616v3.616a1.79 1.79 0 0 1-1.8 1.779m-1.8-1.779v-4.002m0 4.002a1.79 1.79 0 0 0 1.8 1.779" color="currentColor"></svg:path>`,
})
export class HugeiconsPunchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPunchingBall01Icon],svg[hugeicons-punching-ball-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.002 22c-3.59 0-6.5-2.182-6.5-5.49c0-2.85 2.41-4.863 3.771-8.555c.173-.469.26-.703.326-.825c.355-.654.856-.985 1.642-1.084a6.4 6.4 0 0 1 1.522 0c.786.099 1.287.43 1.642 1.084c.067.122.153.356.326.825c1.361 3.692 3.771 5.706 3.771 8.554c0 3.308-2.91 5.491-6.5 5.491"></svg:path><svg:path d="M9.955 14c-1.023 1.778-.302 8 2.046 8c2.345 0 3.073-6.222 2.048-8M12 6V3.5m0 0l.915-.229A2.43 2.43 0 0 0 14.5 2M12 3.5l-.915-.229A2.43 2.43 0 0 1 9.5 2m5.502 7h-6"></svg:path></svg:g>`,
})
export class HugeiconsPunchingBall01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPunchingBall02Icon],svg[hugeicons-punching-ball-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.69 18.5H9.31c-.68 0-1.307.385-1.645 1.008l-.539.996c-.36.666.095 1.496.823 1.496h8.102c.728 0 1.184-.83.823-1.496l-.54-.996c-.337-.623-.964-1.008-1.644-1.008M12 12v6.5M12 2C9.515 2 7.5 3.178 7.5 5.846c0 2.335 2.01 2.903 3.015 5.103c.144.316.217.474.263.545c.205.312.402.437.774.493c.084.013.206.013.448.013s.364 0 .448-.013c.372-.056.568-.18.773-.492c.047-.071.12-.23.264-.546C14.49 8.754 16.5 8.202 16.5 5.846C16.5 3.154 14.485 2 12 2" color="currentColor"></svg:path>`,
})
export class HugeiconsPunchingBall02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPurseIcon],svg[hugeicons-purse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M4 20a2 2 0 1 1 0-4c1.105 0 2 1.333 2 2s-.895 2-2 2m4 0c-1.105 0-2-1.5-2-2s.895-2 2-2a2 2 0 1 1 0 4"></svg:path><svg:path d="M13 20h3c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14v-1c0-2.828 0-4.243-.879-5.121c-.641-.642-1.568-.815-3.121-.862M10 7h6c.764 0 1.425 0 2 .017m0 0c0-.948 0-1.422-.157-1.795a2 2 0 0 0-1.065-1.065C16.405 4 15.93 4 14.983 4H10C6.229 4 4.343 4 3.172 5.172S2 7.229 2 11v2"></svg:path></svg:g>`,
})
export class HugeiconsPurseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPurse01Icon],svg[hugeicons-purse-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.987 3.875c.068-.75-.095-1.875-1.23-1.875C13.337 2 9.824 7 7 7"></svg:path><svg:path d="M8.015 3.875C7.939 3.125 8.12 2 9.399 2C10.996 2 14.824 7 18 7M4 10h16"></svg:path><svg:path d="M21.863 15.002c-.448-2.065-2.39-4.504-1.69-6.62A1.055 1.055 0 0 0 19.162 7H4.83a1.05 1.05 0 0 0-1.004 1.382c.712 2.116-1.237 4.56-1.687 6.625c-.619 2.837.884 5.787 3.748 6.386c3.871.81 8.354.81 12.226 0c2.866-.598 4.368-3.55 3.751-6.39"></svg:path></svg:g>`,
})
export class HugeiconsPurse01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPushUpBarIcon],svg[hugeicons-push-up-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 10V8.5c0-1.886 0-2.828.586-3.414S5.614 4.5 7.5 4.5m13 5.5V8.5c0-1.886 0-2.828-.586-3.414S18.386 4.5 16.5 4.5M22 10h-3M5 10H2m7.368-6.492h5.264c.537 0 1.269-.096 1.645.38c.223.282.223.7.223 1.536c0 .516-.098.688-.587.889l-1.08.443c-.41.168-.615.252-.829.243c-.732-.03-1.259-.806-2.004-.806s-1.271.775-2.004.806c-.214.01-.42-.075-.83-.243l-1.079-.443c-.489-.2-.587-.373-.587-.89c0-.835 0-1.253.223-1.536c.376-.475 1.108-.38 1.645-.38m0 10.493h5.264c.537 0 1.269-.096 1.645.38c.223.282.223.7.223 1.536c0 .516-.098.689-.587.89l-1.08.442c-.41.168-.615.253-.829.243c-.732-.03-1.259-.806-2.004-.806s-1.271.775-2.004.806c-.214.01-.42-.075-.83-.243l-1.079-.443c-.489-.2-.587-.373-.587-.89c0-.835 0-1.253.223-1.535c.376-.476 1.108-.38 1.645-.38"></svg:path><svg:path d="M3.414 20.414v-1.5c0-1.885 0-2.828.586-3.414s1.529-.586 3.414-.586m13 5.5v-1.5c0-1.885 0-2.828-.585-3.414c-.586-.586-1.529-.586-3.415-.586M22 20.5h-3m-14 0H2"></svg:path></svg:g>`,
})
export class HugeiconsPushUpBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPuzzleIcon],svg[hugeicons-puzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.828 6.001a3 3 0 1 0-5.658 0c-2.285.008-3.504.09-4.292.878S2.008 8.886 2 11.17a3 3 0 1 1 0 5.66c.008 2.284.09 3.503.878 4.291s2.007.87 4.291.878a3 3 0 1 1 5.66 0c2.284-.008 3.503-.09 4.291-.878s.87-2.007.878-4.292a3 3 0 1 0 0-5.658c-.008-2.285-.09-3.504-.878-4.292c-.788-.789-2.007-.87-4.292-.878" color="currentColor"></svg:path>`,
})
export class HugeiconsPuzzleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPyramidIcon],svg[hugeicons-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v20m2.87-8.324l7.119 3.91m0 0l.005.004m-.005-.004c.075-.437-.232-.928-.802-1.839L13.784 3.92C12.984 2.64 12.584 2 12 2c-.583 0-.983.64-1.784 1.92L2.813 15.746c-.57.911-.877 1.402-.802 1.84m19.978 0a1 1 0 0 1-.028.109c-.152.467-.694.683-1.777 1.116l-7.403 2.957c-.385.154-.578.231-.781.231s-.396-.077-.781-.231l-7.403-2.957c-1.083-.433-1.625-.65-1.777-1.116a1 1 0 0 1-.028-.11m-.005.004l.005-.004m0 0l7.12-3.91" color="currentColor"></svg:path>`,
})
export class HugeiconsPyramidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPyramidMaslowoIcon],svg[hugeicons-pyramid-maslowo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 7.567C9.67 4.522 10.63 3 12 3s2.33 1.522 4.25 4.567l2.244 3.56c2.742 4.35 4.113 6.525 3.249 8.2C20.878 21 18.383 21 13.394 21h-2.788c-4.99 0-7.484 0-8.349-1.674c-.864-1.674.507-3.849 3.249-8.199zM3.5 15H9m11.5 0H15M7 9h10m-5 0v12" color="currentColor"></svg:path>`,
})
export class HugeiconsPyramidMaslowoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPyramidStructure01Icon],svg[hugeicons-pyramid-structure-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2c.902 0 1.675.708 2.588 1.997c.906 1.28 1.36 1.92 1.08 2.462C15.39 7 14.573 7 12.941 7h-1.882c-1.632 0-2.448 0-2.727-.541c-.28-.541.174-1.181 1.08-2.462C10.325 2.708 11.098 2 12 2M5.829 14H18.17c.757 0 1.135 0 1.28-.25c.145-.248-.042-.573-.415-1.224l-.301-.523c-.566-.978-.848-1.466-1.314-1.735C16.955 10 16.388 10 15.252 10H8.748c-1.136 0-1.703 0-2.169.268s-.748.757-1.314 1.735l-.3.523c-.374.65-.56.976-.416 1.225S5.072 14 5.83 14m2.413 8h7.514c3.553 0 5.33 0 6.01-1.117c.427-.702.246-1.554-.375-2.834c-.24-.496-.36-.744-.604-.896S20.25 17 19.66 17H4.34c-.589 0-.883 0-1.127.152c-.243.153-.363.4-.604.897c-.621 1.28-.802 2.132-.375 2.834C2.913 22 4.69 22 8.243 22" color="currentColor"></svg:path>`,
})
export class HugeiconsPyramidStructure01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPyramidStructure02Icon],svg[hugeicons-pyramid-structure-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 7.567C9.67 4.522 10.63 3 12 3s2.33 1.522 4.25 4.567l2.244 3.56c2.742 4.35 4.113 6.525 3.249 8.2C20.878 21 18.383 21 13.394 21h-2.788c-4.99 0-7.484 0-8.349-1.674c-.864-1.674.507-3.849 3.249-8.199zM3 15h18M6.818 9H17" color="currentColor"></svg:path>`,
})
export class HugeiconsPyramidStructure02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPythonIcon],svg[hugeicons-python-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22.072c-1.51 0-2.34 0-3.03-.47c-.29-.19-.56-.46-.76-.77c-.46-.67-.46-1.5-.46-3.01v-1.25H6.5c-1.51 0-2.34 0-3.03-.47c-.29-.19-.56-.46-.76-.77c-.46-.67-.46-1.5-.46-3.01s0-2.34.47-3.03c.19-.29.46-.56.77-.76c.67-.46 1.5-.46 3.01-.46h1.25v-1.25c0-1.51 0-2.34.47-3.03c.19-.29.46-.56.77-.76c.67-.46 1.5-.46 3.01-.46s2.34 0 3.03.47c.29.19.56.46.76.77c.46.67.46 1.5.46 3.01v1.25h1.25c1.51 0 2.34 0 3.03.47c.29.19.56.46.76.77c.46.67.46 1.5.46 3.01s0 2.34-.47 3.03c-.19.29-.46.56-.77.76c-.67.46-1.5.46-3.01.46h-1.25v1.25c0 1.51 0 2.34-.47 3.03c-.19.29-.46.56-.77.76c-.67.46-1.5.46-3.01.46m-5.5-12.5c-1.17 0-1.88 0-2.19.21c-.15.09-.26.21-.34.33c-.22.33-.22 1.03-.22 2.21s0 1.88.21 2.19c.09.15.21.26.33.34c.33.22 1.03.22 2.21.22h1.25v-2.75c0-.41.34-.75.75-.75h6.25v-4.75c0-1.17 0-1.88-.21-2.19c-.09-.15-.21-.26-.33-.34c-.33-.22-.99-.22-2.21-.22s-1.88 0-2.19.21c-.15.09-.26.21-.34.33c-.22.33-.22 1.03-.22 2.21v1.25H12c.41 0 .75.34.75.75s-.34.75-.75.75zm9.75 0v2.75c0 .41-.34.75-.75.75H9.25v4.75c0 1.17 0 1.88.21 2.19c.09.15.21.26.33.34c.33.22 1.03.22 2.21.22s1.88 0 2.19-.21c.15-.09.26-.21.34-.33c.22-.33.22-1.03.22-2.21v-1.25H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.5c1.17 0 1.88 0 2.19-.21c.15-.09.26-.21.34-.33c.22-.33.22-1.03.22-2.21s0-1.88-.21-2.19c-.09-.15-.21-.26-.33-.34c-.33-.22-1.03-.22-2.21-.22zm-6-3.74c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0m2 12.99c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0" color="currentColor"></svg:path>`,
})
export class HugeiconsPythonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQqPlotIcon],svg[hugeicons-qq-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3m1.5 16.5L21 3m-6 1h.009M8 3h.009M8 9h.009M20 11h.009M13 17h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsQqPlotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQrCodeIcon],svg[hugeicons-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6c0-1.414 0-2.121.44-2.56C3.878 3 4.585 3 6 3s2.121 0 2.56.44C9 3.878 9 4.585 9 6s0 2.121-.44 2.56C8.122 9 7.415 9 6 9s-2.121 0-2.56-.44C3 8.122 3 7.415 3 6m0 12c0-1.414 0-2.121.44-2.56C3.878 15 4.585 15 6 15s2.121 0 2.56.44C9 15.878 9 16.585 9 18s0 2.121-.44 2.56C8.122 21 7.415 21 6 21s-2.121 0-2.56-.44C3 20.122 3 19.415 3 18m0-6h6m3-9v5m3-2c0-1.414 0-2.121.44-2.56C15.878 3 16.585 3 18 3s2.121 0 2.56.44C21 3.878 21 4.585 21 6s0 2.121-.44 2.56C20.122 9 19.415 9 18 9s-2.121 0-2.56-.44C15 8.122 15 7.415 15 6m6 6h-6c-1.414 0-2.121 0-2.56.44C12 12.878 12 13.585 12 15m0 2.77v2.768M15 15v1.5c0 1.446.784 1.5 2 1.5a1 1 0 0 1 1 1m-2 2h-1m3-6c1.414 0 2.121 0 2.56.44s.44 1.148.44 2.564s0 2.125-.44 2.565c-.32.32-.783.408-1.56.431" color="currentColor"></svg:path>`,
})
export class HugeiconsQrCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQrCode01Icon],svg[hugeicons-qr-code-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.994 2c-2.797.064-4.43.331-5.547 1.447S2.064 6.197 2 8.994M15.006 2c2.797.064 4.43.331 5.547 1.447S21.936 6.197 22 8.994M15.006 22c2.797-.064 4.43-.331 5.547-1.447s1.383-2.75 1.447-5.547M8.994 22c-2.797-.064-4.43-.331-5.547-1.447S2.064 17.803 2 15.006M17 7h.009M13 6v3c0 1.886 0 2.828-.586 3.414S10.886 13 9 13H6"></svg:path><svg:path d="M6.293 6.293C6 6.586 6 7.057 6 8s0 1.414.293 1.707m0-3.414C6.586 6 7.057 6 8 6s1.414 0 1.707.293m-3.414 0q0 0 0 0m0 3.414C6.586 10 7.057 10 8 10s1.414 0 1.707-.293m-3.414 0q0 0 0 0m3.414 0C10 9.414 10 8.943 10 8s0-1.414-.293-1.707m0 3.414q0 0 0 0m0-3.414q0 0 0 0M17 15c.471 0 .707 0 .854.146c.146.147.146.383.146.854v1c0 .471 0 .707-.146.854C17.707 18 17.47 18 17 18h-2c-.471 0-.707 0-.854-.146C14 17.707 14 17.47 14 17v-1c0-.471 0-.707.146-.854C14.293 15 14.53 15 15 15zM6 18h5m6-8v2"></svg:path></svg:g>`,
})
export class HugeiconsQrCode01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuestionIcon],svg[hugeicons-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 7.283c0 2.642-2.239 4.784-5 4.784q-.488 0-.967-.09c-.23-.043-.345-.064-.425-.052s-.194.072-.42.193a3.25 3.25 0 0 1-2.113.329a2.65 2.65 0 0 0 .544-1.175c.05-.265-.074-.522-.26-.71A4.66 4.66 0 0 1 12 7.283C12 4.642 14.239 2.5 17 2.5s5 2.142 5 4.783m-6.508.217h.008m2.992 0h.008m-10.998 14H4.718c-.323 0-.648-.046-.945-.173c-.966-.415-1.457-.964-1.685-1.307a.54.54 0 0 1 .03-.631c1.12-1.488 3.72-2.386 5.389-2.386c1.668 0 4.264.898 5.384 2.386c.141.187.16.436.03.631c-.229.343-.72.892-1.686 1.307a2.4 2.4 0 0 1-.945.173zm2.784-9.711a2.776 2.776 0 0 1-2.78 2.772a2.776 2.776 0 0 1-2.778-2.772a2.776 2.776 0 0 1 2.779-2.773a2.776 2.776 0 0 1 2.779 2.773" color="currentColor"></svg:path>`,
})
export class HugeiconsQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQueue01Icon],svg[hugeicons-queue-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 14c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C19.1 18 18.4 18 17 18H7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C3 16.1 3 15.4 3 14m3 0h12M6 10h12M6 6h12" color="currentColor"></svg:path>`,
})
export class HugeiconsQueue01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQueue02Icon],svg[hugeicons-queue-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 18H6c-.943 0-1.414 0-1.707-.293S4 16.943 4 16s0-1.414.293-1.707S5.057 14 6 14h12c.943 0 1.414 0 1.707.293S20 15.057 20 16s0 1.414-.293 1.707S18.943 18 18 18M4 10h16M4 6h16" color="currentColor"></svg:path>`,
})
export class HugeiconsQueue02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuillWrite01Icon],svg[hugeicons-quill-write-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.076 17C4.089 4.545 12.912 1.012 19.973 2.224c.286 4.128-1.734 5.673-5.58 6.387c.742.776 2.055 1.753 1.913 2.974c-.1.868-.69 1.295-1.87 2.147C11.85 15.6 8.854 16.78 5.076 17"></svg:path><svg:path d="M4 22c0-6.5 3.848-9.818 6.5-12"></svg:path></svg:g>`,
})
export class HugeiconsQuillWrite01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuillWrite02Icon],svg[hugeicons-quill-write-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.55 3c-3.852.007-5.87.102-7.159 1.39C2 5.783 2 8.022 2 12.5s0 6.717 1.391 8.109C4.783 22 7.021 22 11.501 22c4.478 0 6.717 0 8.108-1.391c1.29-1.29 1.384-3.307 1.391-7.16"></svg:path><svg:path d="M11.056 13C10.332 3.866 16.802 1.276 21.98 2.164c.209 3.027-1.273 4.16-4.093 4.684c.545.57 1.507 1.286 1.403 2.18c-.074.638-.506.95-1.372 1.576c-1.896 1.37-4.093 2.234-6.863 2.396"></svg:path><svg:path d="M9 17c2-5.5 3.96-7.364 6-9"></svg:path></svg:g>`,
})
export class HugeiconsQuillWrite02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuiz01Icon],svg[hugeicons-quiz-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.456 2.64a2.18 2.18 0 0 1 3.088 0l1.009 1.011c.41.41.966.64 1.545.64h1.429a2.18 2.18 0 0 1 2.183 2.182l-.001 1.429c0 .58.23 1.135.64 1.545l1.01 1.01a2.18 2.18 0 0 1 0 3.087l-1.01 1.009c-.41.41-.64.966-.64 1.545v1.429a2.18 2.18 0 0 1-2.182 2.183l-1.429-.001c-.58 0-1.135.23-1.545.64l-1.01 1.01a2.18 2.18 0 0 1-3.087 0l-1.009-1.01a2.18 2.18 0 0 0-1.545-.64H6.473a2.18 2.18 0 0 1-2.183-2.182l.001-1.429c0-.58-.23-1.135-.64-1.545l-1.01-1.01a2.18 2.18 0 0 1 0-3.087l1.01-1.009c.41-.41.64-.966.64-1.545V6.473A2.18 2.18 0 0 1 6.472 4.29l1.429.001c.58 0 1.135-.23 1.545-.64z"></svg:path><svg:path d="M10 9a2 2 0 1 1 3.683 1.08C13.085 11.01 12 11.896 12 13v.5m-.008 3.5h.009"></svg:path></svg:g>`,
})
export class HugeiconsQuiz01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuiz02Icon],svg[hugeicons-quiz-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2a7.5 7.5 0 0 0-4.8 13.263C8.19 16.089 9 17.21 9 18.5h6c0-1.29.81-2.411 1.8-3.238A7.5 7.5 0 0 0 12 2m3 16.5H9v2a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z"></svg:path><svg:path d="M10 8c0-1.013.895-2 2-2s2 .82 2 1.833c0 .365-.116.705-.317.991C13.085 9.676 12 10.488 12 11.5m-.008 2.5h.009"></svg:path></svg:g>`,
})
export class HugeiconsQuiz02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuiz03Icon],svg[hugeicons-quiz-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.5 3.5c-1.556.047-2.483.22-3.125.862c-.879.88-.879 2.295-.879 5.126v6.506c0 2.832 0 4.247.879 5.127C5.253 22 6.668 22 9.496 22h5c2.829 0 4.243 0 5.121-.88c.88-.879.88-2.294.88-5.126V9.488c0-2.83 0-4.246-.88-5.126c-.641-.642-1.569-.815-3.125-.862"></svg:path><svg:path d="M7.496 3.75c0-.966.784-1.75 1.75-1.75h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 0 1-1.75-1.75M6.5 10h4m3 1s.5 0 1 1c0 0 1.588-2.5 3-3m-11 7h4m3 1s.5 0 1 1c0 0 1.588-2.5 3-3"></svg:path></svg:g>`,
})
export class HugeiconsQuiz03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuiz04Icon],svg[hugeicons-quiz-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 14v-3.5c0-2.335 0-3.502-.472-4.386a4 4 0 0 0-1.642-1.642C17.502 4 16.335 4 14 4a2 2 0 1 0-4 0c-2.335 0-3.502 0-4.386.472a4 4 0 0 0-1.642 1.642C3.5 6.998 3.5 8.165 3.5 10.5V14c0 3.771 0 5.657 1.172 6.828S7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172S20.5 17.771 20.5 14m-14-4h4"></svg:path><svg:path d="M13.5 11s.5 0 1 1c0 0 1.588-2.5 3-3m-11 7h4m3 1s.5 0 1 1c0 0 1.588-2.5 3-3"></svg:path></svg:g>`,
})
export class HugeiconsQuiz04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuiz05Icon],svg[hugeicons-quiz-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.5 7.5c0-1.013.895-2 2-2s2 .82 2 1.833c0 .365-.116.705-.317.991C11.585 9.176 10.5 9.987 10.5 11m0 2.5h.009M8 19.5c1.05.87 2.315 1.424 3.764 1.519c1.141.075 2.333.075 3.473 0a4 4 0 0 0 1.188-.268c.41-.167.614-.25.719-.237c.104.012.255.122.557.342c.533.388 1.204.666 2.2.643c.503-.012.755-.019.867-.208c.113-.19-.027-.452-.308-.977c-.39-.728-.636-1.561-.262-2.229c.643-.954 1.19-2.083 1.27-3.303c.043-.655.043-1.334 0-1.99A6.7 6.7 0 0 0 20.9 10.5"></svg:path><svg:path d="M12.237 17.019a6.685 6.685 0 0 0 6.23-6.237c.044-.655.044-1.334 0-1.99a6.685 6.685 0 0 0-6.23-6.236a27 27 0 0 0-3.473 0a6.686 6.686 0 0 0-6.232 6.237a15 15 0 0 0 0 1.99c.08 1.22.627 2.349 1.27 3.302c.374.668.127 1.501-.262 2.23c-.28.524-.42.786-.308.976c.113.19.364.195.868.208c.995.024 1.666-.255 2.199-.643c.302-.22.453-.33.557-.342s.31.07.72.237c.368.15.795.242 1.188.268c1.139.075 2.33.075 3.473 0"></svg:path></svg:g>`,
})
export class HugeiconsQuiz05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuoraIcon],svg[hugeicons-quora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.148 22C20.037 22 21 19.678 21 16.813c-.963 1.037-3.633 3.207-4.815-1.038C14.741 10.588 10.5 11.5 8 14c3.852 0 4.383.897 5.296 3.85c.963 3.112 2.408 4.15 3.852 4.15"></svg:path><svg:path d="M6.515 11a8 8 0 0 1-.015-.5c0-3.314 2.015-6 4.5-6s4.5 2.686 4.5 6c0 .892-.238 1.739-.5 2.5"></svg:path><svg:path d="M13.241 18.662A7.6 7.6 0 0 1 11 19c-4.418 0-8-3.806-8-8.5S6.582 2 11 2s8 3.806 8 8.5a8.9 8.9 0 0 1-.707 3.5"></svg:path></svg:g>`,
})
export class HugeiconsQuoraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuoteDownIcon],svg[hugeicons-quote-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 8c0 1.886 0 2.828-.586 3.414S7.886 12 6 12s-2.828 0-3.414-.586S2 9.886 2 8s0-2.828.586-3.414S4.114 4 6 4s2.828 0 3.414.586S10 6.114 10 8"></svg:path><svg:path d="M10 7v4.482c0 3.973-2.516 7.342-6 8.518M22 8c0 1.886 0 2.828-.586 3.414S19.886 12 18 12s-2.828 0-3.414-.586S14 9.886 14 8s0-2.828.586-3.414S16.114 4 18 4s2.828 0 3.414.586S22 6.114 22 8"></svg:path><svg:path d="M22 7v4.482c0 3.973-2.516 7.342-6 8.518"></svg:path></svg:g>`,
})
export class HugeiconsQuoteDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuoteDownCircleIcon],svg[hugeicons-quote-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M10.746 10c0-.943 0-1.414-.311-1.707S9.624 8 8.623 8s-1.501 0-1.812.293S6.5 9.057 6.5 10s0 1.414.31 1.707c.312.293.812.293 1.813.293s1.5 0 1.812-.293c.31-.293.31-.764.31-1.707m0 0v2.069c0 1.833-1.335 3.388-3.185 3.931m9.939-6c0-.943 0-1.414-.31-1.707C16.877 8 16.377 8 15.376 8s-1.5 0-1.812.293c-.31.293-.31.764-.31 1.707s0 1.414.31 1.707c.311.293.812.293 1.812.293s1.501 0 1.812-.293s.311-.764.311-1.707m0 0v2.069c0 1.833-1.335 3.388-3.184 3.931"></svg:path></svg:g>`,
})
export class HugeiconsQuoteDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuoteDownSquareIcon],svg[hugeicons-quote-down-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M10.746 10c0-.943 0-1.414-.311-1.707S9.624 8 8.623 8s-1.501 0-1.812.293S6.5 9.057 6.5 10s0 1.414.31 1.707c.312.293.812.293 1.813.293s1.5 0 1.812-.293c.31-.293.31-.764.31-1.707m0 0v2.069c0 1.833-1.335 3.388-3.185 3.931m9.939-6c0-.943 0-1.414-.31-1.707C16.877 8 16.377 8 15.376 8s-1.5 0-1.812.293c-.31.293-.31.764-.31 1.707s0 1.414.31 1.707c.311.293.812.293 1.812.293s1.501 0 1.812-.293s.311-.764.311-1.707m0 0v2.069c0 1.833-1.335 3.388-3.184 3.931"></svg:path></svg:g>`,
})
export class HugeiconsQuoteDownSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuoteUpIcon],svg[hugeicons-quote-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 16c0-1.886 0-2.828.586-3.414S16.114 12 18 12s2.828 0 3.414.586S22 14.114 22 16s0 2.828-.586 3.414S19.886 20 18 20s-2.828 0-3.414-.586S14 17.886 14 16"></svg:path><svg:path d="M14 16v-4.137C14 8.196 16.516 5.086 20 4M2 16c0-1.886 0-2.828.586-3.414S4.114 12 6 12s2.828 0 3.414.586S10 14.114 10 16s0 2.828-.586 3.414S7.886 20 6 20s-2.828 0-3.414-.586S2 17.886 2 16"></svg:path><svg:path d="M2 16v-4.137C2 8.196 4.516 5.086 8 4"></svg:path></svg:g>`,
})
export class HugeiconsQuoteUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuoteUpCircleIcon],svg[hugeicons-quote-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M13.254 14c0 .943 0 1.414.311 1.707s.812.293 1.812.293s1.501 0 1.812-.293s.311-.764.311-1.707s0-1.414-.31-1.707C16.877 12 16.377 12 15.376 12s-1.5 0-1.812.293c-.31.293-.31.764-.31 1.707m0 0v-2.069c0-1.833 1.335-3.388 3.185-3.931M6.5 14c0 .943 0 1.414.31 1.707c.312.293.812.293 1.813.293s1.5 0 1.812-.293c.31-.293.31-.764.31-1.707s0-1.414-.31-1.707C10.124 12 9.624 12 8.623 12s-1.501 0-1.812.293S6.5 13.057 6.5 14m0 0v-2.069C6.5 10.098 7.835 8.543 9.684 8"></svg:path></svg:g>`,
})
export class HugeiconsQuoteUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuoteUpSquareIcon],svg[hugeicons-quote-up-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M13.254 14c0 .943 0 1.414.311 1.707s.812.293 1.812.293s1.501 0 1.812-.293s.311-.764.311-1.707s0-1.414-.31-1.707C16.877 12 16.377 12 15.376 12s-1.5 0-1.812.293c-.31.293-.31.764-.31 1.707m0 0v-2.069c0-1.833 1.335-3.388 3.185-3.931M6.5 14c0 .943 0 1.414.31 1.707c.312.293.812.293 1.813.293s1.5 0 1.812-.293c.31-.293.31-.764.31-1.707s0-1.414-.31-1.707C10.124 12 9.624 12 8.623 12s-1.501 0-1.812.293S6.5 13.057 6.5 14m0 0v-2.069C6.5 10.098 7.835 8.543 9.684 8"></svg:path></svg:g>`,
})
export class HugeiconsQuoteUpSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuotesIcon],svg[hugeicons-quotes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 11.567c0 5.283-4.478 9.566-10 9.566q-.977.001-1.935-.178c-.459-.087-.688-.13-.848-.105c-.16.024-.388.145-.842.386a6.5 6.5 0 0 1-4.224.657a5.3 5.3 0 0 0 1.087-2.348c.1-.53-.148-1.045-.52-1.422C3.034 16.411 2 14.105 2 11.567C2 6.284 6.478 2 12 2s10 4.284 10 9.567"></svg:path><svg:path d="M10.746 10c0-.943 0-1.414-.311-1.707S9.624 8 8.623 8s-1.501 0-1.812.293S6.5 9.057 6.5 10s0 1.414.31 1.707c.312.293.812.293 1.813.293s1.5 0 1.812-.293c.31-.293.31-.764.31-1.707m0 0v2.069c0 1.833-1.335 3.388-3.185 3.931m9.939-6c0-.943 0-1.414-.31-1.707C16.877 8 16.377 8 15.376 8s-1.5 0-1.812.293c-.31.293-.31.764-.31 1.707s0 1.414.31 1.707c.311.293.812.293 1.812.293s1.501 0 1.812-.293s.311-.764.311-1.707m0 0v2.069c0 1.833-1.335 3.388-3.184 3.931"></svg:path></svg:g>`,
})
export class HugeiconsQuotesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuran01Icon],svg[hugeicons-quran-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.648 5.437l-.659-1.043c-.364-.577-.546-.866-.785-.892c-.238-.027-.505.247-1.038.795c-1.722 1.77-3.444 1.508-5.166 4.691c-1.722-3.183-3.444-2.921-5.166-4.691c-.533-.548-.8-.822-1.038-.795c-.239.026-.421.315-.785.892l-.658 1.043c-.255.402-.382.604-.347.816c.034.212.217.357.584.647l6.182 4.898c.591.468.887.702 1.228.702s.637-.234 1.228-.702L19.41 6.9c.367-.29.55-.435.584-.647c.035-.212-.092-.414-.346-.816M22 8.5l-16 12v-4.696M2 8.5l16 12v-4.696" color="currentColor"></svg:path>`,
})
export class HugeiconsQuran01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuran02Icon],svg[hugeicons-quran-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 17H6.5a2.5 2.5 0 0 0 0 5H21"></svg:path><svg:path d="M21 22a2.5 2.5 0 0 1 0-5M13.672 6.672L12.5 5.5l-1.172 1.172H9.672v1.656L8.5 9.5l1.172 1.172v1.656h1.656L12.5 13.5l1.172-1.172h1.656v-1.656L16.5 9.5l-1.172-1.172V6.672z"></svg:path><svg:path d="M4 19.5v-14A3.5 3.5 0 0 1 7.5 2h10A3.5 3.5 0 0 1 21 5.5V17"></svg:path></svg:g>`,
})
export class HugeiconsQuran02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuran03Icon],svg[hugeicons-quran-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 17H6a2.5 2.5 0 0 0 0 5h14.5"></svg:path><svg:path d="M20.5 22a2.5 2.5 0 0 1 0-5m-5.566-6A3.23 3.23 0 1 1 10.5 6.566M13.5 8h.009"></svg:path><svg:path d="M3.5 19.5v-14A3.5 3.5 0 0 1 7 2h10a3.5 3.5 0 0 1 3.5 3.5V17"></svg:path></svg:g>`,
})
export class HugeiconsQuran03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQwenIcon],svg[hugeicons-qwen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 2h3.5L14 4.5h5.13L20.5 7m1.5 7.5l-1.645 2.663h-2.477L15 22h-3.217M5 20l-1.5-2.5l1-3l-2.5-5L4 7"></svg:path><svg:path d="m19.19 9.662l1.31-2.661H10l1-2l-2-3l-2.251 5H4l5 10H6l-1 3h5.5l1.252 2l5.65-9.935L18.94 14.5H22z"></svg:path><svg:path d="M12 15.5L9 10h6z"></svg:path></svg:g>`,
})
export class HugeiconsQwenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRacingFlagIcon],svg[hugeicons-racing-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.672 13.91C10 15.932 14 7.842 21 11.887l-3-9.102C13.424-.3 8.563 6.856 3 4.625L8 22"></svg:path><svg:path d="M19 7C13.5 3 9 12 4.5 9M8 4.905L10.823 13m2.354-10L16 10.619"></svg:path></svg:g>`,
})
export class HugeiconsRacingFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadar01Icon],svg[hugeicons-radar-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.596 16.596A6.5 6.5 0 1 1 13 5.576"></svg:path><svg:path d="m12 12l4.95-4.95c1.033-1.033 1.55-1.55 1.437-2.298c-.113-.749-.649-1.032-1.72-1.599A9.96 9.96 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4"></svg:path></svg:g>`,
})
export class HugeiconsRadar01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadar02Icon],svg[hugeicons-radar-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path><svg:path d="M18 12a6 6 0 1 1-3.378-5.398c.713.346 1.07.52 1.154 1.028c.086.508-.259.853-.948 1.542L12 12"></svg:path></svg:g>`,
})
export class HugeiconsRadar02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadialIcon],svg[hugeicons-radial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.809.48-3.505 1.32-4.969"></svg:path><svg:path d="M5 12a7 7 0 1 0 7-7"></svg:path><svg:path d="M12 16a4 4 0 0 0 0-8"></svg:path></svg:g>`,
})
export class HugeiconsRadialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadioIcon],svg[hugeicons-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="14.5" cy="13.5" r="3.5"></svg:circle><svg:path d="M2 13.5c0-3.759 0-5.638 1.053-6.893a4.5 4.5 0 0 1 .554-.554C4.862 5 6.741 5 10.5 5h3c3.759 0 5.638 0 6.892 1.053q.302.253.555.554C22 7.862 22 9.741 22 13.5s0 5.638-1.053 6.892a4.5 4.5 0 0 1-.555.555C19.138 22 17.26 22 13.5 22h-3c-3.759 0-5.638 0-6.893-1.053a4.5 4.5 0 0 1-.554-.555C2 19.138 2 17.26 2 13.5M10 5l4-3M6 12h1m-1 3h1"></svg:path></svg:g>`,
})
export class HugeiconsRadioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadio01Icon],svg[hugeicons-radio-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 5c3.771 0 5.657 0 6.828 1.245S22 9.493 22 13.5s0 6.01-1.172 7.255S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.245S2 17.507 2 13.5s0-6.01 1.172-7.255S6.229 5 10 5z"></svg:path><svg:path d="M17.397 11.25a4.5 4.5 0 0 1-7.793 4.5m7.793-4.5a4.5 4.5 0 0 0-7.793 4.5m7.793-4.5l-7.793 4.5M17 2L7 5M6 9h.009"></svg:path></svg:g>`,
})
export class HugeiconsRadio01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadio02Icon],svg[hugeicons-radio-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 13c0-3.3 0-4.95.879-5.975C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121 1.025S22 9.7 22 13s0 4.95-.879 5.975C20.243 20 18.828 20 16 20H8c-2.828 0-4.243 0-5.121-1.025S2 16.3 2 13m5 2h.009M6 20v2m12-2v2M5 6l14-4M9 11H6"></svg:path><svg:circle cx="15" cy="13" r="3"></svg:circle></svg:g>`,
})
export class HugeiconsRadio02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadioButtonIcon],svg[hugeicons-radio-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 12.25C3.75 7.69 7.44 4 12 4s8.25 3.69 8.25 8.25S16.56 20.5 12 20.5s-8.25-3.69-8.25-8.25M12 2.5c-5.38 0-9.75 4.37-9.75 9.75S6.62 22 12 22s9.75-4.37 9.75-9.75S17.38 2.5 12 2.5m-3.25 9.75C8.75 10.46 10.21 9 12 9s3.25 1.46 3.25 3.25S13.79 15.5 12 15.5s-3.25-1.46-3.25-3.25M12 7.5c-2.62 0-4.75 2.13-4.75 4.75S9.38 17 12 17s4.75-2.13 4.75-4.75S14.62 7.5 12 7.5" color="currentColor"></svg:path>`,
})
export class HugeiconsRadioButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadioactiveAlertIcon],svg[hugeicons-radioactive-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 3a5 5 0 1 0 6 0"></svg:path><svg:path d="M21 13a5 5 0 1 0 0 6"></svg:path><svg:path d="M3 13a5 5 0 1 1 0 6"></svg:path></svg:g>`,
})
export class HugeiconsRadioactiveAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadiusIcon],svg[hugeicons-radius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 13.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M19 12h-5m5 0c0-.56-2-2-2-2m2 2c0 .56-2 2-2 2"></svg:path></svg:g>`,
})
export class HugeiconsRadiusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRainIcon],svg[hugeicons-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7.671C3 5.998 4.474 4.344 5.51 3.39a1.456 1.456 0 0 1 1.98 0C8.527 4.344 10 5.998 10 7.67C10 9.312 8.675 11 6.5 11S3 9.312 3 7.671m5.5 10c0-1.673 1.474-3.327 2.51-4.282a1.456 1.456 0 0 1 1.98 0c1.036.955 2.51 2.609 2.51 4.282C15.5 19.312 14.175 21 12 21s-3.5-1.688-3.5-3.329m5.5-10c0-1.673 1.474-3.327 2.51-4.282a1.456 1.456 0 0 1 1.98 0C19.527 4.344 21 5.998 21 7.67C21 9.312 19.675 11 17.5 11S14 9.312 14 7.671" color="currentColor"></svg:path>`,
})
export class HugeiconsRainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRainDoubleDropIcon],svg[hugeicons-rain-double-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 13.342c0-3.347 2.738-6.655 4.66-8.564c1.044-1.037 2.636-1.037 3.68 0C12.262 6.688 15 9.995 15 13.342C15 16.624 12.539 20 8.5 20S2 16.624 2 13.342"></svg:path><svg:path d="M15.5 20c4.038 0 6.5-3.376 6.5-6.658c0-3.347-2.738-6.655-4.66-8.564c-1.044-1.037-2.636-1.037-3.68 0"></svg:path></svg:g>`,
})
export class HugeiconsRainDoubleDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRainDropIcon],svg[hugeicons-rain-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 13.678c0-4.184 3.58-8.319 6.094-10.706a3.463 3.463 0 0 1 4.812 0C16.919 5.36 20.5 9.494 20.5 13.678C20.5 17.78 17.281 22 12 22s-8.5-4.22-8.5-8.322" color="currentColor"></svg:path>`,
})
export class HugeiconsRainDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRainbowIcon],svg[hugeicons-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 15v-3a8 8 0 0 1 8-8c3.357 0 6.323 2.068 7.5 5"></svg:path><svg:path d="M5 15v-3a5 5 0 0 1 5-5c1.85 0 3.649 1.005 4.5 2.5"></svg:path><svg:path d="M8 15v-3a2 2 0 0 1 2-2c.932 0 1.778.637 2 1.5m7.513 3.7h.012c1.367 0 2.475 1.075 2.475 2.4S20.892 20 19.525 20H13.75C12.231 20 11 18.806 11 17.333c0-1.386 1.091-2.525 2.486-2.654m6.027.521q.012-.132.012-.267c0-1.62-1.354-2.933-3.025-2.933c-1.582 0-2.88 1.178-3.014 2.679m6.027.521a2.9 2.9 0 0 1-.68 1.6m-5.347-2.121q.13-.012.264-.012c.62 0 1.19.198 1.65.533"></svg:path></svg:g>`,
})
export class HugeiconsRainbowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRamadhan01Icon],svg[hugeicons-ramadhan-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m18.191 3.078l.704 1.42a.87.87 0 0 0 .568.423l1.276.213c.816.137 1.008.734.42 1.323l-.992 1a.88.88 0 0 0-.208.73l.284 1.238c.224.98-.292 1.359-1.152.847l-1.196-.714a.86.86 0 0 0-.792 0l-1.196.714c-.856.512-1.376.129-1.152-.847l.284-1.238a.88.88 0 0 0-.208-.73l-.992-1c-.583-.589-.395-1.186.42-1.323l1.276-.213a.87.87 0 0 0 .564-.424l.704-1.42c.384-.77 1.008-.77 1.388 0"></svg:path><svg:path d="M2.5 11.805c0 5.354 4.34 9.695 9.695 9.695c4.406 0 8.125-2.939 9.305-6.963A8.618 8.618 0 0 1 9.463 2.5C5.44 3.68 2.5 7.399 2.5 11.805"></svg:path></svg:g>`,
})
export class HugeiconsRamadhan01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRamadhan02Icon],svg[hugeicons-ramadhan-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.072 15C-.346 7 10.012 5 12 2c1.988 3 12.347 5 5.927 13v3c0 1.886 0 2.828-.579 3.414c-.578.586-1.51.586-3.372.586h-3.952c-1.863 0-2.794 0-3.372-.586c-.579-.585-.58-1.528-.58-3.413z"></svg:path><svg:path d="m11 19l.299-.217c1.614-1.174 2.422-1.76 3.34-1.782q.163-.005.327.01C15.844 17.088 16.5 18 17.5 19m-11 0c1.5-1 2.169-1.975 3.18-2q.182-.003.361.012c.634.057 1.204.36 1.959.933m3-5.511A3.23 3.23 0 1 1 10.566 8M14 9h.009"></svg:path></svg:g>`,
})
export class HugeiconsRamadhan02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRamadhanMonthIcon],svg[hugeicons-ramadhan-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 2v2M6 2v2m-3.5 8.243c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354C21.5 5.707 21.5 7.886 21.5 12.244v.513c0 4.357 0 6.536-1.252 7.89C18.996 22 16.98 22 12.95 22h-1.9c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756zM3 8h18"></svg:path><svg:path d="M15 16.434A3.23 3.23 0 1 1 10.566 12M14 13h.009"></svg:path></svg:g>`,
})
export class HugeiconsRamadhanMonthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRankingIcon],svg[hugeicons-ranking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 18c0-1.414 0-2.121.44-2.56C4.378 15 5.085 15 6.5 15H7c.943 0 1.414 0 1.707.293S9 16.057 9 17v5H3.5zM15 19c0-.943 0-1.414.293-1.707S16.057 17 17 17h.5c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v2H15zM2 22h20M9 16c0-1.414 0-2.121.44-2.56C9.878 13 10.585 13 12 13s2.121 0 2.56.44c.44.439.44 1.146.44 2.56v6H9zm3.691-13.422l.704 1.42a.87.87 0 0 0 .568.423l1.276.213c.816.137 1.008.734.42 1.323l-.992 1a.88.88 0 0 0-.208.73l.284 1.238c.224.98-.292 1.359-1.152.847l-1.196-.714a.86.86 0 0 0-.792 0l-1.196.714c-.856.512-1.376.129-1.152-.847l.284-1.238a.88.88 0 0 0-.208-.73l-.991-1c-.584-.589-.396-1.186.42-1.323l1.275-.213a.87.87 0 0 0 .564-.424l.704-1.42c.384-.77 1.008-.77 1.388 0" color="currentColor"></svg:path>`,
})
export class HugeiconsRankingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRar01Icon],svg[hugeicons-rar-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 13.055c0 .41.34.75.75.75s.75-.34.75-.75v-2.34c0-.89 0-1.38-.21-1.89c-.2-.49-.55-.84-1.18-1.47l-4.74-4.74c-.54-.55-.84-.85-1.25-1.03c-.01 0-.18-.08-.18-.08l-.029-.015a.4.4 0 0 0-.081-.035c-.45-.15-.87-.15-1.62-.15c-3.42 0-5.13 0-6.44 1.06c-.26.21-.5.45-.71.71C4 4.375 4 6.095 4 9.515v3.54c0 .41.34.75.75.75s.75-.34.75-.75v-3.54c0-3.07 0-4.61.72-5.5c.14-.18.31-.34.49-.49c.9-.72 2.43-.72 5.5-.72c.36 0 .61 0 .79.01v.24c0 3.03 0 4.55 1.1 5.65s2.62 1.1 5.649 1.1h.231c.02.21.02.49.02.91zm-4.84-5.41c-.59-.59-.66-1.7-.66-3.78l4.44 4.44c-2.09-.01-3.19-.07-3.78-.66m-.415 15.16h.005h-.01zm-.715-.54c.1.328.397.537.715.54q.103 0 .205-.03c.4-.12.63-.53.51-.93l-1.75-6a.75.75 0 0 0-.72-.54h-.5a.75.75 0 0 0-.72.54l-1.75 6c-.12.4.11.81.51.93s.81-.11.93-.51l.43-1.46h1.71zm-.87-2.96h-.84l.42-1.43zm7.586 3.5h.004h-.01zm-.616-.33c.14.208.377.328.616.33a.8.8 0 0 0 .414-.13c.35-.23.44-.7.21-1.04l-1.32-1.98c.85-.32 1.45-1.14 1.45-2.1c0-1.24-1.01-2.25-2.25-2.25h-2c-.41 0-.75.34-.75.75v6c0 .41.34.75.75.75s.75-.34.75-.75v-2.25h.35zm-.88-4.17H18v-1.5h1.25c.41 0 .75.34.75.75s-.34.75-.75.75m-11.004 4.5h.004h-.01zm-.616-.33c.14.208.377.328.616.33a.8.8 0 0 0 .414-.13c.35-.23.44-.7.21-1.04l-1.32-1.98c.85-.32 1.45-1.14 1.45-2.1c0-1.24-1.01-2.25-2.25-2.25h-2c-.41 0-.75.34-.75.75v6c0 .41.34.75.75.75s.75-.34.75-.75v-2.25h.35zm-.88-4.17H5.5v-1.5h1.25c.41 0 .75.34.75.75s-.34.75-.75.75" color="currentColor"></svg:path>`,
})
export class HugeiconsRar01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRar02Icon],svg[hugeicons-rar-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.75 22.805h8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-8c-3.56 0-5.35 0-6.3-.95s-.95-2.74-.95-6.3v-4.54c0-3.07 0-4.61.72-5.5c.14-.18.31-.34.49-.49c.9-.72 2.43-.72 5.5-.72c.36 0 .61 0 .79.01v.24c0 3.03 0 4.55 1.1 5.65s2.62 1.1 5.649 1.1h.221c.03.36.03.84.03 1.25s.34.75.75.75s.75-.34.75-.75c0-1.07-.01-1.74-.21-2.23s-.55-.84-1.18-1.47l-4.74-4.74c-.54-.55-.84-.85-1.25-1.03c-.01 0-.18-.08-.18-.08l-.029-.015a.4.4 0 0 0-.081-.035c-.45-.15-.87-.15-1.62-.15c-3.42 0-5.13 0-6.44 1.06c-.26.21-.5.45-.71.71C3 4.375 3 6.095 3 9.515v4.54c0 3.98 0 5.97 1.39 7.36s3.38 1.39 7.36 1.39m2.41-15.16c-.59-.59-.66-1.7-.66-3.78l4.44 4.44c-2.09-.01-3.19-.07-3.78-.66m2.585 12.16h.005h-.01zm-.705-.5a.75.75 0 0 0 .95.46c.39-.14.6-.57.46-.96l-1.75-5c-.11-.3-.39-.5-.71-.5h-.5c-.32 0-.6.2-.71.5l-1.75 5c-.14.4.07.82.46.96c.4.14.82-.07.96-.46l.35-1h1.89zm-1.29-3.69l.42 1.19h-.84zm6.33 3.77c.13.27.4.42.67.42a.8.8 0 0 0 .33-.08c.38-.19.53-.64.34-1.01l-.86-1.72a2 2 0 0 0 .94-1.69c0-1.1-.9-2-2-2h-1.75c-.41 0-.75.34-.75.75v5c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h.54zm-.57-3.58H19.5v-1h1a.5.5 0 0 1 .01 1m-10.43 3.58c.13.27.4.42.67.42a.8.8 0 0 0 .33-.08c.38-.19.53-.64.34-1.01l-.86-1.72a2 2 0 0 0 .94-1.69c0-1.1-.9-2-2-2H7.75c-.41 0-.75.34-.75.75v5c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h.54zm-.57-3.58H8.5v-1h1a.5.5 0 0 1 .01 1" color="currentColor"></svg:path>`,
})
export class HugeiconsRar02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRaw01Icon],svg[hugeicons-raw-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m-.305 20l-.582-2m-3.487 2l1.637-5.632c.062-.214.168-.368.397-.368c.23 0 .336.154.398.368L12.614 20M3.5 22v-2.4m0 0v-2.4c0-.879.063-1.2.814-1.2h1.22c.675 0 1.221.806 1.221 1.8s-.546 1.8-1.22 1.8m-2.035 0h2.035m0 0l.813 2.4m3.366-2h2.9m7.886-4l-.415 4.998c-.035.424-.053.636-.183.676s-.262-.127-.528-.459l-1.06-1.325c-.144-.18-.216-.27-.312-.27s-.168.09-.312.27l-1.06 1.326c-.266.332-.4.498-.529.458c-.13-.04-.147-.251-.183-.675L15.5 16"></svg:path></svg:g>`,
})
export class HugeiconsRaw01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRaw02Icon],svg[hugeicons-raw-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m15.046 18l-.51-1.667M11.486 18l1.432-4.693c.055-.179.148-.307.348-.307s.294.128.348.307l.924 3.026M7 18v-2m0 0v-2c0-.732.055-1 .712-1H8.78c.59 0 1.068.672 1.068 1.5S9.37 16 8.78 16M7 16h1.78m0 0l.712 2M12 16.333h2.538M21 13l-.363 4.166c-.03.353-.046.53-.16.563c-.113.033-.23-.106-.462-.383l-.928-1.104c-.126-.15-.189-.225-.273-.225s-.147.075-.273.225l-.928 1.105c-.232.277-.348.415-.462.382c-.113-.033-.129-.21-.16-.562L16.625 13"></svg:path><svg:path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsRaw02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReIcon],svg[hugeicons-re-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m15.992 2h.01m-.01 3.5h.01"></svg:path><svg:path d="M7 14.5s1.5-2 3-.5m-3 .5V18m0-3.5V13m5 2.5v-.75a1.75 1.75 0 1 1 3.5 0v.75zm0 0v.75a1.75 1.75 0 0 0 3 1.225"></svg:path></svg:g>`,
})
export class HugeiconsReIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReactIcon],svg[hugeicons-react-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 12C8 6.477 9.79 2 12 2s4 4.477 4 10s-1.79 10-4 10s-4-4.477-4-10"></svg:path><svg:path d="M9.975 8.62c4.842-2.762 9.674-3.45 10.792-1.537s-1.9 5.703-6.742 8.464s-9.674 3.45-10.792 1.536c-1.118-1.913 1.9-5.702 6.742-8.464"></svg:path><svg:path d="M14.025 8.62c4.842 2.76 7.86 6.55 6.742 8.463c-1.118 1.914-5.95 1.226-10.792-1.536s-7.86-6.55-6.742-8.464C4.35 5.17 9.183 5.858 14.025 8.62"></svg:path><svg:path d="M13.5 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class HugeiconsReactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRealEstate01Icon],svg[hugeicons-real-estate-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 7.485c0-1.098 0-1.646-.276-2.11S19.939 4.609 18.922 4l-1.294-.774c-1.597-.956-2.396-1.434-3.012-1.138S14 3.245 14 4.967V22h7zM22 22H2M14 9h-4m4 6h-4M3 7.485c0-1.098 0-1.646.276-2.11S4.061 4.609 5.078 4l1.294-.774C7.97 2.269 8.768 1.79 9.384 2.087S10 3.245 10 4.967V22H3zM6.501 8h-.009m.01 4h-.01m.01 4h-.01m11.009-8h-.009m.01 4h-.01m.01 4h-.01" color="currentColor"></svg:path>`,
})
export class HugeiconsRealEstate01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRealEstate02Icon],svg[hugeicons-real-estate-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 22V7.485c0-1.098 0-1.646-.316-2.11c-.315-.463-.896-.767-2.059-1.376l-1.48-.774c-1.824-.956-2.737-1.434-3.44-1.138C13 2.383 13 3.245 13 4.967V9m9 13H2M21 8h-2m2 3h-2m2 3h-2"></svg:path><svg:path d="M8 13c0-1.886 0-2.828.586-3.414S10.114 9 12 9s2.828 0 3.414.586S16 11.114 16 13v9H8zm3.5 0h1m-1 3h1"></svg:path><svg:ellipse cx="3.5" cy="14" rx="1.5" ry="2"></svg:ellipse><svg:path d="M3.5 16v6"></svg:path></svg:g>`,
})
export class HugeiconsRealEstate02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReceiptDollarIcon],svg[hugeicons-receipt-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.542 22.463c.57.36.95.6 1.45.6s.88-.23 1.46-.6l1.91-1.2l.038-.024c.212-.131.527-.326.602-.326c.08.01.37.19.62.35l.068.044c.075.05.159.105.242.166h.001c.73.51 1.96 1.37 3.01.69c.81-.52.81-1.47.81-3.2V8.312c0-3.02 0-4.54-1.03-5.63c-1.05-1.12-2.59-1.12-5.37-1.12h-4.71c-2.79 0-4.32 0-5.37 1.11c-1.03 1.1-1.03 2.62-1.03 5.64v10.64c0 1.73 0 2.68.81 3.2c1.054.676 2.266-.171 2.997-.682l.012-.009q.096-.063.177-.12l.133-.09l.038-.023c.212-.131.527-.326.602-.326c.08.01.37.19.62.35zm.811-1.257l-.02-.014v.01l-1.91-1.21l-.02-.011c-.53-.334-.886-.559-1.35-.569c-.53-.02-.94.23-1.49.58c-.11.07-.23.15-.37.25c-.93.65-1.24.72-1.32.67c-.13-.18-.13-1.08-.13-1.95V8.312c0-2.63 0-3.95.62-4.61c.58-.62 1.66-.64 4.27-.64h4.71c2.61 0 3.69.02 4.27.64c.62.66.62 1.98.62 4.61v10.65c0 .87 0 1.77-.12 1.93c-.09.06-.4-.01-1.33-.66c-.14-.1-.26-.18-.37-.25l-.02-.011c-.53-.334-.886-.559-1.35-.569c-.53-.02-.94.23-1.49.58l-1.92 1.21c-.26.17-.57.37-.65.37c-.079-.01-.365-.19-.63-.356m-.11-4.893c0 .41.34.75.75.75s.75-.34.75-.75v-.75h.75c1.24 0 2.25-1.01 2.25-2.25v-.5c0-1.24-1.01-2.25-2.25-2.25h-3c-.41 0-.75-.34-.75-.75v-.5c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s.34.75.75.75s.75-.34.75-.75c0-1.24-1.01-2.25-2.25-2.25h-.75v-.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.75h-.75c-1.24 0-2.25 1.01-2.25 2.25v.5c0 1.24 1.01 2.25 2.25 2.25h3c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s-.34-.75-.75-.75s-.75.34-.75.75c0 1.24 1.01 2.25 2.25 2.25h.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsReceiptDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRecordIcon],svg[hugeicons-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"></svg:circle>`,
})
export class HugeiconsRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRecoveryMailIcon],svg[hugeicons-recovery-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m7 8l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 8"></svg:path><svg:path d="M22 10.026c-.065-3.066-.098-4.6-1.23-5.735s-2.708-1.175-5.859-1.254a115 115 0 0 0-5.807 0c-3.15.079-4.726.118-5.858 1.254S2.08 6.96 2.016 10.026a69 69 0 0 0 0 2.952c.065 3.066.098 4.6 1.23 5.735s2.707 1.176 5.858 1.255q.954.023 1.903.032"></svg:path><svg:path d="M21.663 16a3.5 3.5 0 1 0-3.163 5c1.585 0 3.07-1.055 3.5-2.5m-.337-2.5v-2.5m0 2.5l-2.235.157"></svg:path></svg:g>`,
})
export class HugeiconsRecoveryMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRectangularIcon],svg[hugeicons-rectangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 4.545C5.8 4 7.2 4 10 4h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 7.8 22 9.2 22 12s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 20 16.8 20 14 20h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12" color="currentColor"></svg:path>`,
})
export class HugeiconsRectangularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRectangular01Icon],svg[hugeicons-rectangular-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.69 2.438L5.353 4.22c-.972.741-1.458 1.112-1.335 1.446C4.142 6 4.764 6 6.009 6H16c.364 0 .547 0 .715-.056c.169-.057.311-.165.596-.382l2.335-1.781c.972-.741 1.458-1.112 1.335-1.447S20.236 2 18.991 2H9c-.364 0-.547 0-.715.056c-.169.057-.311.165-.596.382"></svg:path><svg:path d="M4.019 21.666c.123.334.745.334 1.99.334H16c.364 0 .547 0 .715-.056M4.02 21.666c-.123-.335.363-.705 1.335-1.446l2.335-1.781c.285-.217.427-.326.596-.382M4.02 21.666v-16m4.266 12.39C8.453 18 8.635 18 9 18h5m-5.715.057V9m8.43 12.944c.169-.056.311-.165.596-.382l2.335-1.78c.972-.742 1.458-1.113 1.335-1.447v-16m-4.266 19.61v-16"></svg:path></svg:g>`,
})
export class HugeiconsRectangular01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRecycle01Icon],svg[hugeicons-recycle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 15.999c-1.5 1-3.316 2.978-4 6.001m1-2.663c-2.368-5.326 2.409-7.123 6.044-7.323c.44-.024.659-.036.816.12c.158.155.149.377.13.82c-.15 3.684-1.661 8.753-6.99 6.383M11 20H6.021c-2.286 0-3.429 0-3.87-.735c-.44-.734.112-1.722 1.213-3.698l1.428-2.562C5.532 11.68 5.9 11.016 6.479 11s.985.626 1.798 1.91l.702 1.107M8 8.034l.992-1.879c1.46-2.767 2.191-4.151 3.3-4.155c1.11-.004 1.85 1.374 3.328 4.131l.245.456c.917 1.71 1.376 2.566 1.008 3.098s-1.27.318-3.076-.11l-.082-.019" color="currentColor"></svg:path>`,
})
export class HugeiconsRecycle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRecycle02Icon],svg[hugeicons-recycle-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.839 19.763h5.628c2.865 0 4.298 0 4.995-.76a2.2 2.2 0 0 0 .447-.726c.354-.953-.342-2.153-1.734-4.554m-9.336 6.04l2.917-2.237m-2.917 2.237L13.756 22m4.734-11.185l-2.983-5.144C14.231 3.468 13.592 2.367 12.7 2.1a2.43 2.43 0 0 0-1.389 0c-.892.267-1.53 1.368-2.807 3.57m9.986 5.144l-3.478-1.309m3.478 1.31l.569-3.54M6.819 8.578l-3.084 5.319c-1.3 2.243-1.95 3.364-1.671 4.264c.108.35.304.67.571.932c.687.67 2.025.67 4.702.67M6.82 8.578l.541 3.544M6.82 8.577L3.33 9.863" color="currentColor"></svg:path>`,
})
export class HugeiconsRecycle02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRecycle03Icon],svg[hugeicons-recycle-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3.723A9.003 9.003 0 0 0 2.124 14M9 3.723L6 2.5m3 1.223L8 6.5m11.064 10a8.96 8.96 0 0 0 .936-4c0-4.46-3.243-8.161-7.5-8.876M19.064 16.5l2.936-2m-2.936 2l-1.564-3m-13.984 4a8.99 8.99 0 0 0 7.484 4a8.97 8.97 0 0 0 6-2.292M3.516 17.5H7m-3.484 0V21" color="currentColor"></svg:path>`,
})
export class HugeiconsRecycle03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRedditIcon],svg[hugeicons-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="12" cy="15.5" rx="9" ry="6.5"></svg:ellipse><svg:path d="M15.5 16.78A5.67 5.67 0 0 1 12 18a5.67 5.67 0 0 1-3.5-1.22"></svg:path><svg:circle cx="19" cy="4" r="2"></svg:circle><svg:path d="M18 10.07A2.14 2.14 0 0 1 19.86 9c1.182 0 2.14.95 2.14 2.12c0 .817-.466 1.526-1.15 1.88M6 10.07A2.14 2.14 0 0 0 4.14 9A2.13 2.13 0 0 0 2 11.12c0 .817.466 1.526 1.15 1.88M17 4c-2.357 0-3.536 0-4.268.732S12 6.643 12 9m-2.992 4h-.009m6.009 0h-.009"></svg:path></svg:g>`,
})
export class HugeiconsRedditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRedoIcon],svg[hugeicons-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.758 21.799c-5.38 0-9.75-4.37-9.75-9.75s4.37-9.75 9.75-9.75c3.03 0 5.85 1.39 7.69 3.75c.03-.29.06-.62.09-1.01l.18-2.05c.04-.41.4-.71.81-.68c.41.04.72.4.68.81l-.18 2.05c-.13 1.62-.2 2.52-.91 3.14c-.74.62-1.67.54-3.19.38l-2.04-.21a.75.75 0 0 1-.67-.82c.04-.41.41-.72.82-.67l2.04.21c.6.06 1.07.11 1.42.11a8.24 8.24 0 0 0-6.75-3.5c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25s8.25-3.7 8.25-8.25c0-.41.34-.75.75-.75s.75.34.75.75c0 5.38-4.37 9.75-9.75 9.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRedo02Icon],svg[hugeicons-redo-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.992 2.563c-.41 0-.75.34-.75.75v1.28c0 1.07 0 1.86-.08 2.43c-1.79-2.75-4.87-4.46-8.17-4.46c-5.38 0-9.75 4.37-9.75 9.75s4.37 9.75 9.75 9.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75c-4.55 0-8.25-3.7-8.25-8.25s3.7-8.25 8.25-8.25c2.9 0 5.61 1.55 7.1 4.05c-.59.02-1.46-.12-2.64-.32l-1.34-.22a.747.747 0 0 0-.86.62c-.07.41.21.79.62.86l1.34.22c1.16.19 2.05.34 2.78.34s1.29-.15 1.78-.56c.98-.82.98-2.12.98-4.46v-1.28c0-.41-.34-.75-.75-.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsRedo02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRedo03Icon],svg[hugeicons-redo-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 8.332H9a6 6 0 1 0 0 12h4"></svg:path><svg:path d="m17 4.332l1.154.877C20.05 6.65 21 7.37 21 8.332s-.949 1.682-2.846 3.124L17 12.332"></svg:path></svg:g>`,
})
export class HugeiconsRedo03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReflexIcon],svg[hugeicons-reflex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 10.5H11.829c-1.136 0-1.704 0-2.17.271c-.467.272-.747.765-1.308 1.753l-4.642 8.928M22.001 10.5c0-.56-2.001-2-2.001-2m2 2c0 .56-2 2-2 2M3.708 21.452C3.238 21.18 3 18.794 3 18.794m.708 2.658c.47.273 2.645-.713 2.645-.713"></svg:path><svg:path d="M15.937 10.5q.063-.467.063-.951C16 5.656 12.866 2.5 9 2.5S2 5.656 2 9.549C2 12.36 3.635 14.869 6 16"></svg:path></svg:g>`,
})
export class HugeiconsReflexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRefreshIcon],svg[hugeicons-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.01 2v3.132a.314.314 0 0 1-.556.201A9.98 9.98 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" color="currentColor"></svg:path>`,
})
export class HugeiconsRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRefrigeratorIcon],svg[hugeicons-refrigerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 6c0-1.886 0-2.828.586-3.414S7.114 2 9 2h6c1.886 0 2.828 0 3.414.586S19 4.114 19 6v14c0 .943 0 1.414-.293 1.707S17.943 22 17 22H7c-.943 0-1.414 0-1.707-.293S5 20.943 5 20zm3 1h.009M8 13h.009M5 10h14" color="currentColor"></svg:path>`,
})
export class HugeiconsRefrigeratorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRegisterIcon],svg[hugeicons-register-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M10 16V9a1 1 0 0 1 1-1h1.75a2.25 2.25 0 0 1 0 4.5H10m3 0l1.5 3.5"></svg:path></svg:g>`,
})
export class HugeiconsRegisterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRegisteredIcon],svg[hugeicons-registered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M9 12h3.5M9 12V7h3.5a2.5 2.5 0 0 1 0 5M9 12v5m3.5-5l2.5 5"></svg:path></svg:g>`,
})
export class HugeiconsRegisteredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRelieved01Icon],svg[hugeicons-relieved-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7 9c.21.583.775 1 1.44 1s1.229-.417 1.438-1m4.244 0c.21.583.774 1 1.439 1c.664 0 1.23-.417 1.439-1m-9 6a5 5 0 0 0 4 2a5 5 0 0 0 4-2"></svg:path></svg:g>`,
})
export class HugeiconsRelieved01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRelieved02Icon],svg[hugeicons-relieved-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7 9c.21.583.775 1 1.44 1s1.229-.417 1.438-1m4.244 0c.21.583.774 1 1.439 1c.664 0 1.23-.417 1.439-1m-5 8.5c-2 0-4-1.5-4.5-3.5"></svg:path></svg:g>`,
})
export class HugeiconsRelieved02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReloadIcon],svg[hugeicons-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.167 1l.598 1.118c.404.755.606 1.133.472 1.295c-.133.162-.573.031-1.454-.23A9.8 9.8 0 0 0 12 2.78c-5.247 0-9.5 4.128-9.5 9.22a8.97 8.97 0 0 0 1.27 4.61M8.834 23l-.598-1.118c-.404-.756-.606-1.134-.472-1.295c.133-.162.573-.032 1.454.23c.88.261 1.815.402 2.783.402c5.247 0 9.5-4.128 9.5-9.22a8.97 8.97 0 0 0-1.27-4.609" color="currentColor"></svg:path>`,
})
export class HugeiconsReloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReminderIcon],svg[hugeicons-reminder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.947 19c-.077 1.022-.271 1.69-.752 2.18c-.806.82-2.102.82-4.695.82s-3.89 0-4.695-.82S2 19.04 2 16.4v-4.8c0-2.64 0-3.96.805-4.78c.49-.498 1.161-.694 2.195-.77M7.492 19h.009"></svg:path><svg:path d="M16.078 2h-2.156C11.02 2 9.57 2 8.71 2.905c-.861.903-.77 2.33-.59 5.183l.126 1.985c.042.656.062.984.136 1.257a2.89 2.89 0 0 0 2.24 2.075c.282.056.615.056 1.282.056c.929 0 .916.767.916 1.526c0 .59 0 .884.192.985s.44-.062.938-.39l2.96-1.944a1 1 0 0 1 .595-.178c1.222 0 1.833 0 2.328-.183c1.716-.637 1.859-2.223 1.958-3.785l.089-1.404c.18-2.853.271-4.28-.59-5.183C20.43 2 18.98 2 16.078 2"></svg:path><svg:path d="M13.834 8.43C11.426 6.714 15 5 15 5s3.576 1.715 1.167 3.43m-2.332 0h2.332m-2.332 0L13.251 11m2.915-2.57l.816 2.57"></svg:path></svg:g>`,
})
export class HugeiconsReminderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRemoteControlIcon],svg[hugeicons-remote-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.5 2c3.3 0 4.95 0 5.975 1.025S19.5 5.7 19.5 9v6c0 3.3 0 4.95-1.025 5.975S15.8 22 12.5 22h-1c-3.3 0-4.95 0-5.975-1.025S4.5 18.3 4.5 15V9c0-3.3 0-4.95 1.025-5.975S8.2 2 11.5 2zM8 15h2m-2 3h2m4-3h2m-2 3h2"></svg:path><svg:path d="M15 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path></svg:g>`,
})
export class HugeiconsRemoteControlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRemove01Icon],svg[hugeicons-remove-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4" color="currentColor"></svg:path>`,
})
export class HugeiconsRemove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRemove02Icon],svg[hugeicons-remove-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12c0-.581 0-.872.058-1.11c.156-.647.61-1.153 1.193-1.326c.214-.064.476-.064.999-.064h13.5c.523 0 .785 0 1 .064c.582.173 1.037.679 1.192 1.326c.058.238.058.529.058 1.11s0 .872-.058 1.11c-.155.647-.61 1.153-1.193 1.326c-.214.064-.476.064-.999.064H5.25c-.523 0-.785 0-1-.064c-.582-.173-1.036-.679-1.192-1.326C3 12.872 3 12.581 3 12" color="currentColor"></svg:path>`,
})
export class HugeiconsRemove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRemoveCircleIcon],svg[hugeicons-remove-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12H8m14 0c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" color="currentColor"></svg:path>`,
})
export class HugeiconsRemoveCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRemoveCircleHalfDotIcon],svg[hugeicons-remove-circle-half-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12H8m-6 0c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4.649 5.079q.207-.22.427-.428M7.947 2.73q.273-.122.553-.229M2.732 7.942q-.124.275-.232.558" color="currentColor"></svg:path>`,
})
export class HugeiconsRemoveCircleHalfDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRemoveFemaleIcon],svg[hugeicons-remove-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.905 21.998h10.19l-.01.03c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H2.895c-.09 0-.16-.05-.16-.06a3.33 3.33 0 0 1 2.25-2.36l3.72-1.12c.31-.1.53-.39.53-.72v-2.16c0-.37-.28-.69-.66-.74c-.92-.12-1.78-.29-2.57-.53c.4-1.06.73-2.64.73-5.46c0-2.18.84-3.67 2.35-4.18c1.32-.45 2.78 0 3.31.7c.17.23.44.33.72.29c.69-.11 1.18-.05 1.47.2c.66.56.66 2.22.66 3.98c0 1.85.39 3.45.75 4.46c-.79.24-1.66.41-2.59.53c-.38.04-.66.36-.66.74v2.16c0 .41.34.75.75.75s.75-.34.75-.75v-1.51c1.09-.17 2.1-.43 3.01-.77c.2-.08.36-.23.44-.43s.07-.42-.03-.61c-.32-.63-.92-2.37-.92-4.58s0-4.12-1.19-5.13c-.56-.49-1.31-.67-2.26-.59c-1.09-1.06-3.01-1.44-4.68-.88c-1.01.34-3.37 1.57-3.37 5.6c0 3.3-.47 4.67-.92 5.57a.746.746 0 0 0 .41 1.04c.91.34 1.92.6 3.01.77v.95l-3.18.96a4.82 4.82 0 0 0-3.27 3.42c-.11.46-.02.92.27 1.29c.31.4.81.64 1.34.64m18.57.78c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-1.97-1.97l1.97-1.97c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.97 1.97l-1.97-1.97a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.97 1.97l-1.97 1.97c-.29.29-.29.77 0 1.06s.77.29 1.06 0l1.97-1.97z" color="currentColor"></svg:path>`,
})
export class HugeiconsRemoveFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRemoveMaleIcon],svg[hugeicons-remove-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.905 22.004h11.18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H2.895c-.09 0-.16-.05-.16-.06a3.33 3.33 0 0 1 2.25-2.36l3.72-1.12c.31-.1.53-.39.53-.72v-1.94c0-.23-.11-.45-.29-.59c-1.67-1.31-2.71-2.78-2.71-6.05c0-3.01 1.5-4.67 4.24-4.67c1.742 0 2.463.723 2.49.75c.14.16.35.25.56.25c1.36 0 2.21.61 2.21 3.67c0 3.28-1.04 4.74-2.71 6.05c-.18.14-.29.36-.29.59v1.94c0 .41.34.75.75.75s.75-.34.75-.75v-1.58c1.59-1.31 3-3.13 3-7c0-1.37 0-4.96-3.41-5.16c-.46-.37-1.51-1.01-3.34-1.01c-3.59 0-5.74 2.3-5.74 6.17s1.41 5.69 3 7v1.02l-3.18.96c-1.6.49-2.86 1.8-3.27 3.43c-.11.46-.02.92.27 1.29c.31.4.81.64 1.34.64m18.57.78c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-1.97-1.97l1.97-1.97c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.97 1.97l-1.97-1.97a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.97 1.97l-1.97 1.97c-.29.29-.29.77 0 1.06s.77.29 1.06 0l1.97-1.97z" color="currentColor"></svg:path>`,
})
export class HugeiconsRemoveMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRemovePiIcon],svg[hugeicons-remove-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 8.8C3 7 5.061 5.2 7.685 5.2h9.272C19.2 5.2 21 3.85 21 2.5m-4.5 3L16 11"></svg:path><svg:path d="M10 5.5c-.133 3.063-.4 8.75-.8 10.5S8 19.5 6 19.5m12.333-2h-2.666m5.333 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g>`,
})
export class HugeiconsRemovePiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRemoveSquareIcon],svg[hugeicons-remove-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12H8m-5.5 0c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" color="currentColor"></svg:path>`,
})
export class HugeiconsRemoveSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRenewableEnergyIcon],svg[hugeicons-renewable-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10c.78-3.816 3.67-6.87 7.406-7.91c.314-.087.47-.131.555-.038c.085.094.022.248-.102.558L9 4.5M14 2c3.816.78 6.87 3.67 7.91 7.406c.087.314.131.47.038.555c-.094.085-.248.022-.558-.102L19.5 9m2.5 5c-.78 3.816-3.67 6.87-7.406 7.91c-.314.087-.47.131-.555.038c-.085-.094-.022-.248.102-.558L15 19.5M10 22c-3.816-.78-6.87-3.67-7.91-7.406c-.087-.314-.131-.47-.038-.555c.094-.085.248-.022.558.102L4.5 15m4.113-3.335l3.499-4.492c.274-.351.787-.132.787.336v3.476c0 .28.2.508.449.508h1.702c.386 0 .592.514.337.842l-3.499 4.492c-.274.351-.787.132-.787-.336v-3.476c0-.28-.2-.508-.449-.508H8.95c-.386 0-.593-.514-.337-.842" color="currentColor"></svg:path>`,
})
export class HugeiconsRenewableEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRenewableEnergy01Icon],svg[hugeicons-renewable-energy-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 7.263c2.412 1.345 4 3.637 4 6.237c0 2.059-.995 3.924-2.607 5.279a1.07 1.07 0 0 0-.393.813V22h-2l-.794-1.133a.52.52 0 0 0-.552-.198a10.7 10.7 0 0 1-5.308 0a.52.52 0 0 0-.552.198L9 22H7v-2.385a1 1 0 0 0-.432-.823C5.493 18.052 2 16.602 2 15.058V13.5c0-.592.448-1.071 1-1.071c.607 0 1.102-.236 1.302-.863C4.872 9.784 6.208 8.262 8 7.263"></svg:path><svg:path d="M13.5 2L11 6h4l-2.5 4m-5 2h.009"></svg:path></svg:g>`,
})
export class HugeiconsRenewableEnergy01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRepairIcon],svg[hugeicons-repair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 11L6 6M5 7.5L7.5 5l-3-1.5l-1 1zm14.975 1.475a3.5 3.5 0 0 0 .79-3.74l-1.422 1.422h-2v-2l1.422-1.422a3.5 3.5 0 0 0-4.529 4.53l-6.47 6.471a3.5 3.5 0 0 0-4.53 4.529l1.421-1.422h2v2l-1.422 1.422a3.5 3.5 0 0 0 4.53-4.528l6.472-6.472a3.5 3.5 0 0 0 3.738-.79"></svg:path><svg:path d="m11.797 14.5l5.604 5.604a1.35 1.35 0 0 0 1.911 0l.792-.792a1.35 1.35 0 0 0 0-1.911L14.5 11.797"></svg:path></svg:g>`,
})
export class HugeiconsRepairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRepeatIcon],svg[hugeicons-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.388 3l1.003.976c.448.436.672.654.593.839C17.906 5 17.59 5 16.955 5h-7.76C5.22 5 2 8.134 2 12c0 1.487.477 2.866 1.29 4m4.322 5l-1.003-.976c-.448-.436-.672-.654-.593-.839C6.094 19 6.41 19 7.045 19h7.76C18.78 19 22 15.866 22 12a6.84 6.84 0 0 0-1.29-4" color="currentColor"></svg:path>`,
})
export class HugeiconsRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRepeatOffIcon],svg[hugeicons-repeat-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.388 3l1.003.976c.448.436.672.654.593.839C17.906 5 17.59 5 16.955 5h-7.76C5.22 5 2 8.134 2 12c0 1.487.477 2.866 1.29 4m4.322 5l-1.003-.976c-.448-.436-.672-.654-.593-.839C6.094 19 6.41 19 7.045 19h7.76C18.78 19 22 15.866 22 12a6.84 6.84 0 0 0-1.29-4M9 12h6" color="currentColor"></svg:path>`,
})
export class HugeiconsRepeatOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRepeatOne01Icon],svg[hugeicons-repeat-one-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m16.388 3l1.003.976c.448.436.672.654.593.839C17.906 5 17.59 5 16.955 5h-7.76C5.22 5 2 8.134 2 12c0 1.487.477 2.866 1.29 4m4.322 5l-1.003-.976c-.448-.436-.672-.654-.593-.839C6.094 19 6.41 19 7.045 19h7.76C18.78 19 22 15.866 22 12a6.84 6.84 0 0 0-1.29-4"></svg:path><svg:path d="M13 15V9.316c0-.26-.282-.408-.48-.252l-1.52 1.2"></svg:path></svg:g>`,
})
export class HugeiconsRepeatOne01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRepeatOne02Icon],svg[hugeicons-repeat-one-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10V3.369c0-.304-.282-.477-.48-.295L20 4.474M14.388 3l1.003.976c.448.436.672.654.593.839C15.906 5 15.59 5 14.955 5h-5.76C5.22 5 2 8.134 2 12c0 1.487.477 2.866 1.29 4m4.322 5l-1.003-.976c-.448-.436-.672-.654-.593-.839C6.094 19 6.41 19 7.045 19h7.76c3.445 0 6.49-2.355 7.195-5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsRepeatOne02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReplayIcon],svg[hugeicons-replay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2a9.98 9.98 0 0 1 7.6 3.5"></svg:path><svg:path d="M20 2.5V6h-3.5m-.555 6.358c-.176.626-1.012 1.07-2.682 1.955c-1.615.856-2.422 1.284-3.073 1.112a1.66 1.66 0 0 1-.712-.392C9 14.583 9 13.709 9 11.963c0-1.747 0-2.62.478-3.07c.198-.186.443-.321.712-.393c.65-.172 1.458.256 3.073 1.113c1.67.886 2.506 1.328 2.682 1.955c.073.259.073.531 0 .79"></svg:path></svg:g>`,
})
export class HugeiconsReplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReplitIcon],svg[hugeicons-replit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M12 3.5v5H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1m0 12v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm8-6v5a1 1 0 0 1-1 1h-7v-7h7a1 1 0 0 1 1 1" color="currentColor"></svg:path>`,
})
export class HugeiconsReplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRepositoryIcon],svg[hugeicons-repository-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 19.623c-.69-.195-1.232-.491-1.682-.941C3 17.364 3 15.242 3 11s0-6.364 1.318-7.682S7.758 2 12 2s6.364 0 7.682 1.318S21 6.758 21 11s0 6.364-1.318 7.682c-.45.45-.993.746-1.682.941"></svg:path><svg:path d="M12 20.193c-.414 0-.748.32-1.414.958c-.647.619-.97.929-1.242.831a.5.5 0 0 1-.096-.046C9 21.779 9 21.31 9 20.376v-3.125c0-1.532 0-2.299.44-2.775C9.878 14 10.585 14 12 14s2.121 0 2.56.476s.44 1.243.44 2.775v3.125c0 .935 0 1.403-.248 1.56a.5.5 0 0 1-.096.046c-.272.098-.595-.212-1.242-.831c-.666-.639-1-.958-1.414-.958M8 10h8M8 6h4"></svg:path></svg:g>`,
})
export class HugeiconsRepositoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsResetPasswordIcon],svg[hugeicons-reset-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.5 12A9.5 9.5 0 1 1 12 2.5a9.5 9.5 0 0 1 8.71 5.7m.79-2.7l-.475 3.175L18 8"></svg:path><svg:path d="M10 11V9.5a2 2 0 1 1 4 0V11m-2.75 5.5h1.5c1.173 0 1.76 0 2.163-.31a1.5 1.5 0 0 0 .277-.277c.31-.404.31-.99.31-2.163s0-1.76-.31-2.163a1.5 1.5 0 0 0-.277-.277c-.404-.31-.99-.31-2.163-.31h-1.5c-1.173 0-1.76 0-2.163.31a1.5 1.5 0 0 0-.277.277c-.31.404-.31.99-.31 2.163s0 1.76.31 2.163a1.5 1.5 0 0 0 .277.277c.404.31.99.31 2.163.31"></svg:path></svg:g>`,
})
export class HugeiconsResetPasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsResize01Icon],svg[hugeicons-resize-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 4h4m-4 0c0 .56 1.494 1.607 2 2m-2-2c0-.56 1.494-1.607 2-2M7 4H3m4 0c0-.56-1.494-1.607-2-2m2 2c0 .56-1.494 1.607-2 2m4.835 16v-.949c0-.645-.209-1.273-.595-1.791l-3.658-4.903c-.422-.566-.759-1.267-.48-1.915c.45-1.049 1.723-1.73 3.28-.158l1.597 1.71V3.57c.056-2.044 3.344-2.145 3.485 0v5.94c1.48-.192 8.452.852 7.435 5.272l-.143.633c-.206.92-.814 2.557-1.484 3.514c-.698.997-.452 1.99-.452 3.07" color="currentColor"></svg:path>`,
})
export class HugeiconsResize01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsResize02Icon],svg[hugeicons-resize-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.367 12.171L9.501 14V4.25a1.75 1.75 0 1 1 3.5 0V9.5l2.988.478c1.929.289 2.893.434 3.572.84c1.122.673 1.935 1.682 1.935 3.156c0 1.026-.254 1.715-.87 3.565c-.392 1.174-.587 1.76-.906 2.225a4 4 0 0 1-2.192 1.58c-.542.156-1.16.156-2.398.156h-1.05c-1.644 0-2.467 0-3.2-.302a4 4 0 0 1-.384-.183C9.8 20.637 9.281 20 8.244 18.722l-3.358-4.134a1.74 1.74 0 0 1 2.481-2.417M16 4.5h4m-4 0c0 .56 1.494 1.607 2 2m-2-2c0-.56 1.494-1.607 2-2m-11.5 2h-4m4 0c0-.56-1.494-1.607-2-2m2 2c0 .56-1.494 1.607-2 2" color="currentColor"></svg:path>`,
})
export class HugeiconsResize02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsResizeFieldIcon],svg[hugeicons-resize-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.435 18.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22m-5 0c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7-7c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-7 7c-.15.15-.34.22-.53.22m-5 0c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l12-12c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-12 12c-.15.15-.34.22-.53.22" color="currentColor"></svg:path>`,
})
export class HugeiconsResizeFieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsResizeFieldRectangleIcon],svg[hugeicons-resize-field-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.87 20.66c1.51 1.09 3.47 1.09 7.38 1.09v-.01c3.91 0 5.87 0 7.38-1.09c.48-.35.9-.78 1.27-1.28c1.1-1.52 1.1-3.48 1.1-7.38s0-5.86-1.1-7.38c-.36-.49-.79-.92-1.27-1.27c-1.51-1.09-3.47-1.09-7.38-1.09s-5.87 0-7.38 1.09c-.48.35-.9.78-1.27 1.28c-1.1 1.52-1.1 3.49-1.1 7.39s0 5.86 1.1 7.38c.36.49.79.92 1.27 1.27m7.38-.41c-3.58 0-5.38 0-6.5-.81a4.4 4.4 0 0 1-.94-.94C4 17.38 4 15.58 4 12s0-5.38.81-6.5c.27-.37.59-.69.94-.95c1.12-.81 2.91-.81 6.5-.81s5.39 0 6.5.81c.35.26.67.57.94.94c.81 1.12.81 2.92.81 6.5s0 5.38-.81 6.5c-.27.37-.59.69-.94.95c-1.12.81-2.92.81-6.5.81m4.47-1.72c.15.15.34.22.53.22s.38-.07.53-.22l1-1c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1 1c-.29.29-.29.77 0 1.06m-4 0c.15.15.34.22.53.22s.38-.07.53-.22l5-5c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-5 5c-.29.29-.29.77 0 1.06m-4 0c.15.15.34.22.53.22s.38-.07.53-.22l9-9c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-9 9c-.29.29-.29.77 0 1.06" color="currentColor"></svg:path>`,
})
export class HugeiconsResizeFieldRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsResourcesAddIcon],svg[hugeicons-resources-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 6c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C4.189 2 4.96 2 6.5 2s2.31 0 2.876.347c.317.194.583.46.777.777c.347.565.347 1.336.347 2.876s0 2.31-.347 2.876c-.194.317-.46.583-.777.777C8.811 10 8.04 10 6.5 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C2.5 8.311 2.5 7.54 2.5 6m1.282 8.782c1.047-1.047 1.57-1.57 2.19-1.72a2.26 2.26 0 0 1 1.056 0c.62.15 1.143.673 2.19 1.72s1.57 1.57 1.72 2.19a2.3 2.3 0 0 1 0 1.056c-.15.62-.673 1.144-1.72 2.19s-1.57 1.57-2.19 1.72a2.26 2.26 0 0 1-1.056 0c-.62-.15-1.143-.673-2.19-1.72s-1.57-1.57-1.72-2.19a2.26 2.26 0 0 1 0-1.056c.15-.62.673-1.144 1.72-2.19M14 18c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 14 16.46 14 18 14s2.31 0 2.877.347c.316.194.582.46.776.777C22 15.689 22 16.46 22 18s0 2.31-.347 2.877a2.36 2.36 0 0 1-.776.776C20.31 22 19.54 22 18 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C14 20.31 14 19.54 14 18m4-16v8m4-4h-8" color="currentColor"></svg:path>`,
})
export class HugeiconsResourcesAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsResourcesRemoveIcon],svg[hugeicons-resources-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 6c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C4.189 2 4.96 2 6.5 2s2.31 0 2.876.347c.317.194.583.46.777.777c.347.565.347 1.336.347 2.876s0 2.31-.347 2.876c-.194.317-.46.583-.777.777C8.811 10 8.04 10 6.5 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C2.5 8.311 2.5 7.54 2.5 6m1.282 8.782c1.047-1.047 1.57-1.57 2.19-1.72a2.26 2.26 0 0 1 1.056 0c.62.15 1.143.673 2.19 1.72s1.57 1.57 1.72 2.19a2.3 2.3 0 0 1 0 1.056c-.15.62-.673 1.144-1.72 2.19s-1.57 1.57-2.19 1.72a2.26 2.26 0 0 1-1.056 0c-.62-.15-1.143-.673-2.19-1.72s-1.57-1.57-1.72-2.19a2.26 2.26 0 0 1 0-1.056c.15-.62.673-1.144 1.72-2.19M14 18c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 14 16.46 14 18 14s2.31 0 2.877.347c.316.194.582.46.776.777C22 15.689 22 16.46 22 18s0 2.31-.347 2.877a2.36 2.36 0 0 1-.776.776C20.31 22 19.54 22 18 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C14 20.31 14 19.54 14 18m8-12h-8" color="currentColor"></svg:path>`,
})
export class HugeiconsResourcesRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRestaurantIcon],svg[hugeicons-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M3 12v5m0 0h2c1.414 0 2.121 0 2.56.44C8 17.878 8 18.585 8 20v1m-5-4v4M4 7l5.317-2.917C10.633 3.361 11.292 3 12 3s1.367.361 2.683 1.083L20 7m-2-1v4M6 6v4m15 2v5m0 0h-2c-1.414 0-2.121 0-2.56.44C16 17.878 16 18.585 16 20v1m5-4v4M7 14h5m5 0h-5m0 0v7m0 0h-1m1 0h1" color="currentColor"></svg:path>`,
})
export class HugeiconsRestaurantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRestaurant01Icon],svg[hugeicons-restaurant-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12v5m0 0h2c1.414 0 2.121 0 2.56.44C8 17.878 8 18.585 8 20v1m-5-4v4M4 7l5.317-2.917C10.633 3.361 11.292 3 12 3s1.367.361 2.683 1.083L20 7m-2-1v4M6 6v4m15 2v5m0 0h-2c-1.414 0-2.121 0-2.56.44C16 17.878 16 18.585 16 20v1m5-4v4M7 14h5m5 0h-5m0 0v7m0 0h-1m1 0h1" color="currentColor"></svg:path>`,
})
export class HugeiconsRestaurant01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRestaurant02Icon],svg[hugeicons-restaurant-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10L4 21.001m14-18l-3 3c-.545.545-.818.818-.964 1.112a2 2 0 0 0 0 1.776c.146.294.419.567.964 1.112s.818.818 1.112.964a2 2 0 0 0 1.776 0c.294-.146.567-.419 1.112-.964l3-3m-2-2.002l-3 3M8.845 9.846c-1.365 1.365-3.237 1.706-4.944 0c-1.706-1.707-2.6-4.814-1.235-6.18c1.365-1.364 4.472-.47 6.179 1.236c1.706 1.707 1.365 3.579 0 4.944m0 0L20 21" color="currentColor"></svg:path>`,
})
export class HugeiconsRestaurant02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRestaurant03Icon],svg[hugeicons-restaurant-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 21.001L7 18m8-7.999l-1 1m4-8l-3 3c-.545.545-.818.818-.964 1.112a2 2 0 0 0 0 1.776c.146.294.419.567.964 1.112s.818.818 1.112.964a2 2 0 0 0 1.776 0c.294-.146.567-.419 1.112-.964l3-3M20 5l-3 3m3 13l-8-8m0 0L2 3c0 3.842 1.526 7.526 4.243 10.243L9 16z" color="currentColor"></svg:path>`,
})
export class HugeiconsRestaurant03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRestaurantTableIcon],svg[hugeicons-restaurant-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 17c-1.5 0-1.5-1-3-1l1.171-4.099c.4-1.396.599-2.094 1.133-2.498C5.84 9 6.565 9 8.017 9h7.966c1.452 0 2.178 0 2.713.403c.534.404.734 1.102 1.133 2.498L21 16c-1.5 0-1.5 1-3 1s-1.5-1-3-1s-1.5 1-3 1s-1.5-1-3-1s-1.5 1-3 1m2-8V8a4 4 0 0 1 4-4m4 5V8a4 4 0 0 0-4-4m0 0V3m0 14v4m0 0h2m-2 0h-2" color="currentColor"></svg:path>`,
})
export class HugeiconsRestaurantTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRestoreBinIcon],svg[hugeicons-restore-bin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.25 5.5l-.5 6m-14.5-6l.605 10.037c.154 2.57.232 3.855.874 4.78a4 4 0 0 0 1.2 1.132c.582.356 1.284.496 2.321.551m1.5-6.5l1.136 1.466a4 4 0 0 1 7.364-.901m1.5 4.435l-1.136-1.464a4 4 0 0 1-7.328.965M3.75 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C14.344 2 13.824 2 12.785 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.803 5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsRestoreBinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReturnRequestIcon],svg[hugeicons-return-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 13V8h18v5c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13m0-5l.865-1.923C4.537 4.585 4.872 3.84 5.552 3.42S7.105 3 8.85 3h6.3c1.745 0 2.617 0 3.298.42c.68.42 1.015 1.165 1.687 2.657L21 8m-9 0V3"></svg:path><svg:path d="M8.5 13.5H14a2 2 0 1 1 0 4h-1m-3-6l-2 2l2 2"></svg:path></svg:g>`,
})
export class HugeiconsReturnRequestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReverseWithdrawal01Icon],svg[hugeicons-reverse-withdrawal-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m18.935 13.945l-.67-3.648c-.29-1.576-.435-2.364-1.008-2.83S15.86 7 14.213 7H9.787c-1.647 0-2.47 0-3.044.467c-.573.466-.718 1.254-1.008 2.83l-.67 3.648c-.6 3.271-.901 4.907.024 5.98C6.014 21 7.724 21 11.142 21h1.716c3.418 0 5.128 0 6.053-1.074s.625-2.71.024-5.98"></svg:path><svg:path d="M12 10.5V17m-2.5-2l2.5 2.5l2.5-2.5m6.5-4a1.5 1.5 0 0 0 .414-.305C22 10.089 22 9.11 22 7.152s0-2.936-.586-3.544S19.886 3 18 3H6c-1.886 0-2.828 0-3.414.608S2 5.195 2 7.152s0 2.936.586 3.543q.18.188.414.305"></svg:path></svg:g>`,
})
export class HugeiconsReverseWithdrawal01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReverseWithdrawal02Icon],svg[hugeicons-reverse-withdrawal-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 10.999c-1.105 0-2 .67-2 1.499c0 .827.895 1.498 2 1.498s2 .671 2 1.499c0 .827-.895 1.498-2 1.498M12 11c.87 0 1.612.417 1.886.999m-1.886-1V10m0 6.993c-.87 0-1.612-.417-1.886-.999m1.886 1L12.003 18"></svg:path><svg:path d="M21 11a1.5 1.5 0 0 0 .414-.305C22 10.089 22 9.11 22 7.152s0-2.936-.586-3.544S19.886 3 18 3H6c-1.886 0-2.828 0-3.414.608S2 5.195 2 7.152s0 2.936.586 3.543q.18.188.414.305m2-4h14"></svg:path></svg:g>`,
})
export class HugeiconsReverseWithdrawal02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRhombusIcon],svg[hugeicons-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.914 5.996C9.312 3.332 10.51 2 12 2s2.688 1.332 5.086 3.996l.318.353C19.8 9.013 21 10.345 21 12s-1.199 2.987-3.596 5.651l-.318.353C14.688 20.668 13.49 22 12 22s-2.688-1.332-5.086-3.996l-.318-.353C4.2 14.987 3 13.655 3 12s1.199-2.987 3.596-5.651z" color="currentColor"></svg:path>`,
})
export class HugeiconsRhombusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRhombus01Icon],svg[hugeicons-rhombus-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.056 4.789C9.916 2.929 10.845 2 12 2s2.085.93 3.944 2.789l3.267 3.267C21.071 9.916 22 10.845 22 12s-.93 2.085-2.789 3.944l-3.267 3.267C14.084 21.071 13.155 22 12 22s-2.085-.93-3.944-2.789L4.79 15.944C2.929 14.084 2 13.155 2 12s.93-2.085 2.789-3.944z" color="currentColor"></svg:path>`,
})
export class HugeiconsRhombus01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRiceBowl01Icon],svg[hugeicons-rice-bowl-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.911 12H18.09c1.602 0 2.19.37 1.79 1.982c-.706 2.843-2.703 3.549-4.549 5.404c-.448.45.25 1.117.25 1.613c0 .934-.887 1.001-1.595 1.001h-5.97c-.708 0-1.596-.067-1.595-1c0-.486.677-1.184.25-1.614c-1.846-1.855-3.843-2.561-4.549-5.404c-.4-1.611.188-1.982 1.79-1.982M18.5 12c0-1.791-1.9-3.012-3.5-2.308M3.5 12c0-1.293.969-2.359 2.215-2.501c-.814-1.84.911-3.905 2.824-3.482m7.753 3.466c.781-1.8-.874-3.899-2.83-3.466c-.477-2.69-4.447-2.69-4.923 0m0 0A2.5 2.5 0 0 1 10 6.965M17 9l5-6m-6 3l2-4" color="currentColor"></svg:path>`,
})
export class HugeiconsRiceBowl01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRiceBowl02Icon],svg[hugeicons-rice-bowl-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m6 9l.73-1.113c1.845-2.809 2.767-4.213 3.954-4.652a3.8 3.8 0 0 1 2.632 0c1.187.439 2.109 1.843 3.953 4.652L18 9m.726 11.305C17.623 21 15.749 21 12 21s-5.623 0-6.726-.695c-1.303-.821-2.134-2.252-2.255-3.823a9 9 0 0 1-.034-.563c-.003-.15.006-.343.022-.73c.038-.89.257-2.57 1.268-4.189c.84 1.634 3.644 4.16 6.226 6.168m8.225 3.137c1.303-.821 2.134-2.252 2.255-3.823c.021-.275.032-.413.034-.563s-.006-.343-.022-.73c-.038-.89-.257-2.57-1.268-4.189c-1.409 2.075-6.026 6.214-9.224 6.168m8.225 3.137c-3.235-.077-6.015-1.418-8.225-3.137M14.5 11.5h-.009"></svg:path><svg:path d="M11.5 7c.167.333.8 1 2 1M10 11l-.5.5"></svg:path></svg:g>`,
})
export class HugeiconsRiceBowl02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRightAngleIcon],svg[hugeicons-right-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 5c.393-.405 1.44-2 2-2s1.607 1.595 2 2m12 12c.405.393 2 1.44 2 2s-1.595 1.607-2 2M5 12h1c2.828 0 4.243 0 5.121.879C12 13.757 12 15.172 12 18v1"></svg:path><svg:path d="M21 19H11c-2.828 0-4.243 0-5.121-.879C5 17.243 5 15.828 5 13V3"></svg:path></svg:g>`,
})
export class HugeiconsRightAngleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRightToLeftBlockQuoteIcon],svg[hugeicons-right-to-left-block-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6h8M5 12h10m-8 6h8m4-15v18" color="currentColor"></svg:path>`,
})
export class HugeiconsRightToLeftBlockQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRightToLeftListBulletIcon],svg[hugeicons-right-to-left-list-bullet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5h12m4 0h.009M20 12h.009M20 19h.009M4 12h12M4 19h12" color="currentColor"></svg:path>`,
})
export class HugeiconsRightToLeftListBulletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRightToLeftListDashIcon],svg[hugeicons-right-to-left-list-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h12m4 0h2M3 12h12m4 0h2M3 19h12m4 0h2" color="currentColor"></svg:path>`,
})
export class HugeiconsRightToLeftListDashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRightToLeftListNumberIcon],svg[hugeicons-right-to-left-list-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h10M3 12h10M3 18h10m5-3h1.5c.279 0 .418 0 .534.023a1.2 1.2 0 0 1 .943.943c.023.116.023.255.023.534s0 .418-.023.534a1.2 1.2 0 0 1-.943.943C19.918 18 19.78 18 19.5 18s-.418 0-.534.023a1.2 1.2 0 0 0-.943.943C18 19.082 18 19.22 18 19.5v.9c0 .283 0 .424.088.512s.23.088.512.088H21M18 3h1.2a.3.3 0 0 1 .3.3V9m0 0H18m1.5 0H21" color="currentColor"></svg:path>`,
})
export class HugeiconsRightToLeftListNumberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRightToLeftListTriangleIcon],svg[hugeicons-right-to-left-list-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5.5h10m5.6 11.393c-1.067.714-1.6 1.071-1.6 1.607s.533.893 1.6 1.607c1.067.715 1.6 1.072 2 .804s.4-.982.4-2.411s0-2.143-.4-2.411s-.933.09-2 .804m0-13C17.533 4.607 17 4.964 17 5.5s.533.893 1.6 1.607c1.067.715 1.6 1.072 2 .804S21 6.93 21 5.5s0-2.143-.4-2.411s-.933.09-2 .804M3 12h10M3 18.5h10" color="currentColor"></svg:path>`,
})
export class HugeiconsRightToLeftListTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRightTriangleIcon],svg[hugeicons-right-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 8V6.485c0-2.708 0-4.061.79-4.412c.792-.351 1.733.584 3.617 2.456l10.877 10.808c1.988 1.976 2.982 2.964 2.654 3.814c-.328.849-1.704.849-4.455.849H16m-3 2c0-.943 0-1.414-.293-1.707S11.943 20 11 20H6.606c-1.229 0-1.843 0-2.224-.396C4 19.207 4 18.569 4 17.294V13c0-.943 0-1.414-.293-1.707S2.943 11 2 11"></svg:path><svg:path d="M4 15h1c1.886 0 2.828 0 3.414.586S9 17.114 9 19v1"></svg:path></svg:g>`,
})
export class HugeiconsRightTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRippleIcon],svg[hugeicons-ripple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path d="M6.5 13.5a3 3 0 0 0 5.5 1.659a3 3 0 1 0 2.823-4.642a3 3 0 1 0-5.646 0A3 3 0 0 0 6.5 13.5"></svg:path></svg:g>`,
})
export class HugeiconsRippleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRiyalIcon],svg[hugeicons-riyal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M18 11v1a3 3 0 0 1-3 3m-4-7v4.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1M8.5 8v4.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1m5.5 2.99v.01m2 0v.01"></svg:path></svg:g>`,
})
export class HugeiconsRiyalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRiyalRectangleIcon],svg[hugeicons-riyal-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.5 2.5h-1c-4.243 0-6.364 0-7.682 1.318S2.5 7.258 2.5 11.5v1c0 4.243 0 6.364 1.318 7.682S7.258 21.5 11.5 21.5h1c4.243 0 6.364 0 7.682-1.318S21.5 16.742 21.5 12.5v-1c0-4.243 0-6.364-1.318-7.682S16.742 2.5 12.5 2.5"></svg:path><svg:path d="M18 11v1a3 3 0 0 1-3 3m-4-7v4.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1M8.5 8v4.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1m5.5 2.99v.01m2 0v.01"></svg:path></svg:g>`,
})
export class HugeiconsRiyalRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoadIcon],svg[hugeicons-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 21.998V11.996m20 10.002V11.996M12 21.998v-1m0-3.001v-1M5.725 5.655l.83.758m0 0c.16-.268.435-.738.527-1.032c.799-2.57.87-3.278 2.103-3.38h5.627c1.234.102 1.304.81 2.103 3.38c.091.294.318.764.477 1.032m-10.837 0C5.951 7.433 5.15 8.1 5.03 8.98c-.02.145 0 1.752 0 2.918c0 .876.844.85 1.666.918c.523.043 1.046.138 1.57.143c2.906.03 4.828.033 7.702.002c.556-.006 1.116-.11 1.67-.158c.625-.053 1.28-.123 1.33-.905c.077-1.165.02-2.773 0-2.918c-.12-.88-.97-1.547-1.575-2.567m-10.837 0h10.837m0 0l.972-.759M5.204 8.43l1.208.92m4.146 1.162h2.939m4.123-1.185l1.335-.425M7.082 12.855L7.004 14.5m9.978-1.623V14.5" color="currentColor"></svg:path>`,
})
export class HugeiconsRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoad01Icon],svg[hugeicons-road-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.172 3.172C4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828m0-17.656C6.343 2 8.229 2 12 2s5.657 0 6.828 1.172m-13.656 0q0 0 0 0m0 17.656C6.343 22 8.229 22 12 22s5.657 0 6.828-1.172m-13.656 0q0 0 0 0m13.656 0C20 19.657 20 17.771 20 14v-4c0-3.771 0-5.657-1.172-6.828m0 17.656q0 0 0 0m0-17.656q0 0 0 0M12 11v2m0-7.5v2m0 9v2" color="currentColor"></svg:path>`,
})
export class HugeiconsRoad01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoad02Icon],svg[hugeicons-road-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.828 5.172C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172m17.656 0C22 6.343 22 8.229 22 12s0 5.657-1.172 6.828m0-13.656q0 0 0 0m-17.656 0C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828m0-13.656q0 0 0 0m0 13.656C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172m-17.656 0q0 0 0 0m17.656 0q0 0 0 0M13 12h-2m7.5 0h-2m-9 0h-2" color="currentColor"></svg:path>`,
})
export class HugeiconsRoad02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoadLocation01Icon],svg[hugeicons-road-location-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.5 15h-2M13 15h-2m-3.5 0h-2M12 2C9.79 2 8 3.809 8 6.04c0 1.276.5 2.268 1.5 3.154c.705.625 1.559 1.663 2.071 2.503c.246.404.594.404.858 0c.538-.824 1.366-1.878 2.071-2.502c1-.887 1.5-1.879 1.5-3.155C16 3.81 14.21 2 12 2m0 4h.009"></svg:path><svg:path d="M19 8c.774.15 1.359.4 1.828.817C22 9.86 22 11.535 22 14.888s0 5.029-1.172 6.07S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.041C2 19.917 2 18.24 2 14.888s0-5.029 1.172-6.07C3.642 8.4 4.226 8.15 5 8"></svg:path></svg:g>`,
})
export class HugeiconsRoadLocation01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoadLocation02Icon],svg[hugeicons-road-location-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.5 15.082h-2m-3.5 0h-2m-3.5 0h-2M16 5.933c0 2.674-2.956 4.615-3.786 5.091a.43.43 0 0 1-.428 0C10.956 10.548 8 8.607 8 5.933c0-2.051 1.79-3.851 4-3.851s4 1.8 4 3.85m-4 .15h.009"></svg:path><svg:path d="M19 8.082c.774.15 1.359.4 1.828.818C22 9.94 22 11.617 22 14.97s0 5.029-1.172 6.07s-3.057 1.042-6.828 1.042h-4c-3.771 0-5.657 0-6.828-1.041C2 19.999 2 18.323 2 14.97S2 9.941 3.172 8.9c.47-.418 1.054-.668 1.828-.818"></svg:path></svg:g>`,
})
export class HugeiconsRoadLocation02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoadWaysideIcon],svg[hugeicons-road-wayside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 2.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879m-6 13c0-2.828 0-4.243.879-5.121c.878-.879 2.293-.879 5.121-.879m-13-13c0 2.828 0 4.243-.879 5.121C6.743 8.5 5.328 8.5 2.5 8.5m6 13c0-2.828 0-4.243-.879-5.121C6.743 15.5 5.328 15.5 2.5 15.5M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3-9.5v2m9.5 7.5h-2M12 19.5v2M4.5 12h-2" color="currentColor"></svg:path>`,
})
export class HugeiconsRoadWaysideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRobot01Icon],svg[hugeicons-robot-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 2.822c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.25H8.07c-.52 0-.93 0-1.28.09c-.95.25-1.69.99-1.94 1.94c-.09.35-.09.76-.09 1.28v.23c0 1.12 0 1.83.16 2.43a4.75 4.75 0 0 0 3.36 3.36c.6.16 1.32.16 2.43.16h2.59c1.12 0 1.83 0 2.43-.16a4.75 4.75 0 0 0 3.36-3.36c.16-.6.16-1.32.16-2.43v-.23c0-.52 0-.93-.09-1.28a2.72 2.72 0 0 0-1.94-1.94c-.35-.09-.76-.09-1.28-.09h-3.18v-1.25zm-7 20c0-3.45 2.8-6.25 6.25-6.25s6.25 2.8 6.25 6.25c0 .41.34.75.75.75s.75-.34.75-.75a7.75 7.75 0 0 0-15.5 0c0 .41.34.75.75.75s.75-.34.75-.75m2.75-14.5c0-.55.45-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1 1H9.5c-.55 0-1-.45-1-1m4.99 0c0-.55.45-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1 1h-.01c-.55 0-1-.45-1-1m-6.31-2.71c.13-.04.32-.04.99-.04h7.67c.67 0 .86 0 .99.04c.43.11.77.45.88.88c.04.13.04.32.04.99c0 1.29 0 1.79-.11 2.17c-.3 1.12-1.18 2-2.3 2.3c-.39.11-.89.11-2.17.11h-2.33c-1.29 0-1.79 0-2.17-.11c-1.12-.3-2-1.18-2.3-2.3c-.1-.39-.11-.89-.11-2.17c0-.67 0-.86.04-.99c.11-.43.45-.77.88-.88" color="currentColor"></svg:path>`,
})
export class HugeiconsRobot01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRobot02Icon],svg[hugeicons-robot-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.006 3.566c-.41 0-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75s-.34-.75-.75-.75m-2.25.75c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25c0 .98-.63 1.81-1.5 2.12v1.66c4.48.38 8 4.14 8 8.72v2.51c0 .54-.01.94-.09 1.29a3.76 3.76 0 0 1-2.87 2.87c-.4.09-.85.09-1.52.09h-8.55c-.67 0-1.12 0-1.52-.09a3.76 3.76 0 0 1-2.87-2.87c-.08-.35-.09-.74-.09-1.29v-2.51c0-4.58 3.52-8.34 8-8.72v-1.66c-.87-.31-1.5-1.14-1.5-2.12zm-.75 8.75c.41 0 .75.34.75.75v1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1c0-.41.34-.75.75-.75m6 0c.41 0 .75.34.75.75v1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1c0-.41.34-.75.75-.75m-10.2 7.23c-.01-.07-.02-.14-.03-.23h3.33c.81 0 1.57-.41 2.03-1.08c.17-.26.46-.42.78-.42h2.2c.31 0 .6.16.78.42c.45.68 1.21 1.08 2.03 1.08h3.33c0 .09-.02.16-.03.23a2.26 2.26 0 0 1-1.72 1.72c-.22.05-.5.05-1.3.05h-8.36c-.8 0-1.08 0-1.3-.05a2.26 2.26 0 0 1-1.72-1.72zm11.1-1.73h3.35v-1.75c0-4-3.25-7.25-7.25-7.25s-7.25 3.25-7.25 7.25v1.75h3.35c.31 0 .6-.16.78-.42c.45-.68 1.21-1.08 2.03-1.08h2.2c.81 0 1.57.41 2.03 1.08c.17.26.46.42.78.42z" color="currentColor"></svg:path>`,
})
export class HugeiconsRobot02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoboticIcon],svg[hugeicons-robotic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 16v-2c0-2.828 0-4.243-.879-5.121C17.243 8 15.828 8 13 8h-2c-2.828 0-4.243 0-5.121.879C5 9.757 5 11.172 5 14v2c0 2.828 0 4.243.879 5.121C6.757 22 8.172 22 11 22h2c2.828 0 4.243 0 5.121-.879C19 20.243 19 18.828 19 16m0 2c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56s0-2.121-.44-2.56C21.122 12 20.415 12 19 12M5 18c-1.414 0-2.121 0-2.56-.44C2 17.122 2 16.415 2 15s0-2.121.44-2.56C2.878 12 3.585 12 5 12m8.5-8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M12 5v3m-3 5v1m6-1v1"></svg:path><svg:path d="M10 17.5s.667.5 2 .5s2-.5 2-.5"></svg:path></svg:g>`,
})
export class HugeiconsRoboticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRocketIcon],svg[hugeicons-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 10.167l4.123-4.124c1.125-1.124 1.688-1.687 2.308-2.14A9.9 9.9 0 0 1 18.74 2.12C19.499 2 20.293 2 21.885 2c.083 0 .115.038.115.115c0 1.59 0 2.386-.119 3.145a9.9 9.9 0 0 1-1.784 4.309c-.453.62-1.016 1.183-2.14 2.308L13.833 16"></svg:path><svg:path d="M10.341 8.098c-1.703 0-3.843-.36-5.437.3C3.737 8.88 2.878 10 2 10.878l3.306 1.418c.876.375.34 1.48.195 2.206c-.161.808-.152.838.43 1.42l2.147 2.146c.582.583.612.592 1.42.43c.725-.145 1.831-.68 2.206.196L13.121 22c.878-.878 1.998-1.737 2.481-2.904c.66-1.594.3-3.734.3-5.437M12 20l-1 1m-7-9l-1 1m12-8.92c1.2.18 2.46.66 3.161 1.38c.897.792 1.519 1.86 1.759 3.54m-1.98-2.94L16.5 7.5"></svg:path></svg:g>`,
})
export class HugeiconsRocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRocket01Icon],svg[hugeicons-rocket-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.801 6.49l1.486-1.486c1.673-1.673 3.862-2.367 6.18-2.48c.902-.044 1.352-.066 1.714.295c.361.362.34.812.295 1.714c-.113 2.318-.807 4.507-2.48 6.18L17.511 12.2c-1.224 1.223-1.572 1.571-1.315 2.898c.254 1.014.499 1.995-.238 2.732c-.894.895-1.71.895-2.604 0l-7.183-7.183c-.895-.894-.895-1.71 0-2.604c.737-.737 1.718-.492 2.732-.238c1.327.257 1.675-.091 2.898-1.315m5.195.51h.009M2.5 21.5l5-5m1 5l2-2m-8-4l2-2" color="currentColor"></svg:path>`,
})
export class HugeiconsRocket01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRocket02Icon],svg[hugeicons-rocket-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.667 7.714v-1.3c0-1.466.611-2.728 1.512-3.793c.35-.414.526-.621.821-.621s.47.207.821.621c.9 1.065 1.512 2.327 1.512 3.792v1.301c0 1.072 0 1.376.648 1.845c.518.333 1.019.655 1.019 1.3c0 .784-.333 1.141-1.064 1.141H9.064C8.334 12 8 11.643 8 10.86c0-.646.501-.968 1.02-1.301c.647-.469.647-.773.647-1.845M19.5 22c1.38 0 2.5-1.194 2.5-2.667s-1.12-2.666-2.5-2.666C19.5 15.194 18.38 14 17 14M4.5 22C3.12 22 2 20.806 2 19.333s1.12-2.666 2.5-2.666C4.5 15.194 5.62 14 7 14m3 1v5m4-5v2" color="currentColor"></svg:path>`,
})
export class HugeiconsRocket02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRockingChairIcon],svg[hugeicons-rocking-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 8v6m4-6v6m-8 0h11m-2 0l2 6M4 2l4 12l-2 6"></svg:path><svg:path d="M6 8h10.5A1.5 1.5 0 0 1 18 9.5M4 18c1.726 2.412 4.665 4 8 4s6.274-1.588 8-4"></svg:path></svg:g>`,
})
export class HugeiconsRockingChairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRockingHorseIcon],svg[hugeicons-rocking-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.083 18.55l2.024-2.958c.41-.67.64-1.46.64-2.28c0-.72.234-1.387.63-1.93a2.8 2.8 0 0 1-.54-.76c-.21-.41-.52-.6-.99-.6c-.61 0-1.1.49-1.1 1.1v1.24c0 1.09-.44 2.17-1.22 2.94c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c.5-.5.78-1.18.78-1.88v-1.24c0-1.43 1.17-2.6 2.6-2.6c1.04 0 1.86.51 2.33 1.43c.098.2.227.344.341.444a3.26 3.26 0 0 1 1.52-.374h2.46c.48 0 .82-.45.92-.89c.6-2.85 2.61-4.16 3.13-4.46l1.42-1.42a.751.751 0 0 1 1.28.53v1.16l3.24 2.78c.29.25.35.67.14.99l-1 1.5c-.19.28-.54.4-.86.3l-2.38-.79l-.13.26v2.6c0 1.25.45 2.47 1.26 3.42l1.458 1.702q.252-.225.492-.463c.29-.29.77-.29 1.06 0s.29.77 0 1.06c-2.69 2.68-6.53 4.22-10.53 4.22s-7.84-1.54-10.53-4.22a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0q.721.718 1.555 1.31m15.709.084l-1.425-1.652a6.78 6.78 0 0 1-1.63-4.4v-2.78c0-.12.03-.23.08-.33l.5-1c.17-.33.55-.49.91-.38l2.46.82l.31-.47l-3-2.57a.66.66 0 0 1-.21-.31l-.27.27c-.06.06-.12.1-.19.14c-.08.04-1.93 1.02-2.45 3.49c-.25 1.21-1.26 2.09-2.38 2.09h-2.46c-.99 0-1.79.8-1.79 1.79c0 1.1-.31 2.17-.89 3.1l-1.983 2.913q.309.17.63.322l1.844-2.636a5.9 5.9 0 0 1 4.84-2.52c1.69 0 3.29.72 4.41 1.98l2.19 2.465q.256-.16.504-.332m-1.857 1.07l-1.957-2.203a4.42 4.42 0 0 0-3.29-1.48c-1.44 0-2.79.7-3.61 1.88l-1.65 2.359c1.443.498 2.991.761 4.57.761c2.089 0 4.125-.462 5.937-1.317" color="currentColor"></svg:path>`,
})
export class HugeiconsRockingHorseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRollerSkateIcon],svg[hugeicons-roller-skate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.195 6.024C5.31 3.675 9.44 2.789 10.93 3.042c.164 1.477 1.056 5.231 3.004 6.841s7.62 1.617 8.025 3.769c.244 1.297-.627 2.348-2.17 2.348H4.945c-1.145 0-1.718 0-2.294-.543c-.576-.542-.598-.896-.642-1.603c-.086-1.382.44-2.586.82-3.26c.732-1.304.668-3.094.366-4.57M12.5 8.5l-1 .5m0-3l-1.5.5"></svg:path><svg:circle cx="4" cy="19" r="2"></svg:circle><svg:circle cx="12" cy="19" r="2"></svg:circle><svg:circle cx="20" cy="19" r="2"></svg:circle><svg:path d="M6 16c0-2.564-1.207-4.802-3-6m3 9h4m4 0h4"></svg:path></svg:g>`,
})
export class HugeiconsRollerSkateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRollingPinIcon],svg[hugeicons-rolling-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.437 5.563c-.721-.72-1.537-1.22-2.291-1.455c-.314-.098-.47-.147-.779-.07c-.308.075-.477.244-.816.583l-9.93 9.93c-.339.339-.508.508-.584.816s-.027.465.07.779c.236.754.735 1.57 1.456 2.29c.721.722 1.537 1.22 2.291 1.456c.314.098.47.147.779.07c.308-.075.477-.244.816-.583l9.93-9.93c.338-.339.508-.508.584-.816s.027-.465-.07-.779c-.236-.754-.735-1.57-1.456-2.29M19.29 6c.885-.347 1.9-1.011 2.259-1.371a1.54 1.54 0 0 0-2.178-2.178c-.36.36-1.024 1.374-1.371 2.259M6 19.29c-.347.885-1.011 1.9-1.371 2.259a1.54 1.54 0 0 1-2.178-2.178c.36-.36 1.374-1.024 2.259-1.371" color="currentColor"></svg:path>`,
})
export class HugeiconsRollingPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoot01Icon],svg[hugeicons-root-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 5h-8.386c-1.234 0-1.649.14-1.955 1.364l-2.32 9.278c-.55 2.198-.824 3.297-1.554 3.356s-1.235-.978-2.244-3.05l-.57-1.173c-.436-.893-.653-1.34-1.092-1.46c-.662-.182-1.37.355-1.879.685"></svg:path><svg:path d="M14.4 11.004c.78-.085 1.734.034 2.04.636c.612 1.2 1.62 3.72 1.98 4.5c.18.3.36.66 1.08.84c.48.06 1.104.015 1.104.015"></svg:path><svg:path d="M21 10.998c-1.5 0-2.46 1.662-3.3 2.682c-1.08 1.56-2.28 3.42-3.72 3.3"></svg:path></svg:g>`,
})
export class HugeiconsRoot01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoot02Icon],svg[hugeicons-root-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.725 2.5c1.39.154 2.325.501 3.023 1.287C22 5.197 22 7.464 22 12s0 6.804-1.252 8.213c-.698.786-1.634 1.133-3.023 1.287m-11.45 0c-1.39-.154-2.325-.501-3.023-1.287C2 18.803 2 16.536 2 12s0-6.804 1.252-8.213C3.95 3.001 4.886 2.654 6.275 2.5"></svg:path><svg:path d="M18 8h-5.483c-.817 0-1.057.04-1.218.864L9.954 14.47c-.332 1.328-.503 1.524-.834 1.551c-.36-.12-.53-.428-1.14-1.68l-.345-.76c-.263-.54-.35-.767-.615-.84c-.4-.11-.713.2-1.02.4"></svg:path><svg:path d="M13.104 11.432c.42-.014.876-.032 1.125.384c.343.692.887 2.111 1.089 2.561c.1.173.162.323.521.443c.27.035.66.044.66.044"></svg:path><svg:path d="M16.74 11.42c-.845 0-1.35.946-1.823 1.539c-.61.906-1.236 1.92-2.028 1.893"></svg:path></svg:g>`,
})
export class HugeiconsRoot02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRootCircleIcon],svg[hugeicons-root-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path fill="currentColor" d="m7.997 13.387l-.673.33zm.288.587l-.673.33zm1.915-.153l-.727-.184zm1.17-4.639l.727.183zm.985-.682v.75zm5.145.75a.75.75 0 0 0 0-1.5zm-8.083 6.249l-.06-.748zm-1.97-2.842l-.197.724zm-1.353-.288a.75.75 0 0 0 .812 1.262zm6.71 1.381a.75.75 0 0 0 0 1.5zm3.529-1.5a.75.75 0 0 0 0-1.5zm-2.088.004l-.688.298zm.646 1.492l.688-.298zm.311.552l.497-.561zm.923.952a.75.75 0 0 0 0-1.5zm-.691-.81l.277-.697zm-2.423-3.69a.75.75 0 0 0 0 1.5zm.691.81l-.277.697zm.232.142l.497-.562zm-6.61 2.016l.288.586l1.347-.66l-.288-.587zm3.603.286l1.17-4.639L10.643 9l-1.17 4.638zm1.428-4.754H17.5v-1.5h-5.145zm-4.743 5.054c.243.496.461.943.671 1.253c.19.28.565.74 1.193.69l-.12-1.496c.26-.02.325.194.168-.036c-.136-.201-.3-.531-.565-1.072zm1.86-.667c-.144.576-.233.922-.323 1.137c-.043.104-.06.113-.038.089a.4.4 0 0 1 .246-.112l.12 1.495c.645-.051.93-.586 1.058-.898c.142-.342.26-.82.392-1.344zm-.801-.58c-.1-.202-.21-.43-.331-.606a1.24 1.24 0 0 0-.695-.517L7.25 13.38a.4.4 0 0 1-.127-.065c-.027-.022-.032-.034-.016-.011s.04.064.08.138c.038.073.081.16.137.275zm3.426-3.692a1 1 0 0 1 .061-.186c.001-.001-.02.035-.071.067c-.043.027-.065.023-.017.016a2 2 0 0 1 .285-.012v-1.5c-.28 0-.708 0-1.067.227c-.409.257-.559.678-.646 1.022zm-5.191 4.266l.106-.07l.096-.062q.093-.059.155-.087c.099-.046.072-.008-.013-.031l.395-1.447c-.42-.115-.791.013-1.019.12c-.222.104-.442.258-.532.315zm5.897 1.619c.638 0 1.126-.344 1.472-.683c.345-.338.65-.773.905-1.133l-1.224-.867c-.276.39-.502.704-.731.929c-.228.223-.357.254-.422.254zm2.377-1.816c.276-.39.502-.705.731-.93c.228-.223.357-.254.422-.254v-1.5c-.638 0-1.126.344-1.472.683c-.344.338-.65.773-.905 1.133zm-1.623-.882l.323.746l1.376-.596l-.322-.746zm.323.746l.322.746l1.377-.596l-.323-.746zm.322.746c.102.234.231.575.503.816l.994-1.123c.03.027.035.045.013.004l-.051-.106l-.082-.187zm1.923-.294c-.19 0-.295 0-.372-.006c-.068-.005-.066-.01-.042-.001l-.555 1.394c.318.126.675.113.969.113zm-1.42 1.11c.134.119.288.212.451.277l.555-1.394l-.012-.006zm-1.694-2.61c.19 0 .295 0 .372.006c.068.005.066.01.042.001l.554-1.394c-.317-.126-.674-.113-.968-.113zm1.923-.294c-.102-.234-.231-.575-.503-.816l-.994 1.123c-.03-.027-.035-.045-.013-.004l.051.106l.082.187zm-1.509.301l.012.006l.994-1.123a1.5 1.5 0 0 0-.451-.277z"></svg:path><svg:circle cx="12" cy="12" r="10" stroke="currentColor"></svg:circle></svg:g>`,
})
export class HugeiconsRootCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRootFirstBracketIcon],svg[hugeicons-root-first-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 8h-5.483c-.817 0-1.057.04-1.218.864L9.954 14.47c-.332 1.328-.503 1.524-.834 1.551c-.36-.12-.53-.428-1.14-1.68l-.345-.76c-.263-.54-.35-.767-.615-.84c-.4-.11-.713.2-1.02.4"></svg:path><svg:path d="M13.104 11.432c.42-.014.876-.032 1.125.384c.343.692.887 2.111 1.089 2.561c.1.173.162.323.521.443c.27.035.66.044.66.044"></svg:path><svg:path d="M16.74 11.42c-.845 0-1.35.946-1.823 1.539c-.61.906-1.236 1.92-2.028 1.893M6 3c-2.411 1.935-4 5.243-4 9s1.589 7.065 4 9M18 3c2.411 1.935 4 5.243 4 9s-1.589 7.065-4 9"></svg:path></svg:g>`,
})
export class HugeiconsRootFirstBracketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRootFirstBrecketIcon],svg[hugeicons-root-first-brecket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 8h-5.483c-.817 0-1.057.04-1.218.864L9.954 14.47c-.332 1.328-.503 1.524-.834 1.551c-.36-.12-.53-.428-1.14-1.68l-.345-.76c-.263-.54-.35-.767-.615-.84c-.4-.11-.713.2-1.02.4"></svg:path><svg:path d="M13.104 11.432c.42-.014.876-.032 1.125.384c.343.692.887 2.111 1.089 2.561c.1.173.162.323.521.443c.27.035.66.044.66.044"></svg:path><svg:path d="M16.74 11.42c-.845 0-1.35.946-1.823 1.539c-.61.906-1.236 1.92-2.028 1.893M6 3c-2.411 1.935-4 5.243-4 9s1.589 7.065 4 9M18 3c2.411 1.935 4 5.243 4 9s-1.589 7.065-4 9"></svg:path></svg:g>`,
})
export class HugeiconsRootFirstBrecketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRootSecondBracketIcon],svg[hugeicons-root-second-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path fill="currentColor" d="m7.634 13.586l-.68.318zm.314.67l-.68.318zm2.089-.175l-.73-.176zm1.275-5.302l.73.176zM12.388 8v.75zM18 8.75a.75.75 0 0 0 0-1.5zm-8.818 7.249l-.063-.748zM7.033 12.75l-.206.721zm-1.452-.23a.75.75 0 1 0 .838 1.244zm7.296 1.586a.75.75 0 0 0 0 1.5zm3.85-1.928a.75.75 0 0 0 0-1.5zm-2.278.111l-.693.286zm.704 1.706l.694-.287zm.34.63l.51-.55zm1.007.981a.75.75 0 1 0 0-1.5zm-.754-.819l.288-.692zm-2.643-4.11a.75.75 0 0 0 0 1.5zm.754.82l-.288.692zm.253.161l.51-.55zm-7.156 2.245l.314.67l1.359-.637l-.314-.67zm3.812.352l1.276-5.301l-1.459-.351l-1.276 5.301zm1.622-5.506H18v-1.5h-5.612zm-5.12 5.824c.268.57.5 1.072.725 1.417c.197.306.587.81 1.251.755l-.125-1.495c.263-.022.313.204.133-.075c-.154-.238-.337-.624-.625-1.239zm2.04-.669c-.158.653-.258 1.06-.36 1.318c-.118.3-.105.051.171.028l.125 1.495c.677-.057.967-.636 1.1-.972c.15-.38.277-.914.422-1.518zm-.995-.638c-.11-.234-.226-.485-.353-.678c-.142-.215-.361-.456-.72-.559l-.413 1.442a.3.3 0 0 1-.117-.062c-.023-.018-.022-.025-.001.006c.02.033.05.084.094.17c.043.086.09.188.151.318zm3.729-4.312a1 1 0 0 1 .078-.243c.009-.017-.005.013-.048.042c-.038.024-.055.019 0 .01c.059-.009.153-.014.316-.014v-1.5c-.31 0-.764.002-1.142.251c-.418.276-.571.723-.663 1.103zm-5.623 4.81l.116-.08q.055-.038.106-.07q.103-.07.175-.104c.113-.056.093-.015.011-.039l.412-1.442c-.446-.127-.842.015-1.085.134c-.238.117-.473.29-.573.357zm6.458 1.842c.682 0 1.201-.385 1.57-.762c.368-.38.696-.869.976-1.282l-1.243-.84c-.3.444-.551.811-.808 1.075c-.259.265-.412.31-.495.31zm2.546-2.044c.3-.444.551-.811.808-1.075c.258-.266.412-.31.495-.31v-1.5c-.682 0-1.201.385-1.57.763c-.368.379-.696.868-.976 1.282zm-1.667-.987l.352.853l1.387-.572l-.352-.853zm.352.853l.352.853l1.387-.573l-.352-.852zm.352.853c.114.276.246.637.523.895l1.02-1.1c.023.02.021.031-.007-.024a5 5 0 0 1-.15-.344zm2.04-.175c-.207 0-.323 0-.408-.006c-.076-.006-.078-.013-.058-.005l-.577 1.384c.338.141.718.127 1.043.127zm-1.517 1.07q.212.194.474.303l.577-1.384a.1.1 0 0 1-.03-.02zm-1.88-2.998c.207 0 .322 0 .408.006c.075.006.078.013.058.005l.577-1.385c-.338-.14-.718-.126-1.043-.126zm2.04-.175c-.114-.276-.246-.637-.523-.895l-1.02 1.1c-.023-.021-.021-.031.007.024c.034.067.074.162.15.343zm-1.574.186a.1.1 0 0 1 .03.019l1.02-1.1c-.139-.13-.3-.232-.473-.304z"></svg:path><svg:path stroke="currentColor" d="M18 3c1.094.188 1.899.52 2.535 1.11C22 5.462 22 7.641 22 12s0 6.537-1.465 7.89c-.636.59-1.441.922-2.535 1.11M6 3c-1.094.188-1.899.52-2.536 1.11C2 5.462 2 7.641 2 12s0 6.537 1.464 7.89c.637.59 1.442.922 2.536 1.11"></svg:path></svg:g>`,
})
export class HugeiconsRootSecondBracketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRootSecondBrecketIcon],svg[hugeicons-root-second-brecket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path fill="currentColor" d="m7.634 13.586l-.68.318zm.314.67l-.68.318zm2.089-.175l-.73-.176zm1.275-5.302l.73.176zM12.388 8v.75zM18 8.75a.75.75 0 0 0 0-1.5zm-8.818 7.249l-.063-.748zM7.033 12.75l-.206.721zm-1.452-.23a.75.75 0 1 0 .838 1.244zm7.296 1.586a.75.75 0 0 0 0 1.5zm3.85-1.928a.75.75 0 0 0 0-1.5zm-2.278.111l-.693.286zm.704 1.706l.694-.287zm.34.63l.51-.55zm1.007.981a.75.75 0 1 0 0-1.5zm-.754-.819l.288-.692zm-2.643-4.11a.75.75 0 0 0 0 1.5zm.754.82l-.288.692zm.253.161l.51-.55zm-7.156 2.245l.314.67l1.359-.637l-.314-.67zm3.812.352l1.276-5.301l-1.459-.351l-1.276 5.301zm1.622-5.506H18v-1.5h-5.612zm-5.12 5.824c.268.57.5 1.072.725 1.417c.197.306.587.81 1.251.755l-.125-1.495c.263-.022.313.204.133-.075c-.154-.238-.337-.624-.625-1.239zm2.04-.669c-.158.653-.258 1.06-.36 1.318c-.118.3-.105.051.171.028l.125 1.495c.677-.057.967-.636 1.1-.972c.15-.38.277-.914.422-1.518zm-.995-.638c-.11-.234-.226-.485-.353-.678c-.142-.215-.361-.456-.72-.559l-.413 1.442a.3.3 0 0 1-.117-.062c-.023-.018-.022-.025-.001.006c.02.033.05.084.094.17c.043.086.09.188.151.318zm3.729-4.312a1 1 0 0 1 .078-.243c.009-.017-.005.013-.048.042c-.038.024-.055.019 0 .01c.059-.009.153-.014.316-.014v-1.5c-.31 0-.764.002-1.142.251c-.418.276-.571.723-.663 1.103zm-5.623 4.81l.116-.08q.055-.038.106-.07q.103-.07.175-.104c.113-.056.093-.015.011-.039l.412-1.442c-.446-.127-.842.015-1.085.134c-.238.117-.473.29-.573.357zm6.458 1.842c.682 0 1.201-.385 1.57-.762c.368-.38.696-.869.976-1.282l-1.243-.84c-.3.444-.551.811-.808 1.075c-.259.265-.412.31-.495.31zm2.546-2.044c.3-.444.551-.811.808-1.075c.258-.266.412-.31.495-.31v-1.5c-.682 0-1.201.385-1.57.763c-.368.379-.696.868-.976 1.282zm-1.667-.987l.352.853l1.387-.572l-.352-.853zm.352.853l.352.853l1.387-.573l-.352-.852zm.352.853c.114.276.246.637.523.895l1.02-1.1c.023.02.021.031-.007-.024a5 5 0 0 1-.15-.344zm2.04-.175c-.207 0-.323 0-.408-.006c-.076-.006-.078-.013-.058-.005l-.577 1.384c.338.141.718.127 1.043.127zm-1.517 1.07q.212.194.474.303l.577-1.384a.1.1 0 0 1-.03-.02zm-1.88-2.998c.207 0 .322 0 .408.006c.075.006.078.013.058.005l.577-1.385c-.338-.14-.718-.126-1.043-.126zm2.04-.175c-.114-.276-.246-.637-.523-.895l-1.02 1.1c-.023-.021-.021-.031.007.024c.034.067.074.162.15.343zm-1.574.186a.1.1 0 0 1 .03.019l1.02-1.1c-.139-.13-.3-.232-.473-.304z"></svg:path><svg:path stroke="currentColor" d="M18 3c1.094.188 1.899.52 2.535 1.11C22 5.462 22 7.641 22 12s0 6.537-1.465 7.89c-.636.59-1.441.922-2.535 1.11M6 3c-1.094.188-1.899.52-2.536 1.11C2 5.462 2 7.641 2 12s0 6.537 1.464 7.89c.637.59 1.442.922 2.536 1.11"></svg:path></svg:g>`,
})
export class HugeiconsRootSecondBrecketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRootThirdBracketIcon],svg[hugeicons-root-third-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 8h-5.483c-.817 0-1.057.04-1.218.864L9.954 14.47c-.332 1.328-.503 1.524-.834 1.551c-.36-.12-.53-.428-1.14-1.68l-.345-.76c-.263-.54-.35-.767-.615-.84c-.4-.11-.713.2-1.02.4"></svg:path><svg:path d="M13.104 11.432c.42-.014.876-.032 1.125.384c.343.692.887 2.111 1.089 2.561c.1.173.162.323.521.443c.27.035.66.044.66.044"></svg:path><svg:path d="M16.74 11.42c-.845 0-1.35.946-1.823 1.539c-.61.906-1.236 1.92-2.028 1.893M18 21c1.232 0 2.231-1.151 2.231-2.571c0-2.248-.1-3.742 1.442-5.52c.436-.502.436-1.316 0-1.818c-1.542-1.777-1.442-3.272-1.442-5.52C20.231 4.151 19.232 3 18 3M6 21c-1.232 0-2.231-1.151-2.231-2.571c0-2.248.1-3.742-1.442-5.52c-.436-.502-.436-1.316 0-1.818C3.835 9.353 3.769 7.84 3.769 5.57C3.769 4.151 4.768 3 6 3"></svg:path></svg:g>`,
})
export class HugeiconsRootThirdBracketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRootThirdBrecketIcon],svg[hugeicons-root-third-brecket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 8h-5.483c-.817 0-1.057.04-1.218.864L9.954 14.47c-.332 1.328-.503 1.524-.834 1.551c-.36-.12-.53-.428-1.14-1.68l-.345-.76c-.263-.54-.35-.767-.615-.84c-.4-.11-.713.2-1.02.4"></svg:path><svg:path d="M13.104 11.432c.42-.014.876-.032 1.125.384c.343.692.887 2.111 1.089 2.561c.1.173.162.323.521.443c.27.035.66.044.66.044"></svg:path><svg:path d="M16.74 11.42c-.845 0-1.35.946-1.823 1.539c-.61.906-1.236 1.92-2.028 1.893M18 21c1.232 0 2.231-1.151 2.231-2.571c0-2.248-.1-3.742 1.442-5.52c.436-.502.436-1.316 0-1.818c-1.542-1.777-1.442-3.272-1.442-5.52C20.231 4.151 19.232 3 18 3M6 21c-1.232 0-2.231-1.151-2.231-2.571c0-2.248.1-3.742-1.442-5.52c-.436-.502-.436-1.316 0-1.818C3.835 9.353 3.769 7.84 3.769 5.57C3.769 4.151 4.768 3 6 3"></svg:path></svg:g>`,
})
export class HugeiconsRootThirdBrecketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotate01Icon],svg[hugeicons-rotate-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.01 2v3.132a.314.314 0 0 1-.556.201A9.98 9.98 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" color="currentColor"></svg:path>`,
})
export class HugeiconsRotate01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotate02Icon],svg[hugeicons-rotate-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 2v3.132a.314.314 0 0 1-.555.201A9.97 9.97 0 0 0 11.995 2C6.475 2 2 6.477 2 12c0 3.958 2.299 7.38 5.633 9m4.632 1q-.7 0-1.376-.092M21.734 8.667q.169.596.266 1.202m-.035 3.669q-.105.6-.274 1.186m-1.524 3.272q-.358.531-.774 1.019M16.57 21.36q-.531.304-1.104.547" color="currentColor"></svg:path>`,
})
export class HugeiconsRotate02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotate360Icon],svg[hugeicons-rotate-360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.437 12.506c2.985-5.503 1.624-9.24-3.482-9.506c-3.712.07-7.54 2.07-10.596 5.164c-2.565 2.597-5.09 6.315-4.163 9.854c.205.781.604 1.314 1.234 1.815c1.694 1.346 3.357 1.465 6.56.678c3.244-.985 5.255-2.47 6.95-3.99m0 0l.006-.004q.003-.006-.004-.008l-.004.006zm0 0c.37 1.096.136 2.073-.502 3.99" color="currentColor"></svg:path>`,
})
export class HugeiconsRotate360Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateBottomLeftIcon],svg[hugeicons-rotate-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.001 10c0 3.3 0 4.95 1.025 5.975S5.701 17 9.001 17s4.95 0 5.975-1.025S16 13.3 16 10s0-4.95-1.025-5.975S12.3 3 9 3S4.05 3 3.025 4.025S2.001 6.7 2.001 10M22 14.42l-1.11-1.346c-.591-.716-.887-1.074-1.254-1.074v1c0 3.771 0 5.657-1.171 6.828S15.408 21 11.636 21H11" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateBottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateBottomRightIcon],svg[hugeicons-rotate-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17c3.3 0 4.95 0 5.975-1.025S22 13.3 22 10s0-4.95-1.025-5.975S18.3 3 15 3s-4.95 0-5.975 1.025S8 6.7 8 10s0 4.95 1.025 5.975S11.7 17 15 17M2 14.42l1.11-1.346C3.701 12.358 3.996 12 4.364 12v1c0 3.771 0 5.657 1.171 6.828S8.592 21 12.364 21H13" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateClockwiseIcon],svg[hugeicons-rotate-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 2v3.132c0 .294.367.427.555.201A9.97 9.97 0 0 1 12.005 2C17.525 2 22 6.477 22 12c0 3.958-2.299 7.38-5.633 9m-4.632 1q.7 0 1.376-.092M2.265 8.667Q2.097 9.263 2 9.869m.035 3.669q.105.6.274 1.186m1.524 3.272q.358.531.774 1.019M7.43 21.36q.53.304 1.103.547" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateClockwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateCropIcon],svg[hugeicons-rotate-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 15c0 3.87 3.13 7 7 7l-1.05-1.75M22 9c0-3.87-3.13-7-7-7l1.05 1.75M7 5v7c0 2.357 0 3.536.732 4.268S9.643 17 12 17h7"></svg:path><svg:path d="M17 19v-7c0-2.357 0-3.536-.732-4.268S14.357 7 12 7H5"></svg:path></svg:g>`,
})
export class HugeiconsRotateCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateLeft01Icon],svg[hugeicons-rotate-left-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.007 14.567l-.648-.393a3 3 0 0 1-1.257-1.41L15.68 7.153a1.6 1.6 0 0 0-.352-.51c-.64-.614-1.747-.354-2.285.351c-.992 1.303.341 2.536.06 3.621L5.358 6.262c-1.8-.972-3.357 1.61-1.566 2.802l4.583 2.55c-.883 1.152-3.12 6.742-.253 8.447c.164.097.344.162.526.218l.349.108c.9.28 2.602.634 3.769.532c1.214-.105 1.975.542 2.913 1.082M9.362 4.965c.397.395 2.123.281 2.76.202m-2.76-.202c-.397-.396-.408-2.328-.329-2.963m.329 2.963c1.021-1.769 5.08-4.59 9.109-1.769C20.418 4.56 20.692 5.418 21 5.994" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateLeft01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateLeft02Icon],svg[hugeicons-rotate-left-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.64 8.728l.497 2.623l-8.115-4.63a1.693 1.693 0 0 0-2.298.61A1.65 1.65 0 0 0 4.34 9.6l4.37 2.492l-1.039 2.683c-.686 1.724-1.029 2.585-1.017 3.337c.02 1.242.47 2.39 1.697 3.09c.854.487 1.55.605 3.385.976c1.165.236 1.748.354 2.288.312a3.87 3.87 0 0 0 2.369-1.053c.39-.371.687-.88 1.281-1.898l.505-.862c.79-1.353 1.185-2.03 1.286-2.775q.027-.2.032-.403c.02-.752-.262-1.482-.826-2.941l-1.826-4.724A1.674 1.674 0 0 0 15.03 6.79a1.654 1.654 0 0 0-1.391 1.937M8.863 4.465c.397.396 2.124.282 2.76.202m-2.76-.202c-.397-.396-.408-2.328-.328-2.962m.328 2.962c1.021-1.768 5.081-4.589 9.11-1.768c1.946 1.363 2.22 2.222 2.529 2.797" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateLeft02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateLeft03Icon],svg[hugeicons-rotate-left-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.624 10.46l-.444.765a1.763 1.763 0 0 0 .65 2.414m0 0l.77.442m-.77-.442a.89.89 0 0 0-1.212.323c-.49.845-.2 1.926.65 2.414m0 0l.768.442m-.768-.442a.753.753 0 0 0-1.08.385l-.109.288a1.76 1.76 0 0 0 .775 2.15l1.132.65c1.671.96 2.507 1.44 3.32 1.569c.47.074 1.187-.03 1.723-.136a1.96 1.96 0 0 1 1.357.203l.895.515M9.162 11.344L4.165 8.472a1.32 1.32 0 0 1-.488-1.81a1.335 1.335 0 0 1 1.82-.485l7.66 4.4l-.531-1.957a1.487 1.487 0 0 1 1.221-1.859a1.51 1.51 0 0 1 1.608.891l1.937 4.785c.371.916 1.248 1.8 2.107 2.294M8.863 4.966c.397.395 2.124.281 2.76.202m-2.76-.202c-.397-.396-.408-2.328-.328-2.963m.328 2.963c1.021-1.769 5.081-4.59 9.11-1.769c1.946 1.363 2.22 2.222 2.529 2.798" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateLeft03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateLeft04Icon],svg[hugeicons-rotate-left-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.148 11.92a1.33 1.33 0 0 0-1.794.495a1.286 1.286 0 0 0 .464 1.776l1.504.854m-.174-3.124l-1.505-.855A1.286 1.286 0 0 1 3.18 9.29a1.33 1.33 0 0 1 1.794-.494l1.128.642m-.954 2.483l4.137 2.35m-3.963.774a1.33 1.33 0 0 0-1.794.494a1.286 1.286 0 0 0 .464 1.776l4.638 2.636c1.635.929 2.453 1.393 3.25 1.512c.463.07 1.17-.04 1.697-.149a1.9 1.9 0 0 1 1.333.188l.876.498M5.322 15.045l3.385 1.924M6.102 9.438a1.286 1.286 0 0 1-.463-1.776a1.33 1.33 0 0 1 1.794-.494l6.365 3.617l-.504-1.92c-.221-.843.347-1.702 1.218-1.84a1.45 1.45 0 0 1 1.573.861l1.863 4.689c.356.897 1.21 1.76 2.05 2.237M6.102 9.438l3.761 2.137m-.5-6.609c.397.395 2.124.281 2.76.202m-2.76-.202c-.397-.396-.408-2.328-.328-2.963m.328 2.963c1.021-1.769 5.081-4.59 9.11-1.769c1.946 1.363 2.22 2.222 2.529 2.798" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateLeft04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateLeft05Icon],svg[hugeicons-rotate-left-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.284 11.062L3.574 8.48a1.353 1.353 0 0 1-.324-1.894a1.37 1.37 0 0 1 1.901-.345l7.419 5.164l.581.394l-.03-2.54c0-.91.792-1.617 1.698-1.517a1.53 1.53 0 0 1 1.346 1.302l.642 4.486c.146 1.018.219 1.527.182 2.016a4.5 4.5 0 0 1-.7 2.096c-.264.412-.629.776-1.357 1.503l-1.536 1.533a4.53 4.53 0 0 1-5.695.57l-3.294-2.18l-.37-.258a1.353 1.353 0 0 1-.325-1.893a1.37 1.37 0 0 1 1.901-.345l.371.258m1.3-5.768l1.112.774m-1.112-.774a1.37 1.37 0 0 0-1.902.345a1.353 1.353 0 0 0 .325 1.893l.741.517m0 0l.371.258m-.37-.258a1.37 1.37 0 0 0-1.902.345a1.353 1.353 0 0 0 .324 1.893l.371.259M9.363 4.966c.397.395 2.124.281 2.76.202m-2.76-.202c-.397-.396-.408-2.328-.328-2.963m.328 2.963c1.021-1.769 5.081-4.59 9.11-1.769c1.946 1.363 2.22 2.222 2.529 2.798" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateLeft05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateLeft06Icon],svg[hugeicons-rotate-left-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.51 10.268A1.236 1.236 0 0 1 6.2 8.53c.4-.564 1.189-.7 1.761-.306l5.527 3.814l.923.672l-.03-2.41c0-.839.74-1.491 1.585-1.399a1.42 1.42 0 0 1 1.255 1.2l.599 4.132c.136.938.204 1.407.17 1.858a4.1 4.1 0 0 1-.653 1.93c-.247.38-.587.715-1.266 1.385l-1.395 1.375a4.26 4.26 0 0 1-5.364.49l-4.047-2.73l-1.727-1.192a1.236 1.236 0 0 1-.31-1.737a1.276 1.276 0 0 1 1.761-.306m1.52-5.04l-1.38-.953a1.277 1.277 0 0 0-1.763.306c-.4.565-.261 1.342.311 1.737l1.382.954m1.45-2.043l3.11 2.145m-4.63 2.894l-1.381-.954a1.236 1.236 0 0 1-.311-1.736c.4-.564 1.19-.701 1.762-.306m-.07 2.996l1.727 1.192M5.06 12.31l3.108 2.145m1.195-9.489c.397.395 2.124.281 2.76.202m-2.76-.202c-.397-.396-.408-2.328-.328-2.963m.328 2.963c1.021-1.769 5.081-4.59 9.11-1.769c1.946 1.363 2.22 2.222 2.529 2.798" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateLeft06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateRight01Icon],svg[hugeicons-rotate-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.97 14.812l.65-.393a3 3 0 0 0 1.258-1.41l2.426-5.615a1.6 1.6 0 0 1 .352-.51c.642-.615 1.75-.355 2.289.351c.994 1.303-.342 2.536-.06 3.623l7.755-4.355c1.804-.972 3.361 1.611 1.569 2.804l-4.59 2.55c.883 1.153 3.125 6.746.252 8.452a2.4 2.4 0 0 1-.525.217l-.35.109c-.902.28-2.606.634-3.775.532c-1.216-.106-1.978.542-2.917 1.082m6.344-17.528c-.398.397-2.126.282-2.764.203m2.764-.203c.397-.396.408-2.332.328-2.968m-.328 2.968C13.626 2.95 9.562.123 5.53 2.95C3.58 4.315 3.306 5.176 2.998 5.752" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateRight01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateRight02Icon],svg[hugeicons-rotate-right-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.36 8.728l-.497 2.624l8.115-4.63a1.693 1.693 0 0 1 2.298.609a1.65 1.65 0 0 1-.616 2.27l-4.37 2.492l1.039 2.684c.686 1.723 1.029 2.585 1.017 3.337c-.02 1.241-.47 2.39-1.697 3.089c-.854.487-1.55.605-3.385.977c-1.165.235-1.748.353-2.288.311a3.87 3.87 0 0 1-2.369-1.052c-.39-.372-.687-.88-1.282-1.898l-.504-.863c-.79-1.353-1.185-2.03-1.286-2.775a4 4 0 0 1-.033-.403c-.02-.752.263-1.481.827-2.94l1.826-4.725A1.674 1.674 0 0 1 8.97 6.792a1.654 1.654 0 0 1 1.391 1.936m4.776-4.262c-.397.395-2.124.281-2.76.202m2.76-.202c.396-.396.408-2.328.328-2.963m-.328 2.963c-1.021-1.769-5.081-4.59-9.11-1.769C4.082 4.06 3.808 4.92 3.499 5.495" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateRight02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateRight03Icon],svg[hugeicons-rotate-right-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.376 10.46l.444.765c.49.845.199 1.926-.65 2.414m0 0l-.77.442m.77-.442a.89.89 0 0 1 1.212.323c.49.845.2 1.926-.65 2.414m0 0l-.768.442m.769-.442a.753.753 0 0 1 1.08.385l.108.288a1.76 1.76 0 0 1-.775 2.15l-1.132.65c-1.671.96-2.507 1.44-3.32 1.569c-.47.074-1.187-.03-1.723-.136a1.96 1.96 0 0 0-1.357.203L8.719 22m6.119-10.656l4.997-2.872a1.32 1.32 0 0 0 .488-1.81a1.335 1.335 0 0 0-1.82-.485l-7.66 4.4l.531-1.957a1.487 1.487 0 0 0-1.221-1.859a1.51 1.51 0 0 0-1.608.891l-1.937 4.785c-.371.916-1.248 1.8-2.107 2.294m10.636-9.765c-.397.395-2.124.281-2.76.202m2.76-.202c.396-.396.408-2.328.328-2.963m-.328 2.963c-1.021-1.769-5.081-4.59-9.11-1.769C4.082 4.56 3.808 5.42 3.499 5.995" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateRight03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateRight04Icon],svg[hugeicons-rotate-right-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.852 11.92a1.33 1.33 0 0 1 1.794.495c.367.626.16 1.422-.463 1.776l-1.505.854m.174-3.124l1.505-.855c.623-.354.83-1.15.463-1.776a1.33 1.33 0 0 0-1.794-.494l-1.128.642m.954 2.483l-4.137 2.35m3.963.774a1.33 1.33 0 0 1 1.794.494c.367.627.16 1.422-.464 1.776l-4.638 2.636c-1.635.929-2.453 1.393-3.25 1.512c-.463.07-1.17-.04-1.697-.149a1.9 1.9 0 0 0-1.333.188L8.214 22m10.464-6.955l-3.385 1.924m2.605-7.531c.623-.354.83-1.15.463-1.776a1.33 1.33 0 0 0-1.794-.494l-6.365 3.617l.504-1.92c.221-.843-.347-1.702-1.218-1.84a1.45 1.45 0 0 0-1.573.861l-1.863 4.689c-.356.897-1.21 1.76-2.05 2.237m13.896-5.374l-3.761 2.137m.5-6.609c-.397.395-2.124.281-2.76.202m2.76-.202c.396-.396.408-2.328.328-2.963m-.328 2.963c-1.021-1.769-5.081-4.59-9.11-1.769C3.582 4.56 3.308 5.42 2.999 5.995" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateRight04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateRight05Icon],svg[hugeicons-rotate-right-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.717 11.062l3.709-2.582c.615-.428.76-1.276.324-1.894a1.37 1.37 0 0 0-1.901-.345l-7.419 5.164l-.581.394l.03-2.54c0-.91-.792-1.617-1.698-1.517a1.53 1.53 0 0 0-1.346 1.302l-.642 4.486c-.146 1.018-.219 1.527-.182 2.016c.056.746.296 1.466.7 2.096c.264.412.629.776 1.357 1.503l1.536 1.533a4.53 4.53 0 0 0 5.695.57l3.294-2.18l.37-.258c.615-.427.76-1.275.325-1.893a1.37 1.37 0 0 0-1.901-.345l-.371.258m-1.3-5.768l-1.112.774m1.113-.774a1.37 1.37 0 0 1 1.9.345a1.35 1.35 0 0 1-.323 1.893l-.742.517m0 0l-.371.258m.37-.258a1.37 1.37 0 0 1 1.902.345c.435.618.29 1.466-.324 1.893l-.371.259M14.637 4.966c-.397.395-2.124.281-2.76.202m2.76-.202c.396-.396.408-2.328.328-2.963m-.328 2.963c-1.021-1.769-5.081-4.59-9.11-1.769C3.582 4.56 3.308 5.42 2.999 5.995" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateRight05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateRight06Icon],svg[hugeicons-rotate-right-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.49 10.268a1.236 1.236 0 0 0 .31-1.737a1.277 1.277 0 0 0-1.761-.306l-5.527 3.814l-.923.672l.03-2.41c0-.839-.74-1.491-1.585-1.399a1.42 1.42 0 0 0-1.255 1.2l-.599 4.132c-.136.938-.204 1.407-.17 1.858c.052.686.276 1.35.653 1.93c.247.38.587.715 1.266 1.385l1.395 1.375a4.26 4.26 0 0 0 5.364.49l4.047-2.73l1.727-1.192a1.236 1.236 0 0 0 .31-1.737a1.277 1.277 0 0 0-1.761-.306m-1.52-5.04l1.38-.953a1.277 1.277 0 0 1 1.763.306c.4.565.261 1.342-.311 1.737l-1.382.954m-1.45-2.043l-3.11 2.145m4.63 2.894l1.381-.954a1.236 1.236 0 0 0 .311-1.736a1.277 1.277 0 0 0-1.762-.306m.07 2.996l-1.727 1.192m1.657-4.188l-3.108 2.145m-1.196-9.49c-.397.395-2.124.281-2.76.202m2.76-.202c.396-.396.408-2.328.328-2.963m-.328 2.963c-1.021-1.769-5.081-4.59-9.11-1.769C3.582 4.56 3.308 5.42 2.999 5.995" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateRight06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateSquareIcon],svg[hugeicons-rotate-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.667 3.87C9.998 2.623 10.923 2 12 2c1.497 0 2.7 1.204 5.11 3.613l1.277 1.277C20.796 9.3 22 10.503 22 12s-1.204 2.7-3.613 5.11l-1.277 1.277C14.7 20.796 13.497 22 12 22s-2.7-1.204-5.11-3.613L5.613 17.11C3.204 14.7 2 13.497 2 12c0-1.109.874-2.271 2.306-3.78c.706-.743 1.06-1.115.93-1.417S4.598 6.5 3.585 6.5H2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateTopLeftIcon],svg[hugeicons-rotate-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15c0 3.3 0 4.95 1.025 5.975S6.7 22 10 22s4.95 0 5.975-1.025S17 18.3 17 15s0-4.95-1.025-5.975S13.3 8 10 8S5.05 8 4.025 9.025S3 11.7 3 15M14.42 2l-1.346 1.11C12.358 3.701 12 3.996 12 4.364h1c3.771 0 5.657 0 6.828 1.171S21 8.592 21 12.364V13" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateTopLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateTopRightIcon],svg[hugeicons-rotate-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 15c0 3.3 0 4.95 1.025 5.975S10.7 22 14 22s4.95 0 5.975-1.025S21 18.3 21 15s0-4.95-1.025-5.975S17.3 8 14 8S9.05 8 8.025 9.025S7 11.7 7 15M9.58 2l1.346 1.11c.716.591 1.074.886 1.074 1.254h-1c-3.771 0-5.657 0-6.828 1.171S3 8.592 3 12.364V13" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateTopRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoute01Icon],svg[hugeicons-route-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="18" cy="5" r="3"></svg:circle><svg:circle cx="6" cy="19" r="3"></svg:circle><svg:path d="M12 5H8.5a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 1 0 7H12"></svg:path></svg:g>`,
})
export class HugeiconsRoute01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoute02Icon],svg[hugeicons-route-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.719 10.715a1.044 1.044 0 0 1-1.437 0c-1.765-1.683-4.13-3.564-2.977-6.294C14.929 2.945 16.425 2 18 2s3.072.945 3.695 2.42c1.152 2.728-1.207 4.617-2.977 6.295M18 6h.009"></svg:path><svg:circle cx="5" cy="19" r="3"></svg:circle><svg:path d="M11 7H9.5C7.567 7 6 8.343 6 10s1.567 3 3.5 3h3c1.933 0 3.5 1.343 3.5 3s-1.567 3-3.5 3H11"></svg:path></svg:g>`,
})
export class HugeiconsRoute02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoute03Icon],svg[hugeicons-route-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 2c2.165 0 4 1.815 4 4.017c0 2.236-1.865 3.806-3.588 4.873a.83.83 0 0 1-.824 0C15.868 9.814 14 8.262 14 6.017C14 3.815 15.835 2 18 2m0 4h.009"></svg:path><svg:circle cx="5" cy="19" r="3"></svg:circle><svg:path d="M11 7H9.5C7.567 7 6 8.343 6 10s1.567 3 3.5 3h3c1.933 0 3.5 1.343 3.5 3s-1.567 3-3.5 3H11"></svg:path></svg:g>`,
})
export class HugeiconsRoute03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRouteBlockIcon],svg[hugeicons-route-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m15 2l6 6m0-6l-6 6"></svg:path><svg:circle cx="6" cy="19" r="3"></svg:circle><svg:path d="M12 5H8.5a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 1 0 7H12"></svg:path></svg:g>`,
})
export class HugeiconsRouteBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRouterIcon],svg[hugeicons-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 22h-11c-1.875 0-2.812 0-3.47-.53a2.7 2.7 0 0 1-.553-.615C2 20.125 2 19.083 2 17s0-3.125.477-3.855q.233-.356.554-.614C3.688 12 4.625 12 6.5 12h11c1.875 0 2.812 0 3.47.53c.212.172.398.38.553.615C22 13.875 22 14.917 22 17s0 3.125-.477 3.855q-.234.356-.553.614C20.312 22 19.375 22 17.5 22m-5-13h.009M17 3.952C15.848 2.746 14.257 2 12.5 2S9.152 2.746 8 3.952m2.25 2.356a3.1 3.1 0 0 1 2.25-.976c.879 0 1.674.373 2.25.976M18 17h.009M14 17h.009M6 17h4" color="currentColor"></svg:path>`,
})
export class HugeiconsRouterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRouter01Icon],svg[hugeicons-router-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 21H6c-1.886 0-2.828 0-3.414-.586S2 18.886 2 17s0-2.828.586-3.414S4.114 13 6 13h12c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21M8 3.478C9.149 2.543 10.52 2 11.995 2c1.478 0 2.854.547 4.005 1.487M14.174 6a4.1 4.1 0 0 0-2.18-.64a4.1 4.1 0 0 0-2.17.634M12 9h.006M18 17h.009M14 17h.009M6 17h4" color="currentColor"></svg:path>`,
})
export class HugeiconsRouter01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRouter02Icon],svg[hugeicons-router-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 22H6c-1.886 0-2.828 0-3.414-.586S2 19.886 2 18s0-2.828.586-3.414S4.114 14 6 14h12c1.886 0 2.828 0 3.414.586S22 16.114 22 18s0 2.828-.586 3.414S19.886 22 18 22m-9-8V6m4.991 12H14m-4.004 0h.008M6 18h.009m-2.531-8C2.543 8.851 2 7.48 2 6.005C2 4.527 2.547 3.151 3.487 2M6 3.826a4.1 4.1 0 0 0-.64 2.18a4.1 4.1 0 0 0 .634 2.17m3.002-2.179h.006" color="currentColor"></svg:path>`,
})
export class HugeiconsRouter02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRowDeleteIcon],svg[hugeicons-row-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 18.5c0 1.404 0 2.107-.38 2.611a2.1 2.1 0 0 1-.62.552c-.567.337-1.358.337-2.937.337H6.938c-1.58 0-2.37 0-2.938-.337a2.1 2.1 0 0 1-.62-.552C3 20.607 3 19.904 3 18.5s0-2.107.38-2.611c.163-.218.374-.406.62-.552C4.567 15 5.357 15 6.938 15h10.125c1.58 0 2.37 0 2.937.337c.246.146.457.334.62.552c.38.504.38 1.207.38 2.611M12.063 4H6.937C5.358 4 4.568 4 4 4.337a2.1 2.1 0 0 0-.62.552C3 5.393 3 6.096 3 7.5s0 2.107.38 2.611c.163.218.374.406.62.552C4.567 11 5.357 11 6.938 11h10.125c1.58 0 2.37 0 2.937-.337M21 8l-6-6m6 0l-6 6" color="currentColor"></svg:path>`,
})
export class HugeiconsRowDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRowInsertIcon],svg[hugeicons-row-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C8.393 3 9.096 3 10.5 3h8c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C22 4.393 22 5.096 22 6.5s0 2.107-.337 2.611a2 2 0 0 1-.552.552C20.607 10 19.904 10 18.5 10h-8c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C7 8.607 7 7.904 7 6.5m0 11c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C8.393 14 9.096 14 10.5 14h8c1.404 0 2.107 0 2.611.337c.218.146.406.334.552.552c.337.504.337 1.207.337 2.611s0 2.107-.337 2.611a2 2 0 0 1-.552.552C20.607 21 19.904 21 18.5 21h-8c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C7 19.607 7 18.904 7 17.5M2 9l1.533 1.586c.645.666.967 1 .967 1.414s-.322.748-.967 1.414L2 15" color="currentColor"></svg:path>`,
})
export class HugeiconsRowInsertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRssIcon],svg[hugeicons-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.992 20.5c.72 0 1-.004 1-.004c3.417-.025 5.3-.186 6.542-1.24C22 18.01 22 16.005 22 12s0-6.01-1.466-7.255S16.71 3.5 11.991 3.5s-7.078 0-8.544 1.245C2.324 5.698 2.062 7.097 2 9.5m.982 10h.01"></svg:path><svg:path d="M2 15.735c2.493 0 4.77 2.265 4.77 4.765m3.23 0c0-4.5-4.005-8-7.955-8"></svg:path></svg:g>`,
})
export class HugeiconsRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRssConnected01Icon],svg[hugeicons-rss-connected-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.992 21c.72 0 1-.004 1-.004c3.417-.025 5.3-.186 6.542-1.24C22 18.51 22 16.505 22 12.5c0-1.39 0-2.54-.061-3.5M11.99 4C7.272 4 4.913 4 3.447 5.245C2.324 6.198 2.062 7.597 2 10m12-3s1 0 2 2c0 0 3.177-5 6-6M2.982 20h.01M2 16.235c2.493 0 4.77 2.265 4.77 4.765M10 21c0-4.5-4.005-8-7.955-8" color="currentColor"></svg:path>`,
})
export class HugeiconsRssConnected01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRssConnected02Icon],svg[hugeicons-rss-connected-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path fill="currentColor" d="M15.656 6.879a.75.75 0 0 0-.646 1.353zm.788 1.788l-.646.38a.75.75 0 0 0 1.323-.056zm2.578-2.118a.75.75 0 0 0-.71-1.32zM21.25 7A4.25 4.25 0 0 1 17 11.25v1.5A5.75 5.75 0 0 0 22.75 7zM17 11.25A4.25 4.25 0 0 1 12.75 7h-1.5A5.75 5.75 0 0 0 17 12.75zM12.75 7A4.25 4.25 0 0 1 17 2.75v-1.5A5.75 5.75 0 0 0 11.25 7zM17 2.75A4.25 4.25 0 0 1 21.25 7h1.5A5.75 5.75 0 0 0 17 1.25zm-1.667 4.806l-.323.676h-.002l-.001-.001l-.003-.002h-.002l.004.001l.042.025c.042.026.11.07.19.136c.162.131.376.343.56.656l1.293-.761a3.9 3.9 0 0 0-.909-1.06a3.3 3.3 0 0 0-.502-.336l-.02-.01h-.002l-.001-.001zm1.111 1.11l.677.325l.001-.003l.007-.014l.03-.06q.042-.083.122-.231c.107-.197.262-.464.45-.75c.398-.603.868-1.156 1.291-1.384l-.71-1.32c-.779.418-1.42 1.254-1.833 1.878a12 12 0 0 0-.696 1.204l-.01.022l-.003.006l-.001.002v.001zm6.306 4.828a.75.75 0 0 0-1.5 0zm-2.216 7.26l.486.572zM3.447 6.234l-.486-.572zm9.545 15.016a.75.75 0 0 0 0 1.5zm1 .746l-.005-.75h-.006zM1.25 10.973a.75.75 0 0 0 1.5.038zM9.26 5.75a.75.75 0 0 0-.023-1.5zm11.99 7.744c0 2.03-.002 3.463-.174 4.55c-.166 1.05-.477 1.67-1.027 2.139l.97 1.143c.916-.778 1.338-1.782 1.539-3.048c.194-1.23.192-2.804.192-4.784zm-8.258 9.256l.954-.004h.058l-.011-.75l-.012-.75h-.052l-.172.002l-.765.002zm1.006-.005c1.706-.012 3.085-.058 4.204-.244c1.131-.188 2.058-.53 2.818-1.175l-.971-1.143c-.482.41-1.119.676-2.093.839c-.988.164-2.258.211-3.969.224zM2.75 11.012c.062-2.42.34-3.49 1.183-4.206L2.96 5.662c-1.402 1.191-1.65 2.92-1.71 5.31zm6.487-6.76c-2.906.044-4.89.233-6.276 1.41l.972 1.144c.912-.776 2.325-1.009 5.327-1.055z"></svg:path><svg:path stroke="currentColor" d="M2.982 21h.01M2 17.235c2.493 0 4.77 2.265 4.77 4.765M10 22c0-4.5-4.005-8-7.955-8"></svg:path></svg:g>`,
})
export class HugeiconsRssConnected02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRssErrorIcon],svg[hugeicons-rss-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="17" cy="7" r="5" stroke="currentColor"></svg:circle><svg:path fill="currentColor" d="M22.75 13.494a.75.75 0 0 0-1.5 0zm-2.216 7.26l.486.572zM3.447 6.234l-.486-.572zm9.545 15.016a.75.75 0 0 0 0 1.5zm1 .746l-.005-.75h-.006zM1.25 10.973a.75.75 0 0 0 1.5.038zM9.26 5.75a.75.75 0 0 0-.023-1.5zm11.99 7.744c0 2.03-.002 3.463-.174 4.55c-.166 1.05-.477 1.67-1.027 2.139l.97 1.143c.916-.778 1.338-1.782 1.539-3.048c.194-1.23.192-2.804.192-4.784zm-8.258 9.256l.954-.004h.058l-.011-.75l-.012-.75h-.052l-.172.002l-.765.002zm1.006-.005c1.706-.012 3.085-.058 4.204-.244c1.131-.188 2.058-.53 2.818-1.175l-.971-1.143c-.482.41-1.119.676-2.093.839c-.988.164-2.258.211-3.969.224zM2.75 11.012c.062-2.42.34-3.49 1.183-4.206L2.96 5.662c-1.402 1.191-1.65 2.92-1.71 5.31zm6.487-6.76c-2.906.044-4.89.233-6.276 1.41l.972 1.144c.912-.776 2.325-1.009 5.327-1.055z"></svg:path><svg:path stroke="currentColor" d="M2.982 21h.01M17 9h.009M17 6.5v-2M2 17.235c2.493 0 4.77 2.265 4.77 4.765M10 22c0-4.5-4.005-8-7.955-8"></svg:path></svg:g>`,
})
export class HugeiconsRssErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRssLockedIcon],svg[hugeicons-rss-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path stroke="currentColor" d="M12.992 22c.72 0 1-.004 1-.004c3.417-.025 5.3-.186 6.542-1.24C22 19.51 22 17.505 22 13.5M11.99 5C7.273 5 4.914 5 3.448 6.245C2.324 7.198 2.062 8.597 2 11"></svg:path><svg:path fill="currentColor" d="m16.08 10.857l-.304.686zm-.947-1.014l-.7.27zm6.734 0l.7.27zm-.947 1.014l.304.686zm0-5.34l.304-.685zm.947 1.015l.7-.27zM16.08 5.518l-.304-.686zm-.947 1.014l-.7-.27zM16 5.375a.75.75 0 0 0 1.5 0zm3.5 0a.75.75 0 0 0 1.5 0zm-1.875.75h1.75v-1.5h-1.75zm1.75 4.125h-1.75v1.5h1.75zm-1.75 0c-.419 0-.692 0-.903-.016c-.202-.015-.288-.04-.338-.062l-.608 1.37c.272.122.551.167.837.188c.277.02.615.02 1.012.02zM14.25 8.188c0 .427 0 .782.018 1.073c.02.297.06.578.166.852l1.399-.54c-.028-.072-.053-.18-.068-.407a17 17 0 0 1-.015-.979zm2.134 1.984a1.07 1.07 0 0 1-.551-.6l-1.4.541a2.57 2.57 0 0 0 1.343 1.43zm4.866-1.985c0 .447 0 .747-.015.979c-.014.226-.04.335-.068.406l1.4.541c.105-.274.146-.555.165-.852c.018-.29.018-.646.018-1.073zm-1.875 3.563c.397 0 .735 0 1.012-.02c.286-.02.565-.066.837-.187l-.608-1.371c-.05.022-.136.047-.338.062c-.21.015-.484.016-.903.016zm1.792-2.178c-.11.285-.314.494-.552.6l.609 1.37a2.57 2.57 0 0 0 1.342-1.429zm-1.792-3.447c.419 0 .692 0 .903.016c.202.015.288.04.338.062l.608-1.37a2.5 2.5 0 0 0-.837-.188c-.277-.02-.615-.02-1.012-.02zm3.375 2.063c0-.428 0-.783-.018-1.074a2.8 2.8 0 0 0-.166-.852l-1.399.54c.028.072.053.18.068.407c.015.232.015.532.015.979zm-2.134-1.985c.237.106.441.315.551.6l1.4-.541a2.57 2.57 0 0 0-1.343-1.43zm-2.991-1.578c-.397 0-.735 0-1.012.02c-.286.02-.565.066-.837.187l.608 1.371c.05-.022.136-.047.338-.062c.21-.016.484-.016.903-.016zM15.75 8.188c0-.447 0-.747.015-.979c.014-.226.04-.335.068-.406l-1.4-.541a2.8 2.8 0 0 0-.165.852c-.018.29-.018.646-.018 1.074zm.026-3.356a2.57 2.57 0 0 0-1.342 1.43l1.399.54a1.07 1.07 0 0 1 .551-.599zm1.724.543V3.688H16v1.687zm2-1.687v1.687H21V3.688zm-1-.938c.578 0 1 .445 1 .938H21c0-1.372-1.145-2.438-2.5-2.438zm-1 .938c0-.493.422-.938 1-.938v-1.5c-1.355 0-2.5 1.066-2.5 2.438z"></svg:path><svg:path stroke="currentColor" d="M2.982 21h.01M2 17.235c2.493 0 4.77 2.265 4.77 4.765M10 22c0-4.5-4.005-8-7.955-8"></svg:path></svg:g>`,
})
export class HugeiconsRssLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRssUnlockedIcon],svg[hugeicons-rss-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.992 22c.72 0 1-.004 1-.004c3.417-.025 5.3-.186 6.542-1.24C22 19.51 22 17.505 22 13.5M11.99 5C7.273 5 4.914 5 3.448 6.245C2.324 7.198 2.062 8.597 2 11m14.531-5.64V3.952A1.96 1.96 0 0 1 18.5 2c.489 0 .936.177 1.28.469M17.844 11h1.312c1.022 0 1.532 0 1.919-.205c.305-.162.555-.41.718-.712C22 9.699 22 9.193 22 8.18s0-1.52-.207-1.903a1.74 1.74 0 0 0-.718-.712c-.387-.205-.897-.205-1.919-.205h-1.312c-1.022 0-1.532 0-1.919.205c-.305.162-.555.41-.718.712C15 6.661 15 7.167 15 8.18s0 1.52.207 1.903c.163.302.413.55.718.712c.387.205.897.205 1.919.205M2.982 21h.01M2 17.235c2.493 0 4.77 2.265 4.77 4.765M10 22c0-4.5-4.005-8-7.955-8" color="currentColor"></svg:path>`,
})
export class HugeiconsRssUnlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRubElHizbIcon],svg[hugeicons-rub-el-hizb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.5 6.643c0-1.01 0-1.515.314-1.83c.314-.313.819-.313 1.829-.313h10.714c1.01 0 1.515 0 1.83.314c.313.314.313.819.313 1.829v10.714c0 1.01 0 1.515-.314 1.83c-.314.313-.819.313-1.829.313H6.643c-1.01 0-1.515 0-1.83-.314c-.313-.314-.313-.819-.313-1.829z"></svg:path><svg:path d="M10.509 3.054C11.212 2.351 11.563 2 12 2s.788.351 1.491 1.054l7.455 7.455C21.649 11.212 22 11.563 22 12s-.351.788-1.054 1.491l-7.455 7.455C12.788 21.649 12.437 22 12 22s-.788-.351-1.491-1.054L3.054 13.49C2.351 12.788 2 12.437 2 12s.351-.788 1.054-1.491z"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class HugeiconsRubElHizbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRubberDuckIcon],svg[hugeicons-rubber-duck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.004 22.076h-4.01c-3.44 0-6.24-2.8-6.24-6.25c0-1.99.96-3.85 2.52-5.02c-.24-.23-.46-.48-.65-.75c-2.13-.15-3.13-1.41-3.36-2.6c-.07-.36.13-.71.47-.84l2.29-.87a4.748 4.748 0 0 1 9.23 1.57c0 .79-.2 1.57-.56 2.25h4.29c1.1 0 1.27-1.1 1.27-1.75c0-.3.18-.58.46-.69s.6-.05.82.16c3.72 3.72 3.21 7.95 3.18 8.13c0 3.94-3.9 6.65-9.71 6.65zm-7.05-12.73c.28.35.63.64 1.03.85c.25.13.41.39.4.68c0 .28-.17.54-.43.66c-1.64.79-2.7 2.47-2.7 4.29c0 2.62 2.13 4.75 4.74 4.75h4.01c4.92 0 8.22-2.11 8.22-5.25l.002-.017c.03-.321.293-3.053-1.782-5.833c-.44 1.01-1.31 1.6-2.46 1.6h-5.83c-.31 0-.59-.19-.7-.48a.75.75 0 0 1 .21-.83c.7-.62 1.1-1.5 1.1-2.44c0-1.79-1.46-3.25-3.25-3.25c-1.38 0-2.59.86-3.05 2.13l.38.56c.54.78.57 1.78.12 2.58zm-2.98-1.59c.32.46.9.74 1.7.8c.14-.3.12-.67-.08-.95l-.25-.37zm4.53-.67c-.41 0-.75-.34-.75-.75s.34-.75.75-.75s.75.33.75.75s-.34.76-.75.76zm3.5 11.99h1.5c2.63 0 5.75-3.12 5.75-5.75c0-.41-.34-.75-.75-.75h-6.5c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25m-1.75-3.25c0-.96.79-1.75 1.75-1.75h5.62c-.52 1.66-2.57 3.5-4.12 3.5h-1.5c-.96 0-1.75-.79-1.75-1.75" color="currentColor"></svg:path>`,
})
export class HugeiconsRubberDuckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRubiksCubeIcon],svg[hugeicons-rubiks-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.352 3.953l-1.7-.74c-1.68-.74-2.61-1.15-3.66-1.15s-1.98.41-3.66 1.15l-1.7.74c-2.92 1.28-4.39 1.92-4.39 3.36v11c0 1.44 1.47 2.08 4.39 3.36l1.7.74c1.68.74 2.61 1.15 3.66 1.15s1.98-.41 3.66-1.15l1.71-.74c2.92-1.28 4.39-1.92 4.39-3.36v-11c0-1.44-1.47-2.08-4.39-3.36zm2.89 8.9l-3 1.5v-3.63l.11-.05c1.22-.54 2.18-.96 2.89-1.38zm-16.5-3.56c.71.42 1.67.84 2.89 1.38l.11.05v3.94l-3-1.33zm8.25 1.77c-.7 0-1.4-.3-3.06-1.03l-.14-.06l3.2-1.68l3.2 1.68l-.14.06c-1.65.73-2.35 1.03-3.05 1.03zm-3.75.31l.09.04c1.28.56 2.12.94 2.91 1.08v4.17l-3-1.33zm4.5 1.12c.79-.15 1.63-.52 2.91-1.08l.09-.04v3.73l-3 1.5zm7.5-5.18c0 .44-1.58 1.15-3.31 1.9c-.03-.02-.06-.05-.09-.07l-3.24-1.7l3.62-1.91c1.61.71 3.02 1.36 3.02 1.78m-11.3-2.72c1.65-.73 2.35-1.03 3.05-1.03s1.4.3 3.06 1.03l.41.18l-3.47 1.83l-3.47-1.83l.41-.18zm-2.18.94l3.62 1.91l-3.24 1.7s-.06.04-.09.07c-1.72-.76-3.31-1.46-3.31-1.9c0-.41 1.41-1.07 3.02-1.78m-3.02 12.78v-3.35l3 1.33v3.78c-1.6-.7-3-1.35-3-1.77zm4.5 2.42v-3.77l3 1.33v3.65c-.54-.14-1.21-.43-2.31-.92l-.69-.3zm6.8.3c-1.09.48-1.77.77-2.3.92v-3.68l3-1.5v3.96zm2.2-.95v-4.05l3-1.5v3.79c0 .41-1.4 1.06-3 1.77z" color="currentColor"></svg:path>`,
})
export class HugeiconsRubiksCubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRukuIcon],svg[hugeicons-ruku-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m15.5 7.762l2.388.227c1.399.132 2.612-.908 2.612-2.24c0-1.242-1.064-2.249-2.375-2.249H15.5"></svg:path><svg:path d="m12.091 6.5l-2.07 3.883v4.515m0 0V18.5c-3.236 0-5.174-.667-6.521-1V9.61c0-3.927 3.217-7.11 7.185-7.11c1.563 0 2.745.19 3.572.42c.931.257 1.475 1.096 1.664 2.034a4 4 0 0 1-.128 2.054zM8.5 18.5v3m0 0h-1c-.943 0-1.414 0-1.707-.293S5.5 20.443 5.5 19.5v-1m3 3H10"></svg:path></svg:g>`,
})
export class HugeiconsRukuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRulerIcon],svg[hugeicons-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.5 10.5l2 2M14 14l2 2m-5.5 1.5l2 2M10.536 4.678c1.364-1.365 2.047-2.047 2.808-2.363a4.14 4.14 0 0 1 3.17 0c.761.316 1.444.998 2.808 2.363c1.365 1.364 2.047 2.047 2.363 2.808a4.14 4.14 0 0 1 0 3.17c-.316.761-.998 1.444-2.363 2.808l-5.857 5.858c-1.365 1.365-2.048 2.047-2.809 2.363a4.14 4.14 0 0 1-3.17 0c-.761-.316-1.444-.998-2.808-2.363c-1.365-1.364-2.047-2.047-2.363-2.808a4.14 4.14 0 0 1 0-3.17c.316-.761.998-1.444 2.363-2.808z" color="currentColor"></svg:path>`,
})
export class HugeiconsRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRunningShoesIcon],svg[hugeicons-running-shoes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.101 18H7.963c-2.934 0-4.4 0-5.295-1.117c-1.697-2.12.237-7.76 1.408-9.883c.397 2.4 4.486 2.333 5.975 2c-.992-1.999.332-2.666.994-3h.002c2.953 3.5 9.268 5.404 10.815 9.219c.669 1.648-1.236 2.781-2.76 2.781"></svg:path><svg:path d="M2 14c4.165 1.43 6.731 1.844 10.022.804c.997-.315 1.495-.473 1.806-.452c.31.022.945.317 2.213.909c1.583.738 3.756 1.163 5.959.097M13.5 9.5L15 8m.5 3L17 9.5"></svg:path></svg:g>`,
})
export class HugeiconsRunningShoesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSad01Icon],svg[hugeicons-sad-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8 17a5 5 0 0 1 4-2c1.636 0 3.088.786 4 2M8.009 9H8m8 0h-.009"></svg:path></svg:g>`,
})
export class HugeiconsSad01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSad02Icon],svg[hugeicons-sad-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.5 21.685A10 10 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12q0 .507.05 1"></svg:path><svg:path d="m5.021 14l-2.16 2.083a2.835 2.835 0 0 0 .02 4.088c1.18 1.118 3.08 1.099 4.24-.02a2.82 2.82 0 0 0 0-4.088zm2.988-5.558H8m8 0h-.009M15 16a4.98 4.98 0 0 0-3-1c-.91 0-1.765.244-2.5.67"></svg:path></svg:g>`,
})
export class HugeiconsSad02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSadDizzyIcon],svg[hugeicons-sad-dizzy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M10 11L8.5 9.5m0 0L7 8m1.5 1.5L7 11m1.5-1.5L10 8m7 3l-1.5-1.5m0 0L14 8m1.5 1.5L14 11m1.5-1.5L17 8m-9 9a5 5 0 0 1 4-2c1.636 0 3.088.786 4 2"></svg:path></svg:g>`,
})
export class HugeiconsSadDizzyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSafariIcon],svg[hugeicons-safari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.721 13.721c.383-.383.602-.893 1.04-1.914l1.556-3.632c.157-.365.235-.547.145-.637s-.272-.012-.637.145l-3.632 1.556c-1.021.438-1.531.657-1.914 1.04m3.442 3.442c-.383.383-.893.602-1.914 1.04l-3.632 1.556c-.365.157-.547.235-.637.145s-.012-.272.145-.637l1.556-3.632c.438-1.021.657-1.531 1.04-1.914m3.442 3.442L10.28 10.28"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 2v1.5M12 22v-1.5M22 12h-1.5M2 12h1.5"></svg:path></svg:g>`,
})
export class HugeiconsSafariIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSafeIcon],svg[hugeicons-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 17l.21.21c.369.369.553.553.776.54c.223-.012.386-.215.712-.623L19 15.5m-6-.046v.386c0 1.202 0 1.803.148 2.353a4.36 4.36 0 0 0 1.014 1.827c.39.422.906.75 1.937 1.407c.461.294.692.441.938.51c.303.084.624.084.927 0c.245-.069.476-.216.937-.51c1.031-.657 1.547-.985 1.937-1.407a4.36 4.36 0 0 0 1.014-1.827c.148-.55.148-1.15.148-2.353v-.386c0-.748 0-1.122-.142-1.438a1.7 1.7 0 0 0-.369-.52c-.253-.24-.612-.372-1.33-.635l-1.474-.54c-.586-.214-.879-.321-1.185-.321s-.599.107-1.185.322l-1.474.54c-.718.262-1.077.393-1.33.634a1.7 1.7 0 0 0-.37.52c-.141.316-.141.69-.141 1.438m3.171-7.544V9.5m0-1.59c0-.754.634-1.365 1.415-1.365c.78 0 1.414.611 1.414 1.364V9.5m-2.829-1.59V5.181c0-.753-.633-1.364-1.414-1.364s-1.415.61-1.415 1.364m0 0V9.5m0-4.318V3.364C13.342 2.61 12.71 2 11.928 2s-1.414.61-1.414 1.364V6.09m0 0c0-.753-.634-1.364-1.415-1.364c-.78 0-1.414.61-1.414 1.364v6.547c0 .416-.533.613-.823.305l-2.29-2.439a1.415 1.415 0 0 0-1.615-.382c-1.008.417-1.245 1.888-.59 2.736c1.122 1.452 2.27 3.433 3.198 5.18C6.825 20.41 9.31 22 12.072 22M10.514 6.09V9.5" color="currentColor"></svg:path>`,
})
export class HugeiconsSafeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSafeDelivery01Icon],svg[hugeicons-safe-delivery-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767c0 .04-.027.074-.066.085l-2.541.703a1.95 1.95 0 0 1-1.368-.124L6.842 16.75"></svg:path><svg:path d="m13 16.5l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a2 2 0 0 1-1.568.187L4 20.02M15 12h-2c-1.886 0-2.828 0-3.414-.586S9 9.886 9 8V6c0-1.886 0-2.828.586-3.414S11.114 2 13 2h2c1.886 0 2.828 0 3.414.586S19 4.114 19 6v2c0 1.886 0 2.828-.586 3.414S16.886 12 15 12m-2-7h2"></svg:path></svg:g>`,
})
export class HugeiconsSafeDelivery01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSafeDelivery02Icon],svg[hugeicons-safe-delivery-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2C7.582 2 4 5.134 4 9h16c0-3.866-3.582-7-8-7M8 17.333C8 15.403 8.345 15 10 15h4c1.655 0 2 .403 2 2.333v2.334c0 1.93-.345 2.333-2 2.333h-4c-1.655 0-2-.403-2-2.333zm4.008.167h-.009M4 9l8 6l8-6" color="currentColor"></svg:path>`,
})
export class HugeiconsSafeDelivery02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSafetyPin01Icon],svg[hugeicons-safety-pin-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.546 3.794L12.293 5.41c-1.071 1.383 1.06 3.057 2.147 1.666l.374-.48c.693-.888 1.998-.978 2.783-.193s.694 2.09-.193 2.783l-.48.374c-1.391 1.087.283 3.218 1.666 2.147l1.616-1.253c2.226-1.725 2.409-5.031.39-7.05s-5.325-1.836-7.05.39"></svg:path><svg:circle cx="4.5" cy="19.5" r="2.5"></svg:circle><svg:path d="M3 17.41L12 7M6.59 21L17 12"></svg:path></svg:g>`,
})
export class HugeiconsSafetyPin01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSafetyPin02Icon],svg[hugeicons-safety-pin-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.546 3.794L12.293 5.41c-1.071 1.383 1.06 3.057 2.147 1.666l.374-.48c.693-.888 1.998-.978 2.783-.193s.694 2.09-.193 2.783l-.48.374c-1.391 1.087.283 3.218 1.666 2.147l1.616-1.253c2.226-1.725 2.409-5.031.39-7.05s-5.325-1.836-7.05.39"></svg:path><svg:circle cx="4.5" cy="19.5" r="2.5"></svg:circle><svg:path d="M3 17.41L7 5m-.41 16L17 12"></svg:path></svg:g>`,
})
export class HugeiconsSafetyPin02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSailboatCoastalIcon],svg[hugeicons-sailboat-coastal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18c-1.406-.937-2.195-2.035-2.606-3.052c-.288-.71-.432-1.066-.135-1.507C3.557 13 4.038 13 5 13h14c.962 0 1.443 0 1.74.441c.298.441.154.797-.134 1.507c-.412 1.017-1.2 2.114-2.606 3.052M15.842 3.465L17.91 6.31c.869 1.194 1.303 1.791.985 2.24S17.721 9 16.008 9h-5.38c-2.186 0-3.28 0-3.567-.539c-.288-.538.461-1.182 1.96-2.47l3.31-2.845c.925-.794 1.388-1.192 1.936-1.142c.549.05.89.52 1.575 1.46M14 13V2M2 21h20" color="currentColor"></svg:path>`,
})
export class HugeiconsSailboatCoastalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSailboatOffshoreIcon],svg[hugeicons-sailboat-offshore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 19c-1.406-.937-2.195-2.035-2.606-3.052c-.288-.71-.432-1.066-.135-1.507C3.557 14 4.038 14 5 14h14c.962 0 1.443 0 1.74.441c.298.441.154.797-.134 1.507c-.412 1.017-1.2 2.114-2.606 3.052M15.105 3.674l1.897 3.251c.796 1.365 1.194 2.048.903 2.561c-.292.514-1.077.514-2.648.514h-4.931c-2.004 0-3.007 0-3.27-.616c-.264-.615.423-1.35 1.796-2.823l3.035-3.25c.848-.91 1.272-1.363 1.774-1.306c.503.057.817.594 1.444 1.669M14 14V3M2 21.608a2.54 2.54 0 0 0 2.652 0c1.306-.81 3.003-.81 4.328 0c0 .019.02.019.02.019c.8.497 1.852.497 2.652 0a4.19 4.19 0 0 1 4.348 0c.8.497 1.833.479 2.652-.019A4.14 4.14 0 0 1 22 21.173" color="currentColor"></svg:path>`,
})
export class HugeiconsSailboatOffshoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSakuraIcon],svg[hugeicons-sakura-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M12 18.088q-.172.28-.377.562C10.309 20.447 8.496 21.504 7 21.5l-.302-2.075l-2.078.356c-.466-1.413.029-3.514 1.342-5.312C3.935 13.766 2.442 12.397 2 11l1.86-.931l-.966-1.866c1.187-.883 3.526-.99 5.615-.299c0-2.404.827-4.534 2.03-5.404L12 4l1.46-1.5c1.204.87 2.042 3 2.03 5.404c2.09-.69 4.429-.584 5.616.299l-.965 1.866L22 11c-.442 1.396-1.935 2.765-3.962 3.47c1.313 1.797 1.808 3.898 1.342 5.311l-2.078-.356L17 21.5c-1.496.004-3.309-1.053-4.623-2.85a8 8 0 0 1-.377-.562"></svg:path></svg:g>`,
})
export class HugeiconsSakuraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSalahIcon],svg[hugeicons-salah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 18c-.287-.76-.544-1.863-1.5-2.5c-1.5-1-3-1.5-3-3S12.5 8 12.5 8l.695-.732C14.894 8.025 16.5 5.881 16.5 4.5a2.5 2.5 0 0 0-5 0c0 1-.8 1.6-2 2C8 7 6 8 6 13c0 4 1.833 5.333 2.5 6c-3.2 0-4 2-4 3h13a2 2 0 1 0 0-4m0 0c-7.728 0-8.44-4.667-8-7" color="currentColor"></svg:path>`,
})
export class HugeiconsSalahIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSalahTimeIcon],svg[hugeicons-salah-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.01 5.002C13.742 3.187 11.385 2 9.004 2A7.004 7.004 0 0 0 2 9.003c0 3.7 2.87 6.746 6.504 7.003"></svg:path><svg:path d="M9.005 7.002v2.501l-1.501 1m5.111 5.046c-1.361-1.656-1.594-3.32.354-5.339c2.046-1.825 3.224-2.688 3.538-3.208c.314.52 1.511 1.383 3.557 3.208c1.854 1.654 1.738 3.682.377 5.339m-7.826 0h-.523m.523 0h7.826m0 0h.46m-9.88 0h1.071m0 0v5.544c.04.668 0 .98 1.211.892h3.185m4.413-6.436H22m-1.1 0v5.646c.117.907-.605.748-1.067.79h-3.346m0 0l.035-2.134"></svg:path></svg:g>`,
})
export class HugeiconsSalahTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaleTag01Icon],svg[hugeicons-sale-tag-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.986 3.7c2.797 3.095 7.41-3.584 10.14-1.16c1.57 1.394 1.073 4.474-.965 6.48m-2.371 4.964c.018-.335.111-.947-.397-1.412m0 0a1.9 1.9 0 0 0-.666-.377c-1.048-.37-2.336.867-1.425 2c.49.608.867.795.832 1.486c-.025.486-.503.994-1.132 1.188c-.547.168-1.15-.055-1.531-.481c-.466-.52-.42-1.011-.423-1.225m4.345-2.59l.574-.575m-4.455 4.455l-.545.545"></svg:path><svg:path d="M18.273 6.633c.925.178 1.133.762 1.409 2.384c.249 1.46.319 3.213.319 3.96a1.32 1.32 0 0 1-.319.74c-1.935 2.028-5.776 5.858-7.714 7.76c-.76.68-1.908.695-2.716.071c-1.653-1.487-3.241-3.168-4.797-4.686c-.625-.805-.61-1.95.07-2.708c2.051-2.127 5.762-5.768 7.856-7.78c.21-.18.468-.292.743-.317c.47 0 1.276.063 2.062.108"></svg:path></svg:g>`,
})
export class HugeiconsSaleTag01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaleTag02Icon],svg[hugeicons-sale-tag-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path><svg:path d="M2.774 11.144c-1.003 1.12-1.024 2.81-.104 4a34 34 0 0 0 6.186 6.186c1.19.92 2.88.899 4-.104a92 92 0 0 0 8.516-8.698a1.95 1.95 0 0 0 .47-1.094c.164-1.796.503-6.97-.902-8.374s-6.578-1.066-8.374-.901a1.95 1.95 0 0 0-1.094.47a92 92 0 0 0-8.698 8.515"></svg:path><svg:path d="M13.788 12.367c.022-.402.134-1.135-.476-1.693m0 0a2.3 2.3 0 0 0-.797-.451c-1.257-.443-2.8 1.039-1.708 2.396c.587.73 1.04.954.996 1.782c-.03.582-.602 1.191-1.356 1.423c-.655.202-1.378-.065-1.835-.576c-.559-.624-.502-1.212-.507-1.468m5.208-3.106L14 9.986m-5.34 5.34l-.653.653"></svg:path></svg:g>`,
})
export class HugeiconsSaleTag02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSandalsIcon],svg[hugeicons-sandals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.5 18.3V5.814c0-1.587-.456-2.893-2.383-2.81c-1.608.069-3.116.893-4.312 1.89c-2.142 1.784-2.08 3.866-1.336 6.308l2.384 7.839C5.206 20.2 6.335 21 7.62 21c1.59 0 2.879-1.209 2.879-2.7m3.001 0V5.814c0-1.587.456-2.893 2.383-2.81c1.608.069 3.116.893 4.313 1.89c2.141 1.784 2.078 3.866 1.335 6.308l-2.384 7.839C18.794 20.2 17.665 21 16.38 21c-1.59 0-2.879-1.209-2.879-2.7"></svg:path><svg:path d="M3 13c0-1 .7-3.7 3.5-4.5m0 0c2.5.5 3.5 1.5 4 2m-4-2V7M21 13c0-1-.7-3.7-3.5-4.5m0 0c-2.5.5-3.5 1.5-4 2m4-2V7"></svg:path></svg:g>`,
})
export class HugeiconsSandalsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSatelliteIcon],svg[hugeicons-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9 22l-3-7l-3 7z"></svg:path><svg:path d="M18.192 13.335c1.293 1.293 1.94 1.94 1.786 2.938a3 3 0 0 1-.034.172c-.24.98-.9 1.254-2.216 1.8A9.928 9.928 0 0 1 4.756 5.271c.545-1.317.818-1.975 1.8-2.216c.045-.01.125-.027.17-.034c1-.153 1.646.493 2.939 1.786z"></svg:path><svg:circle cx="19" cy="4" r="2"></svg:circle><svg:path d="m12.5 7.133l5.213-1.604l-1.836 5"></svg:path></svg:g>`,
})
export class HugeiconsSatelliteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSatellite01Icon],svg[hugeicons-satellite-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.307 15.331c-3.521 3.521-9.173 3.577-12.694.056s-3.465-9.173.056-12.694m12.638 12.638c1.677-1.677.207-5.865-3.283-9.355S9.346 1.016 7.67 2.693m12.638 12.638c-1.677 1.677-5.866.207-9.355-3.282M7.669 2.693C5.992 4.37 7.462 8.56 10.952 12.05m0 0L14 9"></svg:path><svg:path d="m6.488 15l-1.737 2.488c-1.399 2.004-2.098 3.006-1.58 3.76C3.687 22 5.075 22 7.85 22h4.297c2.776 0 4.164 0 4.682-.753c.471-.686-.067-1.578-1.225-3.247"></svg:path></svg:g>`,
})
export class HugeiconsSatellite01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSatellite02Icon],svg[hugeicons-satellite-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.201 7.799a4.1 4.1 0 0 0 5.799 0L16.201 2a4.1 4.1 0 0 0 0 5.799M16 8l-1.5 1.5m.332 3.501c.602-.602.903-.903.903-1.277c0-.375-.3-.676-.903-1.278L13.555 9.17c-.602-.602-.903-.903-1.278-.903c-.374 0-.675.3-1.277.903l-4.206 4.206a2.71 2.71 0 1 0 3.832 3.832zm.637 3.855l1.387-1.387c.654-.654.981-.981 1.388-.981s.733.327 1.387.98l1.388 1.388c.654.654.981.981.981 1.388s-.327.733-.981 1.387L19.63 21.02c-.654.654-.98.981-1.387.981s-.734-.327-1.388-.981l-1.385-1.39c-.654-.654-.981-.98-.981-1.387s.327-.734.98-1.388M2.981 4.369L4.37 2.98c.653-.653.979-.98 1.386-.98s.734.327 1.388.981L8.53 4.37c.654.654.981.98.981 1.387s-.327.734-.98 1.388L7.143 8.53c-.654.654-.981.981-1.388.981s-.733-.327-1.387-.98L2.98 7.143C2.327 6.49 2 6.163 2 5.756s.327-.733.981-1.387M16 16l-2-2m-4-4L8 8" color="currentColor"></svg:path>`,
})
export class HugeiconsSatellite02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSatellite03Icon],svg[hugeicons-satellite-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.536 6.11a3.787 3.787 0 0 1 5.355 5.354l-2.142 2.143c-.86.86-1.291 1.29-1.812 1.373a1.6 1.6 0 0 1-.508 0c-.52-.082-.95-.513-1.812-1.373l-1.224-1.224c-.86-.861-1.29-1.291-1.373-1.812a1.6 1.6 0 0 1 0-.508c.082-.52.513-.951 1.373-1.812zM6.848 14c.12 1.57 1.57 3.008 3.152 3.13m-6.994-1.892c-.154 3.028 2.748 5.904 5.798 5.757M12.53 5.53l-1.596-1.663C10.356 3.29 10.066 3 9.707 3s-.648.29-1.226.867l-.614.614C7.29 5.059 7 5.348 7 5.707c0 .36.29.648.867 1.227l1.451 1.45m9.103 2.971l1.712 1.711c.578.579.867.868.867 1.227s-.29.648-.867 1.226l-.614.614c-.578.578-.867.867-1.226.867c-.36 0-.648-.29-1.227-.867l-1.555-1.555" color="currentColor"></svg:path>`,
})
export class HugeiconsSatellite03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaturnIcon],svg[hugeicons-saturn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.826 5.376c2.8-1.995 5.087-2.882 5.883-2.085c.797.796-.09 3.083-2.085 5.884m-13.248 5.65c-1.995 2.8-2.882 5.088-2.085 5.884c.796.797 3.083-.09 5.884-2.085m9.45-9.45c-1.133 1.59-2.622 3.345-4.364 5.087s-3.497 3.231-5.086 4.363m9.45-9.45A7.2 7.2 0 0 1 19.2 12a7.2 7.2 0 0 1-10.025 6.624M17.09 6.91A7.2 7.2 0 1 0 6.91 17.09" color="currentColor"></svg:path>`,
})
export class HugeiconsSaturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaturn01Icon],svg[hugeicons-saturn-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.636 18.364A9 9 0 1 1 18.364 5.636m1.93 2.864A9 9 0 0 1 8.5 20.294"></svg:path><svg:path d="M15.83 3.822c2.702-1.682 4.89-2.302 5.77-1.424c1.54 1.538-1.509 7.083-6.811 12.386s-10.85 8.356-12.39 6.818c-.875-.874-.268-3.042 1.393-5.725"></svg:path></svg:g>`,
})
export class HugeiconsSaturn01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaturn02Icon],svg[hugeicons-saturn-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 8.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M5.636 18.364A9 9 0 0 1 16.5 4.204m-8 16.09a9 9 0 0 0 12.397-9.663"></svg:path><svg:path d="M21.173 6.38c.895-1.86 1.104-3.307.428-3.982c-.874-.872-3.037-.267-5.714 1.388m2.418 7.044a44 44 0 0 1-3.516 3.954c-5.302 5.303-10.85 8.356-12.39 6.818c-.877-.876-.265-3.051 1.403-5.741"></svg:path></svg:g>`,
})
export class HugeiconsSaturn02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSausageIcon],svg[hugeicons-sausage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5.667V7.5M22 3l-2 2.5l2 .7M2 3l2 2.5l-2 .7m13-.975L15.5 7M9 5.225L8.5 7m3.5 4c2.502 0 4.863-.729 6.942-2.018c1.102-.684 1.36-2.368.693-3.622c-.734-1.378-2.29-1.68-3.543-1.036A8.9 8.9 0 0 1 12 5.326a8.9 8.9 0 0 1-4.092-1.002c-1.253-.644-2.81-.342-3.543 1.036c-.668 1.254-.41 2.938.693 3.622C7.137 10.272 9.498 11 12 11m0 4.667v1.6m0-1.6c1.04 0 2.046-.154 3-.442m-3 .442c-1.04 0-2.046-.154-3-.442m-5.071.474c-.706 1.179-.433 2.762.732 3.404a15.14 15.14 0 0 0 14.678 0c1.165-.643 1.438-2.225.732-3.404m-16.142 0c.775-1.295 2.42-1.579 3.745-.974q.644.294 1.326.5m-5.071.474L2 13m1.929 2.7L2 16.2m18.071-.5c-.776-1.296-2.42-1.58-3.745-.975q-.643.294-1.326.5m5.071.474l1.929.5m-1.929-.532L22 13m-7 2.225l.5 1.508M9 15.225l-.5 1.508" color="currentColor"></svg:path>`,
})
export class HugeiconsSausageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaveEnergy01Icon],svg[hugeicons-save-energy-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 7a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path><svg:path d="M15.375 4.5L13.5 7h3l-1.875 2.5M4 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767c0 .04-.027.074-.066.085l-2.541.703a1.95 1.95 0 0 1-1.368-.124L6.842 16.75M13 16.5l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a2 2 0 0 1-1.568.187L4 20.02"></svg:path></svg:g>`,
})
export class HugeiconsSaveEnergy01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaveEnergy02Icon],svg[hugeicons-save-energy-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 3.5V2m0 1.5c-.94 0-4.472 3.793-5.028 8.704M12 3.5c.94 0 4.472 3.793 5.028 8.704M12 3.5c4.937 0 9.055 3.436 10 8c-1.388 1.2-3.893.97-4.972.704M12 3.5c-4.937 0-9.055 3.436-10 8c1.388 1.2 3.893.97 4.972.704m0 0A10.3 10.3 0 0 0 12 13.5a10.3 10.3 0 0 0 5.028-1.296M18.5 15L16 18.5h4L17.5 22"></svg:path><svg:path d="M12 13.5v7a1.5 1.5 0 0 1-3 0V20"></svg:path></svg:g>`,
})
export class HugeiconsSaveEnergy02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaveMoneyDollarIcon],svg[hugeicons-save-money-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.745 13a7 7 0 1 0-12.072-1"></svg:path><svg:path d="M14 6c-1.105 0-2 .672-2 1.5S12.895 9 14 9s2 .672 2 1.5s-.895 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1M14 6V5m0 7c-.87 0-1.612-.417-1.886-1M14 12v1M3 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767c0 .04-.027.074-.066.085l-2.541.703a1.95 1.95 0 0 1-1.368-.124L5.842 16.75M12 16.5l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a2 2 0 0 1-1.568.187L3 20.02"></svg:path></svg:g>`,
})
export class HugeiconsSaveMoneyDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaveMoneyEuroIcon],svg[hugeicons-save-money-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.745 13a7 7 0 1 0-12.072-1"></svg:path><svg:path d="M16 11.18c-.399.791-1.124 1.32-1.953 1.32c-1.258 0-2.278-1.219-2.278-2.722V8.222c0-1.503 1.02-2.722 2.278-2.722c.829 0 1.554.529 1.953 1.32M10.5 9h3.77M3 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767c0 .04-.027.074-.066.085l-2.541.703a1.95 1.95 0 0 1-1.368-.124L5.842 16.75M12 16.5l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a2 2 0 0 1-1.568.187L3 20.02"></svg:path></svg:g>`,
})
export class HugeiconsSaveMoneyEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaveMoneyPoundIcon],svg[hugeicons-save-money-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.745 13a7 7 0 1 0-12.072-1"></svg:path><svg:path d="M16 6.373c-.156-.828-1.114-1.607-2.407-1.307c-1.355.314-1.969 1.907-1.355 2.902c.637 1.032.942 2.032.111 3.447c-.161.275-.242.413-.198.5c.045.085.188.085.473.085H16m-5-3h4M3 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767c0 .04-.027.074-.066.085l-2.541.703a1.95 1.95 0 0 1-1.368-.124L5.842 16.75M12 16.5l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a2 2 0 0 1-1.568.187L3 20.02"></svg:path></svg:g>`,
})
export class HugeiconsSaveMoneyPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaveMoneyYenIcon],svg[hugeicons-save-money-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.745 13a7 7 0 1 0-12.072-1"></svg:path><svg:path d="M12 5.5c.167.815.4 1.667 2 2.556m0 0c1.6-.89 1.833-1.741 2-2.556m-2 2.556V12.5m2-2.667h-4M3 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767c0 .04-.027.074-.066.085l-2.541.703a1.95 1.95 0 0 1-1.368-.124L5.842 16.75M12 16.5l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a2 2 0 0 1-1.568.187L3 20.02"></svg:path></svg:g>`,
})
export class HugeiconsSaveMoneyYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSavingsIcon],svg[hugeicons-savings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 13.5H3a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6.5a1 1 0 0 0-1-1m1 1h5.75a1.25 1.25 0 1 1 0 2.5H9.5"></svg:path><svg:path d="M11 17h3.692a4 4 0 0 0 2.363-.773l2.629-1.925a1.44 1.44 0 0 1 1.896.117a1.43 1.43 0 0 1-.088 2.105l-4.397 3.578A4 4 0 0 1 14.57 21H6M19 7A5 5 0 1 1 9 7a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class HugeiconsSavingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSchemeIcon],svg[hugeicons-scheme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 4c0-.943 0-1.414.293-1.707S18.057 2 19 2h1c.943 0 1.414 0 1.707.293S22 3.057 22 4v1c0 .943 0 1.414-.293 1.707S20.943 7 20 7h-1c-.943 0-1.414 0-1.707-.293S17 5.943 17 5zm-7.5 7.5c0-.943 0-1.414.293-1.707S10.557 9.5 11.5 9.5h1c.943 0 1.414 0 1.707.293s.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293S9.5 13.443 9.5 12.5zM17 19c0-.943 0-1.414.293-1.707S18.057 17 19 17h1c.943 0 1.414 0 1.707.293S22 18.057 22 19v1c0 .943 0 1.414-.293 1.707S20.943 22 20 22h-1c-.943 0-1.414 0-1.707-.293S17 20.943 17 20zM2 19c0-.943 0-1.414.293-1.707S3.057 17 4 17h1c.943 0 1.414 0 1.707.293S7 18.057 7 19v1c0 .943 0 1.414-.293 1.707S5.943 22 5 22H4c-.943 0-1.414 0-1.707-.293S2 20.943 2 20zM2 4c0-.943 0-1.414.293-1.707S3.057 2 4 2h1c.943 0 1.414 0 1.707.293S7 3.057 7 4v1c0 .943 0 1.414-.293 1.707S5.943 7 5 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5zm2.5 9V7.045M11 4.5h6m2.5 6.5v6m-4-1.5l-1-1" color="currentColor"></svg:path>`,
})
export class HugeiconsSchemeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSchoolIcon],svg[hugeicons-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 22v-9.602c0-1.068 0-1.602.245-2.05c.244-.448.693-.737 1.592-1.315l2.082-1.338c.525-.337.787-.506 1.081-.506s.556.169 1.082.506l2.081 1.338c.899.578 1.348.867 1.592 1.315c.245.448.245.982.245 2.05V22m-5-9h.009M21 22v-5.838c0-2.291-1.26-2.477-4-3.162M3 22v-5.838C3 13.871 4.26 13.685 7 13m-5 9h20m-10 0v-4m0-11V4.982m0 0V2.97c0-.474 0-.711.146-.858c.46-.463 2.354.631 3.074 1.075c.608.374.78 1.122.78 1.795z" color="currentColor"></svg:path>`,
})
export class HugeiconsSchoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSchool01Icon],svg[hugeicons-school-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 22v-9.724c0-1.082 0-1.623.245-2.077c.244-.453.693-.746 1.592-1.33l2.082-1.356C11.444 7.17 11.706 7 12 7s.556.171 1.082.513l2.081 1.355c.899.585 1.348.878 1.592 1.331c.245.454.245.995.245 2.077V22m-5-9h.009M20 22v-4.838c0-2.291-.944-2.477-3-3.162M4 22v-4.838c0-2.291.944-2.477 3-3.162m-5 8h20M12 7V4.982m0 0V2.97c0-.474 0-.711.146-.858c.46-.463 2.354.631 3.074 1.075c.608.374.78 1.122.78 1.795z"></svg:path><svg:path d="M10 22v-3c0-.943 0-1.414.293-1.707S11.057 17 12 17s1.414 0 1.707.293S14 18.057 14 19v3"></svg:path></svg:g>`,
})
export class HugeiconsSchool01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSchoolBell01Icon],svg[hugeicons-school-bell-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 7a8.045 8.045 0 0 0-7.458-5C6.101 2 2.5 5.582 2.5 10s3.6 8 8.042 8c1.678 0 3.235-.51 4.524-1.385"></svg:path><svg:path d="M21.5 13c0 5.1-4.393 8.595-10 8.967c-.456.03-.683.045-.842-.103S10.5 21.477 10.5 21v-3"></svg:path><svg:circle cx="19" cy="12.5" r="2.5"></svg:circle><svg:circle cx="10.5" cy="10" r="2"></svg:circle></svg:g>`,
})
export class HugeiconsSchoolBell01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSchoolBell02Icon],svg[hugeicons-school-bell-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.532 10.781l-.082.12a4.21 4.21 0 0 1-3.475 1.833H3.88c-.782 0-1.174.946-.621 1.499l6.508 6.508c.553.553 1.5.161 1.5-.621v-.095c0-1.39.685-2.69 1.833-3.476l.119-.081a4.091 4.091 0 1 0-5.687-5.687M19 17a4.9 4.9 0 0 1-1.427 2.657A5.2 5.2 0 0 1 15 21M7 5a5.2 5.2 0 0 0-2.596 1.404A5.2 5.2 0 0 0 3 9m10-.198l3.89-4.926a2.303 2.303 0 1 1 3.234 3.235L15.198 11M8 19.314A2.343 2.343 0 1 1 4.686 16" color="currentColor"></svg:path>`,
})
export class HugeiconsSchoolBell02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSchoolBusIcon],svg[hugeicons-school-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 19v3m-11-3v3M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v3c0 2.828 0 4.243-.879 5.121C18.243 19 16.828 19 14 19h-4c-2.828 0-4.243 0-5.121-.879C4 17.243 4 15.828 4 13zm3 6h1m8 0h1M2 8v2m20-2v2M4.5 5h15m-15 8h15M12 13V5" color="currentColor"></svg:path>`,
})
export class HugeiconsSchoolBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSchoolReportCardIcon],svg[hugeicons-school-report-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z"></svg:path><svg:path d="m15 13l-.857-2M9 13l.857-2m0 0l1.55-3.618A.64.64 0 0 1 12 7c.26 0 .493.15.592.382L14.142 11m-4.285 0h4.286M8 17h8"></svg:path></svg:g>`,
})
export class HugeiconsSchoolReportCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSchoolTieIcon],svg[hugeicons-school-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.946 6L9.584 17.086c-.188.882-.085 1.212.563 1.846l2.62 2.561c.346.338.518.507.733.507s.387-.169.733-.507l2.62-2.561c.648-.634.751-.964.563-1.846L15.054 6m-4.497-2.876c-.068-.524-.101-.786.052-.955c.154-.169.426-.169.97-.169h3.843c.543 0 .815 0 .969.17c.153.168.12.43.052.954l-.05.395c-.143 1.108-.214 1.662-.57 2.021q-.088.089-.188.161C15.224 6 14.649 6 13.5 6c-1.15 0-1.724 0-2.135-.299a1.5 1.5 0 0 1-.187-.16c-.357-.36-.428-.914-.57-2.022z"></svg:path><svg:path d="M10 15c-.608.693-1.122 1-1.5 1c-.484 0-1.356-1.22-1.743-2.105c-.182-.414-.273-.622-.255-.884c.018-.263.137-.454.375-.838C8.222 10.003 10.515 8.02 12 6"></svg:path></svg:g>`,
})
export class HugeiconsSchoolTieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScissorIcon],svg[hugeicons-scissor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m0 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0M15 8L3 19m12-3l-4-4M3 5l5.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsScissorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScissor01Icon],svg[hugeicons-scissor-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M13.437 9.558L10.6 12m0 0L7 15m3.6-3l2.895 2.387M10.6 12L7 9m9-.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class HugeiconsScissor01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScissorRectangleIcon],svg[hugeicons-scissor-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M13.5 9.5L11 12m0 0l-4 4m4-4l2.5 2.5M11 12L7 8m10 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class HugeiconsScissorRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScooter01Icon],svg[hugeicons-scooter-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.976 17c-.988 0-1.482 0-1.785-.447s-.202-.92 0-1.866C2.83 11.676 4.74 10 6.997 10c2.336 0 4.3 1.795 4.87 5.009c.15.85.226 1.276-.075 1.634c-.3.357-.789.357-1.765.357zM5 7h4m1 10a3 3 0 1 1-6 0"></svg:path><svg:circle cx="20" cy="16" r="2"></svg:circle><svg:path d="M15.12 4h1.121c1.538.019 2.941.852 3.646 2.167l.063.12c.16.327-.083.705-.459.713h-2.678c-.294 0-.44 0-.502.092c-.061.093 0 .22.124.477l1.021 2.113c.383.79.574 1.186.53 1.597s-.316.76-.858 1.46l-1.592 2.054c-.46.592-.689.888-1.019 1.048c-.33.159-.714.159-1.483.159H12"></svg:path></svg:g>`,
})
export class HugeiconsScooter01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScooter02Icon],svg[hugeicons-scooter-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 16c0-3.182 2.239-5 5-5s5 1.818 5 5zm3-8h4m1 8a3 3 0 1 1-6 0"></svg:path><svg:circle cx="20" cy="17" r="2"></svg:circle><svg:path d="M16 8c1.333.638 4 3.174 4 7M15.99 5h.547c.984 0 1.888.58 2.344 1.503c.315.64 0 1.497-.896 1.497H15.99m0-3v3m0-3h-3.046m3.046 3c0 1.913-.212 8-3.99 8h5.666"></svg:path></svg:g>`,
})
export class HugeiconsScooter02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScooter03Icon],svg[hugeicons-scooter-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="4" r="2"></svg:circle><svg:path d="M10 4H6m12 0h-4M9 20c-1.327-.035-2.1-.172-2.578-.695c-.647-.709-.453-1.79-.064-3.955l.612-3.4c.245-1.364.368-2.046.724-2.564c.351-.509.86-.908 1.459-1.145C9.763 8 10.508 8 12 8s2.238 0 2.847.241a3.2 3.2 0 0 1 1.459 1.145c.356.518.479 1.2.724 2.564l.611 3.4c.39 2.164.584 3.246-.063 3.955c-.476.52-1.244.659-2.56.695M12 18v4"></svg:path></svg:g>`,
})
export class HugeiconsScooter03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScooter04Icon],svg[hugeicons-scooter-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="4" cy="18" r="2"></svg:circle><svg:circle cx="20" cy="18" r="2"></svg:circle><svg:path d="M6.514 18h6.775c.732 0 1.099 0 1.344-.155c.245-.156.452-.596.867-1.476c.235-.498.536-.958.892-1.369m0 0L4 16m12.392-1a6 6 0 0 1 2.521-1.724c.537-.191.806-.287.896-.462c.09-.174.024-.415-.11-.896l-1.53-5.51c-.25-.902-.376-1.353-.646-1.68a2 2 0 0 0-.73-.555C16.405 4 15.937 4 15 4"></svg:path></svg:g>`,
})
export class HugeiconsScooter04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScooterElectricIcon],svg[hugeicons-scooter-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="4" cy="18" r="2"></svg:circle><svg:circle cx="20" cy="18" r="2"></svg:circle><svg:path d="M6.514 18h6.775c.732 0 1.099 0 1.344-.155c.245-.156.452-.596.867-1.476c.235-.498.536-.958.892-1.369m0 0L4 16m12.392-1a6 6 0 0 1 2.521-1.724c.537-.191.806-.287.896-.462c.09-.174.024-.415-.11-.896l-1.53-5.51c-.25-.902-.376-1.353-.646-1.68a2 2 0 0 0-.73-.555C16.405 4 15.937 4 15 4m-3.537 3l-1.394 1.812a.33.33 0 0 0 .2.526l1.461.31a.33.33 0 0 1 .177.553L10.177 12"></svg:path></svg:g>`,
})
export class HugeiconsScooterElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScratchCardIcon],svg[hugeicons-scratch-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 4H9C5.7 4 4.05 4 3.025 5.025S2 7.7 2 11v2c0 3.3 0 4.95 1.025 5.975S5.7 20 9 20h6c3.3 0 4.95 0 5.975-1.025S22 16.3 22 13v-2c0-3.3 0-4.95-1.025-5.975S18.3 4 15 4"></svg:path><svg:path d="M21.5 8h-10l1 1.5h9zM10 11.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsScratchCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScreenAddToHomeIcon],svg[hugeicons-screen-add-to-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.069 5c.136-.869.393-1.491.879-1.975C8.979 2 10.638 2 13.958 2s4.979 0 6.01 1.025S20.999 5.7 20.999 9v6c0 3.3 0 4.95-1.031 5.975S17.278 22 13.958 22s-4.979 0-6.01-1.025c-.655-.652-.894-1.556-.981-2.975M14 19h.009"></svg:path><svg:path d="M6.443 7.952h3.48c.436.015 1.095.546 1.095.957v3.605m-8.019 3.438l7.268-7.203"></svg:path></svg:g>`,
})
export class HugeiconsScreenAddToHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScreenAddToHome02Icon],svg[hugeicons-screen-add-to-home-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 17c0 2.357 0 3.535.732 4.268S9.643 22 12 22h3c2.357 0 3.535 0 4.268-.732C20 20.535 20 19.357 20 17V7c0-2.357 0-3.536-.732-4.268C18.535 2 17.357 2 15 2h-3c-2.357 0-3.536 0-4.268.732c-.62.62-.715 1.561-.73 3.268"></svg:path><svg:path d="M15.5 2h-4l.5 1h3zM6 9h5v5m-.5-4.5L4 16"></svg:path></svg:g>`,
})
export class HugeiconsScreenAddToHome02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScreenLockRotationIcon],svg[hugeicons-screen-lock-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.034 3.747a2.2 2.2 0 0 0-.892-.234c-1.094-.04-1.942.802-3.637 2.489S4.96 8.532 5 9.619s.954 1.996 2.78 3.812l3.32 3.303c1.827 1.815 2.74 2.723 3.834 2.764s1.942-.803 3.638-2.49c1.367-1.36 2.183-2.17 2.427-3.005M3 12.504c.118 2.872 1.978 8.492 8.37 8.974c.376.028.564.042.618-.072s-.082-.246-.354-.51l-1.22-1.187"></svg:path><svg:path d="M15.737 5.679V4.288c0-.206.008-.414.082-.606c.196-.51.715-1.18 1.66-1.18c.946 0 1.486.67 1.682 1.18c.074.192.082.4.082.606v1.39m-3.437 5.826h3.388c.997 0 1.806-.807 1.806-1.802V7.699c0-.995-.809-1.802-1.806-1.802h-3.388c-.997 0-1.806.807-1.806 1.802v2.003c0 .995.809 1.802 1.806 1.802"></svg:path></svg:g>`,
})
export class HugeiconsScreenLockRotationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScreenRotationIcon],svg[hugeicons-screen-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12c.131 3.194 2.198 9.442 9.3 9.978c.418.031.627.047.687-.08c.06-.126-.091-.273-.393-.567l-1.356-1.32M22 12c-.131-3.193-2.198-9.442-9.3-9.978c-.418-.031-.627-.047-.687.08c-.06.126.091.273.393.567l1.356 1.32m-5.686 9.457C6.713 12.083 6.03 11.4 6 10.585s.603-1.45 1.868-2.716c1.266-1.265 1.899-1.898 2.716-1.868c.816.03 1.498.712 2.86 2.075l2.48 2.478c1.362 1.363 2.044 2.045 2.074 2.861s-.603 1.45-1.868 2.716c-1.266 1.265-1.899 1.898-2.716 1.868c-.816-.03-1.498-.712-2.86-2.075z" color="currentColor"></svg:path>`,
})
export class HugeiconsScreenRotationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScribdIcon],svg[hugeicons-scribd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.818 16.914c-.289 4.48-3.52 4.869-3.934 5.062c3.637-5.062-4.457-10.21-5.582-10.81c-1.124-.601-2.626-1.296-3.397-1.803c-1.278-.84-1.731-1.618-2.074-2.227c-.55-.977-.584-3.283 1.874-3.404c2.458-.12 4.152.901 4.264 1.528c-.198 1.39 2.452 3.937 4.76 2.077C20.39 5.191 17.98 2.13 16.924 2c4.668.228 4.912 4.08 5.04 6.11v.003s.142 4.32-.147 8.8M5.892 21.586c.368-2.787-2.35-3.98-3.55-3.514c0 0-.342-1.398-.342-3.802V10.1c.294.833 1.896 3.093 5.957 4.975c4.061 1.883 5.022 3.59 5.022 4.16c.06.486-.095 1.67-1.242 2.702c-1.732.086-5.4.165-5.845-.35" color="currentColor"></svg:path>`,
})
export class HugeiconsScribdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScrollIcon],svg[hugeicons-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.975 16.987V6.532c0-1.345.057-2.906 1.065-3.8C7.866 2 9.034 2 10.14 2h7.31c1.027 0 2.092.018 3.012.47q.112.055.213.115C22.042 3.388 22 5.302 22 6.885v10.532c0 1.041-.048 2.111-.48 3.059c-.414.907-.98 1.314-2.024 1.506M5.975 16.987h8.83c.413 0 .785.253.93.638c.126.337.23.627.323.9c.323.958.607 1.969 1.287 2.717c.409.45.838.678 1.41.74m-12.78-4.995H2.969c-.553 0-1.011.447-.966.997c.047.576.15 1.078.34 1.615c.336.95.92 1.911 1.88 2.225c.354.115.746.153 1.251.158h13.28m.742 0a4 4 0 0 1-.742 0m.742 0h-.742M10.469 7h7m-7 4h3.5" color="currentColor"></svg:path>`,
})
export class HugeiconsScrollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScrollHorizontalIcon],svg[hugeicons-scroll-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-12 .067c-.04-1.38 5.345-4.628 5.852-3.983c.575.73-.8 2.902-1.11 3.594c-.186.416-.181.596.03 1.012c.96 1.881 1.436 2.818 1.14 3.224c-.471.646-5.872-2.5-5.912-3.847m19.999 0c.04-1.38-5.344-4.628-5.852-3.983c-.575.73.8 2.902 1.11 3.594c.186.416.181.596-.03 1.012c-.96 1.881-1.436 2.818-1.14 3.224c.471.646 5.872-2.5 5.912-3.847" color="currentColor"></svg:path>`,
})
export class HugeiconsScrollHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScrollVerticalIcon],svg[hugeicons-scroll-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0M11.933 2c1.38-.04 4.628 5.345 3.983 5.852c-.73.575-2.902-.8-3.594-1.11c-.416-.186-.596-.181-1.012.03c-1.881.96-2.818 1.436-3.224 1.14c-.646-.471 2.5-5.872 3.847-5.912m.134 20c-1.38.04-4.628-5.32-3.983-5.824c.73-.573 2.902.796 3.594 1.104c.416.185.596.18 1.012-.03c.58-.295 2.51-1.65 3.224-1.134c.646.469-2.5 5.844-3.847 5.884" color="currentColor"></svg:path>`,
})
export class HugeiconsScrollVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSdCardIcon],svg[hugeicons-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 8.9V8c0-2.828 0-4.243.879-5.121C7.257 2 8.672 2 11.5 2h3c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v6c0 3.771 0 5.657-1.172 6.828S16.271 22 12.5 22h-1.875c-2.928 0-4.392 0-5.428-.73a4 4 0 0 1-.967-.966c-.73-1.037-.73-2.5-.73-5.43v-.273c0-.542 0-.813.046-1.073a3 3 0 0 1 .32-.911c.126-.232.295-.444.634-.867s.508-.635.634-.867a3 3 0 0 0 .32-.91c.046-.26.046-.532.046-1.074M16.5 6v3M13 6v3M9.5 6v3" color="currentColor"></svg:path>`,
})
export class HugeiconsSdCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSealIcon],svg[hugeicons-seal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.78 3.352c.563-.603.845-.905 1.146-1.073a2.2 2.2 0 0 1 2.148 0c.301.168.583.47 1.147 1.073c.679.726 1.362.995 2.323.963c.826-.028 1.238-.042 1.57.052a2.21 2.21 0 0 1 1.52 1.52c.093.33.08.743.051 1.568c-.033.994.26 1.667.963 2.324c.603.564.905.846 1.073 1.147c.372.668.372 1.48 0 2.148c-.168.301-.47.583-1.073 1.147c-.726.679-.995 1.362-.963 2.323c.028.826.042 1.238-.052 1.57a2.2 2.2 0 0 1-1.52 1.52c-.33.093-.743.08-1.569.051c-.96-.032-1.644.237-2.323.963c-.564.603-.846.905-1.147 1.073a2.2 2.2 0 0 1-2.148 0c-.301-.168-.583-.47-1.147-1.073c-.657-.703-1.33-.996-2.324-.963c-.825.028-1.237.042-1.569-.052a2.2 2.2 0 0 1-1.52-1.52c-.093-.33-.08-.743-.051-1.569c.032-.96-.237-1.644-.963-2.323c-.603-.564-.905-.846-1.073-1.147a2.2 2.2 0 0 1 0-2.148c.168-.301.47-.583 1.073-1.147c.726-.679.995-1.362.963-2.324c-.028-.825-.042-1.237.052-1.569a2.2 2.2 0 0 1 1.52-1.52c1.441-.408 2.692.27 3.892-1.014" color="currentColor"></svg:path>`,
})
export class HugeiconsSealIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearch01Icon],svg[hugeicons-search-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" color="currentColor"></svg:path>`,
})
export class HugeiconsSearch01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearch02Icon],svg[hugeicons-search-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 14l2.5 2.5m-.067 2.025a1.48 1.48 0 1 1 2.092-2.092l3.042 3.042a1.48 1.48 0 1 1-2.092 2.092zM16 9A7 7 0 1 0 2 9a7 7 0 0 0 14 0" color="currentColor"></svg:path>`,
})
export class HugeiconsSearch02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchAddIcon],svg[hugeicons-search-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0M7.5 11h7M11 7.5v7" color="currentColor"></svg:path>`,
})
export class HugeiconsSearchAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchAreaIcon],svg[hugeicons-search-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.4 19.4L22 22m-1.3-7.15a5.85 5.85 0 1 0-11.7 0a5.85 5.85 0 0 0 11.7 0M2 6c.13-1.335.426-2.234 1.096-2.904S4.665 2.131 6 2m0 20c-1.335-.13-2.234-.426-2.904-1.096S2.131 19.335 2 18M22 6c-.13-1.335-.426-2.234-1.096-2.904S19.335 2.131 18 2M2 10v4M14 2h-4" color="currentColor"></svg:path>`,
})
export class HugeiconsSearchAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchCircleIcon],svg[hugeicons-search-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path><svg:path d="M14.4 14.4L16 16m-.8-4.4a3.6 3.6 0 1 0-7.2 0a3.6 3.6 0 0 0 7.2 0"></svg:path></svg:g>`,
})
export class HugeiconsSearchCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchDollarIcon],svg[hugeicons-search-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path><svg:path d="M13.253 9.311c.105-1.264-1.83-2.297-3.308-1.604c-1.847.865-1.686 3.052.595 3.168c1.015.052 1.903-.058 2.506.596c.604.654.865 2.32-.913 2.884c-1.78.565-3.633-.443-3.633-1.672M10.971 6.5v.978m0 7.242v.78"></svg:path></svg:g>`,
})
export class HugeiconsSearchDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchFocusIcon],svg[hugeicons-search-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path><svg:path d="M9.492 7.5c-.716.043-1.172.163-1.5.491c-.33.329-.449.785-.492 1.501M12.508 7.5c.716.043 1.172.163 1.5.491c.33.329.449.785.492 1.501m-.008 3.13c-.049.651-.173 1.076-.483 1.387c-.329.328-.785.448-1.501.491m-3.016 0c-.716-.043-1.172-.163-1.5-.491c-.311-.311-.435-.736-.484-1.388"></svg:path></svg:g>`,
})
export class HugeiconsSearchFocusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchList01Icon],svg[hugeicons-search-list-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10h5m-5 7h5M2 3h17m.6 15.6L22 21m-1.2-6.6a5.4 5.4 0 1 0-10.8 0a5.4 5.4 0 0 0 10.8 0" color="currentColor"></svg:path>`,
})
export class HugeiconsSearchList01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchList02Icon],svg[hugeicons-search-list-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 6h4m-4 7h4m-4 8h19m-1.6-7.6L22 16m-1.3-7.15a5.85 5.85 0 1 0-11.7 0a5.85 5.85 0 0 0 11.7 0" color="currentColor"></svg:path>`,
})
export class HugeiconsSearchList02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchMinusIcon],svg[hugeicons-search-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0M7.5 11h7" color="currentColor"></svg:path>`,
})
export class HugeiconsSearchMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchRemoveIcon],svg[hugeicons-search-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0M8 14l6-6M8 8l6 6" color="currentColor"></svg:path>`,
})
export class HugeiconsSearchRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchReplaceIcon],svg[hugeicons-search-replace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 17.5L22 22m-2-11a9 9 0 0 1-17.064 4M2 11a9 9 0 0 1 17.065-4m0 0V2m0 5H14.5M2.936 15v5m0-5H7.5" color="currentColor"></svg:path>`,
})
export class HugeiconsSearchReplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchSquareIcon],svg[hugeicons-search-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="m15 15l2 2m-1-5.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0"></svg:path></svg:g>`,
})
export class HugeiconsSearchSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchVisualIcon],svg[hugeicons-search-visual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.984 2c-2.807.064-4.446.331-5.566 1.447C2.438 4.424 2.11 5.797 2 8m13.017-6c2.806.064 4.445.331 5.566 1.447c.98.977 1.308 2.35 1.417 4.553m-6.983 14c2.806-.064 4.445-.331 5.566-1.447c.98-.977 1.308-2.35 1.417-4.553M8.984 22c-2.807-.064-4.446-.331-5.566-1.447C2.438 19.576 2.11 18.203 2 16m13-1l2 2m-1-5.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0" color="currentColor"></svg:path>`,
})
export class HugeiconsSearchVisualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchingIcon],svg[hugeicons-searching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 10c-.49-.037-.83-.12-1.111-.309a2 2 0 0 1-.552-.554C2 8.63 2 7.925 2 6.515s0-2.116.337-2.622c.146-.22.333-.408.552-.555C3.393 3 4.096 3 5.5 3h13c1.404 0 2.107 0 2.611.338c.218.147.406.335.552.555C22 4.399 22 5.104 22 6.515c0 1.288 0 1.987-.256 2.485"></svg:path><svg:path d="M18.2 18.2L21 21m-1.4-7.7a6.3 6.3 0 1 0-12.6 0a6.3 6.3 0 0 0 12.6 0"></svg:path></svg:g>`,
})
export class HugeiconsSearchingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSeatSelectorIcon],svg[hugeicons-seat-selector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 18v-6.5a1.5 1.5 0 0 0-3 0V16a2 2 0 0 0 2 2zm13-2v-4.5a1.5 1.5 0 0 0-3 0V18h1a2 2 0 0 0 2-2m-3-2H7v4h10zm-2.5 8h-5v-4h5zM7 22h10"></svg:path><svg:path d="M18.5 10V8c0-2.828 0-4.243-.879-5.121C16.743 2 15.328 2 12.5 2h-1c-2.828 0-4.243 0-5.121.879C5.5 3.757 5.5 5.172 5.5 8v2"></svg:path></svg:g>`,
})
export class HugeiconsSeatSelectorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecondBracketIcon],svg[hugeicons-second-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.225 3c1.39.154 2.325.501 3.023 1.287C21.5 5.697 21.5 7.964 21.5 12.5s0 6.804-1.252 8.213c-.698.786-1.634 1.133-3.023 1.287m-10.45 0c-1.39-.154-2.325-.501-3.023-1.287C2.5 19.303 2.5 17.036 2.5 12.5s0-6.804 1.252-8.213C4.45 3.501 5.386 3.154 6.775 3" color="currentColor"></svg:path>`,
})
export class HugeiconsSecondBracketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecondBracketCircleIcon],svg[hugeicons-second-bracket-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 8c.65.065 1.088.211 1.414.542C17 9.135 17 10.09 17 12s0 2.865-.586 3.458c-.326.33-.764.477-1.414.542m-6 0c-.65-.065-1.088-.211-1.414-.542C7 14.865 7 13.91 7 12s0-2.865.586-3.458C7.912 8.212 8.35 8.065 9 8"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class HugeiconsSecondBracketCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecondBracketSquareIcon],svg[hugeicons-second-bracket-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 8c.65.065 1.088.211 1.414.542C17 9.135 17 10.09 17 12s0 2.865-.586 3.458c-.326.33-.764.477-1.414.542m-6 0c-.65-.065-1.088-.211-1.414-.542C7 14.865 7 13.91 7 12s0-2.865.586-3.458C7.912 8.212 8.35 8.065 9 8"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsSecondBracketSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecondBrecketIcon],svg[hugeicons-second-brecket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.225 3c1.39.154 2.325.501 3.023 1.287C21.5 5.697 21.5 7.964 21.5 12.5s0 6.804-1.252 8.213c-.698.786-1.634 1.133-3.023 1.287m-10.45 0c-1.39-.154-2.325-.501-3.023-1.287C2.5 19.303 2.5 17.036 2.5 12.5s0-6.804 1.252-8.213C4.45 3.501 5.386 3.154 6.775 3" color="currentColor"></svg:path>`,
})
export class HugeiconsSecondBrecketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecondBrecketCircleIcon],svg[hugeicons-second-brecket-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 8c.65.065 1.088.211 1.414.542C17 9.135 17 10.09 17 12s0 2.865-.586 3.458c-.326.33-.764.477-1.414.542m-6 0c-.65-.065-1.088-.211-1.414-.542C7 14.865 7 13.91 7 12s0-2.865.586-3.458C7.912 8.212 8.35 8.065 9 8"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class HugeiconsSecondBrecketCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecondBrecketSquareIcon],svg[hugeicons-second-brecket-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 8c.65.065 1.088.211 1.414.542C17 9.135 17 10.09 17 12s0 2.865-.586 3.458c-.326.33-.764.477-1.414.542m-6 0c-.65-.065-1.088-.211-1.414-.542C7 14.865 7 13.91 7 12s0-2.865.586-3.458C7.912 8.212 8.35 8.065 9 8"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsSecondBrecketSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecuredNetworkIcon],svg[hugeicons-secured-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 13a6 6 0 1 1 12 0a6 6 0 0 1-12 0"></svg:path><svg:path d="M15.5 8V5.52C15.5 3.577 13.933 2 12 2S8.5 3.576 8.5 5.52V8m3.5 5h.009M12 19v3m0 0h8m-8 0H4"></svg:path></svg:g>`,
})
export class HugeiconsSecuredNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecurityIcon],svg[hugeicons-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.998 2C8.99 2 7.04 4.019 4.734 4.755c-.938.3-1.407.449-1.597.66c-.19.21-.245.519-.356 1.135c-1.19 6.596 1.41 12.694 7.61 15.068c.665.255.998.382 1.61.382s.946-.128 1.612-.383c6.199-2.373 8.796-8.471 7.606-15.067c-.111-.616-.167-.925-.357-1.136s-.658-.36-1.596-.659C16.959 4.019 15.006 2 11.998 2M12 7v2" color="currentColor"></svg:path>`,
})
export class HugeiconsSecurityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecurityBlockIcon],svg[hugeicons-security-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 5s-1.173.204-1.363.415c-.19.21-.245.519-.356 1.135c-1.19 6.596 1.41 12.694 7.61 15.068c.665.255.998.382 1.61.382s.946-.127 1.612-.382c2.01-.77 3.64-1.675 4.887-3.118M7.5 3.42C8.825 2.697 10.229 2 11.998 2c3.008 0 4.96 2.014 7.268 2.748c.938.298 1.407.447 1.596.657s.246.518.357 1.133C21.842 9.982 21.427 13.29 20 16M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsSecurityBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecurityCheckIcon],svg[hugeicons-security-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.998 2C8.99 2 7.04 4.019 4.734 4.755c-.938.3-1.407.449-1.597.66c-.19.21-.245.519-.356 1.135c-1.19 6.596 1.41 12.694 7.61 15.068c.665.255.998.382 1.61.382s.946-.128 1.612-.383c6.199-2.373 8.796-8.471 7.606-15.067c-.111-.616-.167-.925-.357-1.136s-.658-.36-1.596-.659C16.959 4.019 15.006 2 11.998 2"></svg:path><svg:path d="M9 13s1 0 2 2c0 0 3.177-5 6-6"></svg:path></svg:g>`,
})
export class HugeiconsSecurityCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecurityKeyUsbIcon],svg[hugeicons-security-key-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10c-.039-.936-.165-1.51-.57-1.914c-.586-.586-1.53-.586-3.42-.586H9.008c-1.889 0-2.833 0-3.42.586S5 9.614 5 11.5V17c0 .93 0 1.394.077 1.78a4 4 0 0 0 3.148 3.144c.31.061.672.074 1.283.076M13.5 7.5v-2c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C12.107 2 11.404 2 10 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C6.5 3.393 6.5 4.096 6.5 5.5v2m7 9V15a2 2 0 1 1 4 0v1.5M14.75 22h1.5c1.173 0 1.76 0 2.163-.31a1.5 1.5 0 0 0 .277-.277c.31-.404.31-.99.31-2.163s0-1.76-.31-2.163a1.5 1.5 0 0 0-.277-.277c-.404-.31-.99-.31-2.163-.31h-1.5c-1.173 0-1.76 0-2.163.31a1.5 1.5 0 0 0-.277.277c-.31.404-.31.99-.31 2.163s0 1.76.31 2.163a1.5 1.5 0 0 0 .277.277c.404.31.99.31 2.163.31M9.5 4.5h1" color="currentColor"></svg:path>`,
})
export class HugeiconsSecurityKeyUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecurityLockIcon],svg[hugeicons-security-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.998 2C8.99 2 7.04 4.019 4.734 4.755c-.938.3-1.407.449-1.597.66c-.19.21-.245.519-.356 1.135c-1.19 6.596 1.41 12.694 7.61 15.068c.665.255.998.382 1.61.382s.946-.128 1.612-.383c6.199-2.373 8.796-8.471 7.606-15.067c-.111-.616-.167-.925-.357-1.136s-.658-.36-1.596-.659C16.959 4.019 15.006 2 11.998 2"></svg:path><svg:path d="M10.337 10.38c-1.08 0-1.62.78-1.74 1.26s-.12 2.22-.048 2.94c.24.9.84 1.272 1.428 1.392c.54.048 2.82.03 3.48.03c.96.018 1.68-.342 1.98-1.422c.06-.36.12-2.34-.03-2.94c-.318-.96-1.11-1.26-1.71-1.26zm-.087-.421c0-.06.008-.406.01-.84c0-.398-.034-.78.156-1.13c.71-1.414 2.75-1.27 3.254.17c.087.237.093.612.09.96c-.003.443.006.84.006.84"></svg:path></svg:g>`,
})
export class HugeiconsSecurityLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecurityPasswordIcon],svg[hugeicons-security-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 9q.045-1.208.27-2.45c.11-.616.166-.924.356-1.135s.66-.36 1.599-.66C7.035 4.019 8.987 2 11.998 2s4.967 2.02 7.277 2.755c.939.3 1.408.449 1.598.66c.19.21.246.519.357 1.135q.225 1.242.27 2.45m-2.055 8c-1.32 2.023-3.268 3.637-5.83 4.618c-.667.255-1 .382-1.614.382c-.612 0-.946-.128-1.613-.383c-2.562-.98-4.51-2.594-5.831-4.617M8.5 12l1 1m0 0l1 1m-1-1l1-1m-1 1l-1 1m-5-2l1 1m0 0l1 1m-1-1l1-1m-1 1l-1 1m10-2l1 1m0 0l1 1m-1-1l1-1m-1 1l-1 1m5-2l1 1m0 0l1 1m-1-1l1-1m-1 1l-1 1" color="currentColor"></svg:path>`,
})
export class HugeiconsSecurityPasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecurityValidationIcon],svg[hugeicons-security-validation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.998 2C8.99 2 7.04 4.019 4.734 4.755c-.938.3-1.407.449-1.597.66c-.19.21-.245.519-.356 1.135c-1.19 6.596 1.41 12.694 7.61 15.068c.665.255.998.382 1.61.382s.946-.128 1.612-.383c6.199-2.373 8.796-8.471 7.606-15.067c-.111-.616-.167-.925-.357-1.136s-.658-.36-1.596-.659C16.959 4.019 15.006 2 11.998 2"></svg:path><svg:path d="M10 12.5s.5 0 1 1c0 0 1.588-2.5 3-3"></svg:path><svg:path d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class HugeiconsSecurityValidationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecurityWifiIcon],svg[hugeicons-security-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 9.68v-.77c0-1.497 0-2.246.284-2.878c.175-.39.425-.742.738-1.039c.506-.481 1.224-.744 2.66-1.27L9.63 2.645C10.802 2.214 11.388 2 12 2s1.198.215 2.37.644l2.948 1.079c1.436.525 2.154.788 2.66 1.269c.313.297.563.65.738 1.04c.284.631.284 1.38.284 2.877v.772c0 2.403 0 3.605-.297 4.705a8.7 8.7 0 0 1-2.026 3.653c-.782.844-1.812 1.501-3.875 2.815c-.923.588-1.384.883-1.875 1.02a3.45 3.45 0 0 1-1.854 0c-.49-.137-.952-.432-1.875-1.02c-2.062-1.314-3.094-1.97-3.875-2.815a8.7 8.7 0 0 1-2.026-3.653C3 13.286 3 12.084 3 9.681"></svg:path><svg:path d="M8 9.478C9.149 8.543 10.52 8 11.995 8c1.478 0 2.854.547 4.005 1.487M14.174 12a4.1 4.1 0 0 0-2.18-.64a4.1 4.1 0 0 0-2.17.634M12 15h.006"></svg:path></svg:g>`,
})
export class HugeiconsSecurityWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSeesawIcon],svg[hugeicons-seesaw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M8 17h8m-2.5 0v-5m-3 1v4m5.404-11.364l1.423-.318m0 0l1.423-.317m-1.423.317l.657 2.752m-14.415.32l1.424-.318m0 0l1.423-.318m-1.423.318l.657 2.751m-3.084.689l18.502-4.13a.73.73 0 0 1 .875.53c.273 1.14-.463 2.276-1.642 2.54L4.647 13.946c-1.18.263-2.356-.448-2.628-1.588a.706.706 0 0 1 .547-.846" color="currentColor"></svg:path>`,
})
export class HugeiconsSeesawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSegmentIcon],svg[hugeicons-segment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 14L9.071 8.5m0 0L7.38 3.674c-.047-.134-.07-.2-.1-.257a.76.76 0 0 0-.53-.407C6.692 3 6.628 3 6.5 3s-.192 0-.25.01a.76.76 0 0 0-.53.407c-.029.056-.052.123-.1.257L3.93 8.5m5.142 0H3.93m0 0L2 14m18 5a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h2m-6 0H8m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m0 0H2M15 8.5V5c0-.943 0-1.414.293-1.707S16.057 3 17 3h1.25a2.75 2.75 0 1 1 0 5.5zm0 0h4.25a2.75 2.75 0 1 1 0 5.5H17c-.943 0-1.414 0-1.707-.293S15 12.943 15 12z" color="currentColor"></svg:path>`,
})
export class HugeiconsSegmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSelect01Icon],svg[hugeicons-select-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 2v6M2 5h6m4 0h3m-3 17h3m3-17h.5A3.5 3.5 0 0 1 22 8.5V9m0 9v.5a3.5 3.5 0 0 1-3.5 3.5H18m-9 0h-.5A3.5 3.5 0 0 1 5 18.5V18m17-6v3M5 12v3" color="currentColor"></svg:path>`,
})
export class HugeiconsSelect01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSelect02Icon],svg[hugeicons-select-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 2v6M2 5h6m12 13V7M7 20h11m0-15h-6m-7 7v6M18 5c0-.943 0-1.414.293-1.707S19.057 3 20 3s1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7s-1.414 0-1.707-.293S18 5.943 18 5m0 15c0-.943 0-1.414.293-1.707S19.057 18 20 18s1.414 0 1.707.293S22 19.057 22 20s0 1.414-.293 1.707S20.943 22 20 22s-1.414 0-1.707-.293S18 20.943 18 20M3 20c0-.943 0-1.414.293-1.707S4.057 18 5 18s1.414 0 1.707.293S7 19.057 7 20s0 1.414-.293 1.707S5.943 22 5 22s-1.414 0-1.707-.293S3 20.943 3 20" color="currentColor"></svg:path>`,
})
export class HugeiconsSelect02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSelfTransferIcon],svg[hugeicons-self-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.258 4.818c0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25s-2.25 1.01-2.25 2.25m1.5 0c0-.41.34-.75.75-.75s.75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75m3.628 17.918c.14.21.38.33.62.33l-.02.01a.757.757 0 0 0 .73-.95l-1.97-7.44v-4.15l.02.02l1.11 1.67c.04.08.1.14.17.19l2 1.5a.75.75 0 0 0 .9-1.2l-1.9-1.42l-1.04-1.56a3.76 3.76 0 0 0-3.12-1.66h-.54c-1.43 0-2.71.79-3.35 2.07l-1.67 3.34c-.18.37-.03.82.34 1.01c.37.18.83.03 1.01-.34l1.58-3.16v2.91c0 .75.22 1.47.63 2.08l.952 1.428l-2.49 4.533c-.18.34-.08.76.23.98c.13.1.28.14.43.14c.21 0 .41-.09.56-.26l2.761-3.156zm-1.389-4.989l.027.025l-.708-2.646a1.6 1.6 0 0 1-.06-.44v-5.09q-.18-.03-.36-.03h-.54c-.21 0-.41.03-.6.08v4.26c0 .44.13.87.38 1.24l1.645 2.468q.116.047.216.133m-11.379 5.21c.12.07.26.11.39.11v.01c.25 0 .5-.13.64-.36l4-6.5a.76.76 0 0 0-.25-1.03a.76.76 0 0 0-1.03.25l-.61 1l-.94-.59c-.39-.25-.85-.33-1.3-.23s-.84.38-1.08.77l-1.42 2.28c-.49.79-.27 1.83.51 2.36l.99.66l-.15.24c-.21.35-.1.81.25 1.03m1.23-5.89h.05v-.02c.03 0 .12.04.12.04l.95.6l-1.67 2.71l-.94-.63a.23.23 0 0 1-.07-.32l1.42-2.28c.04-.07.1-.1.14-.1" color="currentColor"></svg:path>`,
})
export class HugeiconsSelfTransferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSemiTruckIcon],svg[hugeicons-semi-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 13.5h-1c-.943 0-1.414 0-1.707-.293S16 12.443 16 11.5v-3m3 5v-5m0 5c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-.5M16 8.5h-3m3 0h3m-6 0v10h2.5M13 8.5v-3h3c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C19 7.102 19 7.568 19 8.5m-6-3c0-.943 0-1.414-.293-1.707S11.943 3.5 11 3.5m-3 15h5v-5H4c-.943 0-1.414 0-1.707.293S2 14.557 2 15.5v1c0 .943 0 1.414.293 1.707S3.057 18.5 4 18.5"></svg:path><svg:path d="M19.5 18.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0M8 18.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class HugeiconsSemiTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSendToMobileIcon],svg[hugeicons-send-to-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.002 6c-.087-1.42-.325-2.323-.979-2.975C14.994 2 13.339 2 10.027 2S5.059 2 4.03 3.025S3.002 5.7 3.002 9v6c0 3.3 0 4.95 1.029 5.975S6.715 22 10.027 22s4.967 0 5.996-1.025c.654-.652.892-1.556.979-2.975m-7 1h.009m8.461-10.014l2.251 2.207c.298.318.388 1.159.098 1.449l-2.349 2.344m-7.474-2.943h9.343" color="currentColor"></svg:path>`,
})
export class HugeiconsSendToMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSendToMobile02Icon],svg[hugeicons-send-to-mobile-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 6c-.015-1.707-.11-2.647-.73-3.268C15.538 2 14.36 2 12.002 2H9c-2.357 0-3.536 0-4.269.732C4 3.464 4 4.643 4 7v10c0 2.357 0 3.535.732 4.268C5.465 22 6.644 22 9.001 22h3c2.358 0 3.537 0 4.27-.732c.62-.62.714-1.562.729-3.268"></svg:path><svg:path d="M12.5 2h-4L9 3h3zM19 12.034h-7M17 9s2.037 1.647 2.82 2.553c.127.146.186.31.18.472a.7.7 0 0 1-.18.422C19.038 13.353 17 15 17 15"></svg:path></svg:g>`,
})
export class HugeiconsSendToMobile02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSendingOrderIcon],svg[hugeicons-sending-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.02 15.782a.746.746 0 0 0-1.06.02c-.29.29-.28.77.02 1.06c.16.15.42.36.66.55l.06.04c.24.2.51.4.76.61l-4.46.01c-.41 0-.75.34-.75.75s.34.75.75.75h4.46c-.25.22-.51.42-.76.62l-.06.04c-.24.19-.5.4-.66.55c-.3.29-.3.77-.02 1.06c.29.3.76.31 1.06.02q.135-.135.54-.45l.06-.05c.24-.19.53-.41.8-.64c.29-.25.59-.52.83-.8c.12-.13.23-.29.32-.46c.09-.16.17-.38.17-.64s-.09-.48-.17-.64c-.09-.17-.21-.33-.32-.46c-.23-.28-.54-.55-.83-.8c-.27-.23-.55-.45-.8-.64l-.06-.05q-.405-.315-.54-.45M12 19.072c-2.62 0-4.99.37-6.76.96a.749.749 0 1 1-.48-1.42c.16-.05.32-.11.49-.15v-4.45c-2.27-.36-4-2.32-4-4.69c0-2.62 2.13-4.75 4.75-4.75c.67 0 1.3.14 1.88.39a4.745 4.745 0 0 1 8.24 0a4.7 4.7 0 0 1 1.88-.39c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.79 0 3.25-1.46 3.25-3.25s-1.46-3.25-3.25-3.25c-.67 0-1.29.2-1.81.55c-.19.13-.43.16-.65.09a.78.78 0 0 1-.47-.47A3.26 3.26 0 0 0 12 4.072c-1.42 0-2.62.91-3.07 2.17a.78.78 0 0 1-.47.47c-.22.07-.46.04-.65-.09c-.52-.35-1.14-.55-1.81-.55c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25c.41 0 .75.34.75.75v4.76c1.57-.33 3.36-.51 5.25-.51c.41 0 .75.34.75.75s-.34.75-.75.75" color="currentColor"></svg:path>`,
})
export class HugeiconsSendingOrderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSenselessIcon],svg[hugeicons-senseless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8.003 9.019s.25-.623-.38-.928c-1.12-.543-2.586 1.471-.757 2.582C8.758 11.823 10 9.697 10 8.091m5.997 1.89s-.25.623.38.928c1.12.543 2.587-1.471.757-2.582C15.242 7.177 14 9.303 14 10.909m2 5.691l-.27-.2c-.718-.533-1.563-.533-2.28 0l-.27.2c-.718.533-1.564.533-2.282 0l-.27-.2c-.717-.533-1.563-.533-2.28 0L8 16.658"></svg:path></svg:g>`,
})
export class HugeiconsSenselessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSentIcon],svg[hugeicons-sent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.048 3.053C18.87.707 2.486 6.453 2.5 8.55c.015 2.379 6.398 3.11 8.167 3.607c1.064.299 1.349.604 1.594 1.72c1.111 5.052 1.67 7.566 2.94 7.622c2.027.09 7.972-16.158 5.847-18.447M11.5 12.5L15 9" color="currentColor"></svg:path>`,
})
export class HugeiconsSentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSent02Icon],svg[hugeicons-sent-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.628 18.165l-.017-.006l-.015.02l-.84 1.201l-.073.097c-1.474 1.949-2.293 3.033-3.297 3.033l.01-.01c-.13 0-.26-.02-.39-.05c-1.27-.34-1.27-1.72-1.27-4.47v-1.85l-.58-.2c-4.21-1.46-6.3-2.19-6.41-4c-.1-1.825 1.91-2.775 5.91-4.666l.03-.014l7.32-3.46c3.3-1.57 4.96-2.35 6.3-1.36s1.04 2.78.44 6.34l-.96 5.7l-.007.038c-.396 2.296-.61 3.536-1.703 4.172c-.38.22-.76.32-1.2.32l-.01-.01c-.83 0-1.832-.343-3.238-.825m-4.392-1.517v1.332c0 1.38 0 2.8.21 3.06c.26-.1 1.2-1.34 2.1-2.54l.597-.848zM8.316 8.6c-3.09 1.46-5.12 2.42-5.08 3.24c.05.81 2.17 1.55 5.38 2.66l.409.141l7.43-7.431c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.914 6.915l4.415 1.525c1.94.67 2.81.95 3.29.67c.47-.28.64-1.16.98-3.13l.96-5.71l.012-.072c.443-2.67.732-4.412.138-4.848c-.606-.447-2.149.28-4.706 1.485l-.054.025l-7.32 3.46z" color="currentColor"></svg:path>`,
})
export class HugeiconsSent02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSeoIcon],svg[hugeicons-seo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m5 20l2.413-2.413m0 0a4.444 4.444 0 1 0 6.285-6.285a4.444 4.444 0 0 0-6.285 6.285"></svg:path><svg:path d="M3 15.188a7.4 7.4 0 0 1-1-3.726C2 7.341 5.358 4 9.5 4h5c4.142 0 7.5 3.341 7.5 7.462c0 3.25-2.087 6.014-5 7.038"></svg:path></svg:g>`,
})
export class HugeiconsSeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsServerStack01Icon],svg[hugeicons-server-stack-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 10.813h14c.99 0 1.54 0 2.06-.21c.67-.29 1.19-.81 1.48-1.49c.21-.5.21-1.06.21-2.05s0-1.54-.21-2.06c-.29-.67-.81-1.19-1.49-1.48c-.5-.21-1.05-.21-2.05-.21H5c-.99 0-1.54 0-2.06.21c-.67.29-1.19.81-1.48 1.49c-.21.5-.21 1.06-.21 2.05s0 1.54.21 2.06c.29.67.81 1.19 1.49 1.48c.5.21 1.05.21 2.05.21m0-6h14c.78 0 1.25 0 1.47.09c.31.13.55.37.68.67c.09.24.09.71.09 1.489v.001c0 .78 0 1.25-.09 1.47c-.13.31-.37.55-.67.68c-.24.09-.71.09-1.49.09h-14c-.78 0-1.25 0-1.47-.09c-.31-.13-.55-.37-.68-.67c-.09-.24-.09-.71-.09-1.49s0-1.25.09-1.47c.13-.31.37-.55.67-.68c.24-.09.71-.09 1.49-.09m0 16h14c.99 0 1.54 0 2.06-.21c.67-.29 1.19-.81 1.48-1.49c.21-.5.21-1.06.21-2.05s0-1.54-.21-2.06c-.29-.67-.81-1.19-1.49-1.48c-.5-.21-1.05-.21-2.05-.21H5c-.99 0-1.54 0-2.06.21c-.67.29-1.19.81-1.48 1.49c-.21.5-.21 1.06-.21 2.05s0 1.54.21 2.06c.29.67.81 1.19 1.49 1.48c.5.21 1.05.21 2.05.21m0-6h14c.78 0 1.25 0 1.47.09c.31.13.55.37.68.67c.09.24.09.71.09 1.489v.001c0 .78 0 1.25-.09 1.47c-.13.31-.37.55-.67.68c-.24.09-.71.09-1.49.09h-14c-.78 0-1.25 0-1.47-.09c-.31-.13-.55-.37-.68-.67c-.09-.24-.09-.71-.09-1.49s0-1.25.09-1.47c.13-.31.37-.55.67-.68c.24-.09.71-.09 1.49-.09m1.01 3.25c-.55 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.45 1-1 1m3-1c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1c-.56 0-1 .45-1 1m-3-9c-.55 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.45 1-1 1m3-1c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1c-.56 0-1 .45-1 1" color="currentColor"></svg:path>`,
})
export class HugeiconsServerStack01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsServerStack02Icon],svg[hugeicons-server-stack-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.498 8.986h-13c-.5 0-.78 0-1.04-.06a2.76 2.76 0 0 1-2.15-2.15c-.05-.26-.05-.54-.05-1.04s0-.78.06-1.04a2.76 2.76 0 0 1 2.15-2.15c.26-.05.54-.05 1.04-.05h13.001c.5 0 .78 0 1.039.06c1.08.22 1.93 1.07 2.15 2.15c.05.26.05.54.05 1.04s0 .78-.06 1.04a2.76 2.76 0 0 1-2.15 2.15c-.26.05-.54.05-1.04.05m-13-5c-.37 0-.62 0-.73.02c-.5.1-.89.49-.99.99c-.03.12-.03.37-.03.74s0 .62.02.73c.1.5.49.89.99.99c.12.03.37.03.74.03h13c.37 0 .62 0 .73-.02c.5-.1.89-.49.99-.99c.03-.12.03-.37.03-.739v-.003c0-.369 0-.618-.02-.728c-.1-.5-.49-.89-.99-.99c-.12-.03-.37-.03-.74-.03zm13 13h-13c-.5 0-.78 0-1.04-.06a2.76 2.76 0 0 1-2.15-2.15c-.05-.26-.05-.54-.05-1.04s0-.78.06-1.04a2.76 2.76 0 0 1 2.15-2.15c.26-.05.54-.05 1.04-.05h13.001c.5 0 .78 0 1.039.06c1.08.22 1.93 1.07 2.15 2.15c.05.26.05.54.05 1.04s0 .78-.06 1.04a2.76 2.76 0 0 1-2.15 2.15c-.26.05-.54.05-1.04.05m-13-5c-.37 0-.62 0-.73.02c-.5.1-.89.49-.99.99c-.03.12-.03.37-.03.74s0 .62.02.73c.1.5.49.89.99.99c.12.03.37.03.74.03h13c.37 0 .62 0 .73-.02c.5-.1.89-.49.99-.99c.03-.12.03-.37.03-.739v-.003c0-.369 0-.618-.02-.728c-.1-.5-.49-.89-.99-.99c-.12-.03-.37-.03-.74-.03zm-1.25 9.25c0 .41.34.75.75.75h14c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-6.25v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.25h-6.25c-.41 0-.75.34-.75.75m1.76-6.75a.749.749 0 1 1-.002-1.502a.749.749 0 0 1 .002 1.502m-.75-8.75c0 .41.34.75.75.75s.75-.34.75-.75s-.34-.75-.75-.75c-.42 0-.75.34-.75.75m3.75 8.75a.749.749 0 1 1-.002-1.502a.749.749 0 0 1 .002 1.502m-.75-8.75c0 .41.34.75.75.75s.75-.34.75-.75s-.34-.75-.75-.75c-.42 0-.75.34-.75.75" color="currentColor"></svg:path>`,
})
export class HugeiconsServerStack02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsServerStack03Icon],svg[hugeicons-server-stack-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.51 10.08c.24-.09.71-.09 1.49-.09h12c.78 0 1.25 0 1.47.09c.31.13.55.37.68.67c.09.24.09.71.09 1.49v.001c0 .78 0 1.25-.09 1.47c-.13.31-.37.55-.67.68c-.24.09-.71.09-1.49.09h-12c-.78 0-1.25 0-1.47-.09c-.31-.13-.55-.37-.68-.67c-.09-.24-.09-.71-.09-1.49s0-1.25.09-1.47c.13-.31.37-.55.67-.68M2.46 8.3c.156.361.38.679.658.94a2.8 2.8 0 0 0-.658.95c-.21.5-.21 1.06-.21 2.05s0 1.54.21 2.06c.156.361.38.679.658.94a2.8 2.8 0 0 0-.658.95c-.21.5-.21 1.06-.21 2.05s0 1.54.21 2.06c.29.67.81 1.19 1.49 1.48c.5.21 1.05.21 2.05.21h12c.99 0 1.54 0 2.06-.21c.67-.29 1.19-.81 1.48-1.49c.21-.5.21-1.06.21-2.05s0-1.54-.21-2.06a2.8 2.8 0 0 0-.658-.94a2.8 2.8 0 0 0 .658-.95c.21-.5.21-1.06.21-2.05s0-1.54-.21-2.06a2.8 2.8 0 0 0-.658-.94a2.8 2.8 0 0 0 .658-.95c.21-.5.21-1.06.21-2.05s0-1.54-.21-2.06c-.29-.67-.81-1.19-1.49-1.48c-.5-.21-1.05-.21-2.05-.21H6c-.99 0-1.54 0-2.06.21c-.67.29-1.19.81-1.48 1.49c-.21.5-.21 1.06-.21 2.05s0 1.54.21 2.06M6 15.99c-.78 0-1.25 0-1.49.09c-.3.13-.54.37-.67.68c-.09.22-.09.69-.09 1.47s0 1.25.09 1.49c.13.3.37.54.68.67c.22.09.69.09 1.47.09h12c.78 0 1.25 0 1.49-.09c.3-.13.54-.37.67-.68c.09-.22.09-.69.09-1.469v-.002c0-.78 0-1.249-.09-1.489c-.13-.3-.37-.54-.68-.67c-.22-.09-.69-.09-1.47-.09zm0-12c-.78 0-1.25 0-1.49.09c-.3.13-.54.37-.67.68c-.09.22-.09.69-.09 1.47s0 1.25.09 1.49c.13.3.37.54.68.67c.22.09.69.09 1.47.09h12c.78 0 1.25 0 1.49-.09c.3-.13.54-.37.67-.68c.09-.22.09-.69.09-1.469v-.002c0-.78 0-1.249-.09-1.489c-.13-.3-.37-.54-.68-.67c-.22-.09-.69-.09-1.47-.09zm.01 3a.749.749 0 1 1-.002-1.502a.749.749 0 0 1 .002 1.502m-.75 5.25c0 .41.34.75.75.75s.75-.34.75-.75s-.34-.75-.75-.75c-.42 0-.75.34-.75.75m.75 6.75a.749.749 0 1 1-.002-1.502a.749.749 0 0 1 .002 1.502M8.26 6.24c0 .41.34.75.75.75s.75-.34.75-.75s-.34-.75-.75-.75c-.42 0-.75.34-.75.75m.75 6.75a.749.749 0 1 1-.002-1.502a.749.749 0 0 1 .002 1.502m-.75 5.25c0 .41.34.75.75.75s.75-.34.75-.75s-.34-.75-.75-.75c-.42 0-.75.34-.75.75" color="currentColor"></svg:path>`,
})
export class HugeiconsServerStack03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsServiceIcon],svg[hugeicons-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.417 15.713c3.951-5.01 2.884-9.978.046-11.719c-2.682-1.645-5.023-.982-6.429.074L12 4.842m7.417 10.871c-.948 1.203-2.185 2.407-3.757 3.57C14.115 20.428 13.342 21 12 21s-2.114-.572-3.66-1.717C.222 13.275 1.018 6.153 4.537 3.994c2.682-1.645 5.023-.982 6.429.074L12 4.842m7.417 10.871l-5.525-6.268a.7.7 0 0 0-.895-.13l-2.186 1.366a1.965 1.965 0 0 1-2.233-3.23L12 4.841" color="currentColor"></svg:path>`,
})
export class HugeiconsServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsServingFoodIcon],svg[hugeicons-serving-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.768 11.676c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.57 3.52-8.34 8-8.72v-.78c0-.41.34-.75.75-.75s.75.34.75.75v.78c4.48.38 8 4.15 8 8.72c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4-3.25-7.25-7.25-7.25s-7.25 3.25-7.25 7.25m-1.751 1.75h17.96c.41 0 .75.34.75.75s-.34.75-.75.75h-1.67l-2.59 2.85c-1.14 1.24-1.74 1.89-2.56 2.28c-.83.4-1.73.46-3.37.56l-3.25.21c-.67.04-.98.07-1.19.16c-.2.09-.4.29-.9.79l-.93.93c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.93-.93c.55-.55.88-.88 1.35-1.09c.46-.21.93-.25 1.72-.29l3.25-.21l.172-.012c1.386-.092 2.1-.14 2.648-.408c.552-.257 1.036-.785 1.99-1.826l.04-.044l1.74-1.91h-1.49l-1.57 1.57q-.085.08-.142.136a2 2 0 0 1-.158.144c-.42.37-.96.6-1.55.64c-.07.01-.18.01-.39.01h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.73c-.1-.49-.48-.87-.98-.97c-.12-.03-.35-.03-.74-.03h-.78c-.97 0-1.46 0-1.86.1c-.32.07-.6.19-.84.34c-.37.22-.71.56-1.4 1.25l-3.08 3.09c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l3.08-3.08c.25-.25.46-.46.65-.64h-1.2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75m10.105 2.076l.065-.066l.51-.51h-1.24c.11.22.2.46.25.71c.02.05.03.11.03.16c.09-.05.17-.1.25-.17a1 1 0 0 0 .135-.124" color="currentColor"></svg:path>`,
})
export class HugeiconsServingFoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSetting06Icon],svg[hugeicons-setting-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.79 9.152C21.598 10.542 22 11.237 22 12s-.403 1.458-1.21 2.848l-1.923 3.316c-.803 1.384-1.205 2.076-1.865 2.456s-1.462.38-3.065.38h-3.874c-1.603 0-2.405 0-3.065-.38s-1.062-1.072-1.865-2.456L3.21 14.848C2.403 13.458 2 12.763 2 12s.403-1.458 1.21-2.848l1.923-3.316C5.936 4.452 6.338 3.76 6.998 3.38S8.46 3 10.063 3h3.874c1.603 0 2.405 0 3.065.38s1.062 1.072 1.865 2.456zM9 8l6 8" color="currentColor"></svg:path>`,
})
export class HugeiconsSetting06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSetting07Icon],svg[hugeicons-setting-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.308 4.384c-.59 0-.886 0-1.155-.1l-.111-.046c-.261-.12-.47-.328-.888-.746c-.962-.962-1.443-1.443-2.034-1.488a2 2 0 0 0-.24 0c-.591.045-1.072.526-2.034 1.488c-.418.418-.627.627-.888.746l-.11.046c-.27.1-.565.1-1.156.1h-.11c-1.507 0-2.261 0-2.73.468s-.468 1.223-.468 2.73v.11c0 .59 0 .886-.1 1.155q-.022.057-.046.111c-.12.261-.328.47-.746.888c-.962.962-1.443 1.443-1.488 2.034a2 2 0 0 0 0 .24c.045.591.526 1.072 1.488 2.034c.418.418.627.627.746.888q.025.054.046.11c.1.27.1.565.1 1.156v.11c0 1.507 0 2.261.468 2.73s1.223.468 2.73.468h.11c.59 0 .886 0 1.155.1q.057.021.111.046c.261.12.47.328.888.746c.962.962 1.443 1.443 2.034 1.488q.12.009.24 0c.591-.045 1.072-.526 2.034-1.488c.418-.418.627-.626.888-.746q.054-.025.11-.046c.27-.1.565-.1 1.156-.1h.11c1.507 0 2.261 0 2.73-.468s.468-1.223.468-2.73v-.11c0-.59 0-.886.1-1.155q.021-.057.046-.111c.12-.261.328-.47.746-.888c.962-.962 1.443-1.443 1.488-2.034q.009-.12 0-.24c-.045-.591-.526-1.072-1.488-2.034c-.418-.418-.626-.627-.746-.888l-.046-.11c-.1-.27-.1-.565-.1-1.156v-.11c0-1.507 0-2.261-.468-2.73s-1.223-.468-2.73-.468z"></svg:path><svg:path d="M15.5 12a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path></svg:g>`,
})
export class HugeiconsSetting07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettingDone01Icon],svg[hugeicons-setting-done-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.232 10.055c.48-.54 1.308-1.356 1.264-1.689c.034-.323-.141-.627-.491-1.234l-.494-.856c-.373-.648-.56-.972-.877-1.101c-.318-.13-.677-.028-1.395.176l-1.22.344c-.46.106-.94.046-1.359-.17l-.337-.194a2 2 0 0 1-.788-.968l-.334-.997c-.22-.66-.33-.99-.59-1.179C13.348 2 13 2 12.306 2h-1.114c-.695 0-1.042 0-1.303.188c-.262.19-.371.52-.591 1.18l-.334.996a2 2 0 0 1-.788.968l-.337.195c-.419.215-.9.275-1.359.169l-1.22-.344c-.718-.204-1.077-.306-1.395-.176c-.317.129-.504.453-.877 1.1l-.494.857c-.35.607-.525.911-.49 1.234c.033.323.267.584.736 1.105l1.03 1.152c.253.32.432.876.432 1.375c0 .5-.18 1.056-.431 1.375L2.74 14.526c-.469.521-.703.781-.737 1.105s.141.627.491 1.234l.494.856c.373.648.56.972.877 1.101c.318.13.677.028 1.395-.176l1.22-.344a2 2 0 0 1 1.36.17l.336.194c.359.23.635.569.788.968l.334.997c.22.66.34 1.003.541 1.148c.06.043.3.24.888.221M15 17.218s1 .284 1.5 1.284c0 0 1.096-2.5 2.508-3"></svg:path><svg:path d="M22 16.999a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-7.84-7.556c-.84-.684-1.5-.948-2.46-.948c-1.8.024-3.444 1.51-3.444 3.444c0 1.065.324 1.74.936 2.448"></svg:path></svg:g>`,
})
export class HugeiconsSettingDone01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettingDone02Icon],svg[hugeicons-setting-done-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.588 19.68c-.396.36-.805.804-.972.827s-.341-.084-.714-.295L6 19.14c-.48-.24-.504-.42-.504-.48s0-.314.156-.836c.5-1.924-.672-3.964-2.663-4.484c-.522-.14-.783-.211-.886-.346S2 12.644 2 12.21v-1.923c0-.433 0-.65.103-.784c.103-.135.364-.205.886-.346c1.95-.526 3.172-2.508 2.67-4.445c-.14-.533-.208-.8-.142-.956s.255-.264.635-.48l1.725-.979c.372-.21.558-.317.725-.294c.167.022.355.21.732.587c1.46 1.455 3.874 1.455 5.333 0c.377-.376.566-.564.733-.587c.167-.022.353.083.725.295l1.725.979c.38.215.569.323.635.48c.066.155-.003.422-.142.955c-.503 1.937.718 3.93 2.668 4.456c.522.14.783.213.886.348s.103.563.103.996m-7 6.708s1 .284 1.5 1.284c0 0 1.096-2.5 2.508-3"></svg:path><svg:path d="M22 17a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-7.12-7.7a3.62 3.62 0 0 0-2.916-1.5c-1.8.024-3.444 1.51-3.444 3.444c0 1.066.3 1.836 1.14 2.676"></svg:path></svg:g>`,
})
export class HugeiconsSettingDone02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettingDone03Icon],svg[hugeicons-setting-done-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 17.5s.5 0 1 1c0 0 1.588-2.5 3-3"></svg:path><svg:path d="M22 17a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-7.616-7.563a3.5 3.5 0 0 0-4.947 4.947"></svg:path><svg:path d="M9.78 20.436c-.446-.446-.592-.58-.874-.697c-.285-.119-.58-.123-1.214-.123c-1.508 0-2.371 0-2.84-.468s-.468-1.332-.468-2.84c0-.63-.004-.926-.121-1.21s-.323-.496-.771-.944C2.928 13.59 2 12.886 2 12s.928-1.59 1.492-2.154c.446-.446.652-.658.77-.94c.118-.285.122-.58.122-1.214c0-1.508 0-2.371.468-2.84s1.332-.468 2.84-.468c.629 0 .925-.004 1.207-.12c.286-.117.498-.323.947-.772C10.41 2.928 11.21 2 12 2s1.59.928 2.154 1.492c.449.448.662.654.946.772c.283.116.579.12 1.208.12c1.508 0 2.371 0 2.84.468s.468 1.332.468 2.84c0 .632.004.928.122 1.211s.251.418.698.865"></svg:path></svg:g>`,
})
export class HugeiconsSettingDone03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettingDone04Icon],svg[hugeicons-setting-done-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 17.5s.5 0 1 1c0 0 1.588-2.5 3-3"></svg:path><svg:path d="M22 17a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-6.971-7.755a3.5 3.5 0 1 0-5.301 4.417"></svg:path><svg:path d="M21.984 10.74c-.024-.54-.387-1.198-1.193-2.588l-1.924-3.316c-.803-1.384-1.205-2.076-1.865-2.456S15.54 2 13.937 2h-3.874c-1.603 0-2.405 0-3.065.38S5.936 3.452 5.133 4.836L3.21 8.152C2.403 9.542 2 10.237 2 11s.403 1.458 1.21 2.848l1.923 3.316c.803 1.384 1.205 2.076 1.865 2.456c.622.3 1 .38 2.602.38"></svg:path></svg:g>`,
})
export class HugeiconsSettingDone04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettingError03Icon],svg[hugeicons-setting-error-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 15v2m.009 2H17m5-2a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-7.616-7.563a3.5 3.5 0 0 0-4.947 4.947"></svg:path><svg:path d="M9.78 20.436c-.446-.446-.592-.58-.874-.697c-.285-.119-.58-.123-1.214-.123c-1.508 0-2.371 0-2.84-.468s-.468-1.332-.468-2.84c0-.63-.004-.926-.121-1.21s-.323-.496-.771-.944C2.928 13.59 2 12.886 2 12s.928-1.59 1.492-2.154c.446-.446.652-.658.77-.94c.118-.285.122-.58.122-1.214c0-1.508 0-2.371.468-2.84s1.332-.468 2.84-.468c.629 0 .925-.004 1.207-.12c.286-.117.498-.323.947-.772C10.41 2.928 11.21 2 12 2s1.59.928 2.154 1.492c.449.448.662.654.946.772c.283.116.579.12 1.208.12c1.508 0 2.371 0 2.84.468s.468 1.332.468 2.84c0 .632.004.928.122 1.211s.251.418.698.865"></svg:path></svg:g>`,
})
export class HugeiconsSettingError03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettingError04Icon],svg[hugeicons-setting-error-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 15v2m.009 2H17m5-2a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-6.971-7.755a3.5 3.5 0 1 0-5.301 4.417"></svg:path><svg:path d="M21.984 10.74c-.024-.54-.387-1.198-1.193-2.588l-1.924-3.316c-.803-1.384-1.205-2.076-1.865-2.456S15.54 2 13.937 2h-3.874c-1.603 0-2.405 0-3.065.38S5.936 3.452 5.133 4.836L3.21 8.152C2.403 9.542 2 10.237 2 11s.403 1.458 1.21 2.848l1.923 3.316c.803 1.384 1.205 2.076 1.865 2.456c.622.3 1 .38 2.602.38"></svg:path></svg:g>`,
})
export class HugeiconsSettingError04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettings01Icon],svg[hugeicons-settings-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m21.318 7.141l-.494-.856c-.373-.648-.56-.972-.878-1.101c-.317-.13-.676-.027-1.395.176l-1.22.344c-.459.106-.94.046-1.358-.17l-.337-.194a2 2 0 0 1-.788-.967l-.334-.998c-.22-.66-.33-.99-.591-1.178c-.261-.19-.609-.19-1.303-.19h-1.115c-.694 0-1.041 0-1.303.19c-.261.188-.37.518-.59 1.178l-.334.998a2 2 0 0 1-.789.967l-.337.195c-.418.215-.9.275-1.358.17l-1.22-.345c-.719-.203-1.078-.305-1.395-.176c-.318.129-.505.453-.878 1.1l-.493.857c-.35.608-.525.911-.491 1.234c.034.324.268.584.736 1.105l1.031 1.153c.252.319.431.875.431 1.375s-.179 1.056-.43 1.375l-1.032 1.152c-.468.521-.702.782-.736 1.105s.14.627.49 1.234l.494.857c.373.647.56.971.878 1.1s.676.028 1.395-.176l1.22-.344a2 2 0 0 1 1.359.17l.336.194c.36.23.636.57.788.968l.334.997c.22.66.33.99.591 1.18c.262.188.609.188 1.303.188h1.115c.694 0 1.042 0 1.303-.189s.371-.519.59-1.179l.335-.997c.152-.399.428-.738.788-.968l.336-.194c.42-.215.9-.276 1.36-.17l1.22.344c.718.204 1.077.306 1.394.177c.318-.13.505-.454.878-1.101l.493-.857c.35-.607.525-.91.491-1.234s-.268-.584-.736-1.105l-1.031-1.152c-.252-.32-.431-.875-.431-1.375s.179-1.056.43-1.375l1.032-1.153c.468-.52.702-.781.736-1.105s-.14-.626-.49-1.234"></svg:path><svg:path d="M15.52 12a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path></svg:g>`,
})
export class HugeiconsSettings01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettings02Icon],svg[hugeicons-settings-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.5 12a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M21.011 14.097c.522-.141.783-.212.886-.346c.103-.135.103-.351.103-.784v-1.934c0-.433 0-.65-.103-.784s-.364-.205-.886-.345c-1.95-.526-3.171-2.565-2.668-4.503c.139-.533.208-.8.142-.956s-.256-.264-.635-.479l-1.725-.98c-.372-.21-.558-.316-.725-.294s-.356.21-.733.587c-1.459 1.455-3.873 1.455-5.333 0c-.377-.376-.565-.564-.732-.587c-.167-.022-.353.083-.725.295l-1.725.979c-.38.215-.57.323-.635.48c-.066.155.003.422.141.955c.503 1.938-.718 3.977-2.669 4.503c-.522.14-.783.21-.886.345S2 10.6 2 11.033v1.934c0 .433 0 .65.103.784s.364.205.886.346c1.95.526 3.171 2.565 2.668 4.502c-.139.533-.208.8-.142.956s.256.264.635.48l1.725.978c.372.212.558.317.725.295s.356-.21.733-.587c1.46-1.457 3.876-1.457 5.336 0c.377.376.565.564.732.587c.167.022.353-.083.726-.295l1.724-.979c.38-.215.57-.323.635-.48s-.003-.422-.141-.955c-.504-1.937.716-3.976 2.666-4.502"></svg:path></svg:g>`,
})
export class HugeiconsSettings02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettings03Icon],svg[hugeicons-settings-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.5 12a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M20.79 9.152C21.598 10.542 22 11.237 22 12s-.403 1.458-1.21 2.848l-1.923 3.316c-.803 1.384-1.205 2.076-1.865 2.456s-1.462.38-3.065.38h-3.874c-1.603 0-2.405 0-3.065-.38s-1.062-1.072-1.865-2.456L3.21 14.848C2.403 13.458 2 12.763 2 12s.403-1.458 1.21-2.848l1.923-3.316C5.936 4.452 6.338 3.76 6.998 3.38S8.46 3 10.063 3h3.874c1.603 0 2.405 0 3.065.38s1.062 1.072 1.865 2.456z"></svg:path></svg:g>`,
})
export class HugeiconsSettings03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettings04Icon],svg[hugeicons-settings-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M10 15.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m7-7a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M8.5 14V7m7 3v7"></svg:path></svg:g>`,
})
export class HugeiconsSettings04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettings05Icon],svg[hugeicons-settings-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M8.5 10a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m7 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M10 8.5h7m-3 7H7"></svg:path></svg:g>`,
})
export class HugeiconsSettings05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettingsError01Icon],svg[hugeicons-settings-error-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 14.998v2m.009 2H17m5-2a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path><svg:path d="M20.232 10.054c.48-.54 1.308-1.356 1.264-1.688c.034-.323-.141-.627-.491-1.234l-.494-.857c-.373-.648-.56-.972-.877-1.1c-.318-.13-.677-.028-1.395.176l-1.22.343c-.46.106-.94.046-1.359-.169l-.337-.194a2 2 0 0 1-.788-.968l-.334-.997c-.22-.66-.33-.99-.59-1.18c-.262-.188-.61-.188-1.304-.188h-1.114c-.695 0-1.042 0-1.303.189c-.262.189-.371.519-.591 1.179l-.334.997a2 2 0 0 1-.788.968l-.337.194a2 2 0 0 1-1.359.17l-1.22-.344c-.718-.204-1.077-.306-1.395-.177c-.317.13-.504.453-.877 1.101l-.494.857c-.35.607-.525.91-.49 1.234c.033.323.267.583.736 1.104l1.03 1.153c.253.319.432.875.432 1.375s-.18 1.056-.431 1.375L2.74 14.526c-.469.52-.703.781-.737 1.104s.141.627.491 1.234l.494.857c.373.648.56.972.877 1.1c.318.13.677.028 1.395-.176l1.22-.343c.46-.106.94-.046 1.36.169l.336.194c.359.23.635.57.788.968l.334.998c.22.66.34 1.003.541 1.147c.06.043.3.24.888.222"></svg:path><svg:path d="M14.16 9.446c-.84-.684-1.5-.948-2.46-.948c-1.8.024-3.444 1.511-3.444 3.444c0 1.066.324 1.74.936 2.448"></svg:path></svg:g>`,
})
export class HugeiconsSettingsError01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettingsError02Icon],svg[hugeicons-settings-error-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.588 19.68c-.396.36-.805.804-.972.827s-.341-.084-.714-.295L6 19.14c-.48-.24-.504-.42-.504-.48s0-.314.156-.836c.5-1.924-.672-3.964-2.663-4.484c-.522-.14-.783-.211-.886-.346S2 12.644 2 12.21v-1.923c0-.433 0-.65.103-.784c.103-.135.364-.205.886-.346c1.95-.526 3.172-2.508 2.67-4.445c-.14-.533-.208-.8-.142-.956s.255-.264.635-.48l1.725-.979c.372-.21.558-.317.725-.294c.167.022.355.21.732.587c1.46 1.455 3.874 1.455 5.333 0c.377-.376.566-.564.733-.587c.167-.022.353.083.725.295l1.725.979c.38.215.569.323.635.48c.066.155-.003.422-.142.955c-.503 1.937.718 3.93 2.668 4.456c.522.14.783.213.886.348s.103.563.103.996"></svg:path><svg:path d="M14.88 9.3a3.62 3.62 0 0 0-2.916-1.5c-1.8.024-3.444 1.51-3.444 3.444c0 1.066.3 1.836 1.14 2.676M17 15v2m.009 2H17m5-2a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class HugeiconsSettingsError02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSetup01Icon],svg[hugeicons-setup-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m17.458 9.08l-.291-.514c-.22-.389-.33-.583-.518-.66c-.187-.078-.399-.017-.822.106l-.72.206a1.16 1.16 0 0 1-.801-.102L14.107 8a1.2 1.2 0 0 1-.465-.581l-.197-.598c-.129-.396-.194-.594-.348-.708S12.738 6 12.33 6h-.658c-.41 0-.614 0-.768.113c-.154.114-.219.312-.348.708l-.197.598a1.2 1.2 0 0 1-.465.58l-.199.117c-.247.13-.53.165-.801.102l-.72-.206c-.423-.123-.635-.184-.822-.106c-.188.077-.298.271-.518.66l-.291.514c-.206.364-.31.547-.29.74c.02.194.159.35.435.663l.608.692c.149.191.254.525.254.825s-.105.633-.254.825l-.608.692h0c-.276.312-.415.468-.435.662s.084.377.29.74l.291.515c.22.388.33.583.518.66c.187.078.399.017.822-.106l.72-.206a1.16 1.16 0 0 1 .801.102l.199.116c.212.138.374.342.465.581l.197.599c.129.396.194.593.348.707s.359.113.768.113h.658c.41 0 .614 0 .768-.113c.154-.114.219-.311.348-.707l.197-.599c.09-.24.253-.443.465-.58l.199-.117c.247-.13.53-.165.801-.102l.72.206c.423.123.635.184.822.106c.188-.077.298-.272.518-.66h0l.291-.514c.206-.364.31-.547.29-.74c-.02-.195-.159-.35-.435-.663l-.608-.692c-.149-.191-.254-.525-.254-.825s.105-.634.254-.825l.608-.692c.276-.312.415-.469.434-.662s-.083-.377-.289-.74"></svg:path><svg:circle cx="12" cy="12" r="1.75"></svg:circle><svg:path d="M19 2v2.859A9.97 9.97 0 0 0 12 2C6.477 2 2 6.477 2 12a10 10 0 0 0 .832 4M5 22v-2.859A9.97 9.97 0 0 0 12 22c5.523 0 10-4.477 10-10a10 10 0 0 0-.832-4"></svg:path></svg:g>`,
})
export class HugeiconsSetup01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSetup02Icon],svg[hugeicons-setup-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.03 13.348c.541-.249.812-.373.891-.497c.079-.123.079-.32.079-.712v-.278c0-.393 0-.589-.079-.712c-.079-.124-.35-.248-.891-.497c-.803-.37-1.319-1.177-1.291-2.023c.021-.646.032-.969-.039-1.091c-.07-.123-.24-.216-.578-.402l-.323-.177c-.33-.18-.494-.27-.634-.263c-.14.006-.38.168-.857.492a2.36 2.36 0 0 1-2.615 0c-.478-.324-.716-.486-.857-.493c-.14-.006-.305.084-.634.264l-.323.177c-.339.186-.508.279-.578.401c-.07.123-.06.446-.04 1.092c.028.846-.488 1.654-1.29 2.023c-.542.249-.813.373-.892.497c-.079.123-.079.32-.079.712v.278c0 .393 0 .59.079.712c.079.124.35.248.891.497c.803.37 1.319 1.177 1.291 2.023c-.021.646-.032.969.039 1.091c.07.123.24.216.579.402l.322.177c.33.18.494.27.634.264s.38-.169.857-.493a2.36 2.36 0 0 1 2.617 0c.477.324.716.486.857.492c.14.007.305-.083.634-.263l.322-.177c.34-.186.51-.279.58-.402c.07-.122.059-.445.038-1.091c-.028-.846.487-1.654 1.29-2.023"></svg:path><svg:circle cx="12" cy="12" r="1.75"></svg:circle><svg:path d="M19 2v2.859A9.97 9.97 0 0 0 12 2C6.477 2 2 6.477 2 12a10 10 0 0 0 .832 4M5 22v-2.859A9.97 9.97 0 0 0 12 22c5.523 0 10-4.477 10-10a10 10 0 0 0-.832-4"></svg:path></svg:g>`,
})
export class HugeiconsSetup02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSevenCircleIcon],svg[hugeicons-seven-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 7h5.584a.416.416 0 0 1 .383.577L11 17"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class HugeiconsSevenCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSevenSquareIcon],svg[hugeicons-seven-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.997 12c0-4.478 0-6.718 1.391-8.109S8.018 2.5 12.498 2.5c4.477 0 6.717 0 8.108 1.391s1.391 3.63 1.391 8.109c0 4.478 0 6.718-1.391 8.109s-3.63 1.391-8.109 1.391c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109"></svg:path><svg:path d="M9.497 7h5.584a.416.416 0 0 1 .383.577L11.497 17"></svg:path></svg:g>`,
})
export class HugeiconsSevenSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSevenZ01Icon],svg[hugeicons-seven-z-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.992 13.05c0 .41.34.75.75.75l.01.01c.41 0 .75-.34.75-.75v-2.34c0-.89 0-1.38-.21-1.89c-.2-.49-.55-.84-1.18-1.47l-4.74-4.74c-.54-.55-.84-.85-1.25-1.03l-.13-.06q-.004 0-.014-.007a.6.6 0 0 0-.146-.063c-.45-.15-.86-.15-1.618-.15h-.002c-3.42 0-5.14 0-6.45 1.06c-.26.21-.5.45-.71.71c-1.06 1.3-1.06 3.02-1.06 6.44v3.54c0 .41.34.75.75.75s.75-.34.75-.75V9.52c0-3.07 0-4.61.72-5.5c.14-.18.31-.34.49-.49c.9-.72 2.43-.72 5.5-.72h.79v.24c0 3.03 0 4.55 1.1 5.65s2.62 1.1 5.649 1.1h.231c.02.21.02.49.02.91zm-4.84-5.41c-.59-.59-.66-1.7-.66-3.78l4.44 4.44c-2.09-.01-3.19-.07-3.78-.66m-7.74 15.08c.1.05.22.08.33.08c.27 0 .54-.16.67-.42l3-6c.12-.23.11-.51-.03-.73a.74.74 0 0 0-.64-.36h-4c-.41 0-.75.34-.75.75s.34.75.75.75h2.79l-2.46 4.92c-.18.37-.03.82.34 1.01m7.33.08h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.6l3.22-4.83c.16-.23.17-.53.04-.77a.74.74 0 0 0-.66-.4h-4c-.41 0-.75.34-.75.75s.34.75.75.75h2.6l-3.22 4.83c-.16.23-.17.53-.04.77c.13.25.38.4.66.4" color="currentColor"></svg:path>`,
})
export class HugeiconsSevenZ01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSevenZ02Icon],svg[hugeicons-seven-z-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.742 22.799h8l.01.01c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-8c-3.56 0-5.35 0-6.3-.95s-.95-2.74-.95-6.3v-4.54c0-3.07 0-4.61.72-5.5c.14-.18.31-.34.49-.49c.9-.72 2.43-.72 5.5-.72h.79v.24c0 3.03 0 4.55 1.1 5.65s2.62 1.1 5.649 1.1h.221c.03.36.03.84.03 1.25s.34.75.75.75s.75-.34.75-.75c0-1.07-.01-1.74-.21-2.23s-.55-.84-1.18-1.47l-4.74-4.74c-.54-.55-.84-.85-1.25-1.03l-.13-.06l-.013-.007a.6.6 0 0 0-.147-.063c-.45-.15-.86-.15-1.62-.15c-3.42 0-5.14 0-6.45 1.06c-.26.21-.5.45-.71.71c-1.06 1.3-1.06 3.02-1.06 6.44v4.54c0 3.98 0 5.97 1.39 7.36s3.38 1.39 7.36 1.39m2.41-15.16c-.59-.59-.66-1.7-.66-3.78l4.44 4.44c-2.09-.01-3.19-.07-3.78-.66m-2.69 12.11c.09.03.19.05.28.05v.01c.3 0 .58-.18.7-.47l2-5a.76.76 0 0 0-.08-.7a.74.74 0 0 0-.62-.33h-3c-.41 0-.75.34-.75.75s.34.75.75.75h1.89l-1.59 3.97c-.15.38.04.82.42.97m5.28.05h3c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.68l2.32-3.86a.77.77 0 0 0 0-.75a.75.75 0 0 0-.65-.38h-3c-.41 0-.75.34-.75.75s.34.75.75.75h1.68l-2.32 3.86a.77.77 0 0 0 0 .75c.13.23.38.38.65.38" color="currentColor"></svg:path>`,
})
export class HugeiconsSevenZ02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShaka01Icon],svg[hugeicons-shaka-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.329 5.952L10.5 8.147c1.39 0 2.085 0 2.613.213a3.06 3.06 0 0 1 1.828 2.182c.127.57.023 1.276-.183 2.69L14 17.401h5.25c.966 0 1.75.805 1.75 1.799s-.784 1.8-1.75 1.8h-8.2c-2.847 0-4.271 0-5.355-.58a5.07 5.07 0 0 1-2.132-2.192C3 17.113 3 15.648 3 12.72c0-1.556 0-2.335.257-3.036q.118-.325.289-.624c.367-.647.954-1.137 2.13-2.12L9.911 3.4a1.7 1.7 0 0 1 2.183-.008c.768.632.874 1.792.234 2.56" color="currentColor"></svg:path>`,
})
export class HugeiconsShaka01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShaka02Icon],svg[hugeicons-shaka-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.712 11.671L15.639 13.5c0-1.39 0-2.085-.201-2.613a2.94 2.94 0 0 0-2.061-1.828c-.538-.127-1.205-.023-2.54.183L6.9 10V4.75C6.9 3.784 6.14 3 5.2 3c-.938 0-1.7.784-1.7 1.75v8.43c0 2.63 0 3.946.483 4.964a5 5 0 0 0 2.374 2.373C7.374 21 8.689 21 11.32 21c1.471 0 2.206 0 2.868-.256q.306-.12.59-.29c.61-.367 1.074-.954 2.001-2.13l3.343-4.236a1.78 1.78 0 0 0 .008-2.183a1.657 1.657 0 0 0-2.418-.234" color="currentColor"></svg:path>`,
})
export class HugeiconsShaka02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShaka03Icon],svg[hugeicons-shaka-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 16.489a1.5 1.5 0 1 0 0-2.998m0 2.997l6.117 1.247a1.643 1.643 0 0 1-.49 3.249l-8.794-1.498s-3.017-.328-3.883-.659c-1.662-.41-2.683-1.34-4.45-1.34M14 16.49h-2a1.5 1.5 0 1 1 0-2.998h.5m2.5-2.997a1.5 1.5 0 1 0 0-2.998h-2a1.5 1.5 0 1 0 0 2.998m2 0h-2m2 0h-.5a1.5 1.5 0 1 1 0 2.997h-2m.5-2.997h-.5a1.5 1.5 0 1 0 0 2.997m-1.462-5.995l1.625-1.619c.713-.71.648-1.88-.14-2.508a1.7 1.7 0 0 0-2.072-.032L5.853 6.934c-.88.688-2.236 1.062-3.353 1.062" color="currentColor"></svg:path>`,
})
export class HugeiconsShaka03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShaka04Icon],svg[hugeicons-shaka-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.511 10a1.5 1.5 0 1 1 2.998 0M7.51 10L6.265 3.883a1.643 1.643 0 0 0-3.249.49l1.498 8.794s.328 3.018.659 3.883c.404 1.64 1.34 2.691 1.34 4.45M7.51 10v2a1.5 1.5 0 1 0 2.998 0v-.5M13.506 9a1.5 1.5 0 1 1 2.998 0v2a1.5 1.5 0 1 1-2.998 0m0-2v2m0-2v.5a1.5 1.5 0 1 0-2.997 0v2m2.997-.5v.5a1.5 1.5 0 1 1-2.997 0m5.995 1.463l1.619-1.626a1.68 1.68 0 0 1 2.508.14c.48.602.493 1.455.032 2.072l-3.597 4.598c-.688.88-1.062 2.236-1.062 3.353" color="currentColor"></svg:path>`,
})
export class HugeiconsShaka04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShampooIcon],svg[hugeicons-shampoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 13a5 5 0 0 1 10 0v5c0 1.886 0 2.828-.586 3.414S14.886 22 13 22h-2c-1.886 0-2.828 0-3.414-.586S7 19.886 7 18z"></svg:path><svg:path d="M10 8V7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v1m-2-3V2m0 0h-2m2 0h2.745a3 3 0 0 1 2.041.802L17 3M7 13h10"></svg:path></svg:g>`,
})
export class HugeiconsShampooIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShapeCollectionIcon],svg[hugeicons-shape-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.25 9.19c0 .86.7 1.56 1.56 1.56h5.38c.86 0 1.56-.7 1.56-1.56c0-.25-.07-.51-.17-.7L18.9 3.13c-.25-.54-.79-.88-1.4-.88s-1.15.33-1.39.86l-2.68 5.36c-.12.22-.18.47-.18.72m1.51-.02l2.79-5.38l2.64 5.46h-5.38zM6.5 10.75v.01c1.51 0 2.34 0 3.01-.46c.31-.2.58-.47.77-.76c.47-.69.47-1.52.47-3.03s0-2.34-.46-3.01c-.2-.31-.47-.58-.76-.77c-.69-.47-1.52-.47-3.03-.47s-2.34 0-3.01.46c-.31.2-.58.47-.77.76c-.47.69-.47 1.52-.47 3.03s0 2.34.46 3.01c.2.31.46.57.77.77c.69.46 1.52.46 3.02.46m0-7c1.18 0 1.88 0 2.21.22c.12.08.24.19.33.34c.21.31.21 1.01.21 2.19s0 1.88-.22 2.21c-.08.12-.19.24-.34.33c-.31.21-1.02.21-2.19.21s-1.88 0-2.19-.22h-.02c-.12-.08-.24-.19-.33-.34c-.21-.31-.21-1.01-.21-2.19s0-1.88.22-2.21c.08-.12.19-.24.34-.33c.31-.21 1.02-.21 2.19-.21m0 18a4.26 4.26 0 0 1-4.25-4.25a4.26 4.26 0 0 1 4.25-4.25a4.26 4.26 0 0 1 4.25 4.25a4.26 4.26 0 0 1-4.25 4.25m0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75m8.501 6.5h2.501c1.57 0 2.43 0 3.09-.66s.66-1.52.66-3.09V15c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.503c0 .459 0 .848-.02 1.167l-4.7-4.7a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l4.7 4.7c-.32.02-.71.02-1.17.02h-2.5c-.41 0-.75.34-.75.75s.34.75.75.75" color="currentColor"></svg:path>`,
})
export class HugeiconsShapeCollectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShapesIcon],svg[hugeicons-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8a4 4 0 0 0 4-4c0-.728 0-1.092.024-1.199c.109-.49.257-.64.745-.756c.107-.025.318-.028.74-.034C10.256 2 11.083 2 12 2c1.371 0 2.543 0 3.552.036c.408.015.612.022.735.059c.423.126.57.278.68.705C17 2.925 17 3.283 17 4a4 4 0 0 0 4 4c.493 0 .963.343.976.836C22 9.754 22 10.801 22 12c0 .916 0 1.743-.01 2.492c-.007.421-.01.632-.035.74c-.116.487-.267.635-.756.744C21.092 16 20.728 16 20 16a4 4 0 0 0-4 4c0 .728 0 1.092-.024 1.199c-.109.49-.257.64-.745.756c-.107.025-.318.028-.74.034C13.744 22 12.917 22 12 22s-1.743 0-2.492-.01c-.421-.007-.632-.01-.74-.035c-.487-.116-.635-.267-.744-.756C8 21.092 8 20.728 8 20a4 4 0 0 0-4-4c-.728 0-1.092 0-1.199-.024c-.49-.109-.64-.257-.756-.745c-.025-.107-.028-.318-.034-.74C2 13.744 2 12.917 2 12s0-1.743.01-2.492c.007-.421.01-.632.035-.74c.116-.487.267-.635.756-.744C2.908 8 3.272 8 4 8" color="currentColor"></svg:path>`,
})
export class HugeiconsShapesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare01Icon],svg[hugeicons-share-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m20.393 8.032l-1.747-1.517c-1.259-1.093-1.752-1.681-2.434-1.474c-.85.26-.57 1.895-.57 2.447c-1.321 0-2.695-.101-3.998.11c-4.3.7-5.644 3.759-5.644 7.055c1.217-.747 2.433-1.578 3.895-1.924c1.826-.432 3.865-.226 5.747-.226c0 .552-.28 2.188.57 2.447c.772.236 1.175-.38 2.434-1.473l1.747-1.517C21.464 11.03 22 10.564 22 9.996s-.536-1.034-1.607-1.964"></svg:path><svg:path d="M10.568 3c-3.86.007-5.882.102-7.174 1.39C2 5.783 2 8.022 2 12.5s0 6.717 1.394 8.109C4.788 22 7.032 22 11.52 22s6.73 0 8.125-1.391C20.615 19.64 20.91 18.26 21 16"></svg:path></svg:g>`,
})
export class HugeiconsShare01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare02Icon],svg[hugeicons-share-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 4.5c-3.496 1.201-6 4.442-6 8.251c0 1.207.251 2.357.706 3.402M15 4.5c3.496 1.201 6 4.442 6 8.251c0 1.023-.18 2.004-.512 2.916M16.5 20.33A9.16 9.16 0 0 1 12 21.5a9.16 9.16 0 0 1-4.5-1.17M15 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:circle cx="5" cy="19" r="3"></svg:circle><svg:circle cx="19" cy="19" r="3"></svg:circle></svg:g>`,
})
export class HugeiconsShare02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare03Icon],svg[hugeicons-share-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.1 3c-3.65.007-5.56.096-6.782 1.318C3 5.636 3 7.757 3 12s0 6.364 1.318 7.682S7.758 21 12 21s6.364 0 7.683-1.318c1.22-1.221 1.31-3.133 1.317-6.782"></svg:path><svg:path d="m21 6.025l-1-.002c-3.737-.01-5.605-.015-6.918.93c-.437.313-.82.695-1.135 1.13C11 9.396 11 11.264 11 15m10-8.975a.7.7 0 0 0-.175-.472C20.06 4.647 18.071 3 18.071 3M21 6.025a.7.7 0 0 1-.174.422C20.06 7.353 18.07 9 18.07 9"></svg:path></svg:g>`,
})
export class HugeiconsShare03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare04Icon],svg[hugeicons-share-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.026 3a9.028 9.028 0 0 0 1.003 18A9.03 9.03 0 0 0 21 13"></svg:path><svg:path d="m21 6.025l-1-.002c-3.737-.01-5.605-.015-6.918.93c-.437.313-.82.695-1.135 1.131C11 9.395 11 11.264 11 15m10-8.975a.7.7 0 0 0-.175-.472C20.06 4.647 18.071 3 18.071 3M21 6.025a.7.7 0 0 1-.174.422C20.06 7.353 18.07 9 18.07 9"></svg:path></svg:g>`,
})
export class HugeiconsShare04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare05Icon],svg[hugeicons-share-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7c.774.16 1.359.429 1.828.876C21 8.992 21 10.788 21 14.38s0 5.388-1.172 6.504S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.116S3 17.972 3 14.38s0-5.388 1.172-6.504C4.642 7.429 5.226 7.16 6 7m6.025-5L12 14m.025-12a.7.7 0 0 0-.472.175C10.647 2.94 9 4.929 9 4.929M12.025 2a.7.7 0 0 1 .422.174C13.353 2.94 15 4.93 15 4.93" color="currentColor"></svg:path>`,
})
export class HugeiconsShare05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare06Icon],svg[hugeicons-share-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.708 7A9 9 0 1 1 3 13c0-2.305.867-4.408 2.292-6m6.733-5L12 14m.025-12a.7.7 0 0 0-.472.175C10.647 2.94 9 4.929 9 4.929M12.025 2a.7.7 0 0 1 .422.174C13.353 2.94 15 4.93 15 4.93" color="currentColor"></svg:path>`,
})
export class HugeiconsShare06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare07Icon],svg[hugeicons-share-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 5.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-12 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m13 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M14.535 4.581a8 8 0 0 0-1.162-.081a8.15 8.15 0 0 0-7.132 4.163m13.472-1.168A7.9 7.9 0 0 1 21.5 12.5a7.9 7.9 0 0 1-.974 3.801m-4.644 3.81a8.2 8.2 0 0 1-2.509.389c-3.79 0-6.974-2.555-7.873-6.01"></svg:path></svg:g>`,
})
export class HugeiconsShare07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare08Icon],svg[hugeicons-share-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 6.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M9 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m12 5.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M8.729 10.75l6.5-3m-6.5 5.5l6.5 3" color="currentColor"></svg:path>`,
})
export class HugeiconsShare08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShareKnowledgeIcon],svg[hugeicons-share-knowledge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 11c2.332-2.442 5.643-2.557 8 0M8.495 4.5c0 1.38-1.12 2.5-2.503 2.5a2.5 2.5 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.5 2.5 0 0 1 2.503 2.5M14 22c2.332-2.442 5.643-2.557 8 0m-1.505-6.5c0 1.38-1.12 2.5-2.504 2.5a2.5 2.5 0 0 1-2.503-2.5c0-1.38 1.12-2.5 2.503-2.5a2.5 2.5 0 0 1 2.504 2.5M3 14c0 3.87 3.13 7 7 7l-1-2m6-16h6m-6 3h6m-6 3h3.5" color="currentColor"></svg:path>`,
})
export class HugeiconsShareKnowledgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShareLocation01Icon],svg[hugeicons-share-location-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2c5.524 0 10 4.478 10 10s-4.476 10-10 10m-3-.5a11 11 0 0 1-3.277-1.754m0-15.492A11.3 11.3 0 0 1 9 2.5m-7 7.746a9.6 9.6 0 0 1 1.296-3.305M2 13.754a9.6 9.6 0 0 0 1.296 3.305"></svg:path><svg:path d="M12.719 16.215a1.044 1.044 0 0 1-1.437 0c-1.765-1.683-4.13-3.564-2.977-6.294C8.929 8.445 10.425 7.5 12 7.5s3.072.945 3.695 2.42c1.152 2.728-1.207 4.618-2.976 6.295m-.723-4.715h.006"></svg:path></svg:g>`,
})
export class HugeiconsShareLocation01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShareLocation02Icon],svg[hugeicons-share-location-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2c5.524 0 10 4.478 10 10s-4.476 10-10 10m-3-.5a11 11 0 0 1-3.277-1.754m0-15.492A11.3 11.3 0 0 1 9 2.5m-7 7.746a9.6 9.6 0 0 1 1.296-3.305M2 13.754a9.6 9.6 0 0 0 1.296 3.305m8.7-5.559h.006"></svg:path><svg:path d="M12 7c2.435 0 4.5 2.016 4.5 4.463c0 2.485-2.098 4.23-4.036 5.415a.94.94 0 0 1-.928 0C9.603 15.681 7.5 13.957 7.5 11.463C7.5 9.016 9.565 7 12 7"></svg:path></svg:g>`,
})
export class HugeiconsShareLocation02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSharedDriveIcon],svg[hugeicons-shared-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 18H6a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4M9.5 8.5a1 1 0 1 0 0-2m0 2a1 1 0 0 1 0-2m0 2v-2m-1.5 6h3m-4 1V13a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v.5zm7.5-5a1 1 0 1 0 0-2m0 2a1 1 0 1 1 0-2m0 2v-2m0 6H16m-1.5 1H17V13a2 2 0 0 0-2-2h-.5zm2 6.5v.01m-3-.01v.01"></svg:path><svg:path d="M20 20V8c0-2.828 0-4.243-.879-5.121C18.243 2 16.828 2 14 2h-4c-2.828 0-4.243 0-5.121.879C4 3.757 4 5.172 4 8v12"></svg:path></svg:g>`,
})
export class HugeiconsSharedDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSharedWifiIcon],svg[hugeicons-shared-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.483 3.658a2 2 0 1 0-2.966 2.684a2 2 0 0 0 2.966-2.684m0 0A9.95 9.95 0 0 1 12 2q1.03.002 2 .2m6.353 4.3A9.95 9.95 0 0 1 22 12q-.002 1.03-.2 2m-4.283 6.342A9.95 9.95 0 0 1 12 22q-1.03-.002-2-.2m7.517-1.458a2 2 0 1 0 2.966-2.684a2 2 0 0 0-2.966 2.684M3.658 17.517A9.95 9.95 0 0 1 2 12q.002-1.03.2-2m1.458 7.517a2 2 0 1 0 2.684 2.966a2 2 0 0 0-2.684-2.966M21 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0M8 10.478C9.149 9.543 10.52 9 11.995 9c1.478 0 2.854.547 4.005 1.487M14.174 13a4.1 4.1 0 0 0-2.18-.64a4.1 4.1 0 0 0-2.17.634M12 16h.006" color="currentColor"></svg:path>`,
})
export class HugeiconsSharedWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSharingIcon],svg[hugeicons-sharing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 16a3 3 0 1 1-6 0a3 3 0 0 1 6 0m2.5-11H20c.942 0 1.414 0 1.706.293S22 6.057 22 7v2.5M16 11l5.5-5.5M6.5 5H4c-.943 0-1.414 0-1.707.293S2 6.057 2 7v2.5M8 11L2.5 5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsSharingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShellfishIcon],svg[hugeicons-shellfish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.546 4.955c.075.31.095.639.049.976l-.822 6.044m.773-7.02c-.632-2.607-4.46-2.607-5.092 0m5.092 0c1.567-1.608 4.38-.007 4.454 2.004m0 0c1 .168 3 1.105 3 3.512c0 2.173-2.607 4.469-5.183 6.294c-.582.412-.873.618-1.06.768a7.2 7.2 0 0 0-1.38 1.422c-.144.19-.293.415-.591.863l-.232.35a1.866 1.866 0 0 1-3.108 0l-.232-.35a19 19 0 0 0-.59-.863a7.2 7.2 0 0 0-1.382-1.422c-.186-.15-.477-.356-1.059-.768C4.607 14.94 2 12.645 2 10.47c0-2.407 2-3.344 3-3.512m14 0c.068 1.84-1.19 4.31-2.302 6.019M9.454 4.955c-.075.31-.094.639-.049.976l.822 6.044m-.773-7.02C7.887 3.347 5.074 4.948 5 6.96m0 0c-.068 1.84 1.19 4.31 2.302 6.019"></svg:path><svg:path d="m18 16l-.759 3.794A1.5 1.5 0 0 1 15.771 21H8.23a1.5 1.5 0 0 1-1.471-1.206L6 16"></svg:path></svg:g>`,
})
export class HugeiconsShellfishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSheriff01Icon],svg[hugeicons-sheriff-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 8c3.476 5.333 16.524 5.333 20 0"></svg:path><svg:path d="m5 10l2.125-7.008c.644-2.122 2.15-.273 3.472.348a3.34 3.34 0 0 0 2.807 0c1.32-.621 2.827-2.47 3.471-.348L19 10m0 1c0 2.808-.303 5.46-2.569 7.012C14.587 19.275 10.857 19.338 10 22"></svg:path><svg:path d="M5 11c0 2.808.303 5.46 2.569 7.012C9.413 19.275 13.143 19.338 14 22"></svg:path></svg:g>`,
})
export class HugeiconsSheriff01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSheriff02Icon],svg[hugeicons-sheriff-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.178 4.114C11.025 2.704 11.449 2 12.076 2s1.05.705 1.898 2.114l.155.258c.607 1.01.911 1.516 1.395 1.8l.07.04c.493.267 1.084.267 2.265.267h.27c1.55 0 2.326 0 2.658.43q.12.156.18.344c.163.519-.282 1.152-1.171 2.42c-.718 1.022-1.077 1.534-1.134 2.109a2.2 2.2 0 0 0 0 .436c.057.575.416 1.087 1.134 2.11c.889 1.267 1.334 1.9 1.171 2.419q-.06.187-.18.344c-.332.43-1.107.43-2.657.43h-.271c-1.181 0-1.772 0-2.266.267l-.069.04c-.484.284-.787.79-1.395 1.8l-.155.258C13.126 21.296 12.703 22 12.076 22s-1.05-.705-1.898-2.114l-.133-.22c-.63-1.048-.945-1.572-1.452-1.858c-.508-.287-1.12-.287-2.344-.287h-.291c-1.671 0-2.507 0-2.83-.526l-.04-.07c-.285-.547.144-1.262 1.004-2.691c.643-1.07.964-1.604.975-2.193v-.082c-.01-.59-.332-1.124-.975-2.193c-.86-1.43-1.29-2.144-1.004-2.692q.018-.035.04-.07c.323-.525 1.159-.525 2.83-.525h.291c1.224 0 1.836 0 2.344-.287c.507-.286.822-.81 1.452-1.857z"></svg:path><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path></svg:g>`,
})
export class HugeiconsSheriff02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShield01Icon],svg[hugeicons-shield-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 11.183V8.28c0-1.64 0-2.46-.404-2.995s-1.318-.794-3.145-1.314a25 25 0 0 1-3.229-1.173C13.023 2.266 12.424 2 12 2s-1.023.266-2.222.798c-.88.39-1.98.818-3.229 1.173c-1.827.52-2.74.78-3.145 1.314C3 5.82 3 6.64 3 8.28v2.903c0 5.625 5.063 9 7.594 10.336c.607.32.91.481 1.406.481s.799-.16 1.406-.48C15.937 20.182 21 16.807 21 11.182" color="currentColor"></svg:path>`,
})
export class HugeiconsShield01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShield02Icon],svg[hugeicons-shield-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 11.183V8.28c0-1.64 0-2.46-.404-2.995s-1.318-.794-3.145-1.314a25 25 0 0 1-3.229-1.173C13.023 2.266 12.424 2 12 2s-1.023.266-2.222.798c-.88.39-1.98.818-3.229 1.173c-1.827.52-2.74.78-3.145 1.314C3 5.82 3 6.64 3 8.28v2.903c0 5.625 5.063 9 7.594 10.336c.607.32.91.481 1.406.481s.799-.16 1.406-.48C15.937 20.182 21 16.807 21 11.182"></svg:path><svg:path d="M14.5 11.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsShield02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShieldBlockchainIcon],svg[hugeicons-shield-blockchain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.998 2c-2.85 0-4.697 2.019-6.882 2.755c-.888.3-1.333.449-1.512.66c-.18.21-.233.519-.338 1.135c-1.127 6.596 1.336 12.694 7.209 15.068c.631.255.947.382 1.526.382s.896-.128 1.527-.383c5.873-2.373 8.333-8.471 7.206-15.067c-.106-.616-.158-.925-.338-1.136s-.624-.36-1.512-.659C16.698 4.019 14.848 2 11.998 2"></svg:path><svg:path d="M12 16c.14 0 .27-.064.529-.19l2.086-1.023c.923-.453 1.385-.679 1.385-1.037v-4.5M12 16c-.14 0-.27-.064-.529-.19l-2.086-1.023C8.462 14.334 8 14.108 8 13.75v-4.5M12 16v-4.5m4-2.25c0-.358-.462-.584-1.385-1.037L12.53 7.191C12.269 7.064 12.139 7 12 7c-.14 0-.27.064-.529.19L9.385 8.214C8.462 8.666 8 8.892 8 9.25m8 0c0 .358-.462.584-1.385 1.037l-2.086 1.022c-.26.127-.39.191-.529.191M8 9.25c0 .358.462.584 1.385 1.037l2.086 1.022c.26.127.39.191.529.191"></svg:path></svg:g>`,
})
export class HugeiconsShieldBlockchainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShieldEnergyIcon],svg[hugeicons-shield-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.998 2c-2.85 0-4.697 2.019-6.882 2.755c-.888.3-1.333.449-1.512.66c-.18.21-.233.519-.338 1.135c-1.127 6.596 1.336 12.694 7.209 15.068c.631.255.947.382 1.526.382s.896-.128 1.527-.383c5.873-2.373 8.333-8.471 7.206-15.067c-.106-.616-.158-.925-.338-1.136s-.624-.36-1.512-.659C16.698 4.019 14.848 2 11.998 2"></svg:path><svg:path d="m8.129 11.131l3.999-4.94c.313-.387.899-.146.899.368v3.824c0 .309.23.559.514.559h1.944c.442 0 .678.566.386.927l-3.999 4.94c-.313.387-.899.146-.899-.368v-3.824c0-.309-.23-.559-.514-.559H8.515c-.441 0-.677-.566-.385-.927"></svg:path></svg:g>`,
})
export class HugeiconsShieldEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShieldKeyIcon],svg[hugeicons-shield-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.558 14.561c-.59.59-1.533.582-2.115 0a1.5 1.5 0 0 1-.006-2.121a1.506 1.506 0 0 1 2.127 0a1.5 1.5 0 0 1-.006 2.121M11 12l2-2m4 0l-2-2l-2 2m0 0l1.5 1.5"></svg:path><svg:path d="M21 11.183V8.28c0-1.64 0-2.46-.404-2.995s-1.318-.794-3.145-1.314a25 25 0 0 1-3.229-1.173C13.023 2.266 12.424 2 12 2s-1.023.266-2.222.798c-.88.39-1.98.818-3.229 1.173c-1.827.52-2.74.78-3.145 1.314C3 5.82 3 6.64 3 8.28v2.903c0 5.625 5.063 9 7.594 10.336c.607.32.91.481 1.406.481s.799-.16 1.406-.48C15.937 20.182 21 16.807 21 11.182"></svg:path></svg:g>`,
})
export class HugeiconsShieldKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShieldUserIcon],svg[hugeicons-shield-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path stroke="currentColor" d="M14 8.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" d="m9.59 13.648l-.38-.647zm4.82 0l.38-.647zm-6.093 2.063l-.513.547zm7.366 0l-.513-.547zM9.97 14.295a4.06 4.06 0 0 1 4.062 0l.758-1.294a5.55 5.55 0 0 0-5.578 0zm.071 2.955h3.92v-1.5h-3.92zm-1.21-2.086c-.137-.128-.07-.133-.08-.038c-.006.047-.02.006.111-.121c.28-.27.712-.478 1.108-.71l-.758-1.294c-.233.137-.94.49-1.39.924c-.233.224-.511.57-.563 1.035c-.057.513.18.955.546 1.298zm5.2-.869c.397.232.829.44 1.109.71c.132.127.117.168.112.121c-.01-.095.056-.09-.08.038l1.025 1.094c.366-.342.603-.785.546-1.297c-.052-.465-.33-.812-.563-1.036c-.45-.434-1.157-.787-1.39-.924zm1.14.869c-.421.395-.792.586-1.21.586v1.5c.955 0 1.677-.467 2.236-.992zm-7.366 1.094c.56.525 1.28.992 2.236.992v-1.5c-.418 0-.789-.19-1.21-.586z"></svg:path><svg:path stroke="currentColor" d="M21 11.183V8.28c0-1.64 0-2.46-.404-2.995s-1.318-.794-3.145-1.314a25 25 0 0 1-3.229-1.173C13.023 2.266 12.424 2 12 2s-1.023.266-2.222.798c-.88.39-1.98.818-3.229 1.173c-1.827.52-2.74.78-3.145 1.314C3 5.82 3 6.64 3 8.28v2.903c0 5.625 5.063 9 7.594 10.336c.607.32.91.481 1.406.481s.799-.16 1.406-.48C15.937 20.182 21 16.807 21 11.182"></svg:path></svg:g>`,
})
export class HugeiconsShieldUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShipmentTrackingIcon],svg[hugeicons-shipment-tracking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 22H6c-1.886 0-2.828 0-3.414-.586S2 19.886 2 18v-2c0-1.886 0-2.828.586-3.414S4.114 12 6 12h2c1.886 0 2.828 0 3.414.586S12 14.114 12 16v2c0 1.886 0 2.828-.586 3.414S9.886 22 8 22m-2-7h2M18 2c-2.21 0-4 1.809-4 4.04c0 1.276.5 2.268 1.5 3.154c.705.625 1.559 1.663 2.071 2.503c.246.404.594.404.858 0c.538-.824 1.366-1.878 2.071-2.502c1-.887 1.5-1.879 1.5-3.155C22 3.81 20.21 2 18 2m0 13v3c0 1.886 0 2.828-.469 3.414c-.447.56-1.155.585-2.531.586m3.008-16h-.01" color="currentColor"></svg:path>`,
})
export class HugeiconsShipmentTrackingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShippingCenterIcon],svg[hugeicons-shipping-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:rect width="20" height="6" x="2" y="15" rx="3"></svg:rect><svg:path d="M6 9c0-2.828 0-4.243.879-5.121C7.757 3 9.172 3 12 3s4.243 0 5.121.879C18 4.757 18 6.172 18 9s0 4.243-.879 5.121C16.243 15 14.828 15 12 15s-4.243 0-5.121-.879C6 13.243 6 11.828 6 9m5.996 9h.008M7 18h.009m9.982 0H17M10.5 6h3"></svg:path></svg:g>`,
})
export class HugeiconsShippingCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShippingLoadingIcon],svg[hugeicons-shipping-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 9.878V6h14v3.878c0 2.886 0 4.329-.911 5.225c-.911.897-2.378.897-5.311.897h-1.556c-2.933 0-4.4 0-5.31-.897C4 14.207 4 12.763 4 9.878M4 6l.673-1.538c.522-1.194.783-1.79 1.312-2.126C6.515 2 7.193 2 8.55 2h4.9c1.357 0 2.036 0 2.565.336s.79.932 1.312 2.126L18 6M9.5 9h3M3 16h15a3 3 0 1 1 0 6H3m14-3h.009M11 19h.009M5 19h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsShippingLoadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShippingTruck01Icon],svg[hugeicons-shipping-truck-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M14.5 17.5h-5m10 0h.763c.22 0 .33 0 .422-.012a1.5 1.5 0 0 0 1.303-1.302c.012-.093.012-.203.012-.423V13a6.5 6.5 0 0 0-6.5-6.5m-.5 9V7c0-1.414 0-2.121-.44-2.56C14.122 4 13.415 4 12 4H5c-1.414 0-2.121 0-2.56.44C2 4.878 2 5.585 2 7v8c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201"></svg:path></svg:g>`,
})
export class HugeiconsShippingTruck01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShippingTruck02Icon],svg[hugeicons-shipping-truck-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M14.5 17.5h-5m5.5-2V7c0-1.414 0-2.121-.44-2.56C14.122 4 13.415 4 12 4H5c-1.414 0-2.121 0-2.56.44C2 4.878 2 5.585 2 7v8c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201m11-11h1.801c.83 0 1.245 0 1.589.195c.344.194.557.55.984 1.262l1.699 2.83c.212.354.318.532.373.728c.054.197.054.403.054.816V15c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201"></svg:path></svg:g>`,
})
export class HugeiconsShippingTruck02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShirt01Icon],svg[hugeicons-shirt-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 9v7.684c0 1.811 0 2.717.586 3.28c1.314 1.262 9.27 1.496 10.828 0C18 19.4 18 18.495 18 16.684V9"></svg:path><svg:path d="M5.74 12L3.044 9.39C2.348 8.715 2 8.38 2 7.96c0-.418.348-.755 1.043-1.428l2.001-1.936c.347-.336.52-.504.727-.627c.207-.124.44-.199.904-.349l1.646-.531c.24-.078.361-.116.443-.07c.082.047.108.181.16.45c.27 1.407 1.544 2.472 3.076 2.472s2.806-1.065 3.077-2.472c.051-.269.077-.403.16-.45c.08-.046.201-.008.442.07l1.646.531c.465.15.698.225.904.349s.38.291.727.627l2 1.936C21.653 7.206 22 7.543 22 7.961s-.348.755-1.043 1.428L18.259 12"></svg:path></svg:g>`,
})
export class HugeiconsShirt01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShockedIcon],svg[hugeicons-shocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9 17c.836-.628 1.874-1 3-1s2.164.372 3 1m-5-7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m7 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class HugeiconsShockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShopSignIcon],svg[hugeicons-shop-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.07 2.5h8.686c1.182 0 1.773 0 2.192.335s.541.906.785 2.047l3.032 14.206c.238 1.115.357 1.672.053 2.042s-.882.37-2.037.37h-6.544c-.77 0-1.155 0-1.431-.216c-.276-.215-.365-.584-.542-1.323zm0 0L2 21.5M4 16h6" color="currentColor"></svg:path>`,
})
export class HugeiconsShopSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShopifyIcon],svg[hugeicons-shopify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m19.872 5.35l1.27 8.4v-.01c.4 2.65.61 5.37.61 8.06c0 .33-.21.62-.53.72l-5 1.5a.9.9 0 0 1-.36.02l-13-2.5a.74.74 0 0 1-.61-.79l1.02-12.99c.03-.31.24-.57.54-.66l2.53-.74c.03-.24.07-.48.11-.7c.66-3.21 2.71-5.43 4.71-5.04c.66.12 1.22.52 1.65 1.1h.09c.123-.002.25-.003.37.02c.9.17 1.64.89 2.09 1.99l.44-.13h.02c.1-.03.2-.04.3-.02c.02.01.03.01.05.01c.09.02.19.06.27.12h.01l1.3 1h1.38c.37 0 .69.27.74.64m-6.18-1.15l.21-.06c-.09-.2-.19-.36-.3-.5l.028.16c.024.131.048.266.062.4m-1.665-.695c-.429.3-.856.819-1.225 1.546l1.43-.42a6 6 0 0 0-.205-1.126m-.805-1.264a.9.9 0 0 0-.36-.16h.01c-.98-.19-2.43 1.33-2.95 3.81l1.05-.31c.5-1.51 1.32-2.7 2.25-3.34m4.03 3.07L4.712 8.39l-.91 11.81l11.45 2.2zm1.5 16.987V5.83l.29.22c.13.1.29.16.46.16h.98l1.17 7.76c.36 2.4.56 4.85.59 7.28zM9.193 8.76c1.45-.65 3.34.05 3.89.28v.02c.38.16.56.6.4.98a.75.75 0 0 1-.98.4c-.8-.33-1.99-.61-2.7-.29c-.28.13-.47.35-.59.69c-.31.9.63 1.87 1.47 2.53c2.37 1.87 2 3.66 1.41 4.42c-.51.67-1.25 1.09-2.13 1.19c-.16.03-.31.03-.47.03c-1.33 0-2.59-.63-3.17-1.1a.76.76 0 0 1-.11-1.06a.76.76 0 0 1 1.06-.11c.45.36 1.57.86 2.52.74c.48-.06.85-.26 1.12-.62c.23-.31.3-1.19-1.15-2.33c-2.22-1.73-2.3-3.23-1.97-4.19c.25-.74.73-1.28 1.4-1.58" color="currentColor"></svg:path>`,
})
export class HugeiconsShopifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBag01Icon],svg[hugeicons-shopping-bag-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.5 8V6.364C7.5 3.954 9.515 2 12 2s4.5 1.954 4.5 4.364V8"></svg:path><svg:path d="M13.882 7.5h-3.764c-3.888 0-5.392.988-6.468 4.737c-.969 3.377-1.453 5.066-.946 6.375a4.34 4.34 0 0 0 1.581 1.998c2.61 1.812 12.702 1.894 15.43 0a4.35 4.35 0 0 0 1.582-1.998c.506-1.31.021-2.998-.947-6.375c-1.033-3.6-2.419-4.737-6.468-4.737M11 11h2"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBag01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBag02Icon],svg[hugeicons-shopping-bag-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m3.062 15.193l.365-2.071c.432-2.448.647-3.672 1.502-4.397S7.012 8 9.467 8h5.066c2.455 0 3.683 0 4.538.725s1.07 1.949 1.502 4.397l.365 2.071c.598 3.388.896 5.082-.023 6.195c-.92 1.112-2.62 1.112-6.017 1.112H9.102c-3.398 0-5.097 0-6.017-1.113s-.62-2.806-.023-6.194M7.5 8l.168-2.014a4.347 4.347 0 0 1 8.664 0L16.5 8"></svg:path><svg:path d="M15 11c-.13 1.413-1.434 2.5-3 2.5S9.13 12.413 9 11"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBag02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBag03Icon],svg[hugeicons-shopping-bag-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m3.062 14.441l.365-2.142c.432-2.533.647-3.8 1.502-4.55C5.784 7 7.012 7 9.467 7h5.066c2.455 0 3.683 0 4.538.75s1.07 2.016 1.502 4.549l.365 2.142c.598 3.505.896 5.257-.023 6.408C19.995 22 18.295 22 14.898 22H9.102c-3.398 0-5.097 0-6.017-1.15c-.92-1.152-.62-2.904-.023-6.409"></svg:path><svg:path d="m7.5 9l.215-3.01a4.296 4.296 0 0 1 8.57 0L16.5 9"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBag03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBagAddIcon],svg[hugeicons-shopping-bag-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 11.5c-1.02-3.02-2.296-4-6.07-4H9.65c-3.905 0-5.415.988-6.495 4.737c-.973 3.377-1.46 5.066-.95 6.375a4.35 4.35 0 0 0 1.588 1.998c1.447 1 5.187 1.474 8.707 1.378"></svg:path><svg:path d="M7 8V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V8m-2 10h8m-4 4v-8m-7.5-3h2"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBagAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBagCheckIcon],svg[hugeicons-shopping-bag-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m20 12.5l-.076-.263C18.887 8.637 17.496 7.5 13.43 7.5H9.65c-3.905 0-5.415.988-6.495 4.737c-.973 3.377-1.46 5.066-.95 6.375a4.35 4.35 0 0 0 1.588 1.998c1.379.954 4.839 1.428 8.207 1.388"></svg:path><svg:path d="M7 8V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V8m-2 11s1 0 2 2c0 0 3.177-5 6-6m-11.5-4h2"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBagCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBagFavoriteIcon],svg[hugeicons-shopping-bag-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 21.998c-3.368.04-6.828-.434-8.207-1.388a4.35 4.35 0 0 1-1.589-1.998c-.508-1.31-.022-2.998.95-6.375C4.235 8.488 5.746 7.5 9.65 7.5h3.78c3.557 0 5.073.87 6.07 3.5"></svg:path><svg:path d="M7 8V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V8m-1.858 6.442c1.207-.731 2.26-.437 2.893.033c.259.192.389.288.465.288s.206-.096.465-.288c.633-.47 1.686-.764 2.893-.033c1.584.96 1.942 4.125-1.71 6.795c-.697.509-1.044.763-1.648.763s-.951-.254-1.647-.763c-3.653-2.67-3.295-5.836-1.711-6.795M10.5 11h2"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBagFavoriteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBagRemoveIcon],svg[hugeicons-shopping-bag-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 8V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V8"></svg:path><svg:path d="M19.5 11.502C18.48 8.48 17.204 7.5 13.43 7.5H9.65c-3.905 0-5.415.988-6.495 4.74c-.973 3.377-1.46 5.067-.95 6.376a4.35 4.35 0 0 0 1.588 2C5.035 21.474 7.968 21.944 11 22m3-7l3.5 3.5m0 0L21 22m-3.5-3.5L14 22m3.5-3.5L21 15m-10.5-4h2"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBagRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasket01Icon],svg[hugeicons-shopping-basket-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.873 17.02L2.669 9.84c-.182-1.086-.273-1.628.019-1.984c.291-.356.827-.356 1.898-.356h14.828c1.071 0 1.607 0 1.898.356c.292.356.2.898.019 1.984l-1.204 7.18c-.399 2.38-.598 3.569-1.413 4.275C17.9 22 16.726 22 14.378 22H9.622c-2.348 0-3.522 0-4.336-.706c-.815-.705-1.014-1.895-1.413-4.275M17.5 7.5a5.5 5.5 0 1 0-11 0" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasket01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasket02Icon],svg[hugeicons-shopping-basket-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.34 16.878L3.179 9.936c-.19-1.13-.284-1.694.007-2.065c.292-.371.83-.371 1.906-.371H18.91c1.076 0 1.614 0 1.906.37c.29.372.196.936.007 2.066l-1.163 6.942c-.41 2.448-.615 3.672-1.427 4.397S16.253 22 13.92 22h-3.84c-2.333 0-3.5 0-4.312-.725c-.812-.724-1.017-1.949-1.427-4.397M7 7.5V7a5 5 0 0 1 10 0v.5m-12.5 10h15" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasket02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasket03Icon],svg[hugeicons-shopping-basket-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 8h8.696c.625 0 .937 0 1.166.1c1.012.447.56 1.57.39 2.378a.48.48 0 0 1-.27.335a1.93 1.93 0 0 0-1.09 1.4l-.593 3.375c-.26 1.485-.35 3.606-1.65 4.652c-.955.76-2.33.76-5.081.76h-2.136c-2.75 0-4.126 0-5.08-.76c-1.301-1.046-1.39-3.167-1.651-4.652l-.593-3.375a1.93 1.93 0 0 0-1.09-1.4a.48.48 0 0 1-.27-.335c-.17-.807-.622-1.931.39-2.377C2.867 8 3.18 8 3.804 8H7.5m6.5 4h-4m-3.5-1L10 3m5 0l2.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasket03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketAdd01Icon],svg[hugeicons-shopping-basket-add-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.052 11.5l.279-1.66c.182-1.086.273-1.628-.019-1.984c-.291-.356-.827-.356-1.898-.356H4.586c-1.071 0-1.607 0-1.898.356c-.292.356-.2.898-.019 1.984l1.204 7.18c.399 2.38.598 3.569 1.413 4.275C6.1 22 7.274 22 9.622 22H12m2-4h8m-4 4v-8m-.5-6.5a5.5 5.5 0 1 0-11 0" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketAdd01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketAdd02Icon],svg[hugeicons-shopping-basket-add-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 18h8m-4 4v-8M7 7.5V7a5 5 0 0 1 10 0v.5M10 22c-2.28 0-3.43-.008-4.232-.725c-.812-.724-1.017-1.949-1.427-4.397L3.178 9.936c-.19-1.13-.284-1.694.007-2.065c.292-.371.83-.371 1.906-.371h13.818c1.076 0 1.614 0 1.906.37c.29.372.196.936.007 2.066L20.476 12M4.5 17.5H10" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketAdd02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketAdd03Icon],svg[hugeicons-shopping-basket-add-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 21h-2.068c-2.75 0-4.126 0-5.08-.76c-1.301-1.046-1.39-3.167-1.651-4.652l-.593-3.375a1.93 1.93 0 0 0-1.09-1.4a.48.48 0 0 1-.27-.335c-.17-.807-.622-1.931.39-2.377C2.867 8 3.18 8 3.804 8H7.5m4 0h8.696c.625 0 .937 0 1.166.1c1.012.447.56 1.57.39 2.378a.48.48 0 0 1-.27.335a2 2 0 0 0-.802.687m-5.68 6h7M18.5 21v-7m-12-3L10 3m5 0l2.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketAdd03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketCheckIn01Icon],svg[hugeicons-shopping-basket-check-in-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 22H9.622c-2.348 0-3.522 0-4.336-.706c-.815-.705-1.014-1.895-1.413-4.275L2.669 9.84c-.182-1.085-.273-1.627.019-1.983c.291-.356.827-.356 1.898-.356h14.828c1.071 0 1.607 0 1.898.356c.292.356.2.898.019 1.984l-.279 1.66M17.5 7.5a5.5 5.5 0 1 0-11 0"></svg:path><svg:path d="M16.5 16.5c.491-.506 1.8-2.5 2.5-2.5m2.5 2.5c-.491-.506-1.8-2.5-2.5-2.5m0 0v8"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBasketCheckIn01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketCheckIn02Icon],svg[hugeicons-shopping-basket-check-in-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 22h-2.92c-2.333 0-3.5 0-4.312-.725c-.812-.724-1.017-1.949-1.427-4.397L3.178 9.936c-.19-1.13-.284-1.694.007-2.065c.292-.371.83-.371 1.906-.371h13.818c1.076 0 1.614 0 1.906.37c.29.372.196.936.007 2.066L20.56 11.5"></svg:path><svg:path d="M16 16.5c.491-.506 1.8-2.5 2.5-2.5m2.5 2.5c-.491-.506-1.8-2.5-2.5-2.5m0 0v8M7 7.5V7a5 5 0 0 1 10 0v.5m-12.5 10H13"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBasketCheckIn02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketCheckIn03Icon],svg[hugeicons-shopping-basket-check-in-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 8h8.696c.625 0 .937 0 1.166.1c1.012.447.56 1.57.39 2.378a.48.48 0 0 1-.27.335a2 2 0 0 0-.802.687M7.5 8H3.804c-.625 0-.937 0-1.166.1c-1.012.447-.56 1.57-.39 2.378a.49.49 0 0 0 .27.335a1.93 1.93 0 0 1 1.09 1.4l.593 3.375c.26 1.485.35 3.606 1.65 4.652c.955.76 2.33.76 5.081.76H13.5m2.5-4.5c.491-.506 1.8-2.5 2.5-2.5m2.5 2.5c-.491-.506-1.8-2.5-2.5-2.5m0 0v7m-12-10L10 3m5 0l2.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketCheckIn03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketCheckOut01Icon],svg[hugeicons-shopping-basket-check-out-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 22H9.622c-2.348 0-3.522 0-4.336-.706c-.815-.705-1.014-1.895-1.413-4.275L2.669 9.84c-.182-1.085-.273-1.627.019-1.983c.291-.356.827-.356 1.898-.356h14.828c1.071 0 1.607 0 1.898.356c.292.356.2.898.019 1.984l-.279 1.66M17.5 7.5a5.5 5.5 0 1 0-11 0m10 12c.491.506 1.8 2.5 2.5 2.5m2.5-2.5c-.491.506-1.8 2.5-2.5 2.5m0 0v-8" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketCheckOut01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketCheckOut02Icon],svg[hugeicons-shopping-basket-check-out-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 22h-2.92c-2.333 0-3.5 0-4.312-.725c-.812-.724-1.017-1.949-1.427-4.397L3.178 9.936c-.19-1.13-.284-1.694.007-2.065c.292-.371.83-.371 1.906-.371h13.818c1.076 0 1.614 0 1.906.37c.29.372.196.936.007 2.066L20.56 11.5m-4.56 8c.491.506 1.8 2.5 2.5 2.5m2.5-2.5c-.491.506-1.8 2.5-2.5 2.5m0 0v-8M7 7.5V7a5 5 0 0 1 10 0v.5m-12.5 10H13" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketCheckOut02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketCheckOut03Icon],svg[hugeicons-shopping-basket-check-out-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 8h8.696c.625 0 .937 0 1.166.1c1.012.447.56 1.57.39 2.378a.48.48 0 0 1-.27.335a2 2 0 0 0-.802.687M7.5 8H3.804c-.625 0-.937 0-1.166.1c-1.012.447-.56 1.57-.39 2.378a.49.49 0 0 0 .27.335a1.93 1.93 0 0 1 1.09 1.4l.593 3.375c.26 1.485.35 3.606 1.65 4.652c.955.76 2.33.76 5.081.76H13.5m2.5-2.5c.491.506 1.8 2.5 2.5 2.5m2.5-2.5c-.491.506-1.8 2.5-2.5 2.5m0 0v-7m-12-3L10 3m5 0l2.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketCheckOut03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketDone01Icon],svg[hugeicons-shopping-basket-done-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 22H9.622c-2.348 0-3.522 0-4.336-.706c-.815-.705-1.014-1.895-1.413-4.275L2.669 9.84c-.182-1.085-.273-1.627.019-1.983c.291-.356.827-.356 1.898-.356h14.828c1.071 0 1.607 0 1.898.356c.292.356.2.898.019 1.984L20.8 13m-7.3 7s1 0 2 2c0 0 3.177-5 6-6m-4-8.5a5.5 5.5 0 1 0-11 0" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketDone01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketDone02Icon],svg[hugeicons-shopping-basket-done-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 22h-1.42c-2.333 0-3.5 0-4.312-.725c-.812-.724-1.017-1.949-1.427-4.397L3.178 9.936c-.19-1.13-.284-1.694.007-2.065c.292-.371.83-.371 1.906-.371h13.818c1.076 0 1.614 0 1.906.37c.29.372.196.936.007 2.066L20.142 14M14 20.333s.875 0 1.75 1.667c0 0 2.78-4.167 5.25-5M7 7.5V7a5 5 0 0 1 10 0v.5m-12.5 10h7" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketDone02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketDone03Icon],svg[hugeicons-shopping-basket-done-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 8h8.696c.625 0 .937 0 1.166.1c1.012.447.56 1.57.39 2.378a.48.48 0 0 1-.27.335c-.537.255-.844.678-1.015 1.187M7.5 8H3.804c-.625 0-.937 0-1.166.1c-1.012.447-.56 1.57-.39 2.378a.49.49 0 0 0 .27.335a1.93 1.93 0 0 1 1.09 1.4l.593 3.375c.26 1.485.35 3.606 1.65 4.652c.955.76 2.33.76 5.081.76h.568m2.5-2s1 0 2 2c0 0 3.177-5 6-6M6.5 11L10 3m5 0l2.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketDone03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketFavorite01Icon],svg[hugeicons-shopping-basket-favorite-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.5 22H9.622c-2.348 0-3.522 0-4.336-.706c-.815-.705-1.014-1.895-1.413-4.275L2.669 9.84c-.182-1.085-.273-1.627.019-1.983c.291-.356.827-.356 1.898-.356h14.828c1.071 0 1.607 0 1.898.356c.292.356.2.898.019 1.984l-.279 1.66"></svg:path><svg:path d="M13.642 14.442c1.207-.731 2.26-.437 2.893.033c.259.192.389.288.465.288s.206-.096.465-.288c.633-.47 1.686-.764 2.893-.033c1.584.96 1.942 4.125-1.71 6.795c-.697.509-1.044.763-1.648.763s-.951-.254-1.647-.763c-3.653-2.67-3.295-5.836-1.711-6.795M17.5 7.5a5.5 5.5 0 1 0-11 0"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBasketFavorite01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketFavorite02Icon],svg[hugeicons-shopping-basket-favorite-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 22c-2.333 0-3.42 0-4.232-.725c-.812-.724-1.017-1.949-1.427-4.397L3.178 9.936c-.19-1.13-.284-1.694.007-2.065c.292-.371.83-.371 1.906-.371h13.818c1.076 0 1.614 0 1.906.37c.29.372.196.936.007 2.066L20.56 11.5"></svg:path><svg:path d="M13.142 14.442c1.207-.731 2.26-.437 2.893.033c.259.192.389.288.465.288s.206-.096.465-.288c.633-.47 1.686-.764 2.893-.033c1.584.96 1.942 4.125-1.71 6.795c-.697.509-1.044.763-1.648.763s-.951-.254-1.647-.763c-3.653-2.67-3.295-5.836-1.711-6.795M7 7.5V7a5 5 0 0 1 10 0v.5m-12.5 10h5"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBasketFavorite02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketFavorite03Icon],svg[hugeicons-shopping-basket-favorite-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 8h8.696c.625 0 .937 0 1.166.1c1.012.447.56 1.57.39 2.378c-.033.154-.133.247-.252.323M7.5 8H3.804c-.625 0-.937 0-1.166.1c-1.012.447-.56 1.57-.39 2.378a.49.49 0 0 0 .27.335a1.93 1.93 0 0 1 1.09 1.4l.593 3.375c.26 1.485.35 3.606 1.65 4.652c.955.76 2.33.76 5.081.76H12m2.142-7.558c1.207-.731 2.26-.437 2.893.033c.259.192.389.288.465.288s.206-.096.465-.288c.633-.47 1.686-.764 2.893-.033c1.584.96 1.942 4.125-1.71 6.795c-.697.509-1.044.763-1.648.763s-.951-.254-1.647-.763c-3.653-2.67-3.295-5.836-1.711-6.795M6.5 11L10 3m5 0l2.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketFavorite03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketRemove01Icon],svg[hugeicons-shopping-basket-remove-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.969 12l.362-2.16c.182-1.086.273-1.628-.019-1.984c-.291-.356-.827-.356-1.898-.356H4.586c-1.071 0-1.607 0-1.898.356c-.292.356-.2.898-.019 1.984l1.204 7.18c.399 2.38.598 3.569 1.413 4.275C6.1 22 7.274 22 9.622 22H11.5m3-7l3.5 3.5m0 0l3.5 3.5M18 18.5L14.5 22m3.5-3.5l3.5-3.5m-4-7.5a5.5 5.5 0 1 0-11 0" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketRemove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketRemove02Icon],svg[hugeicons-shopping-basket-remove-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 15l3.5 3.5m0 0L21 22m-3.5-3.5L14 22m3.5-3.5L21 15M7 7.5V7a5 5 0 0 1 10 0v.5m3.393 5l.43-2.564c.188-1.13.283-1.694-.008-2.065c-.292-.371-.83-.371-1.906-.371H5.091c-1.076 0-1.614 0-1.906.37c-.29.372-.196.936-.007 2.066l1.163 6.942c.41 2.448.615 3.672 1.427 4.397S7.747 22 10.08 22H11m-6.5-4.5H11" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketRemove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketRemove03Icon],svg[hugeicons-shopping-basket-remove-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 21h-2.068c-2.75 0-4.126 0-5.08-.76c-1.301-1.046-1.39-3.167-1.651-4.652l-.593-3.375a1.93 1.93 0 0 0-1.09-1.4a.48.48 0 0 1-.27-.335c-.17-.807-.622-1.931.39-2.377C2.867 8 3.18 8 3.804 8H7.5m4 0h8.696c.625 0 .937 0 1.166.1c1.012.447.56 1.57.39 2.378a.48.48 0 0 1-.27.335c-.74.351-.986.98-1.135 1.687M16 15l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3M6.5 11L10 3m5 0l2.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketRemove03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketSecure01Icon],svg[hugeicons-shopping-basket-secure-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 22H9.622c-2.348 0-3.522 0-4.336-.706c-.815-.705-1.014-1.895-1.413-4.275L2.669 9.84c-.182-1.085-.273-1.627.019-1.983c.291-.356.827-.356 1.898-.356h14.828c1.071 0 1.607 0 1.898.356c.292.356.2.898.019 1.984l-.279 1.66"></svg:path><svg:path d="M17 14c-1.267 0-2.088.808-3.06 1.102c-.394.12-.592.18-.672.264s-.103.207-.15.454c-.5 2.638.594 5.078 3.204 6.027c.28.102.42.153.679.153c.257 0 .398-.051.678-.153c2.61-.95 3.704-3.389 3.203-6.027c-.047-.247-.07-.37-.15-.454s-.278-.144-.673-.264C19.088 14.808 18.266 14 17 14m.5-6.5a5.5 5.5 0 1 0-11 0"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBasketSecure01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketSecure02Icon],svg[hugeicons-shopping-basket-secure-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m20.56 11.5l.262-1.564c.19-1.13.284-1.694-.007-2.065c-.292-.371-.83-.371-1.906-.371H5.091c-1.076 0-1.614 0-1.906.37c-.29.372-.196.936-.007 2.066l1.163 6.942c.41 2.448.615 3.672 1.427 4.397S7.667 22 10 22h1"></svg:path><svg:path d="M17 14c-1.267 0-2.088.808-3.06 1.102c-.394.12-.592.18-.672.264s-.103.207-.15.454c-.5 2.638.594 5.078 3.204 6.027c.28.102.42.153.679.153c.257 0 .398-.051.678-.153c2.61-.95 3.704-3.389 3.203-6.027c-.047-.247-.07-.37-.15-.454s-.278-.144-.673-.264C19.088 14.808 18.266 14 17 14M7 7.5V7a5 5 0 0 1 10 0v.5m-12.5 10h5"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBasketSecure02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketSecure03Icon],svg[hugeicons-shopping-basket-secure-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 8h8.696c.625 0 .937 0 1.166.1c1.012.447.56 1.57.39 2.378c-.033.154-.133.247-.252.323M7.5 8H3.804c-.625 0-.937 0-1.166.1c-1.012.447-.56 1.57-.39 2.378a.49.49 0 0 0 .27.335a1.93 1.93 0 0 1 1.09 1.4l.593 3.375c.26 1.485.35 3.606 1.65 4.652c.955.76 2.33.76 5.081.76H12m5.5-8c-1.267 0-2.088.808-3.06 1.102c-.394.12-.592.18-.672.264s-.103.207-.15.454c-.5 2.638.594 5.078 3.204 6.027c.28.102.42.153.679.153c.257 0 .398-.051.678-.153c2.61-.95 3.704-3.389 3.203-6.027c-.047-.247-.07-.37-.15-.454s-.278-.144-.673-.264C19.588 13.808 18.766 13 17.5 13m-11-2L10 3m5 0l2.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketSecure03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCart01Icon],svg[hugeicons-shopping-cart-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175s-.837-.395-1.938-.395H6"></svg:path><svg:path d="M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5"></svg:path><svg:circle cx="10.5" cy="20.5" r="1.5"></svg:circle><svg:circle cx="17.5" cy="20.5" r="1.5"></svg:circle></svg:g>`,
})
export class HugeiconsShoppingCart01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCart02Icon],svg[hugeicons-shopping-cart-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h16"></svg:path><svg:circle cx="6" cy="20" r="2"></svg:circle><svg:circle cx="17" cy="20" r="2"></svg:circle><svg:path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18"></svg:path></svg:g>`,
})
export class HugeiconsShoppingCart02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartAdd01Icon],svg[hugeicons-shopping-cart-add-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175c-.229-.315-.624-.379-1.332-.392M9 6.5h8m-4 4v-8M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5"></svg:path><svg:circle cx="10.5" cy="20.5" r="1.5"></svg:circle><svg:circle cx="17.5" cy="20.5" r="1.5"></svg:circle></svg:g>`,
})
export class HugeiconsShoppingCartAdd01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartAdd02Icon],svg[hugeicons-shopping-cart-add-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h.5M22 6h-2.5m-10 0h7M13 9.5v-7"></svg:path><svg:circle cx="6" cy="20" r="2"></svg:circle><svg:circle cx="17" cy="20" r="2"></svg:circle><svg:path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18"></svg:path></svg:g>`,
})
export class HugeiconsShoppingCartAdd02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartCheck01Icon],svg[hugeicons-shopping-cart-check-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175s-.837-.395-1.938-.395H19m-13 0h1.5m3 .5s1 0 2 2c0 0 3.177-5 6-6M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5"></svg:path><svg:circle cx="10.5" cy="20.5" r="1.5"></svg:circle><svg:circle cx="17.5" cy="20.5" r="1.5"></svg:circle></svg:g>`,
})
export class HugeiconsShoppingCartCheck01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartCheck02Icon],svg[hugeicons-shopping-cart-check-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h1.5M22 6h-3m-8.5 1s1 0 2 2c0 0 3.177-5 6-6"></svg:path><svg:circle cx="6" cy="20" r="2"></svg:circle><svg:circle cx="17" cy="20" r="2"></svg:circle><svg:path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18"></svg:path></svg:g>`,
})
export class HugeiconsShoppingCartCheck02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartCheckIn01Icon],svg[hugeicons-shopping-cart-check-in-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175s-.837-.395-1.938-.395H19m-13 0h2"></svg:path><svg:path d="M11 8.5c.492.506 1.8 2.5 2.5 2.5M16 8.5c-.492.506-1.8 2.5-2.5 2.5m0 0V3M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5"></svg:path><svg:circle cx="10.5" cy="20.5" r="1.5"></svg:circle><svg:circle cx="17.5" cy="20.5" r="1.5"></svg:circle></svg:g>`,
})
export class HugeiconsShoppingCartCheckIn01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartCheckIn02Icon],svg[hugeicons-shopping-cart-check-in-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h2.5M22 6h-3.5M11 8.5c.492.506 1.8 2.5 2.5 2.5M16 8.5c-.492.506-1.8 2.5-2.5 2.5m0 0V3"></svg:path><svg:circle cx="6" cy="20" r="2"></svg:circle><svg:circle cx="17" cy="20" r="2"></svg:circle><svg:path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18"></svg:path></svg:g>`,
})
export class HugeiconsShoppingCartCheckIn02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartCheckOut01Icon],svg[hugeicons-shopping-cart-check-out-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175s-.837-.395-1.938-.395H19m-13 0h2m3-1c.492-.506 1.8-2.5 2.5-2.5M16 5.5c-.492-.506-1.8-2.5-2.5-2.5m0 0v8M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5"></svg:path><svg:circle cx="10.5" cy="20.5" r="1.5"></svg:circle><svg:circle cx="17.5" cy="20.5" r="1.5"></svg:circle></svg:g>`,
})
export class HugeiconsShoppingCartCheckOut01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartCheckOut02Icon],svg[hugeicons-shopping-cart-check-out-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h2m14 0h-3m-8-.5c.492-.506 1.8-2.5 2.5-2.5M16 5.5c-.492-.506-1.8-2.5-2.5-2.5m0 0v8"></svg:path><svg:circle cx="6" cy="20" r="2"></svg:circle><svg:circle cx="17" cy="20" r="2"></svg:circle><svg:path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18"></svg:path></svg:g>`,
})
export class HugeiconsShoppingCartCheckOut02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartFavorite01Icon],svg[hugeicons-shopping-cart-favorite-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175c-.168-.231-.426-.327-.832-.367M6 6.5h1.5m3.515-4.113c1.073-.64 2.009-.382 2.571.028c.23.169.346.253.414.253s.183-.084.414-.253c.562-.41 1.498-.668 2.571-.028c1.408.84 1.726 3.609-1.52 5.945c-.62.445-.928.668-1.465.668s-.846-.223-1.464-.668c-3.247-2.336-2.929-5.106-1.521-5.945M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5"></svg:path><svg:circle cx="10.5" cy="20.5" r="1.5"></svg:circle><svg:circle cx="17.5" cy="20.5" r="1.5"></svg:circle></svg:g>`,
})
export class HugeiconsShoppingCartFavorite01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartFavorite02Icon],svg[hugeicons-shopping-cart-favorite-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h1m15 0h-2m-9.485-3.613c1.073-.64 2.009-.382 2.571.028c.23.169.346.253.414.253s.183-.084.414-.253c.562-.41 1.498-.668 2.571-.028c1.408.84 1.726 3.609-1.52 5.945c-.62.445-.928.668-1.465.668s-.846-.223-1.464-.668c-3.247-2.336-2.929-5.106-1.521-5.945"></svg:path><svg:circle cx="6" cy="20" r="2"></svg:circle><svg:circle cx="17" cy="20" r="2"></svg:circle><svg:path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18"></svg:path></svg:g>`,
})
export class HugeiconsShoppingCartFavorite02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartRemove01Icon],svg[hugeicons-shopping-cart-remove-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175s-.837-.395-1.938-.395H19m-13 0h2M10.5 3l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5"></svg:path><svg:circle cx="10.5" cy="20.5" r="1.5"></svg:circle><svg:circle cx="17.5" cy="20.5" r="1.5"></svg:circle></svg:g>`,
})
export class HugeiconsShoppingCartRemove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingCartRemove02Icon],svg[hugeicons-shopping-cart-remove-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h2m14 0h-3.5m-8-3l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3"></svg:path><svg:circle cx="6" cy="20" r="2"></svg:circle><svg:circle cx="17" cy="20" r="2"></svg:circle><svg:path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18"></svg:path></svg:g>`,
})
export class HugeiconsShoppingCartRemove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShortsPantsIcon],svg[hugeicons-shorts-pants-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m10.988 15.123l-.731 5.102c-.234 1.629-.624 1.922-2.256 1.718l-4.209-.524c-1.586-.198-1.89-.565-1.768-2.158l.736-9.54c.057-.738.086-1.107.158-1.468c.185-.914.694-1.717.904-2.618c.122-.524.08-1.08.08-1.616C3.901 2.346 4.252 2 5.925 2h12.148c1.673 0 2.025.346 2.025 2.019c0 .537-.043 1.092.079 1.616c.21.9.72 1.704.903 2.618c.716 3.553.616 7.4.895 11.008c.123 1.593-.182 1.96-1.768 2.158l-4.21.524c-1.631.204-2.021-.09-2.255-1.718l-.73-5.102"></svg:path><svg:path d="M9 13.5c.76.76 1.198 1.5 2.328 1.5h1.344c1.13 0 1.567-.74 2.328-1.5M4 5h16M3 11c4 .007 4-3.998 4-6m10 0c0 2.002 0 6.007 4 6"></svg:path></svg:g>`,
})
export class HugeiconsShortsPantsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoulderIcon],svg[hugeicons-shoulder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 1.563h-.02zm-.01 0c.406.005.74.343.74.75c0 2.65-2.72 3.78-5.51 4.71c-4.91 1.64-6.49 3.04-6.49 5.79c0 2.97 2.48 4.28 2.59 4.33a.75.75 0 0 1-.34 1.42a.8.8 0 0 1-.33-.08l-.026-.015a6.7 6.7 0 0 1-1.194-.855c-.1.52-.19 1.18-.19 1.93c0 1.137.387 2.3.451 2.492l.009.027a.75.75 0 0 1-.45.96c-.08.03-.17.04-.25.04a.74.74 0 0 1-.722-.527c-.081-.246-.528-1.602-.528-2.992c0-1.62.35-2.89.49-3.32c-.56-.86-.99-1.99-.99-3.41c0-3.94 2.75-5.62 7.51-7.21c3.32-1.11 4.49-1.97 4.49-3.29c0-.407.334-.745.74-.75m2.01 7c-.06 0-.12 0-.18-.02l-2-.5c-.4-.1-.65-.51-.55-.91s.51-.65.91-.55l2 .5c.4.1.65.51.55.91c-.08.34-.39.57-.73.57m-2.86 10.5H19v.01c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.86c-1.09 0-2.1-.55-2.7-1.45l-.81-1.22a.744.744 0 0 0-1.04-.21c-.34.23-.44.7-.21 1.04l.81 1.22l.06.087v5.273c0 .41.34.75.75.75s.75-.34.75-.75v-3.894a4.75 4.75 0 0 0 2.39.643m1.86-2.99c-.41 0-.75-.34-.75-.75s.34-.75.75-.75s.75.33.75.75s-.34.76-.75.76z" color="currentColor"></svg:path>`,
})
export class HugeiconsShoulderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShuffleIcon],svg[hugeicons-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.558 4l.897.976c.401.436.602.654.531.839S20.632 6 20.065 6c-1.27 0-2.788-.205-3.954.473c-.72.42-1.223 1.152-2.072 2.527M3 18h1.58c1.929 0 2.893 0 3.706-.473c.721-.42 1.223-1.152 2.072-2.527m9.2 5l.897-.976c.401-.436.602-.654.531-.839S20.632 18 20.065 18c-1.27 0-2.788.205-3.954-.473c-.813-.474-1.348-1.346-2.418-3.09l-2.99-4.875C9.635 7.82 9.1 6.947 8.287 6.473S6.51 6 4.581 6H3" color="currentColor"></svg:path>`,
})
export class HugeiconsShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShuffleSquareIcon],svg[hugeicons-shuffle-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m16.5 17.5l1.5-1.75h-1.86c-1.047 0-1.571 0-2.013-.222c-.443-.222-.733-.63-1.315-1.448L9.855 9.92c-.581-.818-.872-1.226-1.314-1.448s-.966-.222-2.014-.222H6M16.5 6.5L18 8.25h-1.86c-1.047 0-1.571 0-2.013.222c-.443.222-.733.63-1.315 1.448M6 15.75h.526c1.048 0 1.572 0 2.014-.222s.733-.63 1.314-1.448"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsShuffleSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShutDownIcon],svg[hugeicons-shut-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.258 10c0 .41.34.75.75.75s.75-.34.75-.75V3c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm-9 2c0 5.377 4.364 9.745 9.74 9.75h-.01h.02h-.01c5.375-.005 9.74-4.373 9.74-9.75c0-3.66-2.02-6.98-5.27-8.67a.746.746 0 0 0-1.01.32c-.19.37-.05.82.32 1.01a8.23 8.23 0 0 1 4.47 7.33c0 4.55-3.7 8.25-8.25 8.25s-8.25-3.7-8.25-8.25c0-3.09 1.72-5.9 4.47-7.33c.37-.19.51-.64.32-1.01a.746.746 0 0 0-1.01-.32A9.74 9.74 0 0 0 2.258 12" color="currentColor"></svg:path>`,
})
export class HugeiconsShutDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShutterstockIcon],svg[hugeicons-shutterstock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M18 13v1c0 1.886 0 2.828-.586 3.414S15.886 18 14 18h-1m-7-7v-1c0-1.886 0-2.828.586-3.414S8.114 6 10 6h1"></svg:path></svg:g>`,
})
export class HugeiconsShutterstockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSidebarBottomIcon],svg[hugeicons-sidebar-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12c0-3.69 0-5.534.814-6.841a4.8 4.8 0 0 1 1.105-1.243C5.08 3 6.72 3 10 3h4c3.28 0 4.919 0 6.081.916c.43.338.804.759 1.105 1.243C22 6.466 22 8.31 22 12s0 5.534-.814 6.841a4.8 4.8 0 0 1-1.105 1.243C18.92 21 17.28 21 14 21h-4c-3.28 0-4.919 0-6.081-.916a4.8 4.8 0 0 1-1.105-1.243C2 17.534 2 15.69 2 12m0 2.5h20M6 18h1m3 0h1" color="currentColor"></svg:path>`,
})
export class HugeiconsSidebarBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSidebarLeftIcon],svg[hugeicons-sidebar-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12c0-3.69 0-5.534.814-6.841a4.8 4.8 0 0 1 1.105-1.243C5.08 3 6.72 3 10 3h4c3.28 0 4.919 0 6.081.916c.43.338.804.759 1.105 1.243C22 6.466 22 8.31 22 12s0 5.534-.814 6.841a4.8 4.8 0 0 1-1.105 1.243C18.92 21 17.28 21 14 21h-4c-3.28 0-4.919 0-6.081-.916a4.8 4.8 0 0 1-1.105-1.243C2 17.534 2 15.69 2 12m7.5-9v18M5 7h1m-1 3h1" color="currentColor"></svg:path>`,
})
export class HugeiconsSidebarLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
